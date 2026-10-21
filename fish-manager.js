(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FishManager = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const LIMIT = 24;
  const SPECIES = Object.freeze({
    amber: Object.freeze({ id: 'amber', name: '琥珀锦鱼', hue: 30, maxSize: 30, baseSpeed: 20 }),
    jade: Object.freeze({ id: 'jade', name: '碧玉灯鱼', hue: 170, maxSize: 22, baseSpeed: 28 }),
    pearl: Object.freeze({ id: 'pearl', name: '月白银鱼', hue: 48, maxSize: 26, baseSpeed: 16 })
  });
  const validKind = kind => Object.hasOwn(SPECIES, kind);

  function inferKind(hue) {
    const normalized = Number.isFinite(hue) ? ((hue % 360) + 360) % 360 : 30;
    let nearest = 'amber', distance = Infinity;
    for (const species of Object.values(SPECIES)) {
      const difference = Math.abs(normalized - species.hue);
      const circular = Math.min(difference, 360 - difference);
      if (circular < distance) { nearest = species.id; distance = circular; }
    }
    return nearest;
  }

  function planStock(currentCount, options) {
    const fail = error => ({ ok: false, error, count: 0, options: null });
    if (!Number.isInteger(currentCount) || currentCount < 0) return fail('当前鱼群数量无效');
    if (!options || !Number.isInteger(options.count) || options.count < 1 || options.count > 8) return fail('投放数量须为 1–8 条');
    if (!validKind(options.kind)) return fail('请选择有效鱼种');
    if (!Number.isFinite(options.maxSize) || options.maxSize < 14 || options.maxSize > 32) return fail('体型须为 14–32');
    if (!Number.isFinite(options.baseSpeed) || options.baseSpeed < 12 || options.baseSpeed > 40) return fail('游速须为 12–40');
    if (!['adult', 'juvenile'].includes(options.stage)) return fail('请选择成长阶段');
    if (currentCount + options.count > LIMIT) return fail('鱼缸最多容纳 24 条鱼，请减少数量或先打捞');
    return { ok: true, error: '', count: options.count, options: {
      kind: options.kind, hue: SPECIES[options.kind].hue, maxSize: options.maxSize,
      baseSpeed: options.baseSpeed, fry: options.stage === 'juvenile'
    } };
  }

  function matchingFish(fish, rule, growTime) {
    if (!Array.isArray(fish) || !rule ||
        !(rule.kind === 'all' || validKind(rule.kind)) ||
        !['all', 'adult', 'juvenile'].includes(rule.stage) ||
        !Number.isFinite(growTime) || growTime <= 0) return [];
    return fish.filter(item => {
      if (!item || !Number.isFinite(item.age)) return false;
      const kind = validKind(item.kind) ? item.kind : inferKind(item.hue);
      return (rule.kind === 'all' || rule.kind === kind) &&
        (rule.stage === 'all' || (item.age >= growTime ? 'adult' : 'juvenile') === rule.stage);
    });
  }

  function matchingCount(fish, rule, growTime = 1200) {
    return matchingFish(fish, rule, growTime).length;
  }

  function selectCatch(fish, rule, growTime = 1200) {
    if (!rule || !Number.isInteger(rule.count) || rule.count < 1 || rule.count > LIMIT ||
        !['oldest', 'youngest'].includes(rule.order)) return [];
    const direction = rule.order === 'oldest' ? -1 : 1;
    return matchingFish(fish, rule, growTime)
      .sort((a, b) => direction * (a.age - b.age)).slice(0, rule.count);
  }

  function restoreCatch(current, removed) {
    const result = current.slice();
    const present = new Set(current);
    for (const item of removed) {
      if (result.length >= LIMIT) break;
      if (!present.has(item)) { result.push(item); present.add(item); }
    }
    return result;
  }

  return { SPECIES, LIMIT, inferKind, planStock, selectCatch, matchingCount, restoreCatch };
});

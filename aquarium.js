/*
 * 慢慢水族箱 — adapted from wenonly/desktop-aquarium (MIT).
 * Upstream: 805450e148fbd8ff569e57fc5992afaa451872e4
 * Original swimming, growth, feeding, breeding and fish/particle drawing retained.
 * See LICENSE and THIRD_PARTY_NOTICES.md.
 */
'use strict';

const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
const byId = id => document.getElementById(id);
const TAU = Math.PI * 2;
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const d2 = (ax, ay, bx, by) => (ax-bx)**2 + (ay-by)**2;
const CFG = {
  softCap: 16, absCap: 24, fryGrowTime: 1200,
  breedSatiety: 82, breedCd: 600, mateSeekR: 100,
  foodRot: 22, foodMax: 45, fleeR: 65, senseR: 240,
  satietyDecay: 100 / 7200
};
const PALETTES = [30, 170, 48];
let W = 0, H = 0;
let fishes = [], foods = [], parts = [], seaweeds = [];
let toolMode = 'feed', lastCatch = [], catchUndoTimer = null;
let theme = 'day', paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let time = 0, bubbleT = 0, lastFeedT = -1, lastAnnouncement = -10, lastStatusTime = -1;
let mouse = { x: -999, y: -999, speed: 0, down: false, lastT: 0 };
const stats = { born: 0 };

function announce(message) { byId('interaction-status').textContent = message; }

function resize() {
  const bounds = cv.getBoundingClientRect();
  const oldW = W || bounds.width, oldH = H || bounds.height;
  W = Math.max(1, bounds.width); H = Math.max(1, bounds.height);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  for (const f of fishes) {
    f.x = clamp(f.x / oldW * W, 6, W - 6);
    f.y = clamp(f.y / oldH * H, 6, H - 6);
    f.goalX = f.goalX / oldW * W; f.goalY = f.goalY / oldH * H;
  }
  for (const f of foods) { f.x = clamp(f.x / oldW * W, 6, W - 6); f.y = clamp(f.y / oldH * H, 6, H - 6); }
  initSeaweed();
}

function initSeaweed() {
  seaweeds = [];
  const count = Math.max(16, Math.min(30, Math.floor(W / 36)));
  for (let i = 0; i < count; i++) {
    const fraction = i / Math.max(1, count - 1);
    const edge = Math.abs(fraction - .5) * 2;
    seaweeds.push({ x: W * fraction + rand(-14,14), h: rand(45, Math.min(H * .55, 230)) * (.48 + edge * .7), amp: rand(8,19), spd: rand(.22,.48), phase: rand(0,TAU), hue: rand(145,172), ribbon: i % 3 === 0 });
  }
}

function pickHue() { return PALETTES[Math.floor(Math.random() * PALETTES.length)]; }

function makeFish(x, y, options = {}) {
  const kind = options.kind || FishManager.inferKind(options.hue ?? 30);
  const species = FishManager.SPECIES[kind];
  const maxSize = options.maxSize ?? species.maxSize;
  const age = options.age ?? (options.fry ? 0 : CFG.fryGrowTime + rand(0, 60));
  return {
    x, y, kind, dir: rand(0, TAU), baseSpeed: options.baseSpeed ?? species.baseSpeed,
    maxSize, size: 5 + (maxSize - 5) * clamp(age / CFG.fryGrowTime, 0, 1),
    hue: options.hue ?? pickHue(), sat: options.sat ?? (options.fry ? 60 : rand(55, 75)),
    sex: options.sex || (Math.random() < .5 ? 'm' : 'f'), age,
    breedCd: options.breedCd ?? rand(200, 400), panic: 0, starveT: 0,
    tail: rand(0, TAU), wander: rand(0, TAU), dead: false, deadT: 0,
    goalX: rand(W * .18, W * .82), goalY: rand(H * .2, H * .75), goalT: rand(8, 22)
  };
}

function seedFish() {
  return Array.from({ length: 10 }, (_, i) => makeFish(
    W * (.15 + (i % 5) * .16) + rand(-10, 10),
    H * (.3 + Math.floor(i / 5) * .32) + rand(-25, 25),
    { hue: PALETTES[i % PALETTES.length] }
  ));
}

function saveTank() {
  let saved = false;
  try { saved = AquariumState.save(window.localStorage, { version: 1, theme, fish: fishes, born: stats.born }); } catch { /* Browser can block the storage getter itself. */ }
  byId('save-status').textContent = saved ? '已自动保存到这个浏览器' : '无法保存 · 请允许浏览器本地存储';
  return saved;
}

function syncControls() {
  document.documentElement.dataset.theme = theme;
  byId('theme-meta').setAttribute('content', theme === 'night' ? '#091e2d' : '#0b2932');
  byId('scene-name').textContent = theme === 'night' ? '月光浅湾' : '浅海日光';
  byId('theme-label').textContent = theme === 'night' ? '天亮' : '入夜';
  byId('theme-icon').setAttribute('href', theme === 'night' ? '#i-sun' : '#i-moon');
  byId('theme-button').setAttribute('aria-pressed', String(theme === 'night'));
  byId('pause-label').textContent = paused ? '继续' : '暂停';
  byId('pause-icon').setAttribute('href', paused ? '#i-play' : '#i-pause');
  byId('pause-button').setAttribute('aria-pressed', String(paused));
  byId('pause-overlay').hidden = !paused;
  byId('tank-state').textContent = toolMode === 'net' ? '抄网模式' : paused ? '休息一下' : '自在游动中';
  byId('feed-button').disabled = paused || !fishes.length;
  byId('tank-hint').hidden = (paused && toolMode !== 'net') || !fishes.length;
  byId('tank-hint').textContent = toolMode === 'net' ? '点击一尾小鱼打捞 · 按 Esc 退出抄网' : '轻点水面，送它们一顿小小的惊喜';
  cv.dataset.tool = toolMode;
  for (const id of ['net-button', 'manual-net']) byId(id).setAttribute('aria-pressed', String(toolMode === 'net'));
  byId('empty-state').hidden = fishes.length > 0;
  byId('state-dot').style.background = paused ? '#b6a680' : '#609b83';
  byId('fish-count').textContent = fishes.length;
  byId('growth-note').textContent = stats.born ? '有 ' + stats.born + ' 尾新朋友' : '慢慢长大，不急';
  refreshEditor();
}

function setPaused(value) {
  paused = value; mouse.down = false;
  syncControls();
  announce(paused ? '鱼缸已暂停。按空格或点击继续。' : '小鱼继续游动了。');
  saveTank();
}

function feedAt(x, y) {
  if (paused || document.hidden || !fishes.length) return;
  dropFood(clamp(x, 12, W-12), clamp(y, 42, H-34));
  bubbles(clamp(x, 12, W-12), clamp(y, 42, H-34), 2);
  if (time - lastAnnouncement > 4) { announce('鱼食撒好了，看看谁先游过来。'); lastAnnouncement = time; }
}

function resetTank() {
  clearCatchUndo(); toolMode = 'feed';
  fishes = seedFish(); foods = []; parts = []; stats.born = 0;
  time = 0; bubbleT = 0; lastFeedT = -1; lastAnnouncement = -10; lastStatusTime = -1;
  mouse = { x: -999, y: -999, speed: 0, down: false, lastT: 0 };
  byId('reset-confirmation').hidden = true;
  syncControls(); saveTank();
  announce('新的一缸小鱼，慢慢认识吧。');
}

function setEditorOpen(open, focus = true) {
  byId('fish-editor').hidden = !open;
  for (const id of ['manage-button', 'manage-toggle']) byId(id).setAttribute('aria-expanded', String(open));
  if (open) {
    refreshEditor();
    if (focus) {
      byId('editor-title').focus({ preventScroll: true });
      byId('fish-editor').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  } else if (focus) byId('manage-button').focus();
}

function setTool(mode) {
  toolMode = mode === 'net' ? 'net' : 'feed';
  mouse.down = false; mouse.speed = 0;
  syncControls();
  announce(toolMode === 'net' ? '抄网已开启。点击小鱼打捞，按 Esc 退出；也可以在管理面板按规则打捞。' : '已回到投喂模式。');
}

function stockOptions() {
  return { kind: byId('stock-kind').value, count: Number(byId('stock-count').value), maxSize: Number(byId('stock-size').value), baseSpeed: Number(byId('stock-speed').value), stage: byId('stock-stage').value };
}

function catchRule() {
  return { kind: byId('catch-kind').value, stage: byId('catch-stage').value, count: Number(byId('catch-count').value), order: byId('catch-order').value };
}

function refreshEditor() {
  byId('capacity-left').textContent = '余量 ' + Math.max(0, CFG.absCap - fishes.length - lastCatch.length) + ' 尾';
  byId('capacity-left').setAttribute('title', lastCatch.length ? '为最近打捞的 ' + lastCatch.length + ' 尾鱼预留撤销容量，15 秒后释放' : '可继续投放的数量');
  byId('size-value').textContent = byId('stock-size').value;
  byId('speed-value').textContent = byId('stock-speed').value;
  const rule = catchRule();
  byId('catch-matches').textContent = FishManager.matchingCount(fishes, rule, CFG.fryGrowTime);
  const selected = FishManager.selectCatch(fishes, rule, CFG.fryGrowTime);
  byId('catch-estimate').textContent = selected.length;
  byId('catch-submit').disabled = !selected.length;
}

function chooseSpecimen() {
  const species = FishManager.SPECIES[byId('stock-kind').value] || FishManager.SPECIES.amber;
  byId('stock-specimen').dataset.kind = species.id;
  byId('specimen-name').textContent = species.name;
  byId('specimen-note').textContent = { amber: '暖金纹理，悠然巡游', jade: '一抹薄荷，轻快穿梭', pearl: '珍珠光泽，温柔漫游' }[species.id];
  byId('stock-size').value = String(species.maxSize);
  byId('stock-speed').value = String(species.baseSpeed);
  refreshEditor();
}

function formMessage(id, text, error = false) {
  byId(id).textContent = text; byId(id).dataset.error = String(error);
}

function stockFish(options) {
  // Keep undo truthful: new fish cannot consume slots reserved for a recent catch.
  const plan = FishManager.planStock(fishes.length + lastCatch.length, options);
  if (!plan.ok) {
    const fitsWithoutReservation = FishManager.planStock(fishes.length, options).ok;
    const message = lastCatch.length && fitsWithoutReservation ? '正在为最近打捞的小鱼保留撤销容量。请先撤销，或等 15 秒撤销期结束后再投放。' : plan.error;
    formMessage('stock-message', message, true); return 0;
  }
  for (let i = 0; i < plan.count; i++) {
    const x = rand(W * .25, W * .75), y = rand(H * .25, H * .6);
    fishes.push(makeFish(x, y, plan.options)); bubbles(x, y, 6);
  }
  formMessage('stock-message', plan.count + ' 尾' + FishManager.SPECIES[plan.options.kind].name + '已入缸。');
  syncControls(); saveTank();
  announce('新朋友入缸了。' + plan.count + ' 尾' + FishManager.SPECIES[plan.options.kind].name + '正在熟悉这片水域。');
  return plan.count;
}

function clearCatchUndo() {
  if (catchUndoTimer !== null) clearTimeout(catchUndoTimer);
  catchUndoTimer = null; lastCatch = []; byId('undo-catch').hidden = true;
}

function performCatch(selected) {
  if (!selected.length) return 0;
  clearCatchUndo();
  lastCatch = selected.slice();
  const removed = new Set(selected);
  for (const f of selected) bubbles(f.x, f.y, 5);
  fishes = fishes.filter(f => !removed.has(f));
  byId('undo-catch').hidden = false;
  catchUndoTimer = setTimeout(() => {
    clearCatchUndo();
    refreshEditor();
    announce('打捞已保存。需要时可以投放新的小鱼。');
  }, 15000);
  syncControls(); saveTank();
  const message = '已打捞 ' + selected.length + ' 尾小鱼，15 秒内可撤销最近一次打捞。';
  formMessage('catch-message', message); announce(message);
  return selected.length;
}

function catchByRule(rule) {
  const selected = FishManager.selectCatch(fishes, rule, CFG.fryGrowTime);
  if (!selected.length) { formMessage('catch-message', '没有可打捞的小鱼，请调整筛选条件或数量。', true); return 0; }
  return performCatch(selected);
}

function fishAt(x, y) {
  let nearest = null, distance = Infinity;
  for (const f of fishes) {
    const dd = d2(x, y, f.x, f.y);
    if (dd < Math.max(22, f.size * 1.2) ** 2 && dd < distance) { nearest = f; distance = dd; }
  }
  return nearest;
}

function catchFishAt(x, y) {
  const selected = fishAt(x, y);
  if (!selected) { announce('抄网落空了。靠近小鱼再点一次，暂停后也可以打捞。'); return false; }
  performCatch([selected]); return true;
}

function undoCatch() {
  if (!lastCatch.length) return 0;
  const previous = fishes.length;
  fishes = FishManager.restoreCatch(fishes, lastCatch);
  const restored = fishes.length - previous;
  lastCatch = lastCatch.filter(f => !fishes.includes(f));
  if (!lastCatch.length) clearCatchUndo();
  syncControls(); saveTank();
  const message = restored ? '已让 ' + restored + ' 尾小鱼回到水里。' + (lastCatch.length ? '余下 ' + lastCatch.length + ' 尾需腾出容量后，在撤销时限内继续恢复。' : '') : '鱼缸已满，请在撤销时限内腾出容量后重试。';
  formMessage('catch-message', message); announce(message);
  return restored;
}

function addPart(p) { if (parts.length < 300) parts.push(p); }
function bubbles(x, y, n) {
  for (let i = 0; i < n; i++) {
    addPart({ t: "b", x: x + rand(-6, 6), y: y + rand(-4, 4),
      vx: rand(-6, 6), vy: rand(-34, -18), life: rand(0.8, 1.6), max: 1.6, r: rand(1, 3) });
  }
}
function hearts(x, y) {
  for (let i = 0; i < 5; i++) {
    addPart({ t: "h", x: x + rand(-10, 10), y: y + rand(-6, 6),
      vx: rand(-8, 8), vy: rand(-26, -14), life: rand(1, 1.6), max: 1.6, r: rand(3, 5.5) });
  }
}
function crumbs(x, y) {
  for (let i = 0; i < 6; i++) {
    addPart({ t: "c", x: x, y: y, vx: rand(-22, 22), vy: rand(-16, 8),
      life: rand(0.4, 0.9), max: 0.9, r: rand(1, 2) });
  }
}

function dropFood(x, y) {
  if (foods.length >= CFG.foodMax) return;
  foods.push({ x: x + rand(-7, 7), y: y, vy: rand(14, 26),
    rot: CFG.foodRot, r: rand(2.5, 3.6), sway: rand(0, TAU) });
}

function nearestFood(f) {
  let best = null, bd = Infinity;
  for (const fd of foods) {
    if (fd.rot <= 0) continue;
    const d = d2(f.x, f.y, fd.x, fd.y);
    if (d < bd) { bd = d; best = fd; }
  }
  return best ? { fd: best, d: bd } : null;
}

function findMate(f) {
  let best = null, bd = Infinity;
  for (const o of fishes) {
    if (o === f || o.dead || o.sex === f.sex) continue;
    if (o.age < CFG.fryGrowTime || o.sat < CFG.breedSatiety || o.breedCd > 0) continue;
    const d = d2(f.x, f.y, o.x, o.y);
    if (d < bd) { bd = d; best = o; }
  }
  return best ? { o: best, d: bd } : null;
}

function breed(a, b) {
  if (fishes.length >= CFG.absCap) return;
  a.breedCd = b.breedCd = CFG.breedCd;
  a.sat -= 20; b.sat -= 20;
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  hearts(mx, my);
  const n = Math.min(1, CFG.absCap - fishes.length);
  for (let i = 0; i < n; i++) {
    fishes.push(makeFish(mx + rand(-14, 14), my + rand(-10, 10), {
      fry: true,
      hue: Math.random() < 0.5 ? a.hue : b.hue,
      maxSize: clamp((a.maxSize + b.maxSize) / 2 + rand(-2, 2), 22, 30),
      baseSpeed: clamp((a.baseSpeed + b.baseSpeed) / 2 + rand(-5, 5), 14, 28)
    }));
    stats.born++;
  }
}

function updFish(f, dt) {
  if (f.dead) {
    f.deadT += dt;
    f.y -= 13 * dt;                     // 尸体上浮
    f.x += Math.sin(time * 2 + f.tail) * 5 * dt;
    return;
  }
  f.age += dt;
  f.breedCd -= dt;
  // 成长
  const g = clamp(f.age / CFG.fryGrowTime, 0, 1);
  f.size = 5 + (f.maxSize - 5) * g;
  // 不喂食也不会死亡，不计算离线生态。
  f.sat = Math.max(35, f.sat - CFG.satietyDecay * dt);

  const isAdult = f.age >= CFG.fryGrowTime;
  const hungry = f.sat < 30;
  let desired = null, spd = f.baseSpeed;

    // 2) 躲鼠标（按住喂食时不躲；饿极了恐惧半径减半）
    const fleeR = hungry ? CFG.fleeR * 0.5 : CFG.fleeR;
    if (!mouse.down && mouse.speed > 260 && d2(f.x, f.y, mouse.x, mouse.y) < fleeR * fleeR) {
      f.panic = 1;
    }
    if (f.panic > 0) {
      desired = Math.atan2(f.y - mouse.y, f.x - mouse.x);
      spd = f.baseSpeed * (1.15 + f.panic * 0.55);
      f.panic -= dt * 1.2;
    } else {
      // 3) 找食物（越饿感知越远）
      const nf = nearestFood(f);
      const sense = CFG.senseR + (100 - f.sat) * 3;
      if (nf && nf.d < sense * sense) {
        desired = Math.atan2(nf.fd.y - f.y, nf.fd.x - f.x);
        spd = f.baseSpeed * 1.7;
        if (nf.d < (f.size + 8) * (f.size + 8)) {
          nf.fd.rot = -1; // 吃掉
          f.sat = clamp(f.sat + 38, 0, 100);
          crumbs(nf.fd.x, nf.fd.y);
        }
      } else if (isAdult && f.sat > CFG.breedSatiety && f.breedCd <= 0 && fishes.length < CFG.softCap) {
        // 4) 找对象
        const nm = findMate(f);
        if (nm && nm.d < CFG.mateSeekR * CFG.mateSeekR) {
          desired = Math.atan2(nm.o.y - f.y, nm.o.x - f.x);
          spd = f.baseSpeed * 1.25;
          if (nm.d < 26 * 26) breed(f, nm.o);
        }
      }
      if (desired === null) {
        // Roam between interior waypoints, so quiet fish don't camp at tank edges.
        f.goalT -= dt;
        if (f.goalT <= 0 || d2(f.x, f.y, f.goalX, f.goalY) < 35 * 35) {
          f.goalX = rand(W * .15, W * .85); f.goalY = rand(H * .2, H * .78); f.goalT = rand(12, 28);
        }
        f.wander += rand(-1, 1) * 2.4 * dt;
        desired = Math.atan2(f.goalY - f.y, f.goalX - f.x) + Math.sin(time * .3 + f.wander) * .24;
        spd = f.baseSpeed * (0.7 + 0.3 * Math.sin(time * 0.7 + f.tail));
      }
    }
  

  // 边缘排斥
  let vx = Math.cos(desired), vy = Math.sin(desired);
  const m = 70;
  if (f.x < m) vx += (m - f.x) / m * 1.6;
  if (f.x > W - m) vx -= (f.x - (W - m)) / m * 1.6;
  if (f.y < m) vy += (m - f.y) / m * 1.6;
  if (f.y > H - m) vy -= (f.y - (H - m)) / m * 1.6;
  desired = Math.atan2(vy, vx);

  // 平滑转向 + 移动
  let da = ((desired - f.dir + Math.PI * 3) % TAU) - Math.PI;
  f.dir += clamp(da, -3.4 * dt, 3.4 * dt);
  f.x += Math.cos(f.dir) * spd * dt;
  f.y += Math.sin(f.dir) * spd * dt;
  const safeX = Math.min(f.size * 1.3 + 4, W * .22), safeY = Math.min(f.size + 4, H * .2);
  f.x = clamp(f.x, safeX, W - safeX);
  f.y = clamp(f.y, safeY, H - safeY);
  f.tail += dt * (4 + spd * 0.12);
}

function drawHeart(x, y, r, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y + r);
  ctx.bezierCurveTo(x - r * 1.4, y - r * 0.2, x - r * 0.6, y - r * 1.2, x, y - r * 0.4);
  ctx.bezierCurveTo(x + r * 0.6, y - r * 1.2, x + r * 1.4, y - r * 0.2, x, y + r);
  ctx.fill();
  ctx.restore();
}

// Original opaque, softly shaded fish. Shared by Canvas and the optical compositor.
function drawFish(f,paint) {
  const brush=paint||ctx;
  const s=f.size,kind=f.kind||FishManager.inferKind(f.hue),wag=Math.sin(f.tail)*.32;
  const hue=kind==='amber'?30:kind==='jade'?170:48;
  const saturation=kind==='amber'?64:kind==='jade'?51:23;
  brush.save();brush.globalAlpha=theme==='night'?.83:1;brush.translate(f.x,f.y);brush.rotate(f.dir);
  if(kind==='jade')brush.scale(1.15,.78);
  const fin=brush.createLinearGradient(-s*1.3,-s*.45,0,s*.4);
  fin.addColorStop(0,`hsl(${hue},${saturation}%,76%)`);
  fin.addColorStop(1,`hsl(${hue},${saturation}%,46%)`);
  brush.save();brush.translate(-s*.45,0);brush.rotate(wag);
  brush.fillStyle=fin;
  brush.beginPath();brush.moveTo(0,0);brush.bezierCurveTo(-s*.3,-s*.15,-s*.6,-s*.55,-s*.85,-s*.47);brush.quadraticCurveTo(-s*.65,0,-s*.85,s*.47);brush.bezierCurveTo(-s*.6,s*.55,-s*.3,s*.15,0,0);brush.fill();
  brush.strokeStyle=`hsla(${hue},${saturation}%,34%,.28)`;brush.lineWidth=.5;
  for(let i=-2;i<=2;i++){brush.beginPath();brush.moveTo(0,0);brush.lineTo(-s*.77,s*.18*i);brush.stroke();}brush.restore();
  brush.fillStyle=fin;
  brush.beginPath();brush.moveTo(-s*.2,-s*.25);brush.quadraticCurveTo(-s*.17,-s*.62,s*.29,-s*.3);brush.closePath();brush.fill();
  brush.beginPath();brush.moveTo(-s*.05,s*.18);brush.quadraticCurveTo(s*.14,s*.6,s*.3,s*.2);brush.fill();
  const body=brush.createLinearGradient(0,-s*.36,0,s*.38);
  body.addColorStop(0,`hsl(${hue},${saturation}%,85%)`);
  body.addColorStop(.48,`hsl(${hue},${saturation}%,67%)`);
  body.addColorStop(1,`hsl(${hue},${saturation}%,44%)`);
  brush.fillStyle=body;brush.beginPath();brush.ellipse(0,0,s*.62,s*(kind==='pearl'?.35:.32),0,0,TAU);brush.fill();
  if(kind==='amber'){
    brush.strokeStyle=`hsla(${hue},64%,34%,.48)`;brush.lineWidth=s*.075;
    for(const x of [-.28,-.04,.19]){brush.beginPath();brush.moveTo(s*x,-s*.25);brush.quadraticCurveTo(s*(x-.09),0,s*x,s*.25);brush.stroke();}
  }else if(kind==='jade'){
    brush.strokeStyle='rgba(212,255,234,.65)';brush.lineWidth=.9;brush.beginPath();brush.moveTo(-s*.48,-s*.04);brush.quadraticCurveTo(0,-s*.1,s*.4,-s*.03);brush.stroke();
  }
  brush.save();brush.beginPath();brush.ellipse(0,0,s*.61,s*.3,0,0,TAU);brush.clip();
  brush.strokeStyle=`hsla(${hue},${saturation}%,32%,.16)`;brush.lineWidth=.45;
  for(let row=-2;row<=2;row++)for(let col=-4;col<=2;col++){brush.beginPath();brush.arc(s*(col*.12+(row%2)*.06),s*row*.105,s*.07,-1.05,1.05);brush.stroke();}
  brush.restore();brush.strokeStyle=`hsla(${hue},${saturation}%,30%,.3)`;brush.lineWidth=.7;brush.beginPath();brush.arc(s*.24,-s*.025,s*.19,-1.1,1.1);brush.stroke();
  brush.fillStyle='#f3f1dc';brush.beginPath();brush.arc(s*.39,-s*.06,s*.067,0,TAU);brush.fill();
  brush.fillStyle='#243c38';brush.beginPath();brush.arc(s*.4,-s*.06,s*.036,0,TAU);brush.fill();
  brush.restore();
}

// The upstream predator and mortality systems are intentionally omitted from this calm mode.
function update(dt) {
  mouse.speed *= Math.exp(-5 * dt);
  mouse.down = mouse.down && !paused;
  if (mouse.down && time - lastFeedT >= .15) { feedAt(mouse.x, mouse.y); lastFeedT = time; }
  bubbleT -= dt;
  if (bubbleT <= 0) {
    bubbleT = rand(.7, 1.5);
    addPart({ t: 'b', x: rand(0, W), y: H - 20, vx: rand(-3, 3), vy: rand(-22, -14), life: 5, max: 5, r: rand(1, 3) });
  }
  for (const fd of foods) {
    fd.rot -= dt;
    if (fd.y < H - 26) { fd.y = Math.min(H-26, fd.y + fd.vy * dt); fd.x += Math.sin(time * 2 + fd.sway) * 5 * dt; }
  }
  foods = foods.filter(f => f.rot > 0);
  // Iterate a snapshot: newborn fish start their first update on the next frame.
  for (const f of [...fishes]) updFish(f, dt);
  for (let i = 0; i < fishes.length; i++) {
    const a = fishes[i];
    for (let j = i + 1; j < fishes.length; j++) {
      const b = fishes[j], rr = (a.size + b.size) * .65;
      const dd = d2(a.x, a.y, b.x, b.y);
      if (dd < rr * rr && dd > .01) {
        const dist = Math.sqrt(dd), push = (rr - dist) / dist * Math.min(1, 10 * dt);
        const px = (a.x-b.x)*push*.5, py = (a.y-b.y)*push*.5;
        a.x += px; a.y += py; b.x -= px; b.y -= py;
      }
    }
    a.x = clamp(a.x, 6, W-6); a.y = clamp(a.y, 6, H-6);
  }
  for (const p of parts) {
    p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt;
    if (p.t === 'b') p.x += Math.sin(time * 2 + p.y * .03) * 3 * dt;
  }
  parts = parts.filter(p => p.life > 0);
  if (Math.floor(time) !== lastStatusTime) {
    lastStatusTime = Math.floor(time);
    byId('fish-count').textContent = fishes.length;
    byId('growth-note').textContent = stats.born ? '有 ' + stats.born + ' 尾新朋友' : '慢慢长大，不急';
    if (!byId('fish-editor').hidden) refreshEditor();
  }
}

// Shared current, anchored roots and delayed leaf tips make the water read as one body.
function waterCurrent(x,y,t) {
  return Math.sin(t*.42+x*.003+y*.004)*.7+Math.sin(t*.23-x*.005+y*.002)*.3;
}
function drawPlants(foreground) {
  const night=theme==='night';ctx.save();
  for(let j=0;j<seaweeds.length;j++) {
    const p=seaweeds[j];if((j%3===0)!==foreground)continue;
    const base=H-13,depth=foreground?1:.68,hue=112+(j%5)*5;
    const sway=waterCurrent(p.x,base-p.h,time)*p.amp;
    const stemX=u=>p.x+sway*u*u+Math.sin(time*.7+p.phase+u*2)*u*u*3;
    ctx.globalAlpha=foreground?1:.85;
    if(p.ribbon){
      // Vallisneria: several tapered blades grow from one crown.
      for(let blade=0;blade<4;blade++){
        const height=p.h*(.64+blade*.13),spread=(blade-1.5)*6;
        const g=ctx.createLinearGradient(p.x-9,base,p.x+sway+12,base-height);
        g.addColorStop(0,night?'#17362c':'#284b24');g.addColorStop(.45,night?'#24513b':'#4e7936');g.addColorStop(.8,night?'#315f46':'#779c45');g.addColorStop(1,night?'#345b42':'#a0b666');
        ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(p.x+spread-2,base);
        ctx.bezierCurveTo(p.x+spread-12,base-height*.4,p.x+sway+spread-13,base-height*.8,p.x+sway+spread*2,base-height);
        ctx.bezierCurveTo(p.x+sway+spread-5,base-height*.67,p.x+spread+8,base-height*.35,p.x+spread+2,base);ctx.fill();
        ctx.strokeStyle=night?'#72947524':'#c7d59336';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(p.x+spread,base);ctx.quadraticCurveTo(p.x+spread-5,base-height*.5,p.x+sway+spread*2,base-height);ctx.stroke();
      }continue;
    }
    ctx.strokeStyle=night?'#294f35':`hsl(${hue},27%,${28*depth}%)`;ctx.lineWidth=foreground?1.9:1.3;
    ctx.beginPath();ctx.moveTo(p.x,base);ctx.quadraticCurveTo(p.x-sway*.2,base-p.h*.5,stemX(1),base-p.h);ctx.stroke();
    const count=p.h>100?9:6;
    for(let i=1;i<=count;i++){
      const u=i/(count+1),y=base-p.h*u,x=stemX(u),side=i%2?1:-1;
      const len=(13+11*Math.sin(u*Math.PI))*(foreground?1.15:.85),flutter=Math.sin(time*.66+p.phase+u*3)*2;
      ctx.save();ctx.translate(x,y);ctx.rotate(side>0?-.6:-2.54);ctx.scale(1,side>0?1:-1);
      const material=ctx.createLinearGradient(0,-8,len,8);
      material.addColorStop(0,`hsl(${hue},${night?24:34}%,${(night?19:25)*depth}%)`);
      material.addColorStop(.44,`hsl(${hue+4},${night?26:38}%,${(night?29:44)*depth}%)`);
      material.addColorStop(.53,`hsl(${hue-3},32%,${(night?22:33)*depth}%)`);
      material.addColorStop(1,`hsl(${hue},35%,${(night?17:24)*depth}%)`);
      ctx.fillStyle=material;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(len*.3,-8,len*.8,-7,len*1.43,flutter);ctx.bezierCurveTo(len*.8,8,len*.25,7,0,0);ctx.fill();
      ctx.strokeStyle=night?'#96ab6728':'#b9cb7970';ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(len*.65,-1,len*1.37,flutter);ctx.stroke();
      ctx.strokeStyle='#d1db8d24';ctx.lineWidth=.4;
      for(let v=1;v<5;v++){const q=v/5;ctx.beginPath();ctx.moveTo(len*q,0);ctx.lineTo(len*(q+.15),-4*Math.sin(q*Math.PI));ctx.moveTo(len*q,0);ctx.lineTo(len*(q+.15),4*Math.sin(q*Math.PI));ctx.stroke();}
      ctx.restore();
    }
  }ctx.restore();
}

// Deterministic texture: no new random noise per frame and no external image assets.
let habitatCache=null,habitatKey='';
function drawHabitat(night) {
  const key=[Math.round(W),Math.round(H),night].join(':');
  if(key!==habitatKey){
    habitatKey=key;habitatCache=document.createElement('canvas');habitatCache.width=Math.ceil(W);habitatCache.height=Math.ceil(H);
    const g=habitatCache.getContext('2d'),noise=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
    const sandY=H*.85;
    const sand=g.createLinearGradient(0,sandY,0,H);sand.addColorStop(0,night?'#39443a':'#8b8c66');sand.addColorStop(.35,night?'#333b2c':'#b4a477');sand.addColorStop(1,night?'#1c271f':'#746a45');
    g.fillStyle=sand;g.beginPath();g.moveTo(0,H);g.lineTo(0,sandY+9);g.bezierCurveTo(W*.24,sandY-8,W*.45,H*.94,W*.64,sandY+21);g.bezierCurveTo(W*.83,sandY+5,W*.9,sandY-3,W,sandY+7);g.lineTo(W,H);g.fill();
    for(let i=0;i<Math.min(4500,W*4);i++){
      const x=noise(i+1)*W,y=sandY+32+noise(i+200)*Math.max(1,H-sandY-32),r=.35+noise(i+600)*1.25;
      g.fillStyle=night?`rgba(143,157,109,${.1+noise(i+400)*.2})`:`rgba(${noise(i+800)>.5?'231,220,174':'66,66,42'},${.12+noise(i+400)*.3})`;
      g.beginPath();g.ellipse(x,y,r,r*.5,noise(i+50),0,TAU);g.fill();
    }
    // Rounded river stones with top lighting, contact shade and mineral seams.
    for(let i=0;i<9;i++){
      const x=W*(i<5?.05+i*.055:.76+(i-5)*.065),y=H*(.895+noise(i+10)*.04),r=16+noise(i+70)*29;
      const shadow=g.createRadialGradient(x,y+8,1,x,y+8,r*1.6);shadow.addColorStop(0,'#07150dd0');shadow.addColorStop(1,'#07150d00');g.fillStyle=shadow;g.fillRect(x-r*1.6,y-r*.5,r*3.2,r*2);
      const stone=g.createLinearGradient(x-r,y-r,x+r,y+r*.6);stone.addColorStop(0,night?'#536359':'#969c83');stone.addColorStop(.4,night?'#364a40':'#626f5c');stone.addColorStop(1,night?'#142b25':'#2e4336');g.fillStyle=stone;
      g.beginPath();g.moveTo(x-r,y+6);g.bezierCurveTo(x-r*1.1,y-r*.5,x-r*.4,y-r*.95,x,y-r*.67);g.bezierCurveTo(x+r*.7,y-r,x+r*1.3,y-r*.1,x+r,y+8);g.quadraticCurveTo(x,y+r*.35,x-r,y+6);g.fill();
      g.save();g.clip();g.strokeStyle=night?'#b2bb8c12':'#cbd0b52c';g.lineWidth=.8;
      for(let k=0;k<5;k++){g.beginPath();g.moveTo(x-r,y-r*.7+k*6);g.bezierCurveTo(x-r*.2,y-r*.2+k*4,x+r*.3,y-r*.7+k*7,x+r,y-r*.1+k*5);g.stroke();}g.restore();
    }
    // A branching piece of driftwood anchors the left planting group.
    const wood=(x,y,tx,ty,w)=>{g.lineCap='round';const bark=g.createLinearGradient(x,y,tx,ty);bark.addColorStop(0,night?'#192b22':'#343c26');bark.addColorStop(.5,night?'#3e4730':'#77724b');bark.addColorStop(1,night?'#29382a':'#4b5135');g.strokeStyle=bark;g.lineWidth=w;g.beginPath();g.moveTo(x,y);g.bezierCurveTo(x+(tx-x)*.18,y-20,x+(tx-x)*.7,ty+15,tx,ty);g.stroke();g.strokeStyle='#b5a77528';g.lineWidth=1.1;g.stroke();};
    wood(W*.12,H*.94,W*.32,H*.73,19);wood(W*.22,H*.84,W*.2,H*.68,8);wood(W*.25,H*.8,W*.39,H*.76,6);
  }
  ctx.drawImage(habitatCache,0,0,W,H);
}
function drawCaustics(night) {
  ctx.save();ctx.globalCompositeOperation='soft-light';ctx.lineWidth=1.2;
  for(let row=0;row<4;row++){
    ctx.strokeStyle=night?'rgba(161,202,185,.1)':'rgba(228,239,172,.37)';ctx.beginPath();
    for(let x=-20;x<=W+20;x+=7){const y=H*(.865+row*.035)+Math.sin(x*.032+time*.55+row)*4+Math.sin(x*.071-time*.3)*2;x===-20?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();
  }ctx.restore();
}

function draw() {
  const night = theme === 'night';
  const water = typeof AquariumAppearance !== 'undefined' ? AquariumAppearance.water(theme) : null;
  const bg = ctx.createLinearGradient(0, 0, W*.2, H);
  bg.addColorStop(0, water ? water[0] : (night ? '#173348' : '#2d6570'));
  bg.addColorStop(.5, water ? water[1] : (night ? '#102b3e' : '#1b4855'));
  bg.addColorStop(1, water ? water[2] : (night ? '#0b202f' : '#12313b'));
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
  const picture=typeof AquariumBackdrop!=='undefined'?AquariumBackdrop.get():null;
  if(picture){
    const crop=BackgroundModel.cover(picture.image.naturalWidth,picture.image.naturalHeight,W,H,picture.position);
    ctx.drawImage(picture.image,crop.sx,crop.sy,crop.sw,crop.sh,0,0,W,H);
    const light=typeof AquariumAppearance!=='undefined'?AquariumAppearance.get().light/100:1;
    const darkness=1-(1-picture.shade/100)*(night?.57:1)*Math.min(1,light);
    ctx.fillStyle='rgba(7,18,31,'+darkness+')';ctx.fillRect(0,0,W,H);
    if(light>1){ctx.fillStyle='rgba(238,249,255,'+((light-1)*.35)+')';ctx.fillRect(0,0,W,H);}
  }
  if(document.documentElement.dataset.opticalPattern==='true'&&!(typeof AquariumOptics!=='undefined'&&AquariumOptics.active)){
    ctx.fillStyle='#101115';ctx.fillRect(0,0,W,H);ctx.fillStyle='#e8e9e1';
    const curve=y=>22*Math.sin(y/250)+7*Math.sin(y/95);
    for(let x=-148;x<W+148;x+=148){
      ctx.beginPath();ctx.moveTo(x-curve(0),0);
      for(let y=0;y<=H+24;y+=24)ctx.lineTo(x-curve(y),y);
      for(let y=H+24;y>=0;y-=24)ctx.lineTo(x+46-curve(y),y);
      ctx.closePath();ctx.fill();
    }
  }
  // A dim rear planting layer establishes distance before the foreground is painted.
  if(!picture&&document.documentElement.dataset.opticalPattern!=='true'){
    ctx.save();ctx.lineCap='round';
    for(let i=0;i<34;i++){
      const x=(i*83.17+29)%W,height=H*(.18+.38*(.5+.5*Math.sin(i*5.1))),sway=waterCurrent(x,H-height,time)*8;
      ctx.strokeStyle=night?'rgba(36,72,56,.27)':'rgba(47,89,65,.29)';ctx.lineWidth=4+i%5;
      ctx.beginPath();ctx.moveTo(x,H*.9);ctx.bezierCurveTo(x-10,H-height*.3,x+12+sway,H-height*.8,x+sway,H-height);ctx.stroke();
    }
    const depth=ctx.createLinearGradient(0,0,0,H);depth.addColorStop(0,'rgba(2,22,24,0)');depth.addColorStop(.75,'rgba(3,24,22,.16)');depth.addColorStop(1,'rgba(1,16,17,.42)');ctx.fillStyle=depth;ctx.fillRect(0,0,W,H);ctx.restore();
  }
  // Light belongs to the water: broad, slow-moving shafts and soft caustics.
  ctx.save();
  for (let i=0;i<6;i++) {
    const x = W*(i-.3)/5 + Math.sin(time*.055+i)*24;
    const beam=ctx.createLinearGradient(x,0,x+W*.16,0);
    beam.addColorStop(0,'rgba(205,239,222,0)');beam.addColorStop(.35,night?'rgba(156,201,229,.025)':'rgba(205,239,222,.04)');beam.addColorStop(1,'rgba(205,239,222,0)');ctx.fillStyle=beam;
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x+W*.07,0); ctx.lineTo(x+W*.27,H); ctx.lineTo(x+W*.11,H); ctx.fill();
  }
  const glow = ctx.createRadialGradient(W*.33,0,5,W*.33,0,W*.75);
  glow.addColorStop(0,night?'rgba(127,179,211,.09)':'rgba(225,244,202,.14)'); glow.addColorStop(1,'rgba(200,240,220,0)');
  ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
  for (let i=0;i<25;i++) {
    const x = ((i*137.5)%W + Math.sin(time*.15+i)*12 + W)%W;
    const y = (H-((i*71+time*3)%(H+20)));
    ctx.fillStyle = night ? 'rgba(189,220,229,.13)' : 'rgba(221,244,210,.23)';
    ctx.beginPath();ctx.arc(x,y,i%3===0?1.4:.7,0,TAU);ctx.fill();
  }
  ctx.restore();
  drawHabitat(night);
  drawCaustics(night);
  drawPlants(false);
  // Soft contact shadows deepen fish near the substrate without turning bodies into glass.
  for(const f of fishes){const proximity=clamp((f.y/H-.45)*1.1,0,.35);if(proximity>0){ctx.fillStyle='rgba(4,19,13,'+proximity+')';ctx.beginPath();ctx.ellipse(f.x+10,H*.92,f.size*.8,f.size*.13,0,0,TAU);ctx.fill();}}
  for(const f of fishes)drawFish(f);
  drawPlants(true);
  if(typeof AquariumOptics!=='undefined'&&AquariumOptics.active){
    try{AquariumOptics.render({cv,ctx,fishes,seaweeds,time,W,H});}catch(error){AquariumOptics.fail();console.warn('Optical material switched to fallback:',error.message);}
  }

  for (const fd of foods) {
    ctx.fillStyle='rgba(249,212,144,'+clamp(fd.rot/4,0,1)+')';
    ctx.beginPath();ctx.arc(fd.x,fd.y,fd.r,0,TAU);ctx.fill();
  }

  for (const p of parts) {
    const a=clamp(p.life/p.max,0,1);
    if(p.t==='b') {ctx.strokeStyle='rgba(205,239,230,'+a*.5+')';ctx.lineWidth=1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,TAU);ctx.stroke();}
    else if(p.t==='h') drawHeart(p.x,p.y,p.r,'#f3b39f',a);
    else {ctx.fillStyle='rgba(245,208,150,'+a+')';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,TAU);ctx.fill();}
  }
  if(toolMode==='net' && mouse.x>=0 && mouse.y>=0 && mouse.x<=W && mouse.y<=H) {
    const target=fishAt(mouse.x,mouse.y);
    ctx.strokeStyle=target?'rgba(230,225,177,.9)':'rgba(201,235,220,.5)';ctx.lineWidth=1;
    ctx.beginPath();ctx.ellipse(mouse.x,mouse.y,23,19,-.45,0,TAU);ctx.stroke();
    ctx.beginPath();ctx.moveTo(mouse.x+16,mouse.y+14);ctx.lineTo(mouse.x+37,mouse.y+36);ctx.stroke();
    if(target){ctx.strokeStyle='rgba(230,225,177,.45)';ctx.beginPath();ctx.arc(target.x,target.y,target.size*1.4,0,TAU);ctx.stroke();}
  }
  ctx.strokeStyle=night?'rgba(190,223,239,.06)':'rgba(226,246,226,.12)';ctx.lineWidth=1;
  for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(0,7+i*8);ctx.bezierCurveTo(W*.3,18+Math.sin(time*.4+i)*4,W*.7,2+i*8,W,10+i*7);ctx.stroke();}
}

function pointerPosition(event) {
  const bounds=cv.getBoundingClientRect();
  return { x:(event.clientX-bounds.left)*W/bounds.width, y:(event.clientY-bounds.top)*H/bounds.height };
}
cv.addEventListener('pointerdown', event => {
  if(event.button!==0) return;
  const point=pointerPosition(event);
  if(toolMode==='net'){mouse.x=point.x;mouse.y=point.y;catchFishAt(point.x,point.y);return;}
  if(paused) return;
  const p=pointerPosition(event);mouse.x=p.x;mouse.y=p.y;mouse.down=true;mouse.speed=0;
  cv.setPointerCapture(event.pointerId);feedAt(p.x,p.y);lastFeedT=time;
});
cv.addEventListener('pointermove', event => {
  const p=pointerPosition(event),now=performance.now();
  if(mouse.lastT) mouse.speed=Math.min(900,Math.hypot(p.x-mouse.x,p.y-mouse.y)/Math.max(.016,(now-mouse.lastT)/1000));
  mouse.lastT=now;mouse.x=p.x;mouse.y=p.y;
});
function releasePointer() {mouse.down=false;mouse.speed=0;}
cv.addEventListener('pointerup',releasePointer);cv.addEventListener('pointercancel',releasePointer);
cv.addEventListener('lostpointercapture',releasePointer);
cv.addEventListener('pointerleave',()=>{if(!mouse.down){mouse.x=-999;mouse.y=-999;mouse.lastT=0;}});
window.addEventListener('blur',releasePointer);
byId('feed-button').addEventListener('click',()=>{if(toolMode==='net')setTool('feed');for(let i=0;i<4;i++)feedAt(W*.5+rand(-20,20),H*.3+rand(-5,5));});
byId('pause-button').addEventListener('click',()=>setPaused(!paused));
byId('theme-button').addEventListener('click',()=>{theme=theme==='day'?'night':'day';syncControls();saveTank();announce(theme==='night'?'月光来了，慢慢看鱼。':'天亮了，小鱼也醒着。');});
function closeReset(){byId('reset-confirmation').hidden=true;byId('reset-button').focus();}
byId('reset-button').addEventListener('click',()=>{const box=byId('reset-confirmation');box.hidden=!box.hidden;if(!box.hidden)byId('reset-cancel').focus();});
byId('reset-cancel').addEventListener('click',closeReset);
byId('reset-confirm').addEventListener('click',()=>{resetTank();byId('reset-button').focus();});
window.addEventListener('keydown',event=>{
  if(typeof AquariumAppearance !== 'undefined' && byId('appearance-panel').matches(':popover-open'))return;
  if(event.code==='Escape'&&!byId('reset-confirmation').hidden){closeReset();return;}
  if(event.code==='Escape'){if(toolMode==='net')setTool('feed');if(!byId('fish-editor').hidden)setEditorOpen(false);return;}
  if(event.repeat||event.ctrlKey||event.metaKey||event.altKey)return;
  const tag=document.activeElement?.tagName;
  if(['BUTTON','A','INPUT','TEXTAREA','SELECT'].includes(tag))return;
  if(event.code==='Space'){event.preventDefault();setPaused(!paused);}
  if(event.code==='KeyF'){event.preventDefault();if(toolMode==='net')setTool('feed');for(let i=0;i<4;i++)feedAt(W*.5+rand(-20,20),H*.3);}
});
for(const id of ['manage-button','manage-toggle','empty-stock'])byId(id).addEventListener('click',()=>setEditorOpen(id==='empty-stock'?true:byId('fish-editor').hidden));
byId('editor-close').addEventListener('click',()=>setEditorOpen(false));
byId('net-button').addEventListener('click',()=>setTool(toolMode==='net'?'feed':'net'));
byId('manual-net').addEventListener('click',()=>{
  setTool(toolMode==='net'?'feed':'net');
  if(toolMode==='net') {setEditorOpen(false,false);cv.focus({preventScroll:true});byId('aquarium').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
});
byId('undo-catch').addEventListener('click',undoCatch);
byId('stock-kind').addEventListener('change',chooseSpecimen);
for(const id of ['stock-size','stock-speed'])byId(id).addEventListener('input',refreshEditor);
for(const id of ['catch-kind','catch-stage','catch-count','catch-order'])byId(id).addEventListener('input',refreshEditor);
byId('stock-form').addEventListener('submit',event=>{event.preventDefault();stockFish(stockOptions());});
byId('catch-form').addEventListener('submit',event=>{event.preventDefault();catchByRule(catchRule());});
window.addEventListener('resize',resize);
window.addEventListener('pagehide',saveTank);
document.addEventListener('visibilitychange',()=>{releasePointer();if(document.hidden)saveTank();});
resize();
let restored=null;
try{restored=AquariumState.load(window.localStorage);}catch{/* Restricted storage is handled visibly below. */}
if(restored){theme=restored.theme;stats.born=restored.born;fishes=restored.fish.map(f=>makeFish(rand(W*.15,W*.85),rand(H*.25,H*.75),f));}
else fishes=seedFish();
byId('stock-kind').value='amber'; byId('stock-count').value='3'; byId('stock-stage').value='adult';
byId('catch-kind').value='all'; byId('catch-stage').value='all'; byId('catch-count').value='1'; byId('catch-order').value='oldest';
chooseSpecimen();
syncControls();saveTank();
if(paused)announce('已按系统的减少动态效果偏好暂停。需要时可点击继续。');
setInterval(saveTank,5000);
let last=performance.now();
function frame(now){
  const dt=Math.min(.05,Math.max(0,(now-last)/1000));last=now;
  if(!document.hidden){if(!paused){time+=dt;update(dt);}draw();}
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AquariumState = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  const STORAGE_KEY = 'idle-aquarium:v1';
  const bounds = {
    hue: [0, 360], maxSize: [14, 32], baseSpeed: [12, 60],
    age: [0, 1e9], sat: [0, 100], breedCd: [0, 1e9]
  };

  // Keep legacy saves readable even when this classic script is loaded alone.
  function inferKind(hue) {
    const normalized = ((hue % 360) + 360) % 360;
    let nearest = 'amber', distance = Infinity;
    for (const [kind, value] of [['amber', 30], ['jade', 170], ['pearl', 48]]) {
      const difference = Math.abs(normalized - value);
      const circular = Math.min(difference, 360 - difference);
      if (circular < distance) { nearest = kind; distance = circular; }
    }
    return nearest;
  }

  // Copy only durable biological state: coordinates and elapsed wall time are omitted.
  function sanitize(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value) ||
        value.version !== 1 || !Array.isArray(value.fish)) return null;
    const fish = [];
    for (const source of value.fish.slice(0, 24)) {
      if (!source || typeof source !== 'object' || Array.isArray(source)) return null;
      const item = {};
      for (const field of Object.keys(bounds)) {
        if (!Number.isFinite(source[field])) return null;
        const [min, max] = bounds[field];
        item[field] = Math.min(max, Math.max(min, source[field]));
      }
      item.sex = source.sex === 'f' ? 'f' : 'm';
      item.kind = ['amber', 'jade', 'pearl'].includes(source.kind) ? source.kind : inferKind(item.hue);
      fish.push(item);
    }
    return {
      version: 1,
      theme: value.theme === 'night' ? 'night' : 'day',
      fish,
      born: Number.isFinite(value.born) ? Math.max(0, Math.floor(value.born)) : 0
    };
  }

  function load(storage) {
    try {
      const raw = storage.getItem(STORAGE_KEY);
      return raw === null ? null : sanitize(JSON.parse(raw));
    } catch (_) { return null; }
  }

  function save(storage, value) {
    try {
      const clean = sanitize(value);
      if (!clean) return false;
      storage.setItem(STORAGE_KEY, JSON.stringify(clean));
      return true;
    } catch (_) { return false; }
  }

  function clear(storage) {
    try {
      storage.removeItem(STORAGE_KEY);
      return true;
    } catch (_) { return false; }
  }

  return { STORAGE_KEY, sanitize, load, save, clear };
});

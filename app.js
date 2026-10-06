const DEFAULT_WEEKLY_SCHEDULE = {
  order: ["cycling", "gym1", "gym2", "running", "gym3", "gym4", "rest"],
  sessions: {
    cycling: { id: "cycling", label: "Cycling", kind: "cardio", activity: "Cycling", defaultDistance: 10, primary: ["quads", "glutes", "calves"], secondary: ["hamstrings"] },
    gym1: { id: "gym1", label: "Gym 1", kind: "gym", exercises: [
      { id: "barbell-deadlift", name: "Barbell deadlift", sets: 3, reps: [5, 5], primary: ["hamstrings", "glutes"], secondary: ["lower back", "traps", "lats", "forearms", "quads"] },
      { id: "incline-chest-press", name: "Incline chest press", sets: 3, reps: [6, 8], primary: ["chest"], secondary: ["front delts", "triceps"] },
      { id: "lat-pulldown", name: "Lat pulldown", sets: 3, reps: [8, 10], primary: ["lats"], secondary: ["biceps", "rear delts", "forearms"] },
      { id: "lateral-raise", name: "Lateral raise", sets: 3, reps: [12, 15], primary: ["side delts"], secondary: ["traps"] },
      { id: "incline-db-curl", name: "Incline DB curl", sets: 3, reps: [10, 12], primary: ["biceps"], secondary: ["forearms"] },
      { id: "plank", name: "Plank", type: "timed", seconds: 120, primary: ["abs"], secondary: ["lower back", "front delts"] },
      { id: "dead-hang", name: "Dead hang", type: "timed", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ] },
    gym2: { id: "gym2", label: "Gym 2", kind: "gym", exercises: [
      { id: "overhead-shoulder-press", name: "Overhead shoulder press", sets: 3, reps: [8, 10], primary: ["front delts", "side delts"], secondary: ["triceps", "chest", "traps"] },
      { id: "leg-extension", name: "Leg extension", sets: 3, reps: [12, 15], primary: ["quads"], secondary: [] },
      { id: "hip-abduction-machine", name: "Hip abduction machine", sets: 3, reps: [12, 15], primary: ["abductors", "glutes"], secondary: [] },
      { id: "reverse-pec-dec-fly", name: "Reverse pec dec fly", sets: 3, reps: [12, 15], primary: ["rear delts"], secondary: ["upper back", "traps"] },
      { id: "overhead-db-extension", name: "Overhead DB extension", sets: 3, reps: [10, 12], primary: ["triceps"], secondary: [] },
      { id: "hammer-curl", name: "Hammer curl", sets: 2, reps: [10, 12], primary: ["biceps", "forearms"], secondary: [] },
      { id: "seated-calf-raise", name: "Seated calf raise", sets: 3, reps: [12, 15], primary: ["calves"], secondary: [] },
      { id: "dead-hang", name: "Dead hang", type: "timed", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ] },
    running: { id: "running", label: "Running", kind: "cardio", activity: "Running", primary: ["quads", "hamstrings", "glutes", "calves"], secondary: ["abs"] },
    gym3: { id: "gym3", label: "Gym 3", kind: "gym", exercises: [
      { id: "power-squat-machine", name: "Power squat (machine)", sets: 3, reps: [8, 10], primary: ["quads", "glutes"], secondary: ["hamstrings", "calves"] },
      { id: "bent-over-barbell-row", name: "Bent-over barbell row", sets: 3, reps: [6, 8], primary: ["upper back", "lats"], secondary: ["rear delts", "biceps", "lower back", "forearms"] },
      { id: "leg-curl", name: "Leg curl", sets: 3, reps: [10, 12], primary: ["hamstrings"], secondary: ["calves"] },
      { id: "hip-thrust", name: "Hip thrust", sets: 3, reps: [8, 10], primary: ["glutes"], secondary: ["hamstrings", "quads"] },
      { id: "pec-dec-fly", name: "Pec dec fly", sets: 3, reps: [12, 15], primary: ["chest"], secondary: ["front delts"] },
      { id: "face-pull", name: "Face pull", sets: 3, reps: [15, 15], primary: ["rear delts", "upper back"], secondary: ["traps", "biceps"] },
      { id: "lateral-raise", name: "Lateral raise", sets: 3, reps: [12, 20], primary: ["side delts"], secondary: ["traps"] },
      { id: "triceps-pushdown", name: "Triceps pushdown", sets: 3, reps: [10, 12], primary: ["triceps"], secondary: [] },
      { id: "dead-hang", name: "Dead hang", type: "timed", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ] },
    gym4: { id: "gym4", label: "Gym 4", kind: "gym", exercises: [
      { id: "bulgarian-split-squat", name: "Bulgarian split squat", sets: 3, reps: [8, 10], note: "per leg", primary: ["quads", "glutes"], secondary: ["hamstrings"] },
      { id: "leg-curl", name: "Leg curl", sets: 3, reps: [10, 12], primary: ["hamstrings"], secondary: ["calves"] },
      { id: "incline-chest-press-lighter", name: "Incline chest press (lighter)", sets: 3, reps: [10, 12], primary: ["chest"], secondary: ["front delts", "triceps"] },
      { id: "lat-pulldown", name: "Lat pulldown", sets: 3, reps: [10, 12], primary: ["lats"], secondary: ["biceps", "rear delts", "forearms"] },
      { id: "seated-calf-raise", name: "Seated calf raise", sets: 4, reps: [12, 15], primary: ["calves"], secondary: [] },
      { id: "lateral-raise", name: "Lateral raise", sets: 2, reps: [15, 20], primary: ["side delts"], secondary: ["traps"] },
      { id: "cable-crunch", name: "Cable crunch", sets: 3, reps: [12, 15], primary: ["abs"], secondary: [] },
      { id: "dead-hang", name: "Dead hang", type: "timed", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ] },
    rest: { id: "rest", label: "Rest", kind: "rest" }
  }
};

const MUSCLES = ["chest", "front delts", "side delts", "rear delts", "traps", "upper back", "lats", "lower back", "biceps", "triceps", "forearms", "abs", "obliques", "glutes", "quads", "hamstrings", "adductors", "abductors", "calves"];
const DAY_NAMES = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const STORAGE_KEY = "rep-road-data-v2";
const LEGACY_KEY = "rep-road-data-v1";

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function slug(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function escapeHTML(value) {
  return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function libraryFallback(name) {
  const n = name.toLowerCase();
  let primary = ["upper back"], secondary = [];
  if (/squat|lunge|step.up|leg press|hack squat/.test(n)) { primary = ["quads", "glutes"]; secondary = ["hamstrings"]; }
  else if (/deadlift|good morning|pull.through/.test(n)) { primary = ["hamstrings", "glutes"]; secondary = ["lower back", "forearms"]; }
  else if (/leg curl|nordic/.test(n)) { primary = ["hamstrings"]; secondary = ["calves"]; }
  else if (/leg extension/.test(n)) primary = ["quads"];
  else if (/calf|soleus/.test(n)) primary = ["calves"];
  else if (/abduct|lateral band|clam/.test(n)) { primary = ["abductors", "glutes"]; secondary = []; }
  else if (/adduct/.test(n)) primary = ["adductors"];
  else if (/hip thrust|glute bridge|kickback/.test(n)) { primary = ["glutes"]; secondary = ["hamstrings"]; }
  else if (/bench|chest press|push.up|pec|fly/.test(n)) { primary = ["chest"]; secondary = ["front delts", "triceps"]; }
  else if (/overhead|shoulder press|arnold/.test(n)) { primary = ["front delts", "side delts"]; secondary = ["triceps", "traps"]; }
  else if (/lateral raise|upright row/.test(n)) { primary = ["side delts"]; secondary = ["traps"]; }
  else if (/rear delt|reverse fly|face pull/.test(n)) { primary = ["rear delts", "upper back"]; secondary = ["traps"]; }
  else if (/pulldown|pull.up|chin.up|straight.arm/.test(n)) { primary = ["lats"]; secondary = ["biceps", "forearms"]; }
  else if (/row/.test(n)) { primary = ["upper back", "lats"]; secondary = ["rear delts", "biceps", "forearms"]; }
  else if (/curl/.test(n)) { primary = ["biceps"]; secondary = ["forearms"]; }
  else if (/triceps|pushdown|skull crusher|dip/.test(n)) { primary = ["triceps"]; secondary = ["chest"]; }
  else if (/wrist|grip|farmer|carry/.test(n)) { primary = ["forearms"]; secondary = ["traps"]; }
  else if (/crunch|sit.up|leg raise|plank|hollow|dead bug|mountain climber/.test(n)) { primary = ["abs"]; secondary = ["obliques"]; }
  else if (/rotation|woodchop|side bend|russian twist/.test(n)) { primary = ["obliques"]; secondary = ["abs"]; }
  return { id: slug(name), name, sets: 3, reps: [8, 12], primary, secondary, usesBodyweight: /push.up|pull.up|chin.up|dip|hanging leg raise/.test(n) };
}

function buildExerciseLibrary() {
  const defaults = [];
  Object.values(DEFAULT_WEEKLY_SCHEDULE.sessions).forEach(session => (session.exercises || []).forEach(ex => {
    if (!defaults.some(item => item.name.toLowerCase() === ex.name.toLowerCase())) defaults.push(clone(ex));
  }));
  const names = [
    "Barbell squat", "Barbell front squat", "Barbell back squat", "Barbell hack squat", "Barbell curl", "Barbell row", "Barbell bench press", "Barbell overhead press", "Barbell Romanian deadlift", "Barbell hip thrust", "Barbell lunge", "Barbell good morning", "Barbell shrug", "Barbell floor press", "Barbell glute bridge",
    "Goblet squat", "Hack squat", "Smith machine squat", "Box squat", "Sissy squat", "Zercher squat", "Leg press", "Single-leg press", "Walking lunge", "Reverse lunge", "Forward lunge", "Curtsy lunge", "Step-up", "Box step-up", "Pistol squat", "Wall sit", "Nordic hamstring curl", "Romanian deadlift", "Sumo deadlift", "Trap bar deadlift", "Single-leg Romanian deadlift", "Cable pull-through", "Glute bridge", "Single-leg glute bridge", "Cable glute kickback", "Donkey kick", "Standing calf raise", "Donkey calf raise", "Single-leg calf raise", "Tibialis raise", "Hip adduction machine", "Cable hip abduction", "Banded lateral walk", "Clamshell",
    "Flat dumbbell press", "Incline dumbbell press", "Decline dumbbell press", "Machine chest press", "Dumbbell fly", "Cable fly", "Low cable fly", "High cable fly", "Push-up", "Incline push-up", "Decline push-up", "Diamond push-up", "Chest dip", "Dumbbell pullover", "Landmine press", "Arnold press", "Seated dumbbell shoulder press", "Machine shoulder press", "Front raise", "Cable lateral raise", "Lean-away lateral raise", "Rear delt fly", "Cable rear delt fly", "Upright row", "Dumbbell shrug", "Cable face pull",
    "Pull-up", "Chin-up", "Assisted pull-up", "Neutral-grip pulldown", "Close-grip pulldown", "Straight-arm pulldown", "Seated cable row", "Chest-supported row", "One-arm dumbbell row", "T-bar row", "Pendlay row", "Machine row", "Meadows row", "Inverted row", "Back extension", "Reverse hyperextension", "Superman hold",
    "Dumbbell curl", "Alternating dumbbell curl", "Cable curl", "Preacher curl", "Concentration curl", "Spider curl", "EZ-bar curl", "Reverse curl", "Zottman curl", "Bayesian curl", "Close-grip bench press", "Skull crusher", "Cable overhead extension", "Dumbbell kickback", "Bench dip", "Rope pushdown", "Single-arm pushdown", "JM press",
    "Wrist curl", "Reverse wrist curl", "Farmer carry", "Suitcase carry", "Plate pinch", "Wrist roller", "Dead hang weighted", "Hand gripper", "Cable crunch kneeling", "Reverse crunch", "Bicycle crunch", "Sit-up", "V-up", "Hanging leg raise", "Captain's chair leg raise", "Ab wheel rollout", "Dead bug", "Bird dog", "Hollow body hold", "Side plank", "Russian twist", "Cable woodchop", "Pallof press", "Mountain climber", "Toe touch", "Heel tap", "Dragon flag", "L-sit", "Bear crawl",
    "Clean and press", "Power clean", "Hang clean", "Snatch", "Kettlebell swing", "Kettlebell clean", "Kettlebell snatch", "Turkish get-up", "Thruster", "Burpee", "Battle rope", "Sled push", "Sled pull", "Rowing machine", "Stair climber", "Elliptical", "Jump rope", "Box jump", "Broad jump", "Medicine ball slam"
  ];
  names.forEach(name => {
    if (!defaults.some(item => item.name.toLowerCase() === name.toLowerCase())) defaults.push(libraryFallback(name));
  });
  const timed = { "Wall sit": 60, "Superman hold": 45, "Hollow body hold": 45, "Side plank": 45, "L-sit": 30 };
  defaults.forEach(ex => {
    if (timed[ex.name]) { delete ex.sets; delete ex.reps; ex.type = "timed"; ex.seconds = timed[ex.name]; }
  });
  return defaults;
}

const BASE_EXERCISE_LIBRARY = buildExerciseLibrary();

function todayISO() { return localISO(new Date()); }
function localISO(date) {
  const d = new Date(date);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function dateFromISO(iso) { const p = iso.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDays(date, count) { const d = new Date(date); d.setDate(d.getDate() + count); return d; }
function startOfWeekISO(iso) { const d = dateFromISO(iso); const day = d.getDay(); d.setDate(d.getDate() - (day === 0 ? 6 : day - 1)); return localISO(d); }
function weekDates(weekISO) { const start = dateFromISO(weekISO); return Array.from({ length: 7 }, (_, i) => localISO(addDays(start, i))); }
function dayIndex(iso) { const d = dateFromISO(iso).getDay(); return d === 0 ? 6 : d - 1; }
function formatDate(iso, options) { return new Intl.DateTimeFormat(undefined, options || { weekday: "long", month: "short", day: "numeric" }).format(dateFromISO(iso)); }
function parseDuration(value) {
  if (!value) return 0;
  const parts = String(value).trim().split(":").map(Number);
  if (parts.some(Number.isNaN)) return 0;
  return parts.length === 2 ? parts[0] * 60 + parts[1] : Number(value) * 60;
}
function formatClock(seconds) { const total = Math.max(0, Math.round(Number(seconds) || 0)); return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0"); }
function trimNumber(number) { return Number((Number(number) || 0).toFixed(2)).toString(); }

function blankData() {
  return { version: 2, sessions: {}, weekOverrides: {}, scheduleChanges: [], weeklyAdditions: {}, customLibrary: [], bodyweights: [], bodyweightPrompted: false, restEnd: null, restFor: "" };
}

function findDefaultExerciseByName(name) {
  return BASE_EXERCISE_LIBRARY.find(ex => ex.name.toLowerCase() === String(name).toLowerCase()) || libraryFallback(name);
}

function migrateLegacy(legacy) {
  const migrated = blankData();
  migrated.migratedFrom = LEGACY_KEY;
  migrated.restEnd = legacy.restEnd || null;
  migrated.restFor = legacy.restFor || "";
  const keyToId = { mon: "cycling", tue: "gym1", wed: "gym2", thu: "running", fri: "gym3", sat: "gym4", sun: "rest" };
  Object.keys(legacy.sessions || {}).forEach(date => {
    const old = legacy.sessions[date] || {};
    const sid = keyToId[old.programKey] || DEFAULT_WEEKLY_SCHEDULE.order[dayIndex(date)];
    const spec = DEFAULT_WEEKLY_SCHEDULE.sessions[sid] || DEFAULT_WEEKLY_SCHEDULE.sessions.rest;
    const log = { sessionId: sid, label: spec.label, kind: spec.kind, createdAt: old.updatedAt || Date.now(), updatedAt: old.updatedAt || Date.now() };
    if (spec.kind === "cardio") {
      log.activity = spec.activity;
      log.cardio = clone(old.cardio || {});
      log.finished = !!(log.cardio && log.cardio.saved);
    } else if (spec.kind === "rest") {
      log.completed = !!old.completed;
    } else {
      log.plan = clone(spec.exercises || []);
      log.exercises = {};
      Object.keys(old.exercises || {}).forEach(name => {
        let ex = log.plan.find(item => item.name.toLowerCase() === name.toLowerCase());
        if (!ex) { ex = findDefaultExerciseByName(name); log.plan.push(clone(ex)); }
        const oldEx = old.exercises[name] || {};
        if (ex.type === "timed" || oldEx.elapsed !== undefined) {
          const elapsed = Math.round((oldEx.elapsed || 0) + (oldEx.runningSince ? (Date.now() - oldEx.runningSince) / 1000 : 0));
          log.exercises[ex.id] = { duration: elapsed || Number(oldEx.target || ex.seconds || 0), done: elapsed > 0, timerStartedAt: null };
        } else {
          log.exercises[ex.id] = { sets: (oldEx.sets || []).map(set => ({ weight: String(set.weight == null ? "" : set.weight), reps: String(set.reps == null ? "" : set.reps), done: !!set.done, tickedAt: set.done ? (old.updatedAt || Date.now()) : null })) };
        }
      });
    }
    migrated.sessions[date] = { [sid]: log };
  });
  return migrated;
}

function normalizeData(raw) {
  const next = Object.assign(blankData(), raw || {});
  next.version = 2;
  if (!next.sessions || typeof next.sessions !== "object") next.sessions = {};
  if (!next.weekOverrides || typeof next.weekOverrides !== "object") next.weekOverrides = {};
  if (!Array.isArray(next.scheduleChanges)) next.scheduleChanges = [];
  if (!next.weeklyAdditions || typeof next.weeklyAdditions !== "object") next.weeklyAdditions = {};
  if (!Array.isArray(next.customLibrary)) next.customLibrary = [];
  if (!Array.isArray(next.bodyweights)) next.bodyweights = [];
  return next;
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return normalizeData(JSON.parse(saved));
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const migrated = migrateLegacy(JSON.parse(legacy));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
  } catch (_) {}
  return blankData();
}

let data = loadData();
let currentView = "today";
let activeDate = todayISO();
let selectedExerciseId = null;
let expandedExerciseId = null;
let historyOpen = null;
let statsPeriod = "week";
let installPrompt = null;
let toastTimer = null;
let undoAction = null;
let bodyMapSerial = 0;

const els = {
  today: document.getElementById("todayView"),
  week: document.getElementById("weekView"),
  history: document.getElementById("historyView"),
  dateLabel: document.getElementById("dateLabel"),
  rest: document.getElementById("restTimer"),
  modal: document.getElementById("modalDialog"),
  modalContent: document.getElementById("modalContent"),
  importInput: document.getElementById("importInput"),
  install: document.getElementById("installBtn"),
  bodyweight: document.getElementById("bodyweightChip")
};

function persist() {
  data.version = 2;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  renderBodyweightChip();
}

function effectiveOrder(weekISO) {
  let order = clone(DEFAULT_WEEKLY_SCHEDULE.order);
  data.scheduleChanges.slice().sort((a, b) => a.effectiveWeek.localeCompare(b.effectiveWeek)).forEach(change => {
    if (change.effectiveWeek <= weekISO && Array.isArray(change.order) && change.order.length === 7) order = clone(change.order);
  });
  return order;
}

function weekOrder(weekISO) {
  return data.weekOverrides[weekISO] && Array.isArray(data.weekOverrides[weekISO].order) ? clone(data.weekOverrides[weekISO].order) : effectiveOrder(weekISO);
}

function sessionIdForDate(date) { return weekOrder(startOfWeekISO(date))[dayIndex(date)]; }
function sessionSpec(sessionId) {
  if (DEFAULT_WEEKLY_SCHEDULE.sessions[sessionId]) return DEFAULT_WEEKLY_SCHEDULE.sessions[sessionId];
  for (const date of Object.keys(data.sessions || {})) {
    const log = data.sessions[date] && data.sessions[date][sessionId];
    if (!log) continue;
    if (log.kind === "cardio") {
      const base = log.activity === "Cycling" ? DEFAULT_WEEKLY_SCHEDULE.sessions.cycling : DEFAULT_WEEKLY_SCHEDULE.sessions.running;
      return { id: sessionId, label: log.label, kind: "cardio", activity: log.activity, primary: base.primary, secondary: base.secondary };
    }
    if (log.kind === "rest") return { id: sessionId, label: log.label || "Rest", kind: "rest" };
    return { id: sessionId, label: log.label || "Workout", kind: "gym", exercises: log.plan || [] };
  }
  return { id: sessionId, label: "Workout", kind: "gym", exercises: [] };
}

function sessionsOn(date) { return data.sessions[date] || {}; }
function sessionLog(date, sessionId, create) {
  if (!data.sessions[date] && create) data.sessions[date] = {};
  if (create && !data.sessions[date][sessionId]) {
    const spec = sessionSpec(sessionId);
    const log = { sessionId, label: spec.label, kind: spec.kind, createdAt: Date.now(), updatedAt: Date.now() };
    if (spec.kind === "gym") { log.plan = basePlanFor(date, sessionId); log.exercises = {}; }
    if (spec.kind === "cardio") { log.activity = spec.activity; log.cardio = { distance: spec.defaultDistance || "", duration: "", effort: "", saved: false }; }
    if (spec.kind === "rest") log.completed = false;
    data.sessions[date][sessionId] = log;
    persist();
  }
  return (data.sessions[date] && data.sessions[date][sessionId]) || null;
}

function basePlanFor(date, sessionId) {
  const spec = sessionSpec(sessionId);
  const plan = clone(spec.exercises || []);
  const additions = data.weeklyAdditions[String(dayIndex(date))] || [];
  additions.forEach(ex => { if (!plan.some(item => item.id === ex.id)) plan.push(clone(ex)); });
  return plan;
}

function planFor(date, sessionId) {
  const log = sessionLog(date, sessionId, false);
  return log && Array.isArray(log.plan) ? log.plan : basePlanFor(date, sessionId);
}

function meaningfulLog(log) {
  if (!log) return false;
  if (log.kind === "rest") return !!log.completed;
  if (log.kind === "cardio") return !!(log.cardio && log.cardio.saved);
  if (log.finished) return true;
  return Object.values(log.exercises || {}).some(exLog => exLog.done || (exLog.sets || []).some(set => set.done));
}

function hasLoggedDate(date) { return Object.values(sessionsOn(date)).some(meaningfulLog); }

function exerciseById(plan, id) { return (plan || []).find(ex => ex.id === id); }

function exerciseOccurrences(exercise, beforeDate) {
  const rows = [];
  Object.keys(data.sessions).sort().forEach(date => {
    if (beforeDate && date >= beforeDate) return;
    Object.values(sessionsOn(date)).forEach(log => {
      if (log.kind !== "gym") return;
      const planEx = (log.plan || []).find(ex => ex.id === exercise.id || ex.name.toLowerCase() === exercise.name.toLowerCase());
      if (!planEx) return;
      const exLog = (log.exercises || {})[planEx.id];
      if (!exLog) return;
      rows.push({ date, log, exercise: planEx, exLog });
    });
  });
  return rows;
}

function lastExerciseLog(exercise, beforeDate) {
  const rows = exerciseOccurrences(exercise, beforeDate).sort((a, b) => b.date.localeCompare(a.date));
  return rows.length ? rows[0].exLog : null;
}

function blankExerciseLog(exercise, date) {
  const previous = lastExerciseLog(exercise, date);
  if (exercise.type === "timed") return { duration: Number(exercise.seconds || 60), done: false, timerStartedAt: null };
  const previousSets = previous && previous.sets ? previous.sets : [];
  return { sets: Array.from({ length: Number(exercise.sets || 3) }, (_, i) => ({ weight: previousSets[i] ? String(previousSets[i].weight || "") : "", reps: previousSets[i] ? String(previousSets[i].reps || "") : "", done: false, tickedAt: null })) };
}

function exerciseLog(date, sessionId, exercise, create) {
  const session = sessionLog(date, sessionId, create);
  if (!session) return blankExerciseLog(exercise, date);
  session.exercises = session.exercises || {};
  if (!session.exercises[exercise.id] && create) {
    session.exercises[exercise.id] = blankExerciseLog(exercise, date);
    session.updatedAt = Date.now();
    persist();
  }
  return session.exercises[exercise.id] || blankExerciseLog(exercise, date);
}

function bodyweightFor(date) {
  return data.bodyweights.filter(item => item.date <= date).sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}

function bodyweightKg(date) { const entry = bodyweightFor(date); return entry ? Number(entry.kg) || 0 : 0; }

function tickSession(log) {
  const now = Date.now();
  if (!log.firstTick) log.firstTick = now;
  log.lastTick = now;
  log.updatedAt = now;
}

function restSecondsFor(name) {
  const n = name.toLowerCase();
  if (/barbell deadlift|power squat|overhead shoulder press|bent-over barbell row|incline chest press/.test(n)) return 180;
  if (/hip thrust/.test(n)) return 120;
  return 90;
}

function startRest(exerciseName) {
  const seconds = restSecondsFor(exerciseName);
  data.restEnd = Date.now() + seconds * 1000;
  data.restFor = exerciseName;
  persist();
  updateRestTimer();
}

function workoutComplete(date, sessionId) {
  const spec = sessionSpec(sessionId);
  const log = sessionLog(date, sessionId, false);
  if (spec.kind === "rest") return date <= todayISO() && (!!(log && log.completed) || true);
  if (!log) return false;
  if (log.finished) return true;
  if (spec.kind === "cardio" || log.kind === "cardio") return !!(log.cardio && log.cardio.saved);
  const plan = planFor(date, sessionId);
  return plan.length > 0 && plan.every(ex => {
    const exLog = (log.exercises || {})[ex.id];
    if (!exLog) return false;
    if (ex.type === "timed") return !!exLog.done;
    return (exLog.sets || []).slice(0, Number(ex.sets || 0)).length >= Number(ex.sets || 0) && (exLog.sets || []).slice(0, Number(ex.sets || 0)).every(set => set.done);
  });
}

function sessionDuration(log) {
  if (!log) return 0;
  if (log.kind === "cardio") return parseDuration(log.cardio && log.cardio.duration);
  if (log.durationOverrideSec != null) return Number(log.durationOverrideSec) || 0;
  return log.firstTick && log.lastTick ? Math.max(0, Math.round((log.lastTick - log.firstTick) / 1000)) : 0;
}

function exerciseVolume(date, exercise, exLog) {
  if (!exLog || exercise.type === "timed") return 0;
  const bw = exercise.usesBodyweight ? bodyweightKg(date) : 0;
  return (exLog.sets || []).reduce((sum, set) => set.done ? sum + (Number(set.reps) || 0) * ((Number(set.weight) || 0) + bw) : sum, 0);
}

function sessionMetrics(date, log) {
  if (!log) return { sets: 0, reps: 0, volume: 0, duration: 0 };
  if (log.kind === "cardio") return { sets: 0, reps: 0, volume: 0, duration: sessionDuration(log) };
  let sets = 0, reps = 0, volume = 0;
  (log.plan || []).forEach(ex => {
    const exLog = (log.exercises || {})[ex.id];
    if (!exLog) return;
    if (ex.type === "timed") { if (exLog.done) sets += 1; return; }
    (exLog.sets || []).forEach(set => { if (set.done) { sets += 1; reps += Number(set.reps) || 0; } });
    volume += exerciseVolume(date, ex, exLog);
  });
  return { sets, reps, volume, duration: sessionDuration(log) };
}

function cardioMetric(activity, cardio) {
  const km = Number(cardio && cardio.distance);
  const seconds = parseDuration(cardio && cardio.duration);
  if (!km || !seconds) return "—";
  if (activity === "Running") { const pace = seconds / km; return Math.floor(pace / 60) + ":" + String(Math.round(pace % 60)).padStart(2, "0") + " /km"; }
  return (km / (seconds / 3600)).toFixed(1) + " km/h";
}

function canEditDate(date) { return date <= todayISO(); }

function muscleTotalsForPlan(spec, plan) {
  const primary = new Set(), secondary = new Set();
  if (spec.kind === "cardio") {
    (spec.primary || []).forEach(m => primary.add(m));
    (spec.secondary || []).forEach(m => secondary.add(m));
  } else {
    (plan || []).forEach(ex => {
      (ex.primary || []).forEach(m => primary.add(m));
      (ex.secondary || []).forEach(m => secondary.add(m));
    });
  }
  primary.forEach(m => secondary.delete(m));
  return { primary: Array.from(primary), secondary: Array.from(secondary) };
}

function bodyMap(options) {
  const asset = window.REP_BODY_ASSET;
  const mapId = ++bodyMapSerial;
  const primary = new Set(options.primary || []), secondary = new Set(options.secondary || []), heat = options.heat || {};
  function polygon(region, points, side, index) {
    let cls = "muscle";
    if (primary.has(region)) cls += " primary";
    else if (secondary.has(region)) cls += " secondary";
    const style = options.heat ? ' style="--heat:' + Math.max(0, Math.min(1, heat[region] || 0)).toFixed(3) + '"' : "";
    return '<polygon id="body-' + mapId + '-' + side + '-' + slug(region) + '-' + index + '" data-muscle="' + escapeHTML(region) + '" class="' + cls + '"' + style + ' points="' + points + '"></polygon>';
  }
  function figure(side, label) {
    const source = asset[side];
    return '<svg class="anatomy-view" viewBox="0 0 1000 2320" role="img" aria-label="' + label + ' anatomical muscle map">' +
      source.base.map((points, i) => '<polygon id="body-' + mapId + '-' + side + '-base-' + i + '" class="anatomy-base" points="' + points + '"></polygon>').join("") +
      Object.keys(source.regions).map(region => source.regions[region].map((points, i) => polygon(region, points, side, i)).join("")).join("") +
      '<text class="body-view-label" x="500" y="2290">' + label.toUpperCase() + '</text></svg>';
  }
  return '<div class="body-map-wrap ' + (options.heat ? "heat" : "") + '">' + figure("front", "Front") + figure("back", "Back") + '</div>';
}

function bodyPanel(spec, plan, selected, heat, subtitle) {
  const muscles = selected ? { primary: selected.primary || [], secondary: selected.secondary || [] } : muscleTotalsForPlan(spec, plan);
  const copy = subtitle || (selected ? selected.name : "Whole session");
  return '<section class="body-panel"><div class="body-heading"><div><h2>Muscles worked</h2><p>' + escapeHTML(copy) + '</p></div>' +
    (heat ? '<div class="legend"><span>More sets</span><span>Less</span><span>Idle</span></div>' : '<div class="legend"><span>Primary</span><span>Secondary</span></div>') +
    '</div>' + bodyMap(heat ? { heat } : muscles) + '</section>';
}

function movedForDate(date) {
  const week = startOfWeekISO(date);
  const i = dayIndex(date);
  return weekOrder(week)[i] !== DEFAULT_WEEKLY_SCHEDULE.order[i];
}

function dateStrip(selectedDate) {
  const dates = weekDates(startOfWeekISO(todayISO()));
  return '<div class="date-strip" aria-label="Current week">' + dates.map((date, i) => {
    const moved = movedForDate(date);
    return '<button class="day-pill ' + (date === selectedDate ? "active " : "") + (date > todayISO() ? "future" : "") + '" data-select-date="' + date + '"><span>' + DAY_NAMES[i] + '</span><b>' + dateFromISO(date).getDate() + '</b><small>' + (moved ? "moved" : "") + '</small></button>';
  }).join("") + '</div>';
}

function lastLine(exercise, date) {
  const last = lastExerciseLog(exercise, date);
  if (!last) return exercise.type === "timed" ? "Target: " + formatClock(exercise.seconds) : "No previous session";
  if (exercise.type === "timed") return last.done ? "Last: " + formatClock(last.duration) : "Target: " + formatClock(exercise.seconds);
  const sets = (last.sets || []).filter(set => set.done || set.weight !== "" || set.reps !== "");
  if (!sets.length) return "No previous session";
  const top = Math.max(...sets.map(set => Number(set.weight) || 0));
  return "Last: " + trimNumber(top) + " x " + sets.map(set => set.reps || "—").join(", ");
}

function targetLabel(exercise) {
  if (exercise.type === "timed") return "Target " + formatClock(exercise.seconds);
  const reps = exercise.reps && exercise.reps[0] === exercise.reps[1] ? exercise.reps[0] : (exercise.reps || [8, 12]).join("–");
  return exercise.sets + " x " + reps + (exercise.note ? " · " + exercise.note : "");
}

function exerciseCard(exercise, index, date, sessionId, readonly) {
  const exLog = exerciseLog(date, sessionId, exercise, false);
  const expanded = expandedExerciseId === exercise.id;
  const selected = selectedExerciseId === exercise.id;
  const done = exercise.type === "timed" ? (exLog.done ? 1 : 0) : (exLog.sets || []).slice(0, exercise.sets).filter(set => set.done).length;
  const total = exercise.type === "timed" ? 1 : Number(exercise.sets || 0);
  let body = "";
  if (exercise.type === "timed") {
    const running = !!exLog.timerStartedAt;
    const duration = running ? Math.max(0, Math.round((Date.now() - exLog.timerStartedAt) / 1000)) : Number(exLog.duration || exercise.seconds || 0);
    body = '<div class="timed-grid"><div class="field"><label>Duration (seconds)</label><input type="number" inputmode="numeric" min="0" value="' + duration + '" data-timed-duration="' + exercise.id + '" ' + (readonly || running ? "disabled" : "") + '></div>' +
      '<button class="timer-btn ' + (running ? "running" : "") + '" data-timer-toggle="' + exercise.id + '" ' + (readonly ? "disabled" : "") + '>' + (running ? "Stop" : "Timer") + '</button>' +
      '<button class="done-btn ' + (exLog.done ? "done" : "") + '" data-timed-done="' + exercise.id + '" ' + (readonly ? "disabled" : "") + ' aria-pressed="' + !!exLog.done + '">✓</button></div>';
  } else {
    const rows = Array.from({ length: Number(exercise.sets || 0) }, (_, i) => (exLog.sets || [])[i] || { weight: "", reps: "", done: false });
    body = '<div class="set-head"><span>Set</span><span>kg</span><span>Reps</span><span>Done</span><span></span></div>' + rows.map((set, setIndex) =>
      '<div class="set-row"><span class="set-number">' + (setIndex + 1) + '</span>' +
      '<input type="number" min="0" step="0.5" inputmode="decimal" aria-label="' + escapeHTML(exercise.name) + ' set ' + (setIndex + 1) + ' weight" value="' + escapeHTML(set.weight) + '" data-set-field="weight" data-exercise-id="' + exercise.id + '" data-set-index="' + setIndex + '" ' + (readonly ? "disabled" : "") + '>' +
      '<input type="number" min="0" step="1" inputmode="numeric" aria-label="' + escapeHTML(exercise.name) + ' set ' + (setIndex + 1) + ' reps" value="' + escapeHTML(set.reps) + '" data-set-field="reps" data-exercise-id="' + exercise.id + '" data-set-index="' + setIndex + '" ' + (readonly ? "disabled" : "") + '>' +
      '<button class="done-btn ' + (set.done ? "done" : "") + '" data-set-done="' + exercise.id + '" data-set-index="' + setIndex + '" ' + (readonly ? "disabled" : "") + ' aria-pressed="' + !!set.done + '">✓</button>' +
      '<button class="row-delete" data-delete-set="' + exercise.id + '" data-set-index="' + setIndex + '" ' + (readonly || exercise.sets <= 1 ? "disabled" : "") + ' aria-label="Delete set">×</button></div>').join("");
  }
  if (!readonly) {
    body += '<div class="exercise-actions">' + (exercise.type === "timed" ? "" : '<button data-add-set="' + exercise.id + '">+ Set</button>') + '<button data-edit-target="' + exercise.id + '">Edit target</button><button class="danger" data-delete-exercise="' + exercise.id + '">Delete exercise</button></div>';
  }
  const youtube = "https://www.youtube.com/results?search_query=" + encodeURIComponent(exercise.name + " form");
  return '<article class="exercise-card ' + (expanded ? "expanded " : "") + (selected ? "selected" : "") + '" data-exercise-card="' + exercise.id + '">' +
    '<div class="exercise-summary" data-expand-exercise="' + exercise.id + '"><span class="exercise-order">' + String(index + 1).padStart(2, "0") + '</span><div class="exercise-title">' +
    '<div class="exercise-name-row"><button class="exercise-name" data-chart-exercise="' + exercise.id + '">' + escapeHTML(exercise.name) + '</button><a class="form-link" href="' + youtube + '" target="_blank" rel="noopener" title="Search form on YouTube" aria-label="Search ' + escapeHTML(exercise.name) + ' form on YouTube">▶</a></div>' +
    '<p class="last-line">' + escapeHTML(lastLine(exercise, date)) + ' <span class="target-line">· ' + escapeHTML(targetLabel(exercise)) + '</span></p></div>' +
    '<span class="set-progress">' + done + '/' + total + '</span><span class="chevron">⌄</span></div><div class="exercise-body">' + body + '</div></article>';
}

function cardioMarkup(spec, date, sessionId, readonly) {
  const existing = sessionLog(date, sessionId, false);
  const cardio = existing && existing.cardio ? existing.cardio : { distance: spec.defaultDistance || "", duration: "", effort: "", saved: false };
  const activity = existing && existing.activity || spec.activity;
  return '<section class="cardio-card"><h2>' + escapeHTML(activity) + '</h2><p>' + (cardio.saved ? '<span class="saved-note">Saved for this day</span>' : readonly ? "Preview only" : "Quick log") + '</p><div class="cardio-form">' +
    '<div class="field"><label>Distance (km)</label><input type="number" min="0" step="0.1" inputmode="decimal" value="' + escapeHTML(cardio.distance || "") + '" data-cardio-field="distance" ' + (readonly ? "disabled" : "") + '></div>' +
    '<div class="field"><label>Duration (mm:ss)</label><input inputmode="numeric" placeholder="45:00" value="' + escapeHTML(cardio.duration || "") + '" data-cardio-field="duration" ' + (readonly ? "disabled" : "") + '></div>' +
    '<div class="field full"><label>Effort 1–10 · optional</label><input type="number" min="1" max="10" inputmode="numeric" value="' + escapeHTML(cardio.effort || "") + '" data-cardio-field="effort" ' + (readonly ? "disabled" : "") + '></div>' +
    '<div class="metric-result"><span>' + (activity === "Running" ? "Average pace" : "Average speed") + '</span><strong data-cardio-metric>' + cardioMetric(activity, cardio) + '</strong></div>' +
    (readonly ? "" : '<button class="save-cardio" data-save-cardio>Save ' + activity.toLowerCase() + '</button>') + '</div></section>';
}

function workoutContent(date, sessionId, context) {
  const spec = sessionSpec(sessionId);
  const log = sessionLog(date, sessionId, false);
  const plan = spec.kind === "gym" ? planFor(date, sessionId) : [];
  const selected = exerciseById(plan, selectedExerciseId);
  const readonly = !canEditDate(date);
  let html = "";
  if (spec.kind === "rest") {
    const completed = !!(log && log.completed);
    html += '<section class="rest-day"><div><div class="rest-orbit">☾</div><h2>Rest day</h2><p>' + (readonly ? "Planned recovery." : completed ? "Rest logged." : "Recover and come back ready.") + '</p>' + (!readonly ? '<button class="primary-action ' + (completed ? "ready" : "") + '" data-complete-rest>' + (completed ? "Rest complete ✓" : "Mark rest complete") + '</button>' : "") + '</div></section>';
    return html;
  }
  html += bodyPanel(spec, plan, selected);
  html += '<div class="section-head"><h2>' + escapeHTML(spec.label) + '</h2><p>' + (readonly ? "Preview only" : formatDate(date, { month: "short", day: "numeric" })) + '</p></div>';
  html += '<div class="session-tools">' + (context === "today" ? '<button class="small-btn accent" data-swap-session>Swap session</button>' : "") + (!readonly ? '<button class="small-btn" data-log-cardio>Log cardio</button>' : "") + '</div>';
  if (spec.kind === "cardio") {
    html += cardioMarkup(spec, date, sessionId, readonly);
    if (!readonly) html += '<button class="primary-action ' + (log && log.cardio && log.cardio.saved ? "ready" : "") + '" data-finish-workout>' + (log && log.cardio && log.cardio.saved ? "View cardio summary" : "Finish cardio") + '</button>';
  } else {
    html += '<div class="exercise-list">' + plan.map((ex, i) => exerciseCard(ex, i, date, sessionId, readonly)).join("") + '</div>';
    if (!readonly) html += '<button class="primary-action add-exercise" data-add-exercise>+ Add exercise</button>';
    const complete = workoutComplete(date, sessionId);
    if (!readonly) html += '<button class="primary-action ' + (complete ? "ready" : "") + '" data-finish-workout>' + (log && log.finished ? "View workout summary" : complete ? "Finish workout · ready" : "Finish workout") + '</button>';
  }
  return html;
}

function renderToday() {
  const sessionId = sessionIdForDate(activeDate);
  els.dateLabel.textContent = formatDate(activeDate).toUpperCase();
  els.today.innerHTML = dateStrip(activeDate) + (activeDate > todayISO() ? '<p class="screen-note">Future sessions are preview-only.</p>' : "") + workoutContent(activeDate, sessionId, "today");
  bindWorkoutEvents(els.today, activeDate, sessionId, "today");
}

function rerenderContext(context) {
  if (context === "history") renderHistory(); else renderToday();
}

function ensurePlanLog(date, sessionId) {
  const log = sessionLog(date, sessionId, true);
  if (!Array.isArray(log.plan)) log.plan = basePlanFor(date, sessionId);
  if (!log.exercises) log.exercises = {};
  return log;
}

function bindWorkoutEvents(container, date, sessionId, context) {
  container.onclick = event => {
    const dateButton = event.target.closest("[data-select-date]");
    if (dateButton) { activeDate = dateButton.dataset.selectDate; selectedExerciseId = null; expandedExerciseId = null; renderToday(); return; }
    const expand = event.target.closest("[data-expand-exercise]");
    if (expand && !event.target.closest("[data-chart-exercise],.form-link")) {
      const id = expand.dataset.expandExercise;
      const same = selectedExerciseId === id;
      selectedExerciseId = same ? null : id;
      expandedExerciseId = expandedExerciseId === id ? null : id;
      rerenderContext(context); return;
    }
    const chart = event.target.closest("[data-chart-exercise]");
    if (chart) { const ex = exerciseById(planFor(date, sessionId), chart.dataset.chartExercise); if (ex) showExerciseChart(ex); return; }
    if (event.target.closest("[data-swap-session]")) { openMoveModal(date); return; }
    if (event.target.closest("[data-log-cardio]")) { openLogCardio(date); return; }
    if (event.target.closest("[data-add-exercise]")) { openAddExercise(date, sessionId, context); return; }
    const setDone = event.target.closest("[data-set-done]");
    if (setDone && canEditDate(date)) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, setDone.dataset.setDone); if (!ex) return;
      const exLog = exerciseLog(date, sessionId, ex, true); const set = exLog.sets[Number(setDone.dataset.setIndex)]; set.done = !set.done;
      if (set.done) { set.tickedAt = Date.now(); tickSession(log); startRest(ex.name); }
      log.updatedAt = Date.now(); persist(); rerenderContext(context); return;
    }
    const timedDone = event.target.closest("[data-timed-done]");
    if (timedDone && canEditDate(date)) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, timedDone.dataset.timedDone); if (!ex) return;
      const exLog = exerciseLog(date, sessionId, ex, true); exLog.done = !exLog.done; exLog.timerStartedAt = null;
      if (exLog.done) { exLog.tickedAt = Date.now(); tickSession(log); }
      persist(); rerenderContext(context); return;
    }
    const timer = event.target.closest("[data-timer-toggle]");
    if (timer && canEditDate(date)) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, timer.dataset.timerToggle); if (!ex) return;
      const exLog = exerciseLog(date, sessionId, ex, true);
      if (exLog.timerStartedAt) { exLog.duration = Math.max(0, Math.round((Date.now() - exLog.timerStartedAt) / 1000)); exLog.timerStartedAt = null; } else exLog.timerStartedAt = Date.now();
      log.updatedAt = Date.now(); persist(); rerenderContext(context); return;
    }
    const addSet = event.target.closest("[data-add-set]");
    if (addSet) { const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, addSet.dataset.addSet); ex.sets += 1; exerciseLog(date, sessionId, ex, true).sets.push({ weight: "", reps: "", done: false, tickedAt: null }); persist(); rerenderContext(context); return; }
    const deleteSet = event.target.closest("[data-delete-set]");
    if (deleteSet) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, deleteSet.dataset.deleteSet); const exLog = exerciseLog(date, sessionId, ex, true); const index = Number(deleteSet.dataset.setIndex);
      exLog.sets.splice(index, 1); ex.sets = Math.max(1, ex.sets - 1); persist(); rerenderContext(context); return;
    }
    const editTarget = event.target.closest("[data-edit-target]");
    if (editTarget) { const ex = exerciseById(planFor(date, sessionId), editTarget.dataset.editTarget); if (ex) openTargetEditor(date, sessionId, ex, context); return; }
    const deleteEx = event.target.closest("[data-delete-exercise]");
    if (deleteEx) { deleteExercise(date, sessionId, deleteEx.dataset.deleteExercise, context); return; }
    if (event.target.closest("[data-finish-workout]")) {
      const spec = sessionSpec(sessionId);
      const log = spec.kind === "gym" ? ensurePlanLog(date, sessionId) : sessionLog(date, sessionId, true);
      if (spec.kind === "cardio" && (!Number(log.cardio.distance) || !parseDuration(log.cardio.duration))) { showToast("Add distance and duration"); return; }
      if (spec.kind === "cardio") log.cardio.saved = true;
      log.finished = true; if (!log.firstTick) log.firstTick = Date.now(); if (!log.lastTick) log.lastTick = log.firstTick; log.updatedAt = Date.now(); persist(); openSummary(date, sessionId); rerenderContext(context); return;
    }
    if (event.target.closest("[data-complete-rest]")) { const log = sessionLog(date, sessionId, true); log.completed = !log.completed; log.updatedAt = Date.now(); persist(); rerenderContext(context); return; }
    if (event.target.closest("[data-save-cardio]")) {
      const log = sessionLog(date, sessionId, true); if (!Number(log.cardio.distance) || !parseDuration(log.cardio.duration)) { showToast("Add distance and duration"); return; }
      log.cardio.saved = true; log.finished = true; if (!log.firstTick) log.firstTick = Date.now(); log.lastTick = Date.now(); log.updatedAt = Date.now(); persist(); showToast("Cardio saved"); rerenderContext(context); return;
    }
  };
  container.oninput = event => {
    const field = event.target.closest("[data-set-field]");
    if (field && canEditDate(date)) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, field.dataset.exerciseId); const exLog = exerciseLog(date, sessionId, ex, true);
      exLog.sets[Number(field.dataset.setIndex)][field.dataset.setField] = field.value; log.updatedAt = Date.now(); persist(); return;
    }
    const duration = event.target.closest("[data-timed-duration]");
    if (duration && canEditDate(date)) {
      const log = ensurePlanLog(date, sessionId); const ex = exerciseById(log.plan, duration.dataset.timedDuration); exerciseLog(date, sessionId, ex, true).duration = Number(duration.value) || 0; log.updatedAt = Date.now(); persist(); return;
    }
    const cardioField = event.target.closest("[data-cardio-field]");
    if (cardioField && canEditDate(date)) {
      const log = sessionLog(date, sessionId, true); log.cardio[cardioField.dataset.cardioField] = cardioField.value; log.cardio.saved = false; log.updatedAt = Date.now(); persist();
      const metric = container.querySelector("[data-cardio-metric]"); if (metric) metric.textContent = cardioMetric(log.activity, log.cardio);
    }
  };
}

function openModal(html, bind) {
  els.modalContent.innerHTML = html;
  if (!els.modal.open) els.modal.showModal();
  if (bind) bind(els.modalContent);
}

function closeModal() { if (els.modal.open) els.modal.close(); }

function allLibrary() {
  const combined = BASE_EXERCISE_LIBRARY.concat(data.customLibrary || []);
  const seen = new Set();
  return combined.filter(ex => { const key = ex.name.toLowerCase(); if (seen.has(key)) return false; seen.add(key); return true; });
}

function addExerciseToPlan(date, sessionId, exercise, scope, context) {
  const copy = clone(exercise);
  if (scope === "weekly") {
    const key = String(dayIndex(date));
    data.weeklyAdditions[key] = data.weeklyAdditions[key] || [];
    if (!data.weeklyAdditions[key].some(ex => ex.id === copy.id)) data.weeklyAdditions[key].push(clone(copy));
  }
  const log = ensurePlanLog(date, sessionId);
  if (!log.plan.some(ex => ex.id === copy.id)) log.plan.push(copy);
  log.updatedAt = Date.now();
  persist();
  closeModal();
  expandedExerciseId = copy.id;
  selectedExerciseId = copy.id;
  rerenderContext(context);
  showToast(copy.name + " added");
}

function openAddExercise(date, sessionId, context) {
  let chosen = null;
  const html = '<h2>Add exercise</h2><p class="modal-sub">Search the exercise library or create your own.</p><div class="modal-fields">' +
    '<div class="field"><label>Exercise</label><input id="exerciseSearch" autocomplete="off" placeholder="Type a name…"></div>' +
    '<div class="radio-row"><label class="choice"><input type="radio" name="addScope" value="today" checked><span>Only today</span></label><label class="choice"><input type="radio" name="addScope" value="weekly"><span>Every week on this day</span></label></div>' +
    '<div class="suggestions" id="exerciseSuggestions"></div><button class="primary-action" id="addChosen" disabled>Add exercise</button></div>';
  openModal(html, root => {
    const input = root.querySelector("#exerciseSearch"), results = root.querySelector("#exerciseSuggestions"), add = root.querySelector("#addChosen");
    const draw = () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.innerHTML = '<div class="empty-state">Start typing to search 120+ exercises.</div>'; chosen = null; add.disabled = true; return; }
      const matches = allLibrary().filter(ex => ex.name.toLowerCase().includes(q)).sort((a, b) => {
        const ap = a.name.toLowerCase().startsWith(q) ? 0 : 1, bp = b.name.toLowerCase().startsWith(q) ? 0 : 1;
        return ap - bp || a.name.localeCompare(b.name);
      }).slice(0, 30);
      results.innerHTML = matches.map(ex => '<button class="suggestion ' + (chosen && chosen.id === ex.id ? "selected" : "") + '" data-pick-library="' + escapeHTML(ex.id) + '"><span><strong>' + escapeHTML(ex.name) + '</strong><small>' + escapeHTML(targetLabel(ex)) + '</small></span><span>＋</span></button>').join("") +
        (!matches.length ? '<button class="suggestion" id="createCustom"><span><strong>Create custom exercise</strong><small>' + escapeHTML(input.value.trim()) + '</small></span><span>＋</span></button>' : "");
      results.querySelectorAll("[data-pick-library]").forEach(button => button.onclick = () => { chosen = allLibrary().find(ex => ex.id === button.dataset.pickLibrary); draw(); add.disabled = !chosen; });
      const custom = results.querySelector("#createCustom"); if (custom) custom.onclick = () => openCustomExercise(date, sessionId, context, input.value.trim());
    };
    input.addEventListener("input", draw);
    add.onclick = () => { if (chosen) addExerciseToPlan(date, sessionId, chosen, root.querySelector('input[name="addScope"]:checked').value, context); };
    draw(); setTimeout(() => input.focus(), 60);
  });
}

function openCustomExercise(date, sessionId, context, initialName) {
  const selected = new Set();
  const html = '<h2>Create custom exercise</h2><p class="modal-sub">It will be saved to your exercise library.</p><div class="modal-fields">' +
    '<div class="field"><label>Name</label><input id="customName" value="' + escapeHTML(initialName || "") + '" autocomplete="off"></div>' +
    '<div class="field"><label>Primary muscles</label><div class="muscle-picker">' + MUSCLES.map(m => '<button class="muscle-chip" data-pick-muscle="' + escapeHTML(m) + '">' + escapeHTML(m) + '</button>').join("") + '</div></div>' +
    '<label class="choice"><input type="checkbox" id="customBodyweight"><span>Uses bodyweight</span></label>' +
    '<div class="radio-row"><label class="choice"><input type="radio" name="customScope" value="today" checked><span>Only today</span></label><label class="choice"><input type="radio" name="customScope" value="weekly"><span>Every week on this day</span></label></div>' +
    '<button class="primary-action" id="saveCustom">Create and add</button></div>';
  openModal(html, root => {
    root.querySelectorAll("[data-pick-muscle]").forEach(button => button.onclick = () => { const m = button.dataset.pickMuscle; if (selected.has(m)) selected.delete(m); else selected.add(m); button.classList.toggle("selected", selected.has(m)); });
    root.querySelector("#saveCustom").onclick = () => {
      const name = root.querySelector("#customName").value.trim();
      if (!name || !selected.size) { showToast("Add a name and at least one muscle"); return; }
      const ex = { id: "custom-" + slug(name) + "-" + Date.now().toString(36), name, sets: 3, reps: [8, 12], primary: Array.from(selected), secondary: [], usesBodyweight: root.querySelector("#customBodyweight").checked };
      data.customLibrary.push(clone(ex)); persist();
      addExerciseToPlan(date, sessionId, ex, root.querySelector('input[name="customScope"]:checked').value, context);
    };
    setTimeout(() => root.querySelector("#customName").focus(), 60);
  });
}

function openTargetEditor(date, sessionId, exercise, context) {
  const timed = exercise.type === "timed";
  const html = '<h2>Edit target</h2><p class="modal-sub">' + escapeHTML(exercise.name) + '</p><div class="modal-fields">' + (timed ?
    '<div class="field"><label>Target seconds</label><input id="targetSeconds" type="number" min="1" value="' + Number(exercise.seconds || 60) + '"></div>' :
    '<div class="field"><label>Target sets</label><input id="targetSets" type="number" min="1" value="' + Number(exercise.sets || 3) + '"></div><div class="radio-row"><div class="field"><label>Min reps</label><input id="targetMin" type="number" min="1" value="' + Number(exercise.reps && exercise.reps[0] || 8) + '"></div><div class="field"><label>Max reps</label><input id="targetMax" type="number" min="1" value="' + Number(exercise.reps && exercise.reps[1] || 12) + '"></div></div>') +
    '<button class="primary-action" id="saveTarget">Save target</button></div>';
  openModal(html, root => {
    root.querySelector("#saveTarget").onclick = () => {
      const log = ensurePlanLog(date, sessionId); const live = exerciseById(log.plan, exercise.id);
      if (timed) live.seconds = Math.max(1, Number(root.querySelector("#targetSeconds").value) || 1);
      else {
        live.sets = Math.max(1, Number(root.querySelector("#targetSets").value) || 1);
        const min = Math.max(1, Number(root.querySelector("#targetMin").value) || 1), max = Math.max(min, Number(root.querySelector("#targetMax").value) || min); live.reps = [min, max];
        const exLog = exerciseLog(date, sessionId, live, true); while (exLog.sets.length < live.sets) exLog.sets.push({ weight: "", reps: "", done: false, tickedAt: null });
      }
      log.updatedAt = Date.now(); persist(); closeModal(); rerenderContext(context);
    };
  });
}

function deleteExercise(date, sessionId, exerciseId, context) {
  const log = ensurePlanLog(date, sessionId); const index = log.plan.findIndex(ex => ex.id === exerciseId); if (index < 0) return;
  const removed = clone(log.plan[index]); log.plan.splice(index, 1); log.updatedAt = Date.now(); persist();
  selectedExerciseId = null; expandedExerciseId = null;
  undoAction = () => { const fresh = ensurePlanLog(date, sessionId); fresh.plan.splice(Math.min(index, fresh.plan.length), 0, removed); persist(); rerenderContext(context); };
  rerenderContext(context); showToast(removed.name + " deleted", true);
}

function openBodyweightModal(firstLaunch) {
  const current = bodyweightFor(todayISO());
  const html = '<h2>Bodyweight</h2><p class="modal-sub">Stored by date and used for bodyweight-exercise volume.</p><div class="modal-fields"><div class="field"><label>Bodyweight (kg)</label><input id="bodyweightInput" type="number" min="0" step="0.1" inputmode="decimal" value="' + escapeHTML(current ? current.kg : "") + '" placeholder="Optional"></div><button class="primary-action" id="saveBodyweight">Save</button>' + (firstLaunch ? '<button class="secondary-btn" id="skipBodyweight">Skip for now</button>' : "") + '</div>';
  openModal(html, root => {
    root.querySelector("#saveBodyweight").onclick = () => {
      const kg = Number(root.querySelector("#bodyweightInput").value);
      if (!kg) { showToast("Enter a bodyweight or skip"); return; }
      data.bodyweights = data.bodyweights.filter(item => item.date !== todayISO()); data.bodyweights.push({ date: todayISO(), kg }); data.bodyweightPrompted = true; persist(); closeModal(); showToast("Bodyweight saved"); if (currentView === "today") renderToday();
    };
    const skip = root.querySelector("#skipBodyweight"); if (skip) skip.onclick = () => { data.bodyweightPrompted = true; persist(); closeModal(); };
    setTimeout(() => root.querySelector("#bodyweightInput").focus(), 60);
  });
}

function renderBodyweightChip() {
  const entry = bodyweightFor(todayISO()); els.bodyweight.textContent = entry ? "BW " + trimNumber(entry.kg) : "BW —";
}

function openLogCardio(date) {
  const html = '<h2>Log cardio</h2><p class="modal-sub">Add a run or ride on ' + escapeHTML(formatDate(date)) + '.</p><div class="modal-fields">' +
    '<div class="field"><label>Activity</label><select id="adhocActivity"><option>Running</option><option>Cycling</option></select></div>' +
    '<div class="radio-row"><div class="field"><label>Distance (km)</label><input id="adhocDistance" type="number" min="0" step="0.1" inputmode="decimal"></div><div class="field"><label>Duration (mm:ss)</label><input id="adhocDuration" inputmode="numeric" placeholder="30:00"></div></div>' +
    '<div class="field"><label>Effort 1–10 · optional</label><input id="adhocEffort" type="number" min="1" max="10" inputmode="numeric"></div><button class="primary-action" id="saveAdhocCardio">Save cardio</button></div>';
  openModal(html, root => {
    root.querySelector("#saveAdhocCardio").onclick = () => {
      const activity = root.querySelector("#adhocActivity").value, distance = root.querySelector("#adhocDistance").value, duration = root.querySelector("#adhocDuration").value;
      if (!Number(distance) || !parseDuration(duration)) { showToast("Add distance and duration"); return; }
      const id = "cardio-" + activity.toLowerCase() + "-" + Date.now().toString(36);
      if (!data.sessions[date]) data.sessions[date] = {};
      data.sessions[date][id] = { sessionId: id, label: activity, kind: "cardio", activity, cardio: { distance, duration, effort: root.querySelector("#adhocEffort").value, saved: true }, finished: true, firstTick: Date.now(), lastTick: Date.now(), createdAt: Date.now(), updatedAt: Date.now() };
      persist(); closeModal(); showToast(activity + " saved"); if (currentView === "history") renderHistory(); else renderToday();
    };
    setTimeout(() => root.querySelector("#adhocDistance").focus(), 60);
  });
}

function personalBests(date, log) {
  if (!log || log.kind !== "gym") return [];
  const bests = [];
  (log.plan || []).forEach(ex => {
    if (ex.type === "timed") return;
    const current = (log.exercises && log.exercises[ex.id] && log.exercises[ex.id].sets || []).filter(set => set.done).map(set => Number(set.weight) || 0);
    if (!current.length) return;
    const currentTop = Math.max(...current);
    const prior = exerciseOccurrences(ex, date).flatMap(row => (row.exLog.sets || []).filter(set => set.done).map(set => Number(set.weight) || 0));
    if (currentTop > (prior.length ? Math.max(...prior) : -1)) bests.push(ex.name + " · " + trimNumber(currentTop) + " kg");
  });
  return bests;
}

function summaryMarkup(date, log, editable) {
  if (log.kind === "cardio") {
    const c = log.cardio || {};
    return '<div class="summary-card"><div class="summary-item"><span>DISTANCE</span><strong>' + trimNumber(c.distance) + ' km</strong></div><div class="summary-item"><span>TIME</span><strong>' + escapeHTML(c.duration || "—") + '</strong></div><div class="summary-item"><span>' + (log.activity === "Running" ? "PACE" : "SPEED") + '</span><strong>' + escapeHTML(cardioMetric(log.activity, c)) + '</strong></div><div class="summary-item"><span>EFFORT</span><strong>' + escapeHTML(c.effort || "—") + '</strong></div></div>';
  }
  const metrics = sessionMetrics(date, log), bests = personalBests(date, log);
  return '<div class="summary-card"><div class="summary-item"><span>VOLUME</span><strong>' + trimNumber(metrics.volume) + ' kg</strong></div><div class="summary-item"><span>SETS / REPS</span><strong>' + metrics.sets + ' / ' + metrics.reps + '</strong></div><div class="summary-item"><span>DURATION</span><strong>' + formatClock(metrics.duration) + '</strong></div><div class="summary-item"><span>STATUS</span><strong>' + (log.finished ? "Finished" : "In progress") + '</strong></div>' +
    (bests.length ? '<ul class="pb-list"><li><strong>New personal bests</strong></li>' + bests.map(pb => '<li>' + escapeHTML(pb) + '</li>').join("") + '</ul>' : "") + '</div>' +
    (editable ? '<div class="field"><label>Workout duration (minutes)</label><input id="summaryDuration" type="number" min="0" step="1" value="' + Math.round(metrics.duration / 60) + '"></div><button class="primary-action" id="saveSummaryDuration">Save duration</button>' : "");
}

function openSummary(date, sessionId) {
  const log = sessionLog(date, sessionId, false); if (!log) return;
  openModal('<h2>Workout summary</h2><p class="modal-sub">' + escapeHTML(formatDate(date)) + ' · ' + escapeHTML(log.label) + '</p>' + summaryMarkup(date, log, log.kind === "gym"), root => {
    const save = root.querySelector("#saveSummaryDuration"); if (save) save.onclick = () => { log.durationOverrideSec = Math.max(0, Number(root.querySelector("#summaryDuration").value) || 0) * 60; log.updatedAt = Date.now(); persist(); showToast("Duration saved"); closeModal(); if (currentView === "history") renderHistory(); };
  });
}

function showExerciseChart(exercise) {
  const rows = exerciseOccurrences(exercise).filter(row => row.exercise.type === "timed" ? row.exLog.done : (row.exLog.sets || []).some(set => set.done));
  const points = rows.map(row => {
    if (row.exercise.type === "timed") return { date: row.date, value: Number(row.exLog.duration) || 0, text: formatClock(row.exLog.duration) };
    const done = (row.exLog.sets || []).filter(set => set.done); const top = done.length ? Math.max(...done.map(set => Number(set.weight) || 0)) : 0;
    return { date: row.date, value: top, text: trimNumber(top) + " kg", reps: done.map(set => set.reps).join(", ") };
  });
  let chart = '<div class="empty-state">Complete a set to start this chart.</div>';
  if (points.length) {
    const w = 480, h = 190, pad = 32, values = points.map(p => p.value), min = Math.min(...values), max = Math.max(...values), range = max - min || 1;
    const coords = points.map((p, i) => ({ x: pad + (points.length === 1 ? (w - pad * 2) / 2 : i * (w - pad * 2) / (points.length - 1)), y: h - pad - ((p.value - min) / range) * (h - pad * 2), p }));
    chart = '<svg class="chart-svg" viewBox="0 0 ' + w + ' ' + h + '"><line class="chart-grid" x1="' + pad + '" y1="' + (h - pad) + '" x2="' + (w - pad) + '" y2="' + (h - pad) + '"></line><polyline class="chart-line" points="' + coords.map(c => c.x + "," + c.y).join(" ") + '"></polyline>' + coords.map((c, i) => '<circle class="chart-dot" cx="' + c.x + '" cy="' + c.y + '" r="5"></circle><text class="chart-text" x="' + c.x + '" y="' + (c.y - 10) + '" text-anchor="middle">' + escapeHTML(c.p.text) + '</text>' + (i === 0 || i === coords.length - 1 ? '<text class="chart-text" x="' + c.x + '" y="' + (h - 8) + '" text-anchor="middle">' + c.p.date.slice(5) + '</text>' : "")).join("") + '</svg>';
  }
  const list = '<div class="occurrence-list">' + points.slice().reverse().map(p => '<div class="occurrence"><span>' + escapeHTML(formatDate(p.date, { month: "short", day: "numeric", year: "numeric" })) + '</span><strong>' + escapeHTML(p.text + (p.reps ? " · " + p.reps + " reps" : "")) + '</strong></div>').join("") + '</div>';
  openModal('<h2>' + escapeHTML(exercise.name) + '</h2><p class="modal-sub">Top-set ' + (exercise.type === "timed" ? "duration" : "weight") + ' over time</p>' + chart + list);
}

function showToast(message, withUndo) {
  let toast = document.querySelector(".toast");
  if (!toast) { toast = document.createElement("div"); toast.className = "toast"; document.body.appendChild(toast); }
  toast.innerHTML = '<span>' + escapeHTML(message) + '</span>' + (withUndo ? '<button type="button">Undo</button>' : "");
  const button = toast.querySelector("button"); if (button) button.onclick = () => { if (undoAction) undoAction(); undoAction = null; toast.classList.remove("show"); };
  toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.classList.remove("show"); undoAction = null; }, withUndo ? 5000 : 1800);
}

function periodBounds(period) {
  const today = dateFromISO(todayISO());
  if (period === "all") return { start: "0000-01-01", end: todayISO() };
  if (period === "week") return { start: startOfWeekISO(todayISO()), end: todayISO() };
  if (period === "month") return { start: localISO(new Date(today.getFullYear(), today.getMonth(), 1)), end: todayISO() };
  return { start: localISO(new Date(today.getFullYear(), 0, 1)), end: todayISO() };
}

function completedRowsInPeriod(period) {
  const bounds = periodBounds(period), rows = [];
  Object.keys(data.sessions).forEach(date => {
    if (date < bounds.start || date > bounds.end) return;
    Object.values(sessionsOn(date)).forEach(log => { if (meaningfulLog(log) && log.kind !== "rest" && (log.finished || log.kind === "cardio" || workoutComplete(date, log.sessionId))) rows.push({ date, log }); });
  });
  return rows;
}

function periodStats(period) {
  const rows = completedRowsInPeriod(period), heatRaw = Object.fromEntries(MUSCLES.map(m => [m, 0]));
  let time = 0, volume = 0, cycled = 0, run = 0;
  rows.forEach(({ date, log }) => {
    const metrics = sessionMetrics(date, log); time += metrics.duration; volume += metrics.volume;
    if (log.kind === "cardio") {
      const km = Number(log.cardio && log.cardio.distance) || 0;
      if (log.activity === "Cycling") cycled += km; else if (log.activity === "Running") run += km;
      const spec = log.activity === "Cycling" ? sessionSpec("cycling") : sessionSpec("running");
      (spec.primary || []).forEach(m => heatRaw[m] += 1); (spec.secondary || []).forEach(m => heatRaw[m] += .5);
    } else {
      (log.plan || []).forEach(ex => {
        const exLog = (log.exercises || {})[ex.id]; if (!exLog) return;
        const count = ex.type === "timed" ? (exLog.done ? 1 : 0) : (exLog.sets || []).filter(set => set.done).length;
        (ex.primary || []).forEach(m => heatRaw[m] += count); (ex.secondary || []).forEach(m => heatRaw[m] += count * .5);
      });
    }
  });
  const max = Math.max(1, ...Object.values(heatRaw)), heat = {};
  MUSCLES.forEach(m => heat[m] = heatRaw[m] / max);
  return { workouts: rows.length, time: Math.round(time / 60), volume, cycled, run, heat };
}

function renderWeek() {
  const weekISO = startOfWeekISO(todayISO()), dates = weekDates(weekISO), order = weekOrder(weekISO), stats = periodStats(statsPeriod);
  els.dateLabel.textContent = "WEEK · " + formatDate(weekISO, { month: "short", day: "numeric" }).toUpperCase();
  const strip = '<div class="week-strip">' + dates.map((date, i) => {
    const spec = sessionSpec(order[i]), done = spec.kind === "rest" ? date <= todayISO() : workoutComplete(date, order[i]), moved = movedForDate(date);
    return '<button class="week-day ' + (done ? "done " : "") + (date === todayISO() ? "today" : "") + '" data-move-date="' + date + '"><span>' + DAY_NAMES[i] + '</span><strong>' + dateFromISO(date).getDate() + '</strong><span class="week-status">' + (done ? "✓" : "·") + '</span><small>' + (moved ? "moved · " : "") + escapeHTML(spec.label) + '</small></button>';
  }).join("") + '</div>';
  els.week.innerHTML = '<div class="week-toolbar"><h2>Tap a day to move it</h2><button class="secondary-btn" id="resetWeek" ' + (data.weekOverrides[weekISO] ? "" : "disabled") + '>Reset this week</button></div>' + strip +
    '<div class="period-toggle">' + ["week", "month", "year", "all"].map(p => '<button data-period="' + p + '" class="' + (statsPeriod === p ? "active" : "") + '">' + p[0].toUpperCase() + p.slice(1) + '</button>').join("") + '</div>' +
    '<div class="stat-cards"><div class="stat-card"><span>WORKOUTS</span><strong>' + stats.workouts + '</strong></div><div class="stat-card"><span>TIME</span><strong>' + stats.time + ' min</strong></div><div class="stat-card"><span>VOLUME</span><strong>' + trimNumber(stats.volume) + ' kg</strong></div></div>' +
    bodyPanel({ kind: "gym" }, [], null, stats.heat, "Completed sets · " + statsPeriod) +
    '<div class="cardio-totals"><div class="mini-total">Cycled<strong>' + trimNumber(stats.cycled) + ' km</strong></div><div class="mini-total">Run<strong>' + trimNumber(stats.run) + ' km</strong></div></div>';
  els.week.onclick = event => {
    const move = event.target.closest("[data-move-date]"); if (move) { openMoveModal(move.dataset.moveDate); return; }
    const period = event.target.closest("[data-period]"); if (period) { statsPeriod = period.dataset.period; renderWeek(); return; }
    if (event.target.closest("#resetWeek")) { delete data.weekOverrides[weekISO]; persist(); renderWeek(); if (currentView === "today") renderToday(); showToast("This week reset"); }
  };
}

function openMoveModal(sourceDate) {
  const weekISO = startOfWeekISO(sourceDate), dates = weekDates(weekISO), sourceIndex = dayIndex(sourceDate), sourceId = weekOrder(weekISO)[sourceIndex], sourceSpec = sessionSpec(sourceId);
  if (sourceDate < todayISO()) {
    openModal('<h2>Can’t move this day</h2><p class="modal-sub">Past days stay where they were so your schedule remains clear.</p><button class="primary-action" id="moveOkay">Okay</button>', root => root.querySelector("#moveOkay").onclick = closeModal); return;
  }
  if (hasLoggedDate(sourceDate)) {
    openModal('<h2>Can’t move ' + escapeHTML(sourceSpec.label) + '</h2><p class="modal-sub">This day already has logged data. Logs stay attached to their original date and session.</p><button class="primary-action" id="moveOkay">Okay</button>', root => root.querySelector("#moveOkay").onclick = closeModal); return;
  }
  let targetIndex = null;
  const html = '<h2>Move session</h2><p class="modal-sub">' + escapeHTML(formatDate(sourceDate)) + ' · ' + escapeHTML(sourceSpec.label) + '. Sessions swap places; logs never move.</p><div class="modal-fields"><div class="target-days">' + dates.map((date, i) => {
    const disabled = i === sourceIndex || date < todayISO() || hasLoggedDate(date);
    return '<button class="target-day" data-move-target="' + i + '" ' + (disabled ? "disabled" : "") + '>' + DAY_NAMES[i] + '<br>' + dateFromISO(date).getDate() + '</button>';
  }).join("") + '</div><div class="radio-row"><label class="choice"><input type="radio" name="moveScope" value="week" checked><span>This week only</span></label><label class="choice"><input type="radio" name="moveScope" value="future"><span>Every week from now on</span></label></div><button class="primary-action" id="applyMove" disabled>Swap sessions</button></div>';
  openModal(html, root => {
    root.querySelectorAll("[data-move-target]").forEach(button => button.onclick = () => { targetIndex = Number(button.dataset.moveTarget); root.querySelectorAll("[data-move-target]").forEach(b => b.classList.toggle("selected", b === button)); root.querySelector("#applyMove").disabled = false; });
    root.querySelector("#applyMove").onclick = () => {
      if (targetIndex == null) return;
      const order = weekOrder(weekISO), temp = order[sourceIndex]; order[sourceIndex] = order[targetIndex]; order[targetIndex] = temp;
      const scope = root.querySelector('input[name="moveScope"]:checked').value;
      if (scope === "week") data.weekOverrides[weekISO] = { order, updatedAt: Date.now() };
      else {
        data.scheduleChanges = data.scheduleChanges.filter(change => change.effectiveWeek !== weekISO);
        data.scheduleChanges.push({ effectiveWeek: weekISO, order, updatedAt: Date.now() });
        delete data.weekOverrides[weekISO];
      }
      persist(); closeModal(); selectedExerciseId = null; expandedExerciseId = null; showToast(scope === "week" ? "Sessions swapped this week" : "Schedule updated from this week");
      if (currentView === "week") renderWeek(); else if (currentView === "today") renderToday();
    };
  });
}

function historyRows() {
  const rows = [];
  Object.keys(data.sessions).forEach(date => Object.values(sessionsOn(date)).forEach(log => { if (meaningfulLog(log)) rows.push({ date, sessionId: log.sessionId, log }); }));
  return rows.sort((a, b) => b.date.localeCompare(a.date) || (b.log.updatedAt || 0) - (a.log.updatedAt || 0));
}

function historyRowSummary(date, log) {
  if (log.kind === "rest") return "Rest complete";
  if (log.kind === "cardio") return trimNumber(log.cardio.distance) + " km · " + (log.cardio.duration || "—") + " · " + cardioMetric(log.activity, log.cardio);
  const m = sessionMetrics(date, log);
  return m.sets + " sets · " + trimNumber(m.volume) + " kg · " + formatClock(m.duration);
}

function renderHistory() {
  els.dateLabel.textContent = "TRAINING LOG";
  if (historyOpen) { renderHistoryEditor(); return; }
  const rows = historyRows(); let currentMonth = "", list = "";
  rows.forEach(row => {
    const month = formatDate(row.date, { month: "long", year: "numeric" });
    if (month !== currentMonth) { currentMonth = month; list += '<h2 class="history-month">' + escapeHTML(month) + '</h2>'; }
    const d = dateFromISO(row.date), m = sessionMetrics(row.date, row.log);
    list += '<button class="history-row" data-history-date="' + row.date + '" data-history-session="' + escapeHTML(row.sessionId) + '"><span class="history-date"><b>' + d.getDate() + '</b><span>' + d.toLocaleDateString(undefined, { weekday: "short" }).toUpperCase() + '</span></span><span class="history-main"><strong>' + escapeHTML(row.log.label) + '</strong><span>' + escapeHTML(historyRowSummary(row.date, row.log)) + '</span></span><span class="history-duration">' + (row.log.kind === "gym" ? formatClock(m.duration) : "›") + '</span></button>';
  });
  els.history.innerHTML = '<div class="history-actions"><button class="secondary-btn" id="logPast">Log past day</button><button class="secondary-btn" id="exportData">Export JSON</button><button class="secondary-btn" id="importData">Import JSON</button></div>' + (list || '<div class="empty-state">Your completed workouts will appear here.</div>');
  els.history.onclick = event => {
    const row = event.target.closest("[data-history-session]"); if (row) { historyOpen = { date: row.dataset.historyDate, sessionId: row.dataset.historySession }; selectedExerciseId = null; expandedExerciseId = null; renderHistory(); return; }
    if (event.target.closest("#logPast")) { openLogPastDay(); return; }
    if (event.target.closest("#exportData")) { exportData(); return; }
    if (event.target.closest("#importData")) els.importInput.click();
  };
}

function renderHistoryEditor() {
  const { date, sessionId } = historyOpen, log = sessionLog(date, sessionId, false);
  if (!log) { historyOpen = null; renderHistory(); return; }
  els.history.innerHTML = '<div class="history-editor-head"><button class="back-btn" id="historyBack" aria-label="Back">‹</button><div><h2>' + escapeHTML(log.label) + '</h2><p>' + escapeHTML(formatDate(date)) + '</p></div><button class="delete-session" id="deleteSession" aria-label="Delete session">⌫</button></div>' + summaryMarkup(date, log, false) + workoutContent(date, sessionId, "history");
  bindWorkoutEvents(els.history, date, sessionId, "history");
  const priorHandler = els.history.onclick;
  els.history.onclick = event => {
    if (event.target.closest("#historyBack")) { historyOpen = null; selectedExerciseId = null; expandedExerciseId = null; renderHistory(); return; }
    if (event.target.closest("#deleteSession")) {
      if (window.confirm("Delete this logged session?")) { delete data.sessions[date][sessionId]; if (!Object.keys(data.sessions[date]).length) delete data.sessions[date]; persist(); historyOpen = null; renderHistory(); showToast("Session deleted"); }
      return;
    }
    priorHandler(event);
  };
}

function openLogPastDay() {
  const options = Object.values(DEFAULT_WEEKLY_SCHEDULE.sessions).map(spec => '<option value="' + spec.id + '">' + escapeHTML(spec.label) + '</option>').join("");
  const html = '<h2>Log past day</h2><p class="modal-sub">Choose a date and session, then fill in the workout.</p><div class="modal-fields"><div class="field"><label>Date</label><input id="pastDate" type="date" max="' + todayISO() + '" value="' + todayISO() + '"></div><div class="field"><label>Session</label><select id="pastSession">' + options + '</select></div><button class="primary-action" id="openPast">Open session</button></div>';
  openModal(html, root => root.querySelector("#openPast").onclick = () => {
    const date = root.querySelector("#pastDate").value, sessionId = root.querySelector("#pastSession").value;
    if (!date || date > todayISO()) { showToast("Choose today or a past date"); return; }
    sessionLog(date, sessionId, true); historyOpen = { date, sessionId }; closeModal(); selectedExerciseId = null; expandedExerciseId = null; renderHistory();
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify({ app: "Rep & Road", exportedAt: new Date().toISOString(), ...data }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob), anchor = document.createElement("a"); anchor.href = url; anchor.download = "rep-road-backup-" + todayISO() + ".json"; anchor.click(); URL.revokeObjectURL(url); showToast("Backup exported");
}

function mergeImported(parsed) {
  const imported = parsed.version === 2 || parsed.weekOverrides ? normalizeData(parsed) : migrateLegacy(parsed);
  Object.keys(imported.sessions || {}).forEach(date => { data.sessions[date] = Object.assign(data.sessions[date] || {}, imported.sessions[date]); });
  data.weekOverrides = Object.assign(data.weekOverrides || {}, imported.weekOverrides || {});
  (imported.scheduleChanges || []).forEach(change => { data.scheduleChanges = data.scheduleChanges.filter(existing => existing.effectiveWeek !== change.effectiveWeek); data.scheduleChanges.push(change); });
  Object.keys(imported.weeklyAdditions || {}).forEach(key => {
    data.weeklyAdditions[key] = data.weeklyAdditions[key] || [];
    imported.weeklyAdditions[key].forEach(ex => { if (!data.weeklyAdditions[key].some(item => item.id === ex.id)) data.weeklyAdditions[key].push(ex); });
  });
  (imported.customLibrary || []).forEach(ex => { if (!data.customLibrary.some(item => item.id === ex.id)) data.customLibrary.push(ex); });
  (imported.bodyweights || []).forEach(entry => { data.bodyweights = data.bodyweights.filter(item => item.date !== entry.date); data.bodyweights.push(entry); });
  persist();
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try { const parsed = JSON.parse(reader.result); if (!parsed.sessions || typeof parsed.sessions !== "object") throw new Error("Invalid"); mergeImported(parsed); historyOpen = null; renderHistory(); showToast("Backup imported and merged"); }
    catch (_) { showToast("Could not import that file"); }
  };
  reader.readAsText(file);
}

function updateRestTimer() {
  if (!data.restEnd) { els.rest.hidden = true; return; }
  const remaining = Math.max(0, Math.ceil((data.restEnd - Date.now()) / 1000));
  if (!remaining) { data.restEnd = null; data.restFor = ""; persist(); els.rest.hidden = true; showToast("Rest over"); return; }
  els.rest.hidden = false;
  els.rest.innerHTML = '<div class="rest-inner"><strong>' + formatClock(remaining) + '</strong><div class="rest-copy"><b>Rest timer</b><span>' + escapeHTML(data.restFor) + '</span></div><button class="dismiss-rest" aria-label="Dismiss rest timer">×</button></div>';
  els.rest.querySelector("button").onclick = () => { data.restEnd = null; data.restFor = ""; persist(); updateRestTimer(); };
}

function navigate(view) {
  currentView = view;
  if (view !== "history") historyOpen = null;
  document.querySelectorAll(".view").forEach(node => node.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(button => { const active = button.dataset.view === view; button.classList.toggle("active", active); if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current"); });
  els[view].classList.add("active");
  if (view === "today") renderToday(); else if (view === "week") renderWeek(); else renderHistory();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
els.modal.querySelector(".dialog-close").addEventListener("click", closeModal);
els.modal.addEventListener("click", event => { if (event.target === els.modal) closeModal(); });
els.bodyweight.addEventListener("click", () => openBodyweightModal(false));
els.importInput.addEventListener("change", () => { if (els.importInput.files[0]) importData(els.importInput.files[0]); els.importInput.value = ""; });

window.addEventListener("beforeinstallprompt", event => { event.preventDefault(); installPrompt = event; els.install.hidden = false; });
els.install.addEventListener("click", () => { if (!installPrompt) return; installPrompt.prompt(); installPrompt.userChoice.finally(() => { installPrompt = null; els.install.hidden = true; }); });
window.addEventListener("appinstalled", () => els.install.hidden = true);
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));

setInterval(() => {
  document.querySelectorAll("[data-timer-toggle].running").forEach(button => {
    const card = button.closest(".exercise-card"), input = card && card.querySelector("[data-timed-duration]");
    const date = historyOpen ? historyOpen.date : activeDate, sid = historyOpen ? historyOpen.sessionId : sessionIdForDate(date), ex = exerciseById(planFor(date, sid), button.dataset.timerToggle), log = sessionLog(date, sid, false), exLog = log && ex && log.exercises && log.exercises[ex.id];
    if (input && exLog && exLog.timerStartedAt) input.value = Math.max(0, Math.round((Date.now() - exLog.timerStartedAt) / 1000));
  });
  updateRestTimer();
}, 1000);

renderBodyweightChip();
renderToday();
updateRestTimer();
if (!data.bodyweightPrompted) setTimeout(() => openBodyweightModal(true), 350);

window.__REP_ROAD_TEST__ = {
  version: 2,
  libraryCount: () => allLibrary().length,
  snapshot: () => clone(data),
  schedule: week => weekOrder(week || startOfWeekISO(todayISO())),
  metrics: (date, sessionId) => sessionMetrics(date, sessionLog(date, sessionId, false)),
  bodyRegions: MUSCLES.slice()
};

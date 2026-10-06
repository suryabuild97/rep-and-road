const PROGRAM = {
  mon: {
    label: "Cycling", kind: "cardio", activity: "Cycling",
    primary: ["quads", "glutes", "calves"], secondary: ["hamstrings"]
  },
  tue: {
    label: "Gym 1", kind: "gym", exercises: [
      { name: "Barbell deadlift", sets: 3, reps: [5, 5], primary: ["hamstrings", "glutes", "lower back"], secondary: ["traps", "lats", "forearms", "quads"] },
      { name: "Incline chest press", sets: 3, reps: [6, 8], primary: ["chest"], secondary: ["front delts", "triceps"] },
      { name: "Lat pulldown", sets: 3, reps: [8, 10], primary: ["lats"], secondary: ["biceps", "rear delts", "forearms"] },
      { name: "Lateral raise", sets: 3, reps: [12, 15], primary: ["side delts"], secondary: ["traps"] },
      { name: "Incline DB curl", sets: 3, reps: [10, 12], primary: ["biceps"], secondary: ["forearms"] },
      { name: "Plank", type: "timer", seconds: 120, primary: ["abs"], secondary: ["lower back", "front delts"] },
      { name: "Dead hang", type: "timer", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ]
  },
  wed: {
    label: "Gym 2", kind: "gym", exercises: [
      { name: "Overhead shoulder press", sets: 3, reps: [8, 10], primary: ["front delts", "side delts"], secondary: ["triceps", "chest", "traps"] },
      { name: "Leg extension", sets: 3, reps: [12, 15], primary: ["quads"], secondary: [] },
      { name: "Reverse pec dec fly", sets: 3, reps: [12, 15], primary: ["rear delts"], secondary: ["upper back", "traps"] },
      { name: "Overhead DB extension", sets: 3, reps: [10, 12], primary: ["triceps"], secondary: [] },
      { name: "Hammer curl", sets: 2, reps: [10, 12], primary: ["biceps", "forearms"], secondary: [] },
      { name: "Hanging leg raise", sets: 3, reps: [10, 12], primary: ["abs"], secondary: ["forearms"] },
      { name: "Dead hang", type: "timer", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ]
  },
  thu: {
    label: "Running", kind: "cardio", activity: "Running",
    primary: ["quads", "hamstrings", "glutes", "calves"], secondary: ["abs"]
  },
  fri: {
    label: "Gym 3", kind: "gym", exercises: [
      { name: "Power squat (machine)", sets: 3, reps: [8, 10], primary: ["quads", "glutes"], secondary: ["hamstrings", "calves"] },
      { name: "Bent-over barbell row", sets: 3, reps: [6, 8], primary: ["upper back", "lats"], secondary: ["rear delts", "biceps", "lower back", "forearms"] },
      { name: "Leg curl", sets: 3, reps: [10, 12], primary: ["hamstrings"], secondary: ["calves"] },
      { name: "Hip thrust", sets: 3, reps: [8, 10], primary: ["glutes"], secondary: ["hamstrings"] },
      { name: "Pec dec fly", sets: 3, reps: [12, 15], primary: ["chest"], secondary: ["front delts"] },
      { name: "Face pull", sets: 3, reps: [15, 15], primary: ["rear delts", "upper back"], secondary: ["traps"] },
      { name: "Lateral raise", sets: 3, reps: [12, 20], primary: ["side delts"], secondary: ["traps"] },
      { name: "Triceps pushdown", sets: 3, reps: [10, 12], primary: ["triceps"], secondary: [] },
      { name: "Dead hang", type: "timer", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ]
  },
  sat: {
    label: "Gym 4", kind: "gym", exercises: [
      { name: "Bulgarian split squat", sets: 3, reps: [8, 10], note: "per leg", primary: ["quads", "glutes"], secondary: ["hamstrings"] },
      { name: "Incline chest press (lighter)", sets: 3, reps: [10, 12], primary: ["chest"], secondary: ["front delts", "triceps"] },
      { name: "Lat pulldown", sets: 3, reps: [10, 12], primary: ["lats"], secondary: ["biceps", "rear delts", "forearms"] },
      { name: "Seated calf raise", sets: 4, reps: [12, 15], primary: ["calves"], secondary: [] },
      { name: "Lateral raise", sets: 2, reps: [15, 20], primary: ["side delts"], secondary: ["traps"] },
      { name: "Cable crunch", sets: 3, reps: [12, 15], primary: ["abs"], secondary: [] },
      { name: "Dead hang", type: "timer", seconds: 60, primary: ["forearms", "lats"], secondary: ["front delts"] }
    ]
  },
  sun: { label: "Rest", kind: "rest" }
};

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const DISPLAY_DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_SHORT = { mon: "MON", tue: "TUE", wed: "WED", thu: "THU", fri: "FRI", sat: "SAT", sun: "SUN" };
const STORAGE_KEY = "rep-road-data-v1";
const REGIONS = ["chest", "front delts", "side delts", "rear delts", "traps", "upper back", "lats", "lower back", "biceps", "triceps", "forearms", "abs", "glutes", "quads", "hamstrings", "calves"];
const els = {
  today: document.getElementById("todayView"),
  week: document.getElementById("weekView"),
  history: document.getElementById("historyView"),
  dateLabel: document.getElementById("dateLabel"),
  rest: document.getElementById("restTimer"),
  chart: document.getElementById("chartDialog"),
  chartContent: document.getElementById("chartContent"),
  importInput: document.getElementById("importInput"),
  install: document.getElementById("installBtn")
};

let data = loadData();
let currentView = "today";
let activeDate = todayISO();
let selectedExercise = null;
let expandedExercise = null;
let historyEditDate = null;
let installPrompt = null;
let toastTimer = null;

function loadData() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { sessions: parsed.sessions || {}, restEnd: parsed.restEnd || null, restFor: parsed.restFor || "" };
  } catch (_) {
    return { sessions: {}, restEnd: null, restFor: "" };
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function todayISO() {
  const d = new Date();
  return localISO(d);
}

function localISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function dateFromISO(iso) {
  const parts = iso.split("-").map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function dayKeyForDate(iso) {
  return DAYS[dateFromISO(iso).getDay()];
}

function formatDate(iso, options) {
  return new Intl.DateTimeFormat(undefined, options || { weekday: "long", month: "short", day: "numeric" }).format(dateFromISO(iso));
}

function sessionFor(date, create) {
  if (!data.sessions[date] && create) {
    data.sessions[date] = { programKey: dayKeyForDate(date), exercises: {}, cardio: {}, updatedAt: Date.now() };
    persist();
  }
  return data.sessions[date] || null;
}

function programFor(date) {
  const session = sessionFor(date, false);
  return PROGRAM[(session && session.programKey) || dayKeyForDate(date)];
}

function programKeyFor(date) {
  const session = sessionFor(date, false);
  return (session && session.programKey) || dayKeyForDate(date);
}

function lastExerciseLog(name, beforeDate) {
  return Object.keys(data.sessions)
    .filter(function(date) { return date < beforeDate && data.sessions[date].exercises && data.sessions[date].exercises[name]; })
    .sort().reverse()
    .map(function(date) { return data.sessions[date].exercises[name]; })[0] || null;
}

function ensureExerciseLog(date, exercise) {
  const session = sessionFor(date, true);
  session.exercises = session.exercises || {};
  if (!session.exercises[exercise.name]) {
    const previous = lastExerciseLog(exercise.name, date);
    if (exercise.type === "timer") {
      session.exercises[exercise.name] = { elapsed: 0, runningSince: null, target: exercise.seconds };
    } else {
      const previousSets = previous && previous.sets ? previous.sets : [];
      session.exercises[exercise.name] = {
        sets: Array.from({ length: exercise.sets }, function(_, i) {
          return {
            weight: previousSets[i] ? previousSets[i].weight : "",
            reps: previousSets[i] ? previousSets[i].reps : "",
            done: false
          };
        })
      };
    }
    persist();
  }
  return session.exercises[exercise.name];
}

function escapeHTML(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function allMusclesForProgram(program) {
  const primary = new Set();
  const secondary = new Set();
  if (program.kind === "gym") {
    program.exercises.forEach(function(ex) {
      ex.primary.forEach(function(m) { primary.add(m); });
      ex.secondary.forEach(function(m) { if (!primary.has(m)) secondary.add(m); });
    });
  } else if (program.kind === "cardio") {
    program.primary.forEach(function(m) { primary.add(m); });
    program.secondary.forEach(function(m) { secondary.add(m); });
  }
  primary.forEach(function(m) { secondary.delete(m); });
  return { primary: Array.from(primary), secondary: Array.from(secondary) };
}

function bodyMap(options) {
  options = options || {};
  const primary = new Set(options.primary || []);
  const secondary = new Set(options.secondary || []);
  const heat = options.heat || {};
  function cls(region) {
    if (primary.has(region)) return "muscle primary";
    if (secondary.has(region)) return "muscle secondary";
    return "muscle";
  }
  function style(region) {
    return options.weekly ? ' style="--heat:' + (heat[region] || 0).toFixed(3) + '"' : "";
  }
  function muscle(region, shape) {
    return shape.replace("CLASS", cls(region)).replace("STYLE", style(region)).replace(/REGION/g, escapeHTML(region));
  }
  return [
    '<svg class="body-map' + (options.weekly ? ' weekly' : '') + '" viewBox="0 0 440 300" role="img" aria-label="Front and back muscle map">',
    '<text class="body-label" x="118" y="286">FRONT</text><text class="body-label" x="322" y="286">BACK</text>',
    '<g aria-label="Front body">',
    '<circle class="silhouette" cx="118" cy="33" r="22"/><path class="silhouette" d="M89 58 Q118 47 147 58 L161 122 148 179 145 273 120 273 118 184 116 273 91 273 88 179 75 122Z"/>',
    muscle("front delts", '<ellipse id="front-front-delts" data-region="REGION" class="CLASS" STYLE cx="88" cy="75" rx="14" ry="18"/><ellipse data-region="REGION" class="CLASS" STYLE cx="148" cy="75" rx="14" ry="18"/>'),
    muscle("side delts", '<path id="front-side-delts" data-region="REGION" class="CLASS" STYLE d="M75 70q-13 7-10 25l14 2 9-26z"/><path data-region="REGION" class="CLASS" STYLE d="M161 70q13 7 10 25l-14 2-9-26z"/>'),
    muscle("chest", '<path id="front-chest" data-region="REGION" class="CLASS" STYLE d="M92 72q26-15 25 15-3 22-28 13z"/><path data-region="REGION" class="CLASS" STYLE d="M144 72q-26-15-25 15 3 22 28 13z"/>'),
    muscle("biceps", '<path id="front-biceps" data-region="REGION" class="CLASS" STYLE d="M70 99q13-5 16 3l-8 39-13-3z"/><path data-region="REGION" class="CLASS" STYLE d="M166 99q-13-5-16 3l8 39 13-3z"/>'),
    muscle("forearms", '<path id="front-forearms" data-region="REGION" class="CLASS" STYLE d="M65 140l13 2-6 44-12-2z"/><path data-region="REGION" class="CLASS" STYLE d="M171 140l-13 2 6 44 12-2z"/>'),
    muscle("abs", '<path id="front-abs" data-region="REGION" class="CLASS" STYLE d="M101 106h16v61H98zM119 106h16l3 61h-19z"/>'),
    muscle("quads", '<path id="front-quads" data-region="REGION" class="CLASS" STYLE d="M93 172h23l-5 58-19-2z"/><path data-region="REGION" class="CLASS" STYLE d="M120 172h23l1 56-19 2z"/>'),
    muscle("calves", '<path id="front-calves" data-region="REGION" class="CLASS" STYLE d="M92 232l19 1-2 37H93z"/><path data-region="REGION" class="CLASS" STYLE d="M125 233l19-1-1 38h-16z"/>'),
    '</g>',
    '<g aria-label="Back body">',
    '<circle class="silhouette" cx="322" cy="33" r="22"/><path class="silhouette" d="M293 58 Q322 47 351 58 L365 122 352 179 349 273 324 273 322 184 320 273 295 273 292 179 279 122Z"/>',
    muscle("rear delts", '<ellipse id="back-rear-delts" data-region="REGION" class="CLASS" STYLE cx="292" cy="76" rx="14" ry="18"/><ellipse data-region="REGION" class="CLASS" STYLE cx="352" cy="76" rx="14" ry="18"/>'),
    muscle("traps", '<path id="back-traps" data-region="REGION" class="CLASS" STYLE d="M305 57h34l8 36-25-12-25 12z"/>'),
    muscle("upper back", '<path id="back-upper-back" data-region="REGION" class="CLASS" STYLE d="M296 82l25 3v33l-30-15zM348 82l-25 3v33l30-15z"/>'),
    muscle("lats", '<path id="back-lats" data-region="REGION" class="CLASS" STYLE d="M292 104l28 15-7 41-26-28zM352 104l-28 15 7 41 26-28z"/>'),
    muscle("triceps", '<path id="back-triceps" data-region="REGION" class="CLASS" STYLE d="M279 98q14-4 16 4l-9 38-12-3z"/><path data-region="REGION" class="CLASS" STYLE d="M365 98q-14-4-16 4l9 38 12-3z"/>'),
    muscle("forearms", '<path id="back-forearms" data-region="REGION" class="CLASS" STYLE d="M274 140l12 2-6 44-12-2z"/><path data-region="REGION" class="CLASS" STYLE d="M370 140l-12 2 6 44 12-2z"/>'),
    muscle("lower back", '<path id="back-lower-back" data-region="REGION" class="CLASS" STYLE d="M307 143h30l5 26h-40z"/>'),
    muscle("glutes", '<path id="back-glutes" data-region="REGION" class="CLASS" STYLE d="M299 169q22-8 22 17l-24 17zM345 169q-22-8-22 17l24 17z"/>'),
    muscle("hamstrings", '<path id="back-hamstrings" data-region="REGION" class="CLASS" STYLE d="M297 204l23-14-5 43-20-3zM347 204l-23-14 5 43 20-3z"/>'),
    muscle("calves", '<path id="back-calves" data-region="REGION" class="CLASS" STYLE d="M295 233l20 2-2 36h-17z"/><path data-region="REGION" class="CLASS" STYLE d="M349 233l-20 2 2 36h17z"/>'),
    '</g></svg>'
  ].join("");
}

function sessionSwitcher(date) {
  const active = programKeyFor(date);
  return '<div class="session-switcher" aria-label="Choose session">' + DISPLAY_DAYS.map(function(key) {
    return '<button class="day-pill ' + (key === active ? "active" : "") + '" data-session="' + key + '">' + DAY_SHORT[key] + '</button>';
  }).join("") + '</div>';
}

function bodyPanel(program, onlyExercise, weeklyHeat) {
  let muscles = allMusclesForProgram(program);
  let sub = "Whole session";
  if (onlyExercise) {
    muscles = { primary: onlyExercise.primary, secondary: onlyExercise.secondary };
    sub = onlyExercise.name;
  }
  if (weeklyHeat) sub = "Completed sets this week";
  return '<section class="body-panel"><div class="body-heading"><div><h2>Muscles worked</h2><p>' + escapeHTML(sub) + '</p></div>' +
    (weeklyHeat ? '' : '<div class="legend"><span>Primary</span><span>Secondary</span></div>') +
    '</div>' + bodyMap(weeklyHeat ? { weekly: true, heat: weeklyHeat } : muscles) + '</section>';
}

function lastLine(exercise, date) {
  const last = lastExerciseLog(exercise.name, date);
  if (!last) return exercise.type === "timer" ? "Target: " + formatClock(exercise.seconds) : "No previous session";
  if (exercise.type === "timer") return "Last: " + formatClock(totalElapsed(last));
  const sets = (last.sets || []).filter(function(set) { return set.weight !== "" || set.reps !== ""; });
  if (!sets.length) return "No previous session";
  const weights = sets.map(function(set) { return Number(set.weight || 0); });
  const displayWeight = Math.max.apply(Math, weights);
  const reps = sets.map(function(set) { return set.reps || "—"; }).join(", ");
  return "Last: " + displayWeight + " × " + reps;
}

function shouldAddWeight(exercise, date) {
  if (exercise.type === "timer") return false;
  const last = lastExerciseLog(exercise.name, date);
  if (!last || !last.sets || last.sets.length < exercise.sets) return false;
  return last.sets.slice(0, exercise.sets).every(function(set) {
    return set.done && Number(set.reps) >= exercise.reps[1];
  });
}

function exerciseCard(exercise, index, date) {
  const log = ensureExerciseLog(date, exercise);
  const isExpanded = expandedExercise === exercise.name;
  const isSelected = selectedExercise === exercise.name;
  let done = 0;
  let total = exercise.type === "timer" ? 1 : exercise.sets;
  if (exercise.type === "timer") done = totalElapsed(log) > 0 && !log.runningSince ? 1 : 0;
  else done = log.sets.filter(function(set) { return set.done; }).length;
  const hint = shouldAddWeight(exercise, date) ? '<span class="add-weight">Add weight</span>' : "";
  let inner = "";
  if (exercise.type === "timer") {
    const elapsed = totalElapsed(log);
    inner = '<div class="timer-body"><div><div class="timer-display" data-live-timer="' + escapeHTML(exercise.name) + '">' + formatClock(elapsed) + '</div><div class="last-line">Goal ' + formatClock(exercise.seconds) + '</div></div>' +
      '<button class="timer-btn ' + (log.runningSince ? "running" : "") + '" data-timer-toggle="' + escapeHTML(exercise.name) + '">' + (log.runningSince ? "Stop" : elapsed ? "Resume" : "Start") + '</button></div>';
  } else {
    inner = '<div class="set-head"><span>Set</span><span>kg</span><span>Reps</span><span>Done</span></div>' +
      log.sets.map(function(set, setIndex) {
        return '<div class="set-row"><span class="set-number">' + (setIndex + 1) + '</span>' +
          '<input inputmode="decimal" type="number" min="0" step="0.5" aria-label="' + escapeHTML(exercise.name) + ' set ' + (setIndex + 1) + ' weight in kilograms" value="' + escapeHTML(set.weight) + '" data-field="weight" data-exercise="' + escapeHTML(exercise.name) + '" data-set="' + setIndex + '">' +
          '<input inputmode="numeric" type="number" min="0" step="1" aria-label="' + escapeHTML(exercise.name) + ' set ' + (setIndex + 1) + ' reps" value="' + escapeHTML(set.reps) + '" data-field="reps" data-exercise="' + escapeHTML(exercise.name) + '" data-set="' + setIndex + '">' +
          '<button class="done-btn ' + (set.done ? "done" : "") + '" data-done="' + escapeHTML(exercise.name) + '" data-set="' + setIndex + '" aria-label="Mark set ' + (setIndex + 1) + ' done" aria-pressed="' + set.done + '">✓</button></div>';
      }).join("");
  }
  return '<article class="exercise-card ' + (isExpanded ? "expanded " : "") + (isSelected ? "selected" : "") + '" data-card="' + escapeHTML(exercise.name) + '">' +
    '<div class="exercise-summary" data-expand="' + escapeHTML(exercise.name) + '"><span class="exercise-order">' + String(index + 1).padStart(2, "0") + '</span>' +
    '<div class="exercise-title"><h3><button data-chart="' + escapeHTML(exercise.name) + '">' + escapeHTML(exercise.name) + '</button></h3><p class="last-line">' + escapeHTML(lastLine(exercise, date)) + hint + '</p></div>' +
    '<span class="set-progress">' + done + '/' + total + '</span><span class="chevron">⌄</span></div>' +
    '<div class="exercise-body">' + inner + '</div></article>';
}

function cardioMarkup(program, date) {
  const session = sessionFor(date, true);
  session.cardio = session.cardio || {};
  const c = session.cardio;
  if (program.activity === "Cycling" && (c.distance === undefined || c.distance === "")) {
    c.distance = 10;
    persist();
  }
  return '<section class="cardio-card"><h2>' + program.activity + '</h2><p>' + (c.saved ? '<span class="saved-note">Saved for this day</span>' : "Quick log") + '</p>' +
    '<div class="cardio-form">' +
    '<div class="field"><label>Distance (km)</label><input id="cardioDistance" type="number" min="0" step="0.1" inputmode="decimal" value="' + escapeHTML(c.distance || "") + '"></div>' +
    '<div class="field"><label>Duration (mm:ss)</label><input id="cardioDuration" inputmode="numeric" placeholder="45:00" value="' + escapeHTML(c.duration || "") + '"></div>' +
    '<div class="field full"><label>Effort 1–10 · optional</label><input id="cardioEffort" type="number" min="1" max="10" inputmode="numeric" value="' + escapeHTML(c.effort || "") + '"></div>' +
    '<div class="metric-result"><span>' + (program.activity === "Running" ? "Average pace" : "Average speed") + '</span><strong id="cardioMetric">' + cardioMetric(program, c) + '</strong></div>' +
    '<button class="save-cardio" id="saveCardio">Save ' + program.activity.toLowerCase() + '</button></div></section>';
}

function cardioMetric(program, c) {
  const km = Number(c.distance);
  const seconds = parseDuration(c.duration);
  if (!km || !seconds) return "—";
  if (program.activity === "Running") {
    const pace = seconds / km;
    return Math.floor(pace / 60) + ":" + String(Math.round(pace % 60)).padStart(2, "0") + " /km";
  }
  return (km / (seconds / 3600)).toFixed(1) + " km/h";
}

function parseDuration(value) {
  if (!value) return 0;
  const parts = String(value).split(":").map(Number);
  if (parts.some(isNaN)) return 0;
  return parts.length === 2 ? parts[0] * 60 + parts[1] : Number(value) * 60;
}

function formatClock(seconds) {
  seconds = Math.max(0, Math.floor(Number(seconds) || 0));
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, "0");
}

function totalElapsed(log) {
  return Math.floor((log.elapsed || 0) + (log.runningSince ? (Date.now() - log.runningSince) / 1000 : 0));
}

function renderToday() {
  const program = programFor(activeDate);
  const key = programKeyFor(activeDate);
  const selected = program.kind === "gym" && selectedExercise ? program.exercises.find(function(ex) { return ex.name === selectedExercise; }) : null;
  els.dateLabel.textContent = activeDate === todayISO() ? formatDate(activeDate).toUpperCase() : formatDate(activeDate).toUpperCase();
  let html = sessionSwitcher(activeDate);
  if (program.kind === "rest") {
    html += '<section class="rest-day"><div><div class="rest-orbit">☾</div><h2>Rest day</h2><p>Back at it tomorrow.</p></div></section>';
  } else {
    html += bodyPanel(program, selected);
    html += '<div class="section-head"><h2>' + escapeHTML(program.label) + '</h2><p>' + escapeHTML(DAY_SHORT[key]) + '</p></div>';
    if (program.kind === "cardio") html += cardioMarkup(program, activeDate);
    else html += '<div class="exercise-list">' + program.exercises.map(function(ex, i) { return exerciseCard(ex, i, activeDate); }).join("") + '</div>';
  }
  els.today.innerHTML = html;
  bindWorkoutEvents(els.today, activeDate);
}

function bindWorkoutEvents(container, date) {
  container.querySelectorAll("[data-session]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const session = sessionFor(date, true);
      session.programKey = btn.dataset.session;
      session.updatedAt = Date.now();
      selectedExercise = null;
      expandedExercise = null;
      persist();
      historyEditDate ? renderHistoryEditor(date) : renderToday();
    });
  });
  container.querySelectorAll("[data-expand]").forEach(function(summary) {
    summary.addEventListener("click", function(event) {
      if (event.target.closest("[data-chart]")) return;
      const name = summary.dataset.expand;
      expandedExercise = expandedExercise === name ? null : name;
      selectedExercise = selectedExercise === name ? null : name;
      historyEditDate ? renderHistoryEditor(date) : renderToday();
    });
  });
  container.querySelectorAll("[data-chart]").forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      event.stopPropagation();
      showExerciseChart(btn.dataset.chart);
    });
  });
  container.querySelectorAll("input[data-field]").forEach(function(input) {
    input.addEventListener("input", function() {
      const session = sessionFor(date, true);
      session.exercises[input.dataset.exercise].sets[Number(input.dataset.set)][input.dataset.field] = input.value;
      session.updatedAt = Date.now();
      persist();
    });
  });
  container.querySelectorAll("[data-done]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const session = sessionFor(date, true);
      const set = session.exercises[btn.dataset.done].sets[Number(btn.dataset.set)];
      set.done = !set.done;
      session.updatedAt = Date.now();
      persist();
      if (set.done) startRest(btn.dataset.done);
      historyEditDate ? renderHistoryEditor(date) : renderToday();
    });
  });
  container.querySelectorAll("[data-timer-toggle]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      const name = btn.dataset.timerToggle;
      const session = sessionFor(date, true);
      const log = session.exercises[name];
      if (log.runningSince) {
        log.elapsed = totalElapsed(log);
        log.runningSince = null;
      } else {
        log.runningSince = Date.now();
      }
      session.updatedAt = Date.now();
      persist();
      historyEditDate ? renderHistoryEditor(date) : renderToday();
    });
  });
  const distance = container.querySelector("#cardioDistance");
  if (distance) {
    ["cardioDistance", "cardioDuration", "cardioEffort"].forEach(function(id) {
      container.querySelector("#" + id).addEventListener("input", function(event) {
        const session = sessionFor(date, true);
        const field = id.replace("cardio", "").toLowerCase();
        session.cardio[field] = event.target.value;
        session.cardio.saved = false;
        session.updatedAt = Date.now();
        persist();
        container.querySelector("#cardioMetric").textContent = cardioMetric(programFor(date), session.cardio);
      });
    });
    container.querySelector("#saveCardio").addEventListener("click", function() {
      const session = sessionFor(date, true);
      if (!Number(session.cardio.distance) || !parseDuration(session.cardio.duration)) {
        showToast("Add distance and duration");
        return;
      }
      session.cardio.saved = true;
      session.updatedAt = Date.now();
      persist();
      showToast("Cardio saved");
      historyEditDate ? renderHistoryEditor(date) : renderToday();
    });
  }
}

function startRest(exerciseName) {
  const longRest = /deadlift|squat|press|row/i.test(exerciseName);
  data.restEnd = Date.now() + (longRest ? 180 : 90) * 1000;
  data.restFor = exerciseName;
  persist();
  updateRestTimer();
}

function updateRestTimer() {
  if (!data.restEnd) {
    els.rest.hidden = true;
    return;
  }
  const remaining = Math.max(0, Math.ceil((data.restEnd - Date.now()) / 1000));
  if (!remaining) {
    data.restEnd = null;
    data.restFor = "";
    persist();
    els.rest.hidden = true;
    showToast("Rest over");
    return;
  }
  els.rest.hidden = false;
  els.rest.innerHTML = '<div class="rest-inner"><strong>' + formatClock(remaining) + '</strong><div class="rest-copy"><b>Rest timer</b><span>' + escapeHTML(data.restFor) + '</span></div><button class="dismiss-rest" aria-label="Dismiss rest timer">×</button></div>';
  els.rest.querySelector("button").addEventListener("click", function() {
    data.restEnd = null;
    data.restFor = "";
    persist();
    updateRestTimer();
  });
}

function startOfWeek(dateISO) {
  const d = dateFromISO(dateISO);
  const day = d.getDay();
  d.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  return d;
}

function addDays(date, count) {
  const d = new Date(date);
  d.setDate(d.getDate() + count);
  return d;
}

function isSessionDone(date) {
  const session = sessionFor(date, false);
  const program = programFor(date);
  if (program.kind === "rest") return true;
  if (!session) return false;
  if (program.kind === "cardio") return !!session.cardio.saved;
  return program.exercises.every(function(ex) {
    const log = session.exercises && session.exercises[ex.name];
    if (!log) return false;
    if (ex.type === "timer") return !log.runningSince && totalElapsed(log) > 0;
    return log.sets && log.sets.length >= ex.sets && log.sets.slice(0, ex.sets).every(function(set) { return set.done; });
  });
}

function weeklyHeat(start) {
  const counts = {};
  REGIONS.forEach(function(r) { counts[r] = 0; });
  for (let i = 0; i < 7; i++) {
    const date = localISO(addDays(start, i));
    const program = programFor(date);
    const session = sessionFor(date, false);
    if (!session) continue;
    if (program.kind === "gym") {
      program.exercises.forEach(function(ex) {
        const log = session.exercises && session.exercises[ex.name];
        if (!log) return;
        const hits = ex.type === "timer" ? (totalElapsed(log) > 0 ? 1 : 0) : (log.sets || []).filter(function(s) { return s.done; }).length;
        ex.primary.forEach(function(m) { counts[m] += hits; });
        ex.secondary.forEach(function(m) { counts[m] += hits * 0.55; });
      });
    } else if (program.kind === "cardio" && session.cardio && session.cardio.saved) {
      program.primary.forEach(function(m) { counts[m] += 3; });
      program.secondary.forEach(function(m) { counts[m] += 1.5; });
    }
  }
  const max = Math.max.apply(Math, Object.values(counts).concat([1]));
  const normalized = {};
  REGIONS.forEach(function(r) { normalized[r] = counts[r] ? 0.22 + 0.78 * (counts[r] / max) : 0; });
  return normalized;
}

function renderWeek() {
  const start = startOfWeek(todayISO());
  let cycled = 0;
  let run = 0;
  const strip = DISPLAY_DAYS.map(function(_, i) {
    const date = localISO(addDays(start, i));
    const done = isSessionDone(date);
    const isToday = date === todayISO();
    const program = programFor(date);
    const session = sessionFor(date, false);
    if (session && session.cardio && session.cardio.saved) {
      if (program.activity === "Cycling") cycled += Number(session.cardio.distance) || 0;
      if (program.activity === "Running") run += Number(session.cardio.distance) || 0;
    }
    return '<div class="week-day ' + (done ? "done " : "") + (isToday ? "today" : "") + '"><span>' + DAY_SHORT[programKeyFor(date)] + '</span><b>' + (done ? "✓" : dateFromISO(date).getDate()) + '</b></div>';
  }).join("");
  els.dateLabel.textContent = "THIS WEEK";
  els.week.innerHTML = '<div class="week-strip">' + strip + '</div>' +
    bodyPanel(PROGRAM.sun, null, weeklyHeat(start)) +
    '<div class="week-totals"><div class="total-card"><span>CYCLING</span><strong>' + trimNumber(cycled) + ' km</strong></div><div class="total-card"><span>RUNNING</span><strong>' + trimNumber(run) + ' km</strong></div></div>';
}

function trimNumber(n) {
  return Number(n.toFixed(2)).toString();
}

function historyDates() {
  const dates = new Set(Object.keys(data.sessions));
  const today = dateFromISO(todayISO());
  for (let i = 1; i <= 28; i++) dates.add(localISO(addDays(today, -i)));
  return Array.from(dates).filter(function(d) { return d <= todayISO(); }).sort().reverse();
}

function historySummary(date) {
  const program = programFor(date);
  const session = sessionFor(date, false);
  if (!session) return "Not logged";
  if (program.kind === "cardio") {
    const c = session.cardio || {};
    if (!c.distance && !c.duration) return "Not logged";
    return (c.distance || 0) + " km · " + (c.duration || "—") + " · " + cardioMetric(program, c);
  }
  if (program.kind === "rest") return "Rest";
  let done = 0;
  let total = 0;
  program.exercises.forEach(function(ex) {
    total += ex.type === "timer" ? 1 : ex.sets;
    const log = session.exercises && session.exercises[ex.name];
    if (!log) return;
    done += ex.type === "timer" ? (totalElapsed(log) > 0 ? 1 : 0) : (log.sets || []).filter(function(s) { return s.done; }).length;
  });
  return done + " of " + total + " sets";
}

function renderHistory() {
  if (historyEditDate) {
    renderHistoryEditor(historyEditDate);
    return;
  }
  els.dateLabel.textContent = "TRAINING LOG";
  const rows = historyDates().map(function(date) {
    const d = dateFromISO(date);
    const program = programFor(date);
    const done = isSessionDone(date);
    return '<button class="history-row" data-history-date="' + date + '"><span class="history-date"><b>' + d.getDate() + '</b><span>' + d.toLocaleDateString(undefined, { month: "short" }).toUpperCase() + '</span></span>' +
      '<span class="history-main"><strong>' + escapeHTML(program.label) + '</strong><span>' + escapeHTML(historySummary(date)) + '</span></span>' +
      '<span class="status-chip ' + (done ? "done" : "") + '">' + (done ? "Done" : program.kind === "rest" ? "Rest" : "Edit") + '</span></button>';
  }).join("");
  els.history.innerHTML = '<div class="history-actions"><button class="secondary-btn" id="exportBtn">Export JSON</button><button class="secondary-btn" id="importBtn">Import JSON</button></div><div class="history-list">' + rows + '</div>';
  els.history.querySelectorAll("[data-history-date]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      historyEditDate = btn.dataset.historyDate;
      selectedExercise = null;
      expandedExercise = null;
      renderHistory();
    });
  });
  document.getElementById("exportBtn").addEventListener("click", exportData);
  document.getElementById("importBtn").addEventListener("click", function() { els.importInput.click(); });
}

function renderHistoryEditor(date) {
  const program = programFor(date);
  const selected = program.kind === "gym" && selectedExercise ? program.exercises.find(function(ex) { return ex.name === selectedExercise; }) : null;
  let content = '<div class="history-editor-head"><button class="back-btn" id="historyBack" aria-label="Back to history">‹</button><div><h2>' + escapeHTML(formatDate(date)) + '</h2><p>Edit or backfill this session</p></div></div>' + sessionSwitcher(date);
  if (program.kind === "rest") content += '<section class="rest-day"><div><div class="rest-orbit">☾</div><h2>Rest day</h2></div></section>';
  else {
    content += bodyPanel(program, selected);
    content += '<div class="section-head"><h2>' + escapeHTML(program.label) + '</h2><p>' + date + '</p></div>';
    content += program.kind === "cardio" ? cardioMarkup(program, date) : '<div class="exercise-list">' + program.exercises.map(function(ex, i) { return exerciseCard(ex, i, date); }).join("") + '</div>';
  }
  els.history.innerHTML = content;
  document.getElementById("historyBack").addEventListener("click", function() {
    historyEditDate = null;
    selectedExercise = null;
    expandedExercise = null;
    renderHistory();
  });
  bindWorkoutEvents(els.history, date);
}

function exportData() {
  const blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), sessions: data.sessions }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "rep-road-backup-" + todayISO() + ".json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup exported");
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = function() {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.sessions || typeof parsed.sessions !== "object") throw new Error("Invalid backup");
      data.sessions = parsed.sessions;
      persist();
      historyEditDate = null;
      renderHistory();
      showToast("Backup imported");
    } catch (_) {
      showToast("Could not import that file");
    }
  };
  reader.readAsText(file);
}

function chartPoints(name) {
  const points = [];
  Object.keys(data.sessions).sort().forEach(function(date) {
    const log = data.sessions[date].exercises && data.sessions[date].exercises[name];
    if (!log) return;
    if (log.sets) {
      const completed = log.sets.filter(function(s) { return s.done && s.weight !== ""; });
      if (completed.length) points.push({ date: date, value: Math.max.apply(Math, completed.map(function(s) { return Number(s.weight); })), unit: "kg" });
    } else if (totalElapsed(log) > 0) {
      points.push({ date: date, value: totalElapsed(log), unit: "sec" });
    }
  });
  return points;
}

function showExerciseChart(name) {
  const points = chartPoints(name);
  let chart = '<div class="empty-state">Complete a set to start this line.</div>';
  if (points.length) {
    const width = 480, height = 210, pad = 34;
    const values = points.map(function(p) { return p.value; });
    const min = Math.min.apply(Math, values);
    const max = Math.max.apply(Math, values);
    const range = max - min || 1;
    const coords = points.map(function(p, i) {
      const x = pad + (points.length === 1 ? (width - pad * 2) / 2 : i * (width - pad * 2) / (points.length - 1));
      const y = height - pad - ((p.value - min) / range) * (height - pad * 2);
      return { x: x, y: y, p: p };
    });
    chart = '<svg class="chart-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="' + escapeHTML(name) + ' progress line">' +
      '<line class="chart-grid" x1="' + pad + '" y1="' + (height - pad) + '" x2="' + (width - pad) + '" y2="' + (height - pad) + '"/>' +
      '<polyline class="chart-line" points="' + coords.map(function(c) { return c.x + "," + c.y; }).join(" ") + '"/>' +
      coords.map(function(c, i) {
        const label = i === 0 || i === coords.length - 1 ? '<text class="chart-text" x="' + c.x + '" y="' + (height - 8) + '" text-anchor="middle">' + c.p.date.slice(5) + '</text>' : "";
        return '<circle class="chart-dot" cx="' + c.x + '" cy="' + c.y + '" r="5"/><text class="chart-text" x="' + c.x + '" y="' + (c.y - 10) + '" text-anchor="middle">' + c.p.value + '</text>' + label;
      }).join("") + '</svg>';
  }
  els.chartContent.innerHTML = '<h2>' + escapeHTML(name) + '</h2><p>Top-set ' + (points[0] && points[0].unit === "sec" ? "time" : "weight") + ' over time</p>' + chart;
  els.chart.showModal();
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove("show"); }, 1600);
}

function navigate(view) {
  currentView = view;
  if (view !== "history") historyEditDate = null;
  document.querySelectorAll(".view").forEach(function(el) { el.classList.remove("active"); });
  document.querySelectorAll(".nav-item").forEach(function(el) {
    const active = el.dataset.view === view;
    el.classList.toggle("active", active);
    if (active) el.setAttribute("aria-current", "page"); else el.removeAttribute("aria-current");
  });
  els[view].classList.add("active");
  if (view === "today") renderToday();
  if (view === "week") renderWeek();
  if (view === "history") renderHistory();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function exerciseByName(name) {
  for (const key of Object.keys(PROGRAM)) {
    const program = PROGRAM[key];
    if (program.exercises) {
      const found = program.exercises.find(function(ex) { return ex.name === name; });
      if (found) return found;
    }
  }
  return null;
}

function registerWebMCP() {
  const context = document.modelContext;
  if (!context || !context.registerTool) return;
  const tools = [
    {
      name: "log_strength_set",
      title: "Log strength set",
      description: "Save one strength set for a date and mark it done.",
      inputSchema: {
        type: "object",
        properties: {
          date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
          exercise: { type: "string" },
          set: { type: "integer", minimum: 1 },
          weightKg: { type: "number", minimum: 0 },
          reps: { type: "integer", minimum: 0 }
        },
        required: ["date", "exercise", "set", "weightKg", "reps"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: function(input) {
        const ex = exerciseByName(input.exercise);
        if (!ex || ex.type === "timer" || input.set > ex.sets) throw new Error("Unknown exercise or set");
        const log = ensureExerciseLog(input.date, ex);
        log.sets[input.set - 1] = { weight: String(input.weightKg), reps: String(input.reps), done: true };
        persist();
        if (currentView === "today" && input.date === activeDate) renderToday();
        return { saved: true, date: input.date, exercise: input.exercise, set: input.set };
      }
    },
    {
      name: "save_cardio_session",
      title: "Save cardio session",
      description: "Save a cycling or running session for a date.",
      inputSchema: {
        type: "object",
        properties: {
          date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
          activity: { type: "string", enum: ["Cycling", "Running"] },
          distanceKm: { type: "number", exclusiveMinimum: 0 },
          duration: { type: "string", pattern: "^\\d+:\\d{2}$" },
          effort: { type: "integer", minimum: 1, maximum: 10 }
        },
        required: ["date", "activity", "distanceKm", "duration"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: function(input) {
        if (!parseDuration(input.duration)) throw new Error("Invalid duration");
        const session = sessionFor(input.date, true);
        session.programKey = input.activity === "Cycling" ? "mon" : "thu";
        session.cardio = { distance: String(input.distanceKm), duration: input.duration, effort: input.effort ? String(input.effort) : "", saved: true };
        persist();
        if (currentView === "today" && input.date === activeDate) renderToday();
        return { saved: true, date: input.date, activity: input.activity };
      }
    }
  ];
  tools.forEach(function(tool) {
    try { Promise.resolve(context.registerTool(tool)).catch(function() {}); } catch (_) {}
  });
}

document.querySelectorAll(".nav-item").forEach(function(btn) {
  btn.addEventListener("click", function() { navigate(btn.dataset.view); });
});
els.chart.querySelector(".dialog-close").addEventListener("click", function() { els.chart.close(); });
els.chart.addEventListener("click", function(event) { if (event.target === els.chart) els.chart.close(); });
els.importInput.addEventListener("change", function() {
  if (els.importInput.files[0]) importData(els.importInput.files[0]);
  els.importInput.value = "";
});
window.addEventListener("beforeinstallprompt", function(event) {
  event.preventDefault();
  installPrompt = event;
  els.install.hidden = false;
});
els.install.addEventListener("click", function() {
  if (!installPrompt) return;
  installPrompt.prompt();
  installPrompt.userChoice.finally(function() {
    installPrompt = null;
    els.install.hidden = true;
  });
});
window.addEventListener("appinstalled", function() { els.install.hidden = true; });

if ("serviceWorker" in navigator) window.addEventListener("load", function() { navigator.serviceWorker.register("./sw.js").catch(function() {}); });

setInterval(function() {
  document.querySelectorAll("[data-live-timer]").forEach(function(node) {
    const date = historyEditDate || activeDate;
    const session = sessionFor(date, false);
    const log = session && session.exercises && session.exercises[node.dataset.liveTimer];
    if (log) node.textContent = formatClock(totalElapsed(log));
  });
  updateRestTimer();
}, 1000);

renderToday();
updateRestTimer();
registerWebMCP();

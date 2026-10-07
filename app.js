(() => {
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  /* ---------------- characters (generated avatars, no external images) ---------------- */
  const SHIRT = "M6 64Q8 49 32 49Q56 49 58 64Z";
  const CHARACTERS = {
    George: {
      color: "#7fb2ff", role: "Ranch Hands", status: "Watching over Lennie",
      svg: `<rect width="64" height="64" fill="#4f7fb0"/><path d="${SHIRT}" fill="#2f4d73"/>
        <rect x="27" y="44" width="10" height="7" fill="#d9a67f"/><ellipse cx="32" cy="34" rx="14" ry="16" fill="#e8b894"/>
        <path d="M16 29Q17 11 32 11Q47 11 48 29Q40 24 32 24Q24 24 16 29Z" fill="#6b4f2a"/><rect x="14" y="27" width="36" height="4" rx="2" fill="#4d3920"/>
        <circle cx="25" cy="36" r="1.9" fill="#222"/><circle cx="39" cy="36" r="1.9" fill="#222"/>
        <path d="M22 32.5H28M36 32.5H42" stroke="#4a3520" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M27 45H37" stroke="#7a4b3a" stroke-width="2" stroke-linecap="round"/>`
    },
    Lennie: {
      color: "#8fd694", role: "Ranch Hands", status: "Thinking about the rabbits",
      svg: `<rect width="64" height="64" fill="#6fa76f"/><path d="${SHIRT}" fill="#5d7f96"/>
        <rect x="26" y="45" width="12" height="7" fill="#e0b08c"/><ellipse cx="32" cy="34" rx="17" ry="18" fill="#f2c7a3"/>
        <path d="M14 31Q11 10 32 10Q53 10 50 31Q45 20 32 21Q19 20 14 31Z" fill="#8a6a3b"/>
        <circle cx="19" cy="14" r="4" fill="#8a6a3b"/><circle cx="45" cy="14" r="4" fill="#8a6a3b"/>
        <circle cx="24.500" cy="34" r="3.300" fill="#fff"/><circle cx="39.500" cy="34" r="3.300" fill="#fff"/>
        <circle cx="25" cy="34.500" r="1.800" fill="#222"/><circle cx="39" cy="34.500" r="1.800" fill="#222"/>
        <circle cx="18" cy="42" r="3.500" fill="#f0968a" opacity=".5"/><circle cx="46" cy="42" r="3.500" fill="#f0968a" opacity=".5"/>
        <path d="M24 42Q32 55 40 42Z" fill="#8f3b3b"/>`
    },
    Candy: {
      color: "#d9b878", role: "Ranch Hands", status: "Old dog, old man",
      svg: `<rect width="64" height="64" fill="#a8854f"/><path d="${SHIRT}" fill="#6f5f4a"/>
        <rect x="27" y="44" width="10" height="7" fill="#c99f7a"/>
        <ellipse cx="17.500" cy="33" rx="4" ry="8" fill="#d0d0d0"/><ellipse cx="46.500" cy="33" rx="4" ry="8" fill="#d0d0d0"/>
        <ellipse cx="32" cy="33" rx="14" ry="16" fill="#d9ae88"/>
        <path d="M22 16Q32 11 42 16" stroke="#cfcfcf" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M24 23Q32 20 40 23M25 26Q32 24 39 26" stroke="#b68a66" stroke-width="1.200" fill="none"/>
        <path d="M21 31Q25 29 28 31M36 31Q39 29 43 31" stroke="#e9e9e9" stroke-width="2.200" fill="none" stroke-linecap="round"/>
        <circle cx="25" cy="35" r="1.800" fill="#222"/><circle cx="39" cy="35" r="1.800" fill="#222"/>
        <path d="M23 43Q32 37 41 43Q36 48 32 45Q28 48 23 43Z" fill="#ececec"/>`
    },
    Curley: {
      color: "#ff8a7a", role: "Management", status: "Looking for his wife",
      svg: `<rect width="64" height="64" fill="#a93226"/><path d="${SHIRT}" fill="#e7e0d2"/><path d="M26 49L32 64L38 49Z" fill="#3b2a24"/>
        <rect x="27" y="44" width="10" height="7" fill="#dfae8a"/><ellipse cx="32" cy="34" rx="14" ry="16" fill="#f0c6a2"/>
        <path d="M17 29Q16 11 32 11Q48 11 47 29Q41 18 32 19Q23 18 17 29Z" fill="#e6c35a"/>
        <path d="M20 29L29 33M44 29L35 33" stroke="#5a4318" stroke-width="2.600" stroke-linecap="round"/>
        <circle cx="25" cy="36" r="1.900" fill="#222"/><circle cx="39" cy="36" r="1.900" fill="#222"/>
        <path d="M26 47Q32 41 38 47" stroke="#7a3b30" stroke-width="2.200" fill="none" stroke-linecap="round"/>`
    },
    Slim: {
      color: "#b8a2ff", role: "Ranch Hands", status: "Fixing a wagon",
      svg: `<rect width="64" height="64" fill="#4a4e69"/><path d="${SHIRT}" fill="#22223b"/>
        <rect x="27" y="44" width="10" height="7" fill="#c99670"/><ellipse cx="32" cy="35" rx="14" ry="16" fill="#d8a57e"/>
        <path d="M22 37Q25 34 28 37M36 37Q39 34 42 37" stroke="#2a2018" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M27 45Q32 48 37 45" stroke="#7a4b3a" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M19 26Q19 7 32 7Q45 7 45 26Z" fill="#1c1c26"/><rect x="19" y="21" width="26" height="3" fill="#6b6b78"/>
        <ellipse cx="32" cy="26" rx="24" ry="5" fill="#14141c"/>`
    },
    Boss: {
      color: "#f0c75e", role: "Management", status: "Counting payroll",
      svg: `<rect width="64" height="64" fill="#6f5233"/><path d="${SHIRT}" fill="#2b2423"/><path d="M23 49L32 62L41 49Z" fill="#c9a227"/>
        <circle cx="32" cy="58" r="2.500" fill="#fff3b0"/>
        <rect x="27" y="44" width="10" height="7" fill="#d19f7a"/><ellipse cx="32" cy="35" rx="14" ry="16" fill="#e3b08a"/>
        <path d="M19 26Q18 7 32 7Q46 7 45 26Z" fill="#3a2f2a"/><ellipse cx="32" cy="26" rx="19" ry="4.500" fill="#2a211e"/>
        <path d="M21 34L29 35M43 34L35 35" stroke="#3a2a1c" stroke-width="2.800" stroke-linecap="round"/>
        <circle cx="25" cy="37" r="1.700" fill="#222"/><circle cx="39" cy="37" r="1.700" fill="#222"/>
        <path d="M22 45Q32 38 42 45Q36 49 32 46Q28 49 22 45Z" fill="#3a2a1c"/>`
    }
  };
  const ROLE_ORDER = ["Management", "Ranch Hands"];

  const ICON = {
    hash: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><path d="M9 3L7 21M17 3l-2 18M4 9h17M3 15h17"/></svg>`,
    lock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>`,
    join: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h14M13 6l6 6-6 6"/></svg>`,
    headerIcons: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 004 0"/></svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2 5 5 .5-4 3.500 1.500 5L12 14.500 7.500 17 9 12 5 8.500 10 8z"/></svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6M16 4a4 4 0 010 8M22 21c0-3-2-5-4-5.500"/></svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>`
  };

  const TOOLS = '<div class="tools"><button data-act="edit">Edit</button><button data-act="add">+ Below</button><button data-act="del" class="d">Delete</button></div>';

  // shown name: the username from conversation.js (USERNAMES) if there is one
  const uname = n => (typeof USERNAMES !== "undefined" && USERNAMES[n]) || n;
  const avatar = (name, cls = "", off = false, dot = false) =>
    `<div class="avatar ${cls} ${off ? "off" : ""}"><div class="face"><svg viewBox="0 0 64 64">${CHARACTERS[name].svg}</svg></div>${dot ? '<span class="dot"></span>' : ""}</div>`;

  /* ---------------- state ---------------- */
  const chById = id => CHANNELS.find(c => c.id === id) || CHANNELS[0];
  let current = CHANNELS[0].id;
  let shown = [];          // messages currently visible
  let cursor = 0;          // next SCRIPT index
  let uid = 0, busy = false, run = 0, auto = false, typing = null, formDate = null;
  const unread = new Set();

  const fx = {
    typing: $("#xTyping"), anim: $("#xAnim"), toast: $("#xToast"),
    follow: $("#xFollow"), scroll: $("#xScroll"),
    typingMs: $("#xTypingMs"), autoSec: $("#xAutoSec"), size: $("#xSize")
  };
  const f = { char: $("#fChar"), chan: $("#fChan"), type: $("#fType"), time: $("#fTime"), text: $("#fText") };

  /* ---------------- live room: viewers follow the presenter (relay: ntfy.sh) ---------------- */
  // presenter: page?room=NAME   viewers: page?room=NAME&watch
  const roomQ = new URLSearchParams(location.search);
  const ROOM = (roomQ.get("room") || "").replace(/[^A-Za-z0-9_-]/g, "").slice(0, 40);
  const WATCH = !!ROOM && roomQ.has("watch");
  const HOST = !!ROOM && !WATCH;
  const ROOM_URL = "https://ntfy.sh/ranchhands-" + ROOM;
  let lastSent = "", outbox = null, sending = false;

  function bcast() {
    if (!HOST) return;
    const m = JSON.stringify({ n: cursor, ch: current, z: fx.size.value, ty: typing ? { c: typing.character, ch: typing.channel } : null });
    if (m === lastSent) return;
    lastSent = outbox = m;
    flushOut();
  }
  async function flushOut() {
    if (sending) return;
    sending = true;
    while (outbox) {   // only the newest state matters; retry if the relay is busy
      const m = outbox; outbox = null;
      try { const r = await fetch(ROOM_URL, { method: "POST", body: m }); if (!r.ok) throw new Error(r.status); }
      catch (err) { if (!outbox) outbox = m; await sleep(5000); }
    }
    sending = false;
  }

  let lastApplied = "";
  function applyRoom(d) {
    const key = JSON.stringify(d);
    if (key === lastApplied) return;
    lastApplied = key;
    const n = Math.max(0, Math.min(+d.n || 0, SCRIPT.length)), prev = cursor;
    shown = SCRIPT.slice(0, n).map((m, i) => ({ ...m, uid: i + 1, fromScript: true }));
    cursor = n; uid = n;
    if (CHANNELS.some(c => c.id === d.ch)) current = d.ch;
    unread.clear();
    typing = d.ty && CHANNELS.some(c => c.id === d.ty.ch) && CHARACTERS[d.ty.c] ? { character: d.ty.c, channel: d.ty.ch } : null;
    if (d.z && +d.z >= 12 && +d.z <= 40) { fx.size.value = d.z; syncLabels(); }
    const newest = shown[n - 1];
    const anim = prev > 0 && n === prev + 1 && newest && fx.anim.checked ? newest.uid : null;
    renderChannels(); renderHeader(); renderMessages(anim, !anim); renderMembers(); renderTyping(); updateControls();
    if (anim && newest.type === "join" && fx.toast.checked) toast(newest.character);
  }
  function watchRoom() {
    const es = new EventSource(ROOM_URL + "/sse?since=latest");   // auto-reconnects by itself
    es.onmessage = ev => { try { const m = JSON.parse(ev.data); if (m.event === "message") applyRoom(JSON.parse(m.message)); } catch (err) { /* ignore */ } };
  }

  /* ---------------- text formatting ---------------- */
  const mentionRe = new RegExp("@(" + Object.keys(CHARACTERS).join("|") + ")\\b", "g");
  const fmt = t => esc(t)
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.+?)\*/g, "<i>$1</i>")
    .replace(mentionRe, '<span class="mention">@$1</span>')
    .replace(/\n/g, "<br>");

  const minutes = ts => {
    const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(ts || "");
    if (!m) return null;
    return ((+m[1] % 12) + (m[3].toUpperCase() === "PM" ? 12 : 0)) * 60 + +m[2];
  };
  const closeInTime = (a, b) => {
    const x = minutes(a.timestamp), y = minutes(b.timestamp);
    return x !== null && y !== null ? y - x >= 0 && y - x <= 7 : a.timestamp === b.timestamp;
  };

  /* ---------------- rendering ---------------- */
  function onlineSet() {
    const s = new Set(CONFIG.initialOnline);
    shown.forEach(m => m.character && s.add(m.character));
    return s;
  }

  function renderChannels() {
    $("#channelList").innerHTML = CHANNELS.map(c =>
      `<li class="channel ${c.id === current ? "active" : ""} ${unread.has(c.id) ? "unread" : ""}" data-id="${c.id}">${c.locked ? ICON.lock : ICON.hash}<span>${esc(c.name)}</span></li>`
    ).join("");
  }

  function renderHeader() {
    const c = chById(current);
    $("#chatHeader").innerHTML =
      `<span style="color:var(--muted)">${ICON.hash}</span><span class="h-name">${esc(c.name)}</span>` +
      `<span class="h-sep"></span><span class="h-topic">${esc(c.topic || "")}</span><span class="h-icons">${ICON.headerIcons}</span>`;
    $("#placeholder").textContent = "Message #" + c.name;
  }

  function renderMembers() {
    const on = onlineSet();
    const names = Object.keys(CHARACTERS);
    let html = "";
    ROLE_ORDER.forEach(role => {
      const list = names.filter(n => CHARACTERS[n].role === role && on.has(n));
      if (!list.length) return;
      html += `<div class="m-cat">${role} &mdash; ${list.length}</div>` + list.map(n => memberRow(n, false)).join("");
    });
    const off = names.filter(n => !on.has(n));
    if (off.length) html += `<div class="m-cat">Offline &mdash; ${off.length}</div>` + off.map(n => memberRow(n, true)).join("");
    $("#members").innerHTML = html;
  }
  const memberRow = (n, off) =>
    `<div class="member ${off ? "off" : ""}">${avatar(n, "", off, true)}<div><div class="m-name" style="color:${CHARACTERS[n].color}">${esc(uname(n))}</div>${off ? "" : `<div class="m-sub">${esc(CHARACTERS[n].status)}</div>`}</div></div>`;

  function renderUserbar() {
    const n = CONFIG.you;
    $("#userbar").innerHTML = `${avatar(n, "sm", false, true)}<div><div class="u-name">${esc(uname(n))}</div><div class="u-sub">Online</div></div>`;
  }

  function renderMessages(animUid, instant) {
    const c = chById(current);
    const el = $("#messages");
    let html = `<div class="intro"><div class="big">${ICON.hash.replace('width="22" height="22"', 'width="40" height="40"')}</div><h2>Welcome to #${esc(c.name)}!</h2><p>This is the start of the #${esc(c.name)} channel.</p></div>`;
    let prev = null, lastDate = null;
    shown.filter(m => m.type !== "slide" && m.channel === current).forEach(m => {
      if (m.date && m.date !== lastDate) { html += `<div class="divider">${esc(m.date)}</div>`; lastDate = m.date; prev = null; }
      const cls = m.uid === animUid ? "enter" : "";
      if (m.type === "system") {
        html += `<div class="msg system ${cls}" data-uid="${m.uid}"><div class="gutter">${ICON.join}</div><div class="body">${fmt(m.text)} <span class="time">${esc(m.timestamp)}</span></div>${TOOLS}</div>`;
        prev = null; return;
      }
      const ch = CHARACTERS[m.character];
      if (m.type === "join") {
        html += `<div class="msg join ${cls}" data-uid="${m.uid}"><div class="gutter">${ICON.join}</div><div class="body"><b style="color:${ch.color}">${esc(uname(m.character))}</b> joined the server. <span class="time">${esc(m.timestamp)}</span></div>${TOOLS}</div>`;
        prev = null; return;
      }
      const edited = m.edited ? '<span class="edited">(edited)</span>' : "";
      if (prev && prev.character === m.character && closeInTime(prev, m) && !m.date) {
        html += `<div class="msg grouped ${cls}" data-uid="${m.uid}"><div class="gutter"><span class="hovertime">${esc(m.timestamp)}</span></div><div class="body"><div class="text">${fmt(m.text)}${edited}</div></div>${TOOLS}</div>`;
      } else {
        html += `<div class="msg first ${cls}" data-uid="${m.uid}"><div class="gutter">${avatar(m.character)}</div><div class="body"><div class="head"><span class="name" style="color:${ch.color}">${esc(uname(m.character))}</span><span class="time">${esc(m.timestamp)}</span></div><div class="text">${fmt(m.text)}${edited}</div></div>${TOOLS}</div>`;
      }
      prev = m;
    });
    el.innerHTML = html;
    scrollDown(instant);
  }

  function scrollDown(instant) {
    const el = $("#messages");
    if (!instant && !fx.scroll.checked) return;
    el.scrollTo({ top: el.scrollHeight, behavior: instant || !fx.anim.checked ? "auto" : "smooth" });
  }

  function renderTyping() {
    const t = $("#typing");
    t.innerHTML = typing && typing.channel === current
      ? `<span class="dots"><i></i><i></i><i></i></span><span><b>${esc(uname(typing.character))}</b> is typing...</span>` : "";
    if (typing) scrollDown();
  }

  function toast(name) {
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `${avatar(name, "sm", false, false)}<div><div class="t-title">Ranch Chat</div><div class="t-body"><b style="color:${CHARACTERS[name].color}">${esc(uname(name))}</b> joined the server</div></div>`;
    $("#toasts").append(el);
    setTimeout(() => el.classList.add("out"), 3600);
    setTimeout(() => el.remove(), 4100);
  }

  function switchChannel(id, instant = true) {
    current = id;
    unread.delete(id);
    save();
    renderChannels(); renderHeader(); renderMessages(null, instant); renderTyping();
  }

  /* ---------------- presenter form ---------------- */
  function loadForm(src) {
    const m = src || SCRIPT[cursor] || { character: f.char.value, timestamp: shown.length ? shown[shown.length - 1].timestamp : "", channel: current };
    if (m.character) f.char.value = m.character;
    f.chan.value = m.channel || CHANNELS[0].id;
    f.type.value = ["join", "slide", "system"].includes(m.type) ? m.type : "message";
    f.time.value = m.timestamp || "";
    f.text.value = m.type === "slide" ? [m.title, m.subtitle].filter(Boolean).join("\n") : m.text || "";
    f.text.disabled = f.type.value === "join";
    formDate = m.date || null;
    updateControls();
  }

  const isShow = () => document.body.classList.contains("show");

  function renderSlide() {
    const el = $("#slide"), last = shown[shown.length - 1];
    let html = "", on = false;
    if (last && last.type === "slide" && !busy) {
      on = true;
      html = `<div class="s-title">${esc(last.title)}</div>${last.subtitle ? `<div class="s-sub">${esc(last.subtitle)}</div>` : ""}`;
    } else if (isShow() && !shown.length) {
      on = true; html = `<div class="s-hint">${WATCH ? "Waiting for the presenter&hellip;" : "Click or press &rarr; to begin"}</div>`;
    }
    if (on && (!el.classList.contains("on") || el.dataset.key !== html)) { el.innerHTML = html; el.dataset.key = html; }
    el.classList.toggle("on", on);
  }

  function updateControls() {
    $("#pProg").textContent = cursor < SCRIPT.length ? `Next: ${cursor + 1} of ${SCRIPT.length}` : "End of script (custom messages)";
    $("#bBack").disabled = busy || !shown.length;
    $("#bNext").disabled = busy;
    $("#bAuto").classList.toggle("on", auto);
    $("#progress").style.width = (SCRIPT.length ? cursor / SCRIPT.length * 100 : 0) + "%";
    renderSlide();
    save();
    $("#bAuto").innerHTML = auto ? "&#9632; Stop auto-play" : "&#9654;&#9654; Auto-play";
  }

  /* ---------------- actions ---------------- */
  const flashErr = () => { f.text.classList.add("err"); setTimeout(() => f.text.classList.remove("err"), 700); };
  let skip = null; // resolves the current "typing..." wait early

  async function addNext() {
    if (busy) { if (skip) skip(); return; }
    if (isShow() && cursor >= SCRIPT.length) return;
    const type = f.type.value;
    const text = f.text.value.trim();
    let msg;
    if (type === "slide") {
      const [title, ...rest] = f.text.value.split("\n");
      if (!title.trim()) return flashErr();
      msg = { type, title: title.trim(), subtitle: rest.join(" ").trim(), channel: current, timestamp: "" };
    } else {
      if ((type === "message" || type === "system") && !text) return flashErr();
      msg = { character: type === "system" ? undefined : f.char.value, channel: f.chan.value, timestamp: f.time.value.trim(), type, text, date: formDate, edited: !!(SCRIPT[cursor] && SCRIPT[cursor].edited && text === SCRIPT[cursor].text) };
    }
    const token = run;
    busy = true; updateControls();

    if (type !== "slide" && fx.follow.checked && msg.channel !== current) switchChannel(msg.channel);
    if (type === "message" && fx.typing.checked) {
      typing = { character: msg.character, channel: msg.channel };
      renderTyping(); bcast();
      await Promise.race([sleep(+fx.typingMs.value), new Promise(r => { skip = r; })]);
      skip = null;
      if (token !== run) return;
      typing = null; renderTyping();
    }

    msg.uid = ++uid;
    msg.fromScript = cursor < SCRIPT.length;
    shown.push(msg);
    if (msg.fromScript) cursor++;
    if (msg.channel !== current) unread.add(msg.channel);
    renderChannels();
    if (msg.channel === current) renderMessages(fx.anim.checked ? msg.uid : null);
    renderMembers();
    if (type === "join" && fx.toast.checked) toast(msg.character);
    busy = false;
    loadForm();
  }

  function back() {
    if (busy || !shown.length) return;
    const m = shown.pop();
    if (m.fromScript) cursor--;
    const last = [...shown].reverse().find(x => x.type !== "slide");
    if (fx.follow.checked && last) current = last.channel;
    unread.delete(current);
    renderChannels(); renderHeader(); renderMessages(null, true); renderMembers();
    loadForm(m);
  }

  // normal view shows the whole conversation; slideshow / auto-play reveal it one message at a time
  const fillAll = () => { uid = 0; shown = SCRIPT.filter(m => m.type !== "slide").map(m => ({ ...m, uid: ++uid, fromScript: true })); cursor = SCRIPT.length; };
  function revealAll() {
    run++; busy = false; auto = false; typing = null; unread.clear();
    $("#toasts").innerHTML = "";
    fillAll();
    switchChannel(CHANNELS[0].id);
    renderMembers(); renderTyping();
    loadForm();
  }

  function reset() {
    run++; busy = false; auto = false; typing = null;
    shown = []; cursor = 0; unread.clear();
    $("#toasts").innerHTML = "";
    switchChannel(CHANNELS[0].id);
    renderMembers(); renderTyping();
    loadForm();
  }

  async function toggleAuto() {
    if (auto) { auto = false; updateControls(); return; }
    if (cursor >= SCRIPT.length) reset();   // everything is already showing: start over and reveal it progressively
    auto = true; updateControls();
    const token = run;
    while (auto && token === run && cursor < SCRIPT.length) {
      await addNext();
      if (!auto || token !== run) break;
      await sleep(+fx.autoSec.value * 1000);
    }
    if (token === run) { auto = false; updateControls(); }
  }

  const togglePanel = () => {
    const b = document.body.classList;
    if (b.contains("show")) b.remove("show", "present"); else b.toggle("present");
    updateControls();
  };
  const toggleShow = () => {
    const b = document.body.classList;
    if (b.contains("show")) {
      b.remove("show", "present", "hint");
      // drop ?slideshow so a refresh doesn't put you straight back in
      const p = new URLSearchParams(location.search); p.delete("slideshow");
      try { history.replaceState(null, "", location.pathname + (p.toString() ? "?" + p : "") + location.hash); } catch (err) { /* ignore */ }
    } else { b.add("show", "present"); reset(); }
    if (!b.contains("show")) revealAll();
    updateControls();
  };

  /* ---------------- right-click menu, editor, delete ---------------- */
  const menu = $("#ctx"), dlg = $("#editor");
  const e = { char: $("#eChar"), chan: $("#eChan"), type: $("#eType"), time: $("#eTime"), text: $("#eText") };
  e.char.innerHTML = Object.keys(CHARACTERS).map(n => `<option>${n}</option>`).join("");
  e.chan.innerHTML = CHANNELS.map(c => `<option value="${c.id}">#${c.name}</option>`).join("");
  let editing = null; // { uid } to edit, or { after } to insert

  function refreshAll(animUid) {
    renderChannels(); renderHeader(); renderMessages(animUid); renderMembers(); renderTyping();
    loadForm();
  }

  function openEditor(ctx) {
    editing = ctx;
    const m = ctx.uid ? shown.find(x => x.uid === ctx.uid) : null;
    const ref = m || shown.find(x => x.uid === ctx.after) || [...shown].reverse().find(x => x.channel === current);
    e.char.value = m ? (m.character || e.char.value) : (ctx.type === "join" ? "Slim" : (ref ? ref.character : "George"));
    e.chan.value = m ? m.channel : current;
    e.type.value = ctx.type || (m ? m.type || "message" : "message");
    e.time.value = m ? m.timestamp : (ref ? ref.timestamp : "");
    e.text.value = m ? m.text || "" : "";
    e.text.disabled = e.type.value === "join";
    $("#eTitle").textContent = m ? "Edit message" : ctx.after ? "Add message below" : "Add message";
    dlg.showModal();
    (e.type.value === "join" ? e.char : e.text).focus();
  }
  e.type.addEventListener("change", () => { e.text.disabled = e.type.value === "join"; });
  $("#eCancel").onclick = () => dlg.close();
  dlg.addEventListener("keydown", ev => { if (ev.key === "Enter" && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); saveEditor(); } });
  $("#eForm").addEventListener("submit", ev => { ev.preventDefault(); saveEditor(); });

  function saveEditor() {
    const type = e.type.value, text = e.text.value.trim();
    if ((type === "message" || type === "system") && !text) { e.text.classList.add("err"); setTimeout(() => e.text.classList.remove("err"), 700); return; }
    const data = { character: type === "system" ? undefined : e.char.value, channel: e.chan.value, type, text: type === "join" ? "" : text, timestamp: e.time.value.trim() };
    let anim = null;
    if (editing.uid) {
      Object.assign(shown.find(x => x.uid === editing.uid), data);
    } else {
      const msg = { ...data, uid: ++uid, fromScript: false };
      const i = editing.after ? shown.findIndex(x => x.uid === editing.after) : -1;
      shown.splice(i < 0 ? shown.length : i + 1, 0, msg);
      anim = fx.anim.checked ? msg.uid : null;
    }
    dlg.close();
    current = data.channel; unread.delete(current);
    refreshAll(anim);
  }

  function deleteMsg(id) {
    const i = shown.findIndex(x => x.uid === id);
    if (i < 0) return;
    const [m] = shown.splice(i, 1);
    if (i === shown.length && m.fromScript) cursor--; // removing the newest scripted message lets you re-send it
    refreshAll();
  }

  function closeMenu() { menu.style.display = "none"; }
  function openMenu(x, y, items) {
    menu.innerHTML = "";
    items.forEach(it => {
      if (it === "-") { menu.append(document.createElement("hr")); return; }
      const d = document.createElement("div");
      d.className = "ci" + (it.danger ? " danger" : "");
      d.textContent = it.label;
      if (it.hint) { const s = document.createElement("span"); s.textContent = it.hint; d.append(s); }
      d.onclick = () => { closeMenu(); it.run(); };
      menu.append(d);
    });
    menu.style.display = "block";
    const r = menu.getBoundingClientRect();
    menu.style.left = Math.max(4, Math.min(x, innerWidth - r.width - 8)) + "px";
    menu.style.top = Math.max(4, Math.min(y, innerHeight - r.height - 8)) + "px";
  }

  $("#messages").addEventListener("contextmenu", ev => {
    ev.preventDefault();
    const row = ev.target.closest(".msg");
    const id = row ? +row.dataset.uid : null;
    const items = [];
    if (id) {
      items.push({ label: "Edit message", hint: "dbl-click", run: () => openEditor({ uid: id }) });
      items.push({ label: "Add message below", run: () => openEditor({ after: id }) });
      items.push({ label: "Add “joined” below", run: () => openEditor({ after: id, type: "join" }) });
      items.push("-");
      items.push({ label: "Delete message", danger: true, run: () => deleteMsg(id) });
      items.push("-");
    } else {
      items.push({ label: "Add message here…", run: () => openEditor({}) });
      items.push({ label: "Add “joined” message…", run: () => openEditor({ type: "join" }) });
      items.push("-");
    }
    items.push({ label: "Send next scripted message", hint: "Space", run: addNext });
    items.push({ label: "Undo last message", hint: "←", run: back });
    items.push("-");
    items.push({ label: "Export script\u2026", run: openExport });
    items.push({ label: isShow() ? "Exit slideshow mode" : "Start slideshow mode (click to advance)", hint: "S", run: toggleShow });
    items.push({ label: document.body.classList.contains("present") ? "Show presenter controls" : "Hide presenter controls", hint: "H", run: togglePanel });
    openMenu(ev.clientX, ev.clientY, items);
  });

  $("#messages").addEventListener("click", ev => {
    const b = ev.target.closest(".tools button");
    if (!b) return;
    const id = +b.closest(".msg").dataset.uid;
    if (b.dataset.act === "edit") openEditor({ uid: id });
    else if (b.dataset.act === "add") openEditor({ after: id });
    else deleteMsg(id);
  });
  $("#messages").addEventListener("dblclick", ev => {
    const row = ev.target.closest(".msg");
    if (row && !isShow()) openEditor({ uid: +row.dataset.uid });
  });
  document.addEventListener("mousedown", ev => { if (!menu.contains(ev.target)) closeMenu(); });
  document.addEventListener("keydown", ev => { if (ev.key === "Escape") closeMenu(); });
  $("#messages").addEventListener("scroll", closeMenu);
  window.addEventListener("blur", closeMenu);

  /* ---------------- wiring ---------------- */
  f.char.innerHTML = Object.keys(CHARACTERS).map(n => `<option>${n}</option>`).join("");
  f.chan.innerHTML = CHANNELS.map(c => `<option value="${c.id}">#${c.name}</option>`).join("");
  f.type.addEventListener("change", () => { f.text.disabled = f.type.value === "join"; });

  $("#channelList").addEventListener("click", e => {
    const li = e.target.closest(".channel");
    if (li && !isShow()) switchChannel(li.dataset.id);
  });
  $("#bNext").onclick = addNext;
  $("#bBack").onclick = back;
  $("#bAuto").onclick = toggleAuto;
  $("#bShowAll").onclick = revealAll;
  $("#bReset").onclick = () => { if (confirm("Reset the conversation back to the start?")) reset(); };
  $("#bHide").onclick = togglePanel;
  $("#bShow").onclick = toggleShow;
  $("#pDock").onclick = () => { $("#panel").classList.toggle("left"); save(); };

  fx.typingMs.value = CONFIG.typingMs;
  fx.autoSec.value = CONFIG.autoPlaySeconds;
  const syncLabels = () => {
    $("#vTyping").textContent = (fx.typingMs.value / 1000).toFixed(1) + "s";
    $("#vAuto").textContent = (+fx.autoSec.value).toFixed(1) + "s";
    $("#vSize").textContent = fx.size.value + "px";
    document.documentElement.style.fontSize = fx.size.value + "px";
  };
  [fx.typingMs, fx.autoSec, fx.size].forEach(i => i.addEventListener("input", syncLabels));
  fx.anim.addEventListener("change", () => document.body.classList.toggle("no-anim", !fx.anim.checked));

  document.addEventListener("keydown", e => {
    const tag = e.target.tagName;
    if (WATCH || document.querySelector("dialog[open]") || ["INPUT", "TEXTAREA", "SELECT"].includes(tag) || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (k === "h" || k === "H") togglePanel();
    else if (k === "s" || k === "S" || (k === "Escape" && isShow())) toggleShow();
    else if (k === "a" || k === "A") toggleAuto();
    else if (k === "f" || k === "F") { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); back(); }
    else if (k === "ArrowRight" || k === "PageDown") { e.preventDefault(); addNext(); }
    else if ((k === " " || k === "Enter") && tag !== "BUTTON") { e.preventDefault(); addNext(); }
  });

  /* ---------------- auto-save (this browser only) ---------------- */
  const KEY = "ranchchat.v1";
  // progress is only restored if conversation.js hasn't changed since it was saved
  const sig = [...JSON.stringify(SCRIPT)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0);
  const SETTINGS = { typing: fx.typing, anim: fx.anim, toast: fx.toast, follow: fx.follow, scroll: fx.scroll };
  const RANGES = { typingMs: fx.typingMs, autoSec: fx.autoSec, size: fx.size };

  function save() {
    if (WATCH) return;
    bcast();
    try {
      const s = { sig, shown, cursor, uid, current, left: $("#panel").classList.contains("left"), checks: {}, ranges: {} };
      Object.entries(SETTINGS).forEach(([k, el]) => s.checks[k] = el.checked);
      Object.entries(RANGES).forEach(([k, el]) => s.ranges[k] = el.value);
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (err) { /* storage blocked: just don't persist */ }
    if (syncOn && !applying && snap() !== lastSnap) schedulePush();
  }

  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY));
      if (!d) return;
      Object.entries(SETTINGS).forEach(([k, el]) => { if (k in d.checks) el.checked = d.checks[k]; });
      Object.entries(RANGES).forEach(([k, el]) => { if (k in d.ranges) el.value = d.ranges[k]; });
      $("#panel").classList.toggle("left", !!d.left);
      if (d.sig === sig && Array.isArray(d.shown)) {
        shown = d.shown; cursor = d.cursor; uid = d.uid;
        if (CHANNELS.some(c => c.id === d.current)) current = d.current;
      }
    } catch (err) { /* ignore corrupt save */ }
    document.body.classList.toggle("no-anim", !fx.anim.checked);
  }
  [...Object.values(SETTINGS), ...Object.values(RANGES)].forEach(el => { el.addEventListener("change", save); el.addEventListener("input", save); });

  /* ---------------- multi-device sync (needs sync.php or sync-server.js on the host) ---------------- */
  const SYNC_URL = "sync.php", SKEY = "ranchchat.synckey";
  let syncKey = "", syncRev = 0, lastSnap = "", syncOn = false, applying = false, pushTimer = null, pushing = false, syncRun = 0;
  const snap = () => JSON.stringify({ sig, shown, cursor, uid });
  const setStatus = t => { $("#syncStatus").textContent = "Sync: " + t; };

  async function api(method, body, qs = "") {
    const r = await fetch(SYNC_URL + qs, { method, cache: "no-store", headers: { "X-Sync-Key": syncKey, "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    return { status: r.status, data: await r.json().catch(() => ({})) };
  }

  function schedulePush() { clearTimeout(pushTimer); pushTimer = setTimeout(push, 300); }

  async function push() {
    pushTimer = null;
    if (pushing) return schedulePush();
    pushing = true;
    const s = snap();
    try {
      const { status, data } = await api("POST", { rev: syncRev, state: JSON.parse(s) });
      if (status === 200) { syncRev = data.rev; lastSnap = s; setStatus("synced"); }
      else if (status === 409) {   // another device saved first: take theirs
        if (data.state && data.state.sig === sig) applyRemote(data); else syncRev = data.rev;
        setStatus("another device changed it first (theirs kept)");
      } else if (status === 401) { setStatus("wrong password"); syncOn = false; }
      else setStatus("save failed (" + status + ")");
    } catch (err) { setStatus("offline, will retry"); schedulePush(); }
    pushing = false;
  }

  function applyRemote(d) {
    const st = d.state, prevLen = shown.length;
    applying = true;
    shown = st.shown; cursor = st.cursor; uid = st.uid; syncRev = d.rev; lastSnap = snap();
    const last = [...shown].reverse().find(x => x.type !== "slide");
    if (fx.follow.checked && last) current = last.channel;
    unread.delete(current);
    const grew = shown.length === prevLen + 1, newest = shown[shown.length - 1];
    renderChannels(); renderHeader(); renderMessages(grew && fx.anim.checked ? newest.uid : null, !grew); renderMembers(); renderTyping();
    loadForm();
    if (grew && newest.type === "join" && fx.toast.checked) toast(newest.character);
    applying = false;
  }

  // returns false when syncing should stop for good (wrong password / no endpoint)
  async function syncTick(initial) {
    if (pushing || pushTimer) return true;
    let r;
    try { r = await api("GET", null, "?rev=" + (initial ? -1 : syncRev)); }
    catch (err) { setStatus("offline, retrying"); return true; }
    const { status, data } = r;
    if (status === 401) { setStatus("wrong password"); return false; }
    if (status !== 200) { setStatus("not available (local only)"); return false; }
    const same = !!(data.state && data.state.sig === sig);
    if (initial) {
      syncOn = true;
      if (same) applyRemote(data); else { syncRev = data.rev; lastSnap = ""; schedulePush(); }
    } else if (data.changed && !busy) {
      if (same) applyRemote(data); else syncRev = data.rev;
    }
    setStatus("synced");
    return true;
  }

  async function syncLoop() {
    const run2 = ++syncRun;
    syncOn = false;
    if (!syncKey) return setStatus("off");
    setStatus("connecting...");
    if (!(await syncTick(true))) return;
    while (run2 === syncRun) {
      await sleep(1500);
      if (run2 !== syncRun) return;
      if (!(await syncTick(false))) { syncOn = false; return; }
    }
  }

  function initSync() {
    const p = new URLSearchParams(location.search);
    try {
      if (p.get("key")) {   // slideshow.html?key=PASSWORD on the projector device
        localStorage.setItem(SKEY, p.get("key")); p.delete("key");
        history.replaceState(null, "", location.pathname + (p.toString() ? "?" + p : ""));
      }
      syncKey = localStorage.getItem(SKEY) || "";
    } catch (err) { syncKey = p.get("key") || ""; }
    $("#bSync").onclick = () => {
      const k = prompt("Sync password (same on every device; set in sync-config.php):", syncKey);
      if (k === null) return;
      syncKey = k.trim();
      try { localStorage.setItem(SKEY, syncKey); } catch (err) { /* ignore */ }
      syncLoop();
    };
    syncLoop();
  }

  /* ---------------- export script ---------------- */
  const xDlg = $("#exporter");
  const KEYS = ["type", "character", "title", "subtitle", "text", "timestamp", "channel", "date", "edited"];
  function entryText(m) {
    const parts = KEYS.filter(k => m[k] !== undefined && m[k] !== null && m[k] !== "" && m[k] !== false
      && !(k === "type" && m[k] === "message") && !(k === "channel" && m.type === "slide"))
      .map(k => `${k}: ${JSON.stringify(m[k])}`);
    return `  { ${parts.join(", ")} }`;
  }
  // what's on screen (with your edits) + whatever hasn't been sent yet
  const scriptText = () => `const SCRIPT = [\n${[...shown, ...SCRIPT.slice(cursor)].map(entryText).join(",\n")}\n];\n`;
  const fileText = () =>
    `/* Exported from Ranch Chat. Fields per message: character, text, timestamp, channel,\n   optional type ("join" | "slide"), title/subtitle (slides), date, edited. */\n\n` +
    `const CONFIG = ${JSON.stringify(CONFIG, null, 2)};\n\n` +
    `const CHANNELS = [\n${CHANNELS.map(c => "  " + JSON.stringify(c)).join(",\n")}\n];\n\n` + scriptText();

  function openExport() {
    $("#xText").value = scriptText();
    $("#xCopy").textContent = "Copy SCRIPT";
    xDlg.showModal();
  }
  $("#xCopy").onclick = async () => {
    const t = $("#xText");
    try { await navigator.clipboard.writeText(t.value); }
    catch (err) { t.select(); document.execCommand("copy"); }
    $("#xCopy").textContent = "Copied!";
  };
  $("#xDownload").onclick = () => {
    const url = URL.createObjectURL(new Blob([fileText()], { type: "text/javascript" }));
    const link = Object.assign(document.createElement("a"), { href: url, download: "conversation.js" });
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  $("#xClose").onclick = () => xDlg.close();
  $("#bExport").onclick = openExport;

  // slideshow hides the panel, so show a small exit button whenever the mouse moves or the screen is tapped
  let hintTimer = null;
  const showHint = () => {
    if (!isShow()) return;
    document.body.classList.add("hint");
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => document.body.classList.remove("hint"), 3000);
  };
  document.addEventListener("mousemove", showHint);
  document.addEventListener("pointerdown", showHint);
  $("#exitShow").onclick = toggleShow;

  document.addEventListener("click", ev => {
    if (!isShow() || ev.button !== 0 || ev.target.closest("#ctx, dialog, .panel, #exitShow")) return;
    addNext();
  });

  if (!WATCH) load();
  syncLabels();
  if (WATCH) document.body.classList.add("watch");
  if (WATCH || /slideshow/.test(location.search)) {
    document.body.classList.add("show", "present");
    if (WATCH || /[?&](clean|record)/.test(location.search)) document.body.classList.add("clean");   // recording: no cursor, no exit button
    if (cursor >= SCRIPT.length) { shown = []; cursor = 0; }   // a finished run starts over
  } else if (!(shown.length && cursor >= SCRIPT.length)) fillAll();
  renderChannels(); renderHeader(); renderMessages(null, true); renderMembers(); renderUserbar(); renderTyping();
  loadForm();
  if (WATCH) watchRoom(); else { initSync(); bcast(); }
})();

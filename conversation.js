/* =====================================================================
   EDIT THIS FILE to change the conversation. Refresh the page after saving.

   Each SCRIPT entry:
     character : "George" | "Lennie" | "Candy" | "Curley" | "Slim" | "Boss"
     text      : the message (supports **bold**, *italic*, and @George-style mentions)
     timestamp : any string, e.g. "8:14 PM"
     channel   : id of a channel from CHANNELS below (default: first channel)
   Optional:
     type      : "system" -> a grey server notice, no character needed
     type      : "join"  -> shows "<character> joined the server" + pop-up notification
     date      : "June 3, 1937" -> shows a date divider before this message
     edited    : true    -> shows a small "(edited)" tag

   Title slides (full-screen cards between scenes):
     { type: "slide", title: "Act One", subtitle: "A ranch near Soledad, 1937" }

   Messages sent by the same character within ~7 minutes in the same channel
   are grouped together automatically (like real Discord).
   ===================================================================== */

const CONFIG = {
  you: "George",                       // who the bottom-left user panel shows
  initialOnline: ["George", "Lennie"], // everyone else shows as offline until they join/speak
  typingMs: 1600,                      // default "typing..." duration
  autoPlaySeconds: 2.5                 // default pause between messages in auto-play
};

const CHANNELS = [
  { id: "general",  name: "general",  topic: "Welcome to Ranch Chat. Be kind. Mind the boss." },
  { id: "the-ranch", name: "the-ranch", topic: "Barley, bunkhouse and bucking. Work talk only." },
  { id: "dreams",   name: "dreams",   topic: "Tell us about the little place you're gonna get someday." },
  { id: "private",  name: "private",  topic: "Keep it quiet.", locked: true }
];

// Display names shown in the chat (the character picker still uses the story names).
const USERNAMES = {
  George: "wandering_worker",
  Lennie: "rabbit_dreamer",
  Candy: "old_swamper",
  Slim: "Jerkline_Skimmer1234",
  Curley: "ranchboss_son",
  Boss: "ranchowner37"
};

// ---------------------------------------------------------------------
// SCRIPT: #general
//   { type: "system", text: "..." } shows a grey notice with no character.
// ---------------------------------------------------------------------
const SCRIPT = [
  { type: "system", text: "Welcome to Ranch Hands, a chat room for ranch workers and ranch owners to talk about life and work.", timestamp: "8:14 PM", channel: "general", date: "June 3, 1937" },
  { type: "system", text: "2 new members joined the chat.", timestamp: "8:14 PM", channel: "general" },
  { character: "George", text: "Hey, I'm new here. Just got to a ranch and I'm looking for work.", timestamp: "8:15 PM", channel: "general" },
  { character: "Curley", text: "Who are you guys?", timestamp: "8:15 PM", channel: "general" },
  { character: "George", text: "Just a ranch hand. I travel around looking for jobs.", timestamp: "8:16 PM", channel: "general" },
  { character: "Slim", text: "Hope you find one.", timestamp: "8:16 PM", channel: "general" },
  { character: "George", text: "Thanks.", timestamp: "8:17 PM", channel: "general" },
  { character: "Lennie", text: "I'm really big and strong.", timestamp: "8:17 PM", channel: "general" },
  { character: "George", text: "Lennie, you don't need to tell everybody that.", timestamp: "8:18 PM", channel: "general" },
  { character: "Lennie", text: "Why not?", timestamp: "8:18 PM", channel: "general" },
  { character: "Curley", text: "So you two work together?", timestamp: "8:19 PM", channel: "general" },
  { character: "George", text: "Yeah. We've been traveling together for a while.", timestamp: "8:19 PM", channel: "general" },
  { character: "Slim", text: "That's unusual. Most guys travel alone.", timestamp: "8:20 PM", channel: "general" },
  { character: "Lennie", text: "George takes care of me.", timestamp: "8:20 PM", channel: "general" },
  { character: "Candy", text: "Anybody else here been working on ranches for a long time?", timestamp: "8:21 PM", channel: "general" },
  { character: "George", text: "I've been to quite a few.", timestamp: "8:21 PM", channel: "general" },
  { character: "Candy", text: "I'm getting too old for this kind of work myself.", timestamp: "8:22 PM", channel: "general" },
  { character: "Lennie", text: "George says we're gonna have our own place someday.", timestamp: "8:22 PM", channel: "general" },
  { character: "Candy", text: "Your own place?", timestamp: "8:23 PM", channel: "general" },
  { character: "Lennie", text: "Yeah. We gonna have a little farm with rabbits.", timestamp: "8:23 PM", channel: "general" },
  { character: "Slim", text: "Sounds like a good dream.", timestamp: "8:24 PM", channel: "general" },
  { character: "Candy", text: "Maybe I'd like something like that myself.", timestamp: "8:24 PM", channel: "general" },
  { character: "George", text: "It's not exactly easy to save enough money.", timestamp: "8:25 PM", channel: "general" },
  { character: "Slim", text: "Nothing worth having usually is.", timestamp: "8:25 PM", channel: "general" },
  { character: "Boss", text: "You boys spending more time talking than working?", timestamp: "8:26 PM", channel: "general" },
  { character: "George", text: "Who are you?", timestamp: "8:26 PM", channel: "general" },
  { character: "Boss", text: "Just somebody who runs a ranch.", timestamp: "8:27 PM", channel: "general" },
  { character: "Curley", text: "You sound like my old man.", timestamp: "8:27 PM", channel: "general" },
  { character: "Boss", text: "That's because I'm probably old enough to be your old man.", timestamp: "8:28 PM", channel: "general" },
  { character: "Slim", text: "Chill out, you guys.", timestamp: "8:28 PM", channel: "general" }
];

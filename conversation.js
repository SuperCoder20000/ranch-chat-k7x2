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
  { id: "general",   name: "general",   topic: "Welcome to Ranch Hands. Talk about life and work." },
  { id: "dreams",    name: "dreams",    topic: "Talk about the future, plans, and things you hope to accomplish." },
  { id: "ranch-life", name: "ranch-life", topic: "What's a day on the ranch really like?" }
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
// SCRIPT: #general -> #dreams -> #ranch-life -> #general (the page follows the channel)
//   { type: "system", text: "..." } shows a grey notice with no character.
// ---------------------------------------------------------------------
const SCRIPT = [
  { type: "slide", title: "Ranch Hands", subtitle: "Of Mice and Men, as a group chat" },
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
  { character: "Slim", text: "Chill out, you guys.", timestamp: "8:28 PM", channel: "general" },
  { type: "system", text: "Welcome to #dreams! Talk about the future, plans, and things you hope to accomplish.", timestamp: "8:29 PM", channel: "dreams" },
  { character: "George", text: "Does anyone here ever think about what they'd do if they didn't have to work on ranches forever?", timestamp: "8:29 PM", channel: "dreams" },
  { character: "Slim", text: "Sometimes. Mostly I just take things as they come.", timestamp: "8:30 PM", channel: "dreams" },
  { character: "Candy", text: "I've thought about it. I'm getting older, and I don't know how much longer I'll be able to work.", timestamp: "8:30 PM", channel: "dreams" },
  { character: "George", text: "Me and Lennie have a plan.", timestamp: "8:31 PM", channel: "dreams" },
  { character: "Lennie", text: "We gonna have our own place.", timestamp: "8:31 PM", channel: "dreams" },
  { character: "George", text: "A little place of our own. We'd have some land and wouldn't have to keep moving from ranch to ranch.", timestamp: "8:32 PM", channel: "dreams" },
  { character: "Lennie", text: "And I get to tend the rabbits.", timestamp: "8:32 PM", channel: "dreams" },
  { character: "Candy", text: "You mean you actually have a place picked out?", timestamp: "8:33 PM", channel: "dreams" },
  { character: "George", text: "Not yet. But we're saving money for it.", timestamp: "8:33 PM", channel: "dreams" },
  { character: "Candy", text: "How much would it take?", timestamp: "8:34 PM", channel: "dreams" },
  { character: "George", text: "Not too much more.", timestamp: "8:34 PM", channel: "dreams" },
  { character: "Candy", text: "I might be able to help with that.", timestamp: "8:35 PM", channel: "dreams" },
  { character: "George", text: "You don't even know us.", timestamp: "8:35 PM", channel: "dreams" },
  { character: "Candy", text: "Maybe not. But I've been wanting something like that myself.", timestamp: "8:36 PM", channel: "dreams" },
  { character: "Boss", text: "Owning your own land isn’t easy.", timestamp: "8:36 PM", channel: "dreams" },
  { character: "Lennie", text: "We’re gonna try our best!", timestamp: "8:37 PM", channel: "dreams" },
  { character: "George", text: "Yeah, we’ve been planning for so many years.", timestamp: "8:37 PM", channel: "dreams" },
  { character: "Slim", text: "Planning sounds fun", timestamp: "8:38 PM", channel: "dreams" },
  { character: "Lennie", text: "Were gunna have a lot of rabbits.", timestamp: "8:38 PM", channel: "dreams" },
  { character: "Candy", text: "I always liked the sound of having a place of my own.", timestamp: "8:39 PM", channel: "dreams" },
  { character: "George", text: "Do you ever think of leaving the ranch?", timestamp: "8:39 PM", channel: "dreams" },
  { character: "Candy", text: "I used to, but not anymore because I’m old.", timestamp: "8:40 PM", channel: "dreams" },
  { character: "Slim", text: "Being old doesn’t mean you can’t have a dream.", timestamp: "8:40 PM", channel: "dreams" },
  { character: "Candy", text: "Maybe you’re right.", timestamp: "8:41 PM", channel: "dreams" },
  { character: "Boss", text: "Just remember, dreams don’t pay no bills", timestamp: "8:41 PM", channel: "dreams" },
  { character: "George", text: "I know. That's why we're saving.", timestamp: "8:42 PM", channel: "dreams" },
  { character: "Candy", text: "How much have you saved?", timestamp: "8:42 PM", channel: "dreams" },
  { character: "George", text: "Almost enough.", timestamp: "8:43 PM", channel: "dreams" },
  { character: "Lennie", text: "George says we just need a little more!", timestamp: "8:43 PM", channel: "dreams" },
  { character: "George", text: "Lennie, you don't have to tell everyone everything.", timestamp: "8:44 PM", channel: "dreams" },
  { character: "Lennie", text: "But they want to know.", timestamp: "8:44 PM", channel: "dreams" },
  { character: "Slim", text: "Sounds like you're pretty close, then.", timestamp: "8:45 PM", channel: "dreams" },
  { character: "George", text: "Yeah. Closer than we've ever been.", timestamp: "8:45 PM", channel: "dreams" },
  { character: "Candy", text: "If you really are that close... maybe I could help.", timestamp: "8:46 PM", channel: "dreams" },
  { character: "George", text: "Help how?", timestamp: "8:46 PM", channel: "dreams" },
  { character: "Candy", text: "I have some money saved. Maybe I could put some of it toward the place.", timestamp: "8:47 PM", channel: "dreams" },
  { character: "George", text: "You'd do that for people you've never even met?", timestamp: "8:47 PM", channel: "dreams" },
  { character: "Candy", text: "Maybe I know what it's like to want something you can't have. If you let me, I can help around the house and cook too.", timestamp: "8:48 PM", channel: "dreams" },
  { character: "George", text: "That doesn’t sound too bad.", timestamp: "8:48 PM", channel: "dreams" },
  { character: "Candy", text: "Then it’s decided! I look forward to our partnership.", timestamp: "8:49 PM", channel: "dreams" },
  { character: "George", text: "What’s everyone’s day usually like on a ranch?", timestamp: "8:49 PM", channel: "ranch-life" },
  { character: "Candy", text: "Mostly work. Cleaning, fixing things, whatever needs to be done.", timestamp: "8:50 PM", channel: "ranch-life" },
  { character: "Boss", text: "Running a ranch means making sure everyone does their part.", timestamp: "8:50 PM", channel: "ranch-life" },
  { character: "Curley", text: "Some people around here don't work as hard as they should.", timestamp: "8:51 PM", channel: "ranch-life" },
  { character: "Candy", text: "Sounds like you’ve got some troublemakers.", timestamp: "8:51 PM", channel: "ranch-life" },
  { character: "Curley", text: "You could say that.", timestamp: "8:52 PM", channel: "ranch-life" },
  { character: "Slim", text: "Ranch work can be pretty lonely, though. Everyone works all day, then goes their own way.", timestamp: "8:52 PM", channel: "ranch-life" },
  { character: "George", text: "That's why I'm glad I have Lennie with me.", timestamp: "8:53 PM", channel: "ranch-life" },
  { character: "Lennie", text: "George takes care of me.", timestamp: "8:53 PM", channel: "ranch-life" },
  { character: "Curley", text: "Sounds like you two are pretty close.", timestamp: "8:54 PM", channel: "ranch-life" },
  { character: "George", text: "Yeah. We've been together a long time.", timestamp: "8:54 PM", channel: "ranch-life" },
  { character: "Boss", text: "Well, as long as everyone does their job, there shouldn't be any problems.", timestamp: "8:55 PM", channel: "ranch-life" },
  { character: "Curley", text: "Yeah. If everyone knows their place.", timestamp: "8:55 PM", channel: "ranch-life" },
  { character: "Lennie", text: "It's getting late.", timestamp: "8:56 PM", channel: "general" },
  { character: "Slim", text: "Before everyone leaves, what does everyone think about their life right now?", timestamp: "8:56 PM", channel: "general" },
  { character: "George", text: "I just want a place where Lennie and I can finally settle down.", timestamp: "8:57 PM", channel: "general" },
  { character: "Lennie", text: "I just want to take care of the rabbits.", timestamp: "8:57 PM", channel: "general" },
  { character: "Candy", text: "I want to believe I still have time to build a better life.", timestamp: "8:58 PM", channel: "general" },
  { character: "Slim", text: "I think people should have something to look forward to.", timestamp: "8:58 PM", channel: "general" },
  { character: "Boss", text: "Running a ranch isn't easy, but someone's got to do it.", timestamp: "8:59 PM", channel: "general" },
  { character: "Curley", text: "I just want people to respect me.", timestamp: "8:59 PM", channel: "general" },
  { character: "George", text: "Seems like everyone here wants something different.", timestamp: "9:00 PM", channel: "general" },
  { character: "Slim", text: "Maybe. But we're all just trying to make it through.", timestamp: "9:00 PM", channel: "general" },
  { character: "Candy", text: "I guess that's what keeps us going.", timestamp: "9:01 PM", channel: "general" },
  { character: "Lennie", text: "George says we're gonna make it.", timestamp: "9:01 PM", channel: "general" },
  { character: "George", text: "Yeah, Lennie. We're gonna try.", timestamp: "9:02 PM", channel: "general" },
  { type: "system", text: "6 members have left the chat.", timestamp: "9:02 PM", channel: "general" },
  { type: "system", text: "Everyone came to the chat looking for something different.", timestamp: "9:03 PM", channel: "general" },
  { type: "system", text: "But for a little while, they found people who understood.", timestamp: "9:03 PM", channel: "general" },
  { type: "system", text: "Chat ended.", timestamp: "9:04 PM", channel: "general" },
  { type: "slide", title: "Thanks for watching", subtitle: "" }
];

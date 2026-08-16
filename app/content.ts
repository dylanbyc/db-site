export type Post = {
  slug: string;
  number: string;
  category: "AI" | "BJJ" | "Life" | "Projects";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  dek: string;
  paragraphs: string[];
  takeaway: string;
};

export const posts: Post[] = [
  {
    slug: "feedback-loops-mat-model",
    number: "001",
    category: "AI",
    date: "Aug 2026",
    readTime: "6 min read",
    title: "Feedback loops: what the mat and the model have in common",
    excerpt: "Progress gets faster when the distance between action and honest feedback gets shorter.",
    dek: "A working note on tight feedback loops, useful discomfort, and why iteration beats waiting for certainty.",
    paragraphs: [
      "The most useful learning environments make reality difficult to avoid. You try something, the world answers, and you get another attempt. A good training round does this in minutes. A good prototype can do it in hours.",
      "The loop is simple: form a small hypothesis, act, notice what happened, and adjust. The hard part is emotional rather than intellectual. We naturally protect ideas that feel like ours and explain away evidence that asks us to change.",
      "On the mat, a technique that only works in theory does not survive contact. In software, a feature that makes sense in a planning document can still confuse the first person who uses it. Both environments reward attention over attachment.",
      "The goal is not to avoid being wrong. It is to reduce the time spent being wrong. Smaller bets, clearer signals, and a willingness to look closely create a much kinder path to getting better.",
    ],
    takeaway: "Shorten the loop. Make one real attempt, collect one honest signal, then change one thing.",
  },
  {
    slug: "prompting-as-observation",
    number: "002",
    category: "AI",
    date: "Jul 2026",
    readTime: "4 min read",
    title: "Prompting is mostly the practice of better observation",
    excerpt: "Clear instructions begin with noticing the details that usually stay implicit.",
    dek: "Why working well with AI has less to do with magic words and more to do with seeing the task clearly.",
    paragraphs: [
      "A weak prompt often points to a blurry idea. We know the result feels wrong, but we have not named the audience, the decision, the constraints, or what good would actually look like.",
      "Writing a useful instruction forces those hidden expectations into the open. What must remain true? Which trade-off matters most? What context would change the answer? The model benefits, but so does the person asking.",
      "This is why iteration matters. The first response is not a verdict; it is evidence. It shows where the instruction was ambiguous and which assumptions need to be made explicit next time.",
    ],
    takeaway: "Before adding more words, look harder at the task. Specific observation produces specific direction.",
  },
  {
    slug: "the-beginner-loop",
    number: "003",
    category: "BJJ",
    date: "Jun 2026",
    readTime: "5 min read",
    title: "The beginner loop: get comfortable being temporarily bad",
    excerpt: "The price of learning anything interesting is looking clumsy for a while.",
    dek: "A reminder that competence is built from awkward repetitions, not protected by waiting until we feel ready.",
    paragraphs: [
      "Being new makes every movement feel public. Timing is late, attention is scattered, and the gap between what you understand and what you can execute seems enormous.",
      "That gap is not proof that you do not belong. It is the workshop. Each awkward attempt gives your nervous system another piece of information that explanation alone cannot provide.",
      "The useful question changes from ‘Am I good at this?’ to ‘What did this repetition teach me?’ That shift keeps identity out of the way long enough for practice to do its work.",
    ],
    takeaway: "Do not wait to feel fluent. Protect the repetitions that eventually create fluency.",
  },
  {
    slug: "small-projects-compound",
    number: "004",
    category: "Projects",
    date: "May 2026",
    readTime: "4 min read",
    title: "Small projects compound into a point of view",
    excerpt: "A collection of finished experiments says more than one indefinitely perfect plan.",
    dek: "On using small, shipped projects to discover what you care about and how you like to work.",
    paragraphs: [
      "A small project can carry a complete idea. It can have a beginning, a constraint, a decision, and an ending. That makes it a better teacher than a large plan that remains safely hypothetical.",
      "Finishing exposes preferences. You learn which problems hold your attention, where you reach for complexity, and which details you refuse to leave unresolved. Over time, those choices form a recognisable point of view.",
      "The projects do not need to share a market or a medium. Their connection is the quality of attention you bring to them and the record they leave for the next thing you make.",
    ],
    takeaway: "Choose a scope small enough to finish and rich enough to teach you something specific.",
  },
];

export const projects = [
  {
    slug: "ai-field-guide",
    mark: "01",
    title: "AI Field Guide",
    category: "Learning system",
    description: "A living collection of practical patterns, experiments, and plain-English notes for working with AI.",
    status: "In progress",
    year: "2026",
  },
  {
    slug: "mat-notes",
    mark: "∆",
    title: "Mat Notes",
    category: "Training log",
    description: "A lightweight practice journal for turning rolls, mistakes, and small wins into the next useful focus.",
    status: "Prototype",
    year: "2026",
  },
  {
    slug: "tiny-tools",
    mark: "//",
    title: "Tiny Tools",
    category: "Software experiments",
    description: "Small, opinionated utilities built to remove a little friction and teach me one new thing at a time.",
    status: "Ongoing",
    year: "2026",
  },
  {
    slug: "open-notebook",
    mark: "✳",
    title: "Open Notebook",
    category: "This website",
    description: "The design and publishing system behind this evolving personal archive.",
    status: "Live",
    year: "2026",
  },
];

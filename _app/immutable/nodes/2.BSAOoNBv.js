import {
  n as Be,
  A as Ml,
  s as Se,
  p as pe,
  k as O,
  i as u,
  r as yl,
  O as yn,
  e as d,
  P as ae,
  b as I,
  d as h,
  f as v,
  Q as ce,
  j as C,
  R as _e,
  v as f,
  l as c,
  S as fe,
  T as kn,
  x as Ae,
  U as Vs,
  V as hs,
  W as Gl,
  t as He,
  h as je,
  m as ll,
  w as x,
  X as Tl,
  Y as ue,
  Z as $r,
  _ as ln,
  c as mi,
  u as pi,
  g as gi,
  a as bi,
  $ as vi,
  a0 as pt,
  o as Gr,
} from "../chunks/scheduler.BaNswQkk.js";
import {
  a as j,
  t as H,
  S as Ze,
  i as Xe,
  g as wt,
  c as yt,
  f as Pl,
  b as Z,
  d as X,
  m as Y,
  e as q,
} from "../chunks/index.BHdfipDD.js";
import { w as Pr } from "../chunks/entry.Ddd51uZ2.js";
const Or = typeof window < "u";
let gn = Or ? () => window.performance.now() : () => Date.now(),
  Hr = Or ? (s) => requestAnimationFrame(s) : Be;
const Ds = new Set();
function jr(s) {
  Ds.forEach((e) => {
    e.c(s) || (Ds.delete(e), e.f());
  }),
    Ds.size !== 0 && Hr(jr);
}
function Br(s) {
  let e;
  return (
    Ds.size === 0 && Hr(jr),
    {
      promise: new Promise((t) => {
        Ds.add((e = { c: s, f: t }));
      }),
      abort() {
        Ds.delete(e);
      },
    }
  );
}
function gt(s) {
  return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function _i(s, e) {
  s.d(1), e.delete(s.key);
}
function wi(s, e) {
  j(s, 1, 1, () => {
    e.delete(s.key);
  });
}
function Wr(s, e, t, l, n, o, r, a, i, p, m, g) {
  let _ = s.length,
    M = o.length,
    w = _;
  const y = {};
  for (; w--; ) y[s[w].key] = w;
  const k = [],
    b = new Map(),
    E = new Map(),
    A = [];
  for (w = M; w--; ) {
    const D = g(n, o, w),
      z = t(D);
    let L = r.get(z);
    L ? A.push(() => L.p(D, e)) : ((L = p(z, D)), L.c()),
      b.set(z, (k[w] = L)),
      z in y && E.set(z, Math.abs(w - y[z]));
  }
  const T = new Set(),
    S = new Set();
  function N(D) {
    H(D, 1), D.m(a, m), r.set(D.key, D), (m = D.first), M--;
  }
  for (; _ && M; ) {
    const D = k[M - 1],
      z = s[_ - 1],
      L = D.key,
      V = z.key;
    D === z
      ? ((m = D.first), _--, M--)
      : b.has(V)
      ? !r.has(L) || T.has(L)
        ? N(D)
        : S.has(V)
        ? _--
        : E.get(L) > E.get(V)
        ? (S.add(L), N(D))
        : (T.add(V), _--)
      : (i(z, r), _--);
  }
  for (; _--; ) {
    const D = s[_];
    b.has(D.key) || i(D, r);
  }
  for (; M; ) N(k[M - 1]);
  return Ml(A), k;
}
function on(s, e) {
  const t = {},
    l = {},
    n = { $$scope: 1 };
  let o = s.length;
  for (; o--; ) {
    const r = s[o],
      a = e[o];
    if (a) {
      for (const i in r) i in a || (l[i] = 1);
      for (const i in a) n[i] || ((t[i] = a[i]), (n[i] = 1));
      s[o] = a;
    } else for (const i in r) n[i] = 1;
  }
  for (const r in l) r in t || (t[r] = void 0);
  return t;
}
const ds = {
    firstString: "Changing The Way",
    left: "You",
    change: ["Create", "Use", "Own"],
    right: " AI",
  },
  dl = {
    left: "Setting a new standard in both",
    firstLink: " technology ",
    middle: "and",
    secondLink: " community",
    firstHref: "",
    secondHref: "",
  },
  Fr = [
    {
      items: [{ label: "Explore Models", href: "https://nfinity-ai-app.vercel.app/" }],
    },
    {
      name: "Company",
      items: [{ label: "Blog", href: "https://medium.com/@nifinity_ai" }],
    },
    {
      name: "Join The Community",
      items: [
        { label: "X", href: "https://x.com/Infinite_AI_X" },
        {
          label: "Dextools",
          href: "https://www.dextools.io/app/en/ether/pair-explorer/0x0000000000000000000000000000?t=1726065650678",
        },
        { label: "Telegram", href: "https://t.me/Nifinity_AI_channel" },
      ],
    },
  ],
  Ur = "INFINITE MODELS <br/> ACCESSIBLE FOR ALL.",
  Rr = "Create, Deploy, <br/> And Get Paid.",
  yi = "Your All In One Hub For AI.",
  sn = [
    {
      src: "/carousel/japaneseguy.webp",
      title: "Your Imagination; Visualized.",
      description: "Image Generation:",
      type: "image",
      link: "https://nfinity-ai-app.vercel.app/categories/19",
    },
    {
      src: "/carousel/music.webp",
      title: "Give Words a Voice.",
      description: " Speech Generation:",
      type: "image",
      link: "https://nfinity-ai-app.vercel.app/categories/3",
    },
    {
      src: "/carousel/blueman.webp",
      title: "Create in every dimension.",
      description: "3D Generation:",
      type: "image",
      link: "https://nfinity-ai-app.vercel.app/categories/7",
    },
    {
      src: "/carousel/abstractGuy.webp",
      title: "Every Image Explained.",
      description: "Text with Images:",
      type: "image",
      link: "https://nfinity-ai-app.vercel.app/categories/8",
    },
    {
      src: "/carousel/infinitymusic.webp",
      title: "Stories in Motion.",
      description: "Video Generation:",
      type: "image",
      link: "https://nfinity-ai-app.vercel.app/categories/15",
    },
    {
      src: "/carousel/face.mp4",
      title: "Create, Compose, Listen.",
      description: "Music Generation:",
      type: "video",
      link: "https://nfinity-ai-app.vercel.app/models/music?tab=essential",
    },
  ],
  Zr = "Train, Deploy, and Earn. <br> Infinite Possibilities.",
  Ie = [
    {
      title: "Explore Infinite Ideas",
      description: "Access limitless AI models instantly.",
      stepNumber: "Step 1",
      src: "/stepCards/step1.svg",
    },
    {
      title: "Customize the AI to Fit Your Needs",
      description: "Effortlessly refine and adjust models.",
      stepNumber: "Step 2",
      src: "/stepCards/step2.svg",
      animationGif: "/stepCards/brain.gif",
      animation: "/stepCards/brain.mp4",
    },
    {
      title: "Deploy Your Custom Models",
      description: "Bring your fine-tuned AI to life.",
      stepNumber: "Step 3",
      src: "/stepCards/step3.svg",
    },
    {
      title: "Get Paid by Users",
      description: "Earn revenue as others use your models.",
      stepNumber: "Step 4",
      src: "/stepCards/step4.svg",
    },
  ],
  se = {
    1: {
      time: "STAGE 1",
      title: "Genesis",
      fullName: "The Genesis",
      description:
        "We opened our community, introducing the vision of creating a decentralized ecosystem for AI models. This brought together early supporters and laid the foundation for what was to come.",
      status: "Completed",
    },
    2: {
      time: "STAGE 1",
      title: "Launching The Key",
      fullName: "Launching the Key",
      description: `The <strong>$NFNT token</strong> launched, unlocking access to the platform and offering key benefits for holders. <br/><br/>
<strong>$NFNT Token Utility:</strong>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>The $NFNT token was launched, providing holders with key benefits:
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li><strong>Free</strong> credits for model usage</li>
      <li><strong>Early</strong> access to exclusive models</li>
      <li><strong>Discounts</strong> on services</li>
    </ul>
  </li>
</ul>
`,
      status: "Completed",
    },
    3: {
      time: "STAGE 1",
      title: "Into the unknown",
      fullName: "Into the Unknown",
      description:
        "Early access to the beta platform was granted to select users. The testing phase focused on gathering feedback from a small group, ensuring a smooth rollout for the wider public.",
      status: "Completed",
    },
    4: {
      time: "STAGE 1",
      title: "First Frontier",
      fullName: "First Frontier",
      description:
        "The platform officially opens, offering access to <strong>two categories</strong> of AI models. This marks the first big step toward becoming an all-in-one AI model hub.",
      status: "Completed",
    },
    13: {
      time: "STAGE 2",
      title: "Sharing Success",
      fullName: "Sharing the Success: Introducing Revenue Share",
      description:
        "The rollout of <strong>revenue sharing</strong>, allowing developers to monetize their models based on usage. This incentivizes continued innovation and engagement.",
      status: "In progress",
    },
    12: {
      time: "STAGE 2",
      title: "Building The Future",
      fullName: "Building the Future: Workflow Automations",
      description:
        "Introduction of <strong>Workflow Automations</strong>, allowing users to connect multiple AI models to automate tasks and create powerful workflows—much like <strong>Zapier</strong> for AI. <br/> <br/>PS: Zapier is a $5 Billion business. ",
      status: "In progress",
    },
    10: {
      time: "STAGE 2",
      title: "Opening The Doors",
      fullName: "Opening the Doors: Official Release of Developer Platform",
      description:
        "Stage 2's full release allows developers to push their models live. The aim is for the first <strong>three developers</strong> to successfully deploy unique models onto the platform.",
      status: "In progress",
    },
    9: {
      time: "STAGE 2",
      title: "The Beginning <br/> Of Creation",
      fullName: "The Beginning of Creation: Beta Platform for Model Deployment",
      description:
        "The beta version of our developer platform allows creators to build, train, and deploy their own models. It's the first step in transforming Infinity into a hub for AI innovation.",
      status: "In progress",
    },
    8: {
      time: "STAGE 1",
      title: "Nfinite Use Cases",
      fullName: "Infinite Use Cases",
      description: "Fine tune models and sell them in the form of TG bots.",
      status: "In progress",
    },
    6: {
      time: "STAGE 1",
      title: "Nfinite Expansion",
      fullName: "Infinite Expansion: More Models, More Categories",
      description:
        "Further expansion of models and categories, fulfilling our goal to create an All In One Hub for AI.",
      status: "Completed",
    },
    5: {
      time: "STAGE 1",
      title: "In between",
      fullName: "In between",
      description: `
		<ul style="list-style-type: disc; padding-left: 20px;">
			<li><strong>Chat with images</strong> model released</li>
			<li>Added more <strong>strategic partnerships</strong></li>
			<li>Full <strong>Website Revamp</strong> to align with the platform's direction</li>
		</ul>
		`,
      status: "Completed",
    },
    7: {
      time: "STAGE 1",
      title: "In between",
      fullName: "In between",
      description: `
		<ul style="list-style-type: disc; padding-left: 20px;">
			<li>Released more <strong>models and categories</strong></li>
			<li><strong>UI/UX Revamp</strong></li>
		</ul>
		`,
      status: "Completed",
    },
    11: {
      time: "STAGE 2",
      title: "In between",
      fullName: "In between",
      description: `
		<ul style="list-style-type: disc; padding-left: 20px;">
			<li><strong>Refining the Experience: UI/UX Overhaul</strong></li>
			<li><strong>Music Generation model released</strong></li>
			<li><strong>Video Generation model released</strong></li>
			<li>Released the <strong>Stage 1 Whitepaper</strong></li>
			<li>Finalized <strong>partnerships with aligned projects</strong></li>
		</ul>
		`,
      status: "In progress",
    },
    14: {
      time: "STAGE 3",
      title: "Changing The Way AI Is Owned",
      fullName: "STAGE 3: Changing The Way AI Is Owned.",
      description: `
		An open AI network that's infinitely scalable, infinitely accessible, and decentralized. </br> More. Soon. 
		`,
      status: "In progress",
    },
  },
  Xr = "Infinite Tokenomics",
  mt = {
    1: { title: "Liquidity Pool", description: "10,000" },
    2: { title: "Marketing & CEX (10%)", description: "1M" },
    3: { title: "KOL (10%)", description: "1M" },
    4: { title: "Research & Dev (5%)", description: "3M" },
    5: { title: "Team & Advisors (5%)", description: "3M" },
  },
  bn = "0x00000000000000000000000000000000",
  Yr = "Become A Part Of Nfinity",
  qr = "Setting a new standard in both technology and community.",
  Kr = [
    "IMG_6069.webp",
    "IMG_6076.webp",
    "IMG_6079.webp",
    "IMG_6080.webp",
    "IMG_6085.webp",
    "IMG_6086.webp",
    "IMG_6087.webp",
    "IMG_6088.webp",
    "IMG_6090.webp",
    "IMG_6092.webp",
    "IMG_6093.webp",
    "IMG_6094.webp",
    "IMG_6095.webp",
    "IMG_6097.webp",
    "IMG_6098.webp",
    "IMG_6101.webp",
    "IMG_6104.webp",
    "IMG_6105.webp",
    "IMG_6106.webp",
    "IMG_6107.webp",
    "IMG_6111.webp",
    "IMG_6112.webp",
    "IMG_6114.webp",
    "IMG_6116.webp",
    "IMG_6118.webp",
  ],
  Jr = {
    technology: {
      title: "Technology",
      contentTitle: `"It's not that we use technology, we live technology." <br/>
		-Godfrey Reggio <br/>`,
      content: `What is technology? <br/><br/>
		It's a word you hear everyday, yet it's often misunderstood. <br/><br/>
		At its core, technology is the application of knowledge, tools, or methods to solve problems and make life easier. <br/><br/>
		It's not just about modern gadgets like smartphones or computers; it's about any invention that extends human capabilities. <br/><br/>
		From fire to the printing press to the internet, technology has always been about innovation and progress.<br/><br/>
		Take the wheel, for example. <br/><br/>
		It may seem simple, but when it was invented thousands of years ago, it changed everything. <br/><br/>
		By allowing us to move heavy objects efficiently, the wheel marked a pivotal moment in human history. <br/><br/>
		This is the essence of technology—creating tools that push the boundaries of what we can achieve.<br/><br/>
		And then, just twenty years ago, we witnessed the internet revolution. <br/><br/>
		It connected humanity in ways previously unimaginable, breaking down barriers and shrinking the world into a global community. <br/><br/>
		Think about it: twenty years ago, the idea of instantly sharing a photo with someone halfway around the globe seemed impossible. <br/><br/>
		Today, we do it every day with just a tap on our smartphones. <br/><br/>
		Streaming movies, working remotely, or accessing vast libraries of information—all of these are now effortless parts of daily life. <br/><br/>
		It's hard to imagine a world without the internet, but that was reality not too long ago.<br/><br/>
		This is how humans tend to think: confined within the bubble of their current experience. <br/><br/>
		But just as the wheel and the internet once expanded our bubble, the world is about to change again with AI. <br/><br/>
		And this time, we're here to ensure that this change is stable, equitable, and accessible.<br/><br/>
		For everyone.<br/><br/>
		NfinityAI is here to give everyone a fair chance to participate in the AI economy,<br/><br/>
		Create.<br/><br/>
		Use.<br/><br/>
		Earn.<br/><br/>
		Own.<br/><br/>
		Extend your human capabilities with the power of technology, simple. <br/><br/>
		In this new era, AI isn't just a tool; it's going to be synonymous with power. <br/><br/>
		And power should belong to everyone, not just a select few.<br/><br/>
		AI, Decentralized.<br/><br/>
		For humanity<br/><br/>
		To Nfinity and Beyond, Together. <br/><br/>
		`,
    },
    community: {
      title: "Community",
      contentTitle: `<strong>"The ones who are crazy enough to think they can change the world are the ones who do."</strong><br/>
 <strong>– Steve Jobs</strong> <br/>`,
      content: `
 Movements begin with a spark—a vision shared by a group of people who refuse to accept things as they are. <br><br/>
 They turn that vision into reality. <br><br/>
 Throughout history, we've seen this. <br><br/>
 <ul style="list-style-type: disc; padding-left: 20px;">
 <li>The civil rights movement fought segregation, transforming societies. </li>
 <li>The internet connected the world, breaking down communication barriers.</li> 
 </ul>
 <br/>
 Each movement started with a community driven by a shared belief: that a better future is possible.<br><br/>
 <strong>Nfinity: The Movement for a Decentralized Future</strong><br><br/>
 Today, we face a new challenge. AI is becoming the backbone of society, shaping industries, communication, and everyday life. <br><br/>
 Yet, access to this power is controlled by a few corporations. <strong>90% of AI models are locked behind paywalls</strong>, serving only those who can afford them. We've seen what happens when power is centralized—the financial crash of 2008, the rise of social inequality, and the monopolization of technology.<br><br/>
 Nfinity is here to break that cycle. <br><br/>
 Just as the Renaissance unleashed human creativity and the industrial revolution democratized production, Nfinity is set to decentralize AI. We believe in a world where AI serves everyone, not just the powerful few.<br><br/>
 <strong>Why Nfinity? Why Now?</strong><br><br/>
 The AI market is projected to hit <strong>$1 trillion by 2030</strong>, and right now, most of that power is slipping into the hands of the elite. <br><br/>
 If we don't act, history will repeat itself, deepening the divide between those who have access to advanced technology and those who don't. <br><br/>
 Nfinity exists to prevent this.<br><br/>
 Movements aren't about short-term gains; they're about creating lasting change. <br><br/>
 When you join Nfinity, you're joining a community of people who understand that power, when shared, creates prosperity. <br><br/>
 <strong>Join the Movement</strong><br><br/>
 We believe in accessible AI and a decentralized world. <br><br/>
 History shows that change is driven by those who dare to be part of something bigger. <br><br/>
 This is where you belong.<br><br/>
 <strong>Become part of the future we are building together.</strong><br><br/>
 <strong>To Nfinity and Beyond, Together.</strong><br><br/>
 `,
    },
    1: {
      title: "Stage 1: Infinite AI models Accessible to All",
      contentTitle: `"One way to understand human progress is to look at how technology has made products and services—once reserved for the elite—progressively more accessible and affordable."<br/>
– Dan Schulman, CEO of PayPal<br/>`,
      content: `For too long, AI has been kept behind barriers—too complex for most, too expensive for the rest. <br><br>
Most people have heard of AI, but <strong>only 30%</strong> of U.S. adults can actually identify what it does. <br><br>
That gap in understanding comes from how AI has been packaged: confusing interfaces, hidden behind expensive subscriptions that charge you for things you'll never use. <br><br>
<strong>84% of PC users</strong> are unwilling to pay extra for these AI-enhanced features because, quite simply, they don't see the point.<br><br>
This is where <strong>Nfinity</strong> steps in. <br><br>
We're not here to sell subscriptions; we're here to open the doors to AI for everyone. <br><br>
<strong>Stage One</strong> gives you access to a wide range of AI models without tying you down to monthly fees. You only pay for what you need, when you need it.<br><br>
Think of it this way: other platforms make you buy the whole toolbox when all you needed was a hammer. <br><br>
Nfinity changes that. <br><br>
Need to generate a video? Just pay for that one use. <br><br>
Looking for text-to-image models? <br><br>
It's right there, priced for the moment you need it. No extra baggage.<br><br>
And the key to unlocking this? <strong>$NFNT</strong><br><br>
 <ul style="list-style-type: disc; padding-left: 20px;">
<li>Free credits.</li>
<li>Early access to exclusive models.</li>
</ul><br>
This isn't just about making AI accessible; it's about <strong>democratizing power.</strong> <br><br>
AI can boost productivity by up to <strong>40%</strong> in businesses, but why stop there? <br><br>
When anyone—small businesses, creators, freelancers—can tap into that power, the possibilities for growth are endless. <br><br>
Stage One is us saying, "Here it is. AI, simplified and affordable. Yours to use."<br><br>
That's the promise of Nfinity. <br><br>
No complicated subscriptions. No hoops to jump through. Just <strong>AI for everyone,</strong> right when you need it.<br><br>
To Nfinity and Beyond, Together.<br><br>
`,
    },
    2: {
      title: "Stage 2: Create, Deploy, Earn",
      contentTitle: `“The future of AI is not just about a few key companies but will involve everyone.”<br/>
<strong>-Satya Nadella</strong> <br/>`,
      content: `Everyone's talking about AI, but building it? <br><br>
That's a different story. <br><br>
While millions of developers are eager to work with AI, over <strong>60%</strong> struggle with access to the right tools, high costs, and complex workflows.<br><br>
<strong>Stage Two</strong> of NfinityAI changes all of that. We're giving developers the power to create, deploy, and earn from AI with simplicity and freedom.<br><br>
Our platform isn't just another tool—it's an entire ecosystem for creation. Beginners can use easy settings, while developers can dive into advanced configurations. <br><br>
The models you build become part of a growing library, accessible to all. And when your model is used, <strong>you earn</strong>—no barriers, just opportunities.<br><br>
But we don't stop at creation. <br><br>
Stage Two introduces <strong>workflow automation</strong> to simplify AI development. <br><br>
Think of it like Zapier—a $5 billion company—because it saves people hours of work. <br><br>
We're bringing that same efficiency to AI, letting developers automate tasks and workflows. <br><br>
With Nfinity, AI becomes a tool that works for you, not the other way around.<br><br>
Peter Drucker believed in decentralizing power. <br><br>
We're bringing that philosophy to AI by giving everyone—not just big corporations—the ability to use and profit from this technology. <br><br>
With NfinityAI, you don't just use AI; you shape the future of it.<br><br>
<strong>In short:</strong><br><br>
One platform.<br>
Use, create, automate, earn.<br>
The future of AI starts here.<br><br>
To Nfinity and Beyond, Together<br><br>
`,
    },
    roadmap: {
      title: "Infinite Roadmap:",
      contentTitle: `“Technology isn't just about convenience; it's about saving the one resource we can't create—time.”<br/>
— Balaji Srinivasan. <br/>`,
      content: `Technology exists to make us faster and more efficient. Whether it's improving communication, accelerating business, or shrinking the world to the size of a smartphone, the end goal is always the same: <strong>to save time.</strong><br><br>
This drive for efficiency is why mobile phones went from luxury gadgets to essential tools, becoming a necessity in just 40 years, growing to <strong>7.1 billion users globally.</strong><br><br>
Now, AI is on the same path. With <strong>250 million users</strong> in 2023, it's clear that the future belongs to artificial intelligence. The same way mobile phones revolutionized how we interact with the world, AI is changing how we think, work, and create.<br><br>
NFINITY is at the forefront of this revolution. We're not just here to offer another AI solution—we're here to save you time, money, and unnecessary energy.<br><br>
<strong>NFINITY opens the door to infinite possibilities</strong> in a world where AI is the next evolution of human progress.<br><br>
To Nfinity and Beyond, Together.<br><br>
`,
    },
  },
  En = "-",
  ki = (s) => {
    const e = Ii(s),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: l } = s;
    return {
      getClassGroupId: (r) => {
        const a = r.split(En);
        return a[0] === "" && a.length !== 1 && a.shift(), Qr(a, e) || Ei(r);
      },
      getConflictingClassGroupIds: (r, a) => {
        const i = t[r] || [];
        return a && l[r] ? [...i, ...l[r]] : i;
      },
    };
  },
  Qr = (s, e) => {
    var r;
    if (s.length === 0) return e.classGroupId;
    const t = s[0],
      l = e.nextPart.get(t),
      n = l ? Qr(s.slice(1), l) : void 0;
    if (n) return n;
    if (e.validators.length === 0) return;
    const o = s.join(En);
    return (r = e.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : r.classGroupId;
  },
  Qn = /^\[(.+)\]$/,
  Ei = (s) => {
    if (Qn.test(s)) {
      const e = Qn.exec(s)[1],
        t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  },
  Ii = (s) => {
    const { theme: e, prefix: t } = s,
      l = { nextPart: new Map(), validators: [] };
    return (
      Mi(Object.entries(s.classGroups), t).forEach(([o, r]) => {
        vn(r, l, o, e);
      }),
      l
    );
  },
  vn = (s, e, t, l) => {
    s.forEach((n) => {
      if (typeof n == "string") {
        const o = n === "" ? e : er(e, n);
        o.classGroupId = t;
        return;
      }
      if (typeof n == "function") {
        if (Ci(n)) {
          vn(n(l), e, t, l);
          return;
        }
        e.validators.push({ validator: n, classGroupId: t });
        return;
      }
      Object.entries(n).forEach(([o, r]) => {
        vn(r, er(e, o), t, l);
      });
    });
  },
  er = (s, e) => {
    let t = s;
    return (
      e.split(En).forEach((l) => {
        t.nextPart.has(l) ||
          t.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (t = t.nextPart.get(l));
      }),
      t
    );
  },
  Ci = (s) => s.isThemeGetter,
  Mi = (s, e) =>
    e
      ? s.map(([t, l]) => {
          const n = l.map((o) =>
            typeof o == "string"
              ? e + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([r, a]) => [e + r, a])
                )
              : o
          );
          return [t, n];
        })
      : s,
  Ti = (s) => {
    if (s < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      t = new Map(),
      l = new Map();
    const n = (o, r) => {
      t.set(o, r), e++, e > s && ((e = 0), (l = t), (t = new Map()));
    };
    return {
      get(o) {
        let r = t.get(o);
        if (r !== void 0) return r;
        if ((r = l.get(o)) !== void 0) return n(o, r), r;
      },
      set(o, r) {
        t.has(o) ? t.set(o, r) : n(o, r);
      },
    };
  },
  ei = "!",
  xi = (s) => {
    const { separator: e, experimentalParseClassName: t } = s,
      l = e.length === 1,
      n = e[0],
      o = e.length,
      r = (a) => {
        const i = [];
        let p = 0,
          m = 0,
          g;
        for (let k = 0; k < a.length; k++) {
          let b = a[k];
          if (p === 0) {
            if (b === n && (l || a.slice(k, k + o) === e)) {
              i.push(a.slice(m, k)), (m = k + o);
              continue;
            }
            if (b === "/") {
              g = k;
              continue;
            }
          }
          b === "[" ? p++ : b === "]" && p--;
        }
        const _ = i.length === 0 ? a : a.substring(m),
          M = _.startsWith(ei),
          w = M ? _.substring(1) : _,
          y = g && g > m ? g - m : void 0;
        return {
          modifiers: i,
          hasImportantModifier: M,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        };
      };
    return t ? (a) => t({ className: a, parseClassName: r }) : r;
  },
  Ai = (s) => {
    if (s.length <= 1) return s;
    const e = [];
    let t = [];
    return (
      s.forEach((l) => {
        l[0] === "[" ? (e.push(...t.sort(), l), (t = [])) : t.push(l);
      }),
      e.push(...t.sort()),
      e
    );
  },
  Si = (s) => ({ cache: Ti(s.cacheSize), parseClassName: xi(s), ...ki(s) }),
  Di = /\s+/,
  Ni = (s, e) => {
    const {
        parseClassName: t,
        getClassGroupId: l,
        getConflictingClassGroupIds: n,
      } = e,
      o = [],
      r = s.trim().split(Di);
    let a = "";
    for (let i = r.length - 1; i >= 0; i -= 1) {
      const p = r[i],
        {
          modifiers: m,
          hasImportantModifier: g,
          baseClassName: _,
          maybePostfixModifierPosition: M,
        } = t(p);
      let w = !!M,
        y = l(w ? _.substring(0, M) : _);
      if (!y) {
        if (!w) {
          a = p + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = l(_)), !y)) {
          a = p + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const k = Ai(m).join(":"),
        b = g ? k + ei : k,
        E = b + y;
      if (o.includes(E)) continue;
      o.push(E);
      const A = n(y, w);
      for (let T = 0; T < A.length; ++T) {
        const S = A[T];
        o.push(b + S);
      }
      a = p + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Vi() {
  let s = 0,
    e,
    t,
    l = "";
  for (; s < arguments.length; )
    (e = arguments[s++]) && (t = ti(e)) && (l && (l += " "), (l += t));
  return l;
}
const ti = (s) => {
  if (typeof s == "string") return s;
  let e,
    t = "";
  for (let l = 0; l < s.length; l++)
    s[l] && (e = ti(s[l])) && (t && (t += " "), (t += e));
  return t;
};
function Li(s, ...e) {
  let t,
    l,
    n,
    o = r;
  function r(i) {
    const p = e.reduce((m, g) => g(m), s());
    return (t = Si(p)), (l = t.cache.get), (n = t.cache.set), (o = a), a(i);
  }
  function a(i) {
    const p = l(i);
    if (p) return p;
    const m = Ni(i, t);
    return n(i, m), m;
  }
  return function () {
    return o(Vi.apply(null, arguments));
  };
}
const Je = (s) => {
    const e = (t) => t[s] || [];
    return (e.isThemeGetter = !0), e;
  },
  li = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  zi = /^\d+\/\d+$/,
  $i = new Set(["px", "full", "screen"]),
  Gi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Pi =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Oi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Hi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ji =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $l = (s) => Ns(s) || $i.has(s) || zi.test(s),
  fs = (s) => Ls(s, "length", Yi),
  Ns = (s) => !!s && !Number.isNaN(Number(s)),
  dn = (s) => Ls(s, "number", Ns),
  Ps = (s) => !!s && Number.isInteger(Number(s)),
  Bi = (s) => s.endsWith("%") && Ns(s.slice(0, -1)),
  de = (s) => li.test(s),
  us = (s) => Gi.test(s),
  Wi = new Set(["length", "size", "percentage"]),
  Fi = (s) => Ls(s, Wi, si),
  Ui = (s) => Ls(s, "position", si),
  Ri = new Set(["image", "url"]),
  Zi = (s) => Ls(s, Ri, Ki),
  Xi = (s) => Ls(s, "", qi),
  Os = () => !0,
  Ls = (s, e, t) => {
    const l = li.exec(s);
    return l
      ? l[1]
        ? typeof e == "string"
          ? l[1] === e
          : e.has(l[1])
        : t(l[2])
      : !1;
  },
  Yi = (s) => Pi.test(s) && !Oi.test(s),
  si = () => !1,
  qi = (s) => Hi.test(s),
  Ki = (s) => ji.test(s),
  Ji = () => {
    const s = Je("colors"),
      e = Je("spacing"),
      t = Je("blur"),
      l = Je("brightness"),
      n = Je("borderColor"),
      o = Je("borderRadius"),
      r = Je("borderSpacing"),
      a = Je("borderWidth"),
      i = Je("contrast"),
      p = Je("grayscale"),
      m = Je("hueRotate"),
      g = Je("invert"),
      _ = Je("gap"),
      M = Je("gradientColorStops"),
      w = Je("gradientColorStopPositions"),
      y = Je("inset"),
      k = Je("margin"),
      b = Je("opacity"),
      E = Je("padding"),
      A = Je("saturate"),
      T = Je("scale"),
      S = Je("sepia"),
      N = Je("skew"),
      D = Je("space"),
      z = Je("translate"),
      L = () => ["auto", "contain", "none"],
      V = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", de, e],
      G = () => [de, e],
      P = () => ["", $l, fs],
      R = () => ["auto", Ns, de],
      le = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      K = () => ["solid", "dashed", "dotted", "double", "none"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      J = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      ee = () => ["", "0", de],
      he = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      re = () => [Ns, de];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Os],
        spacing: [$l, fs],
        blur: ["none", "", us, de],
        brightness: re(),
        borderColor: [s],
        borderRadius: ["none", "", "full", us, de],
        borderSpacing: G(),
        borderWidth: P(),
        contrast: re(),
        grayscale: ee(),
        hueRotate: re(),
        invert: ee(),
        gap: G(),
        gradientColorStops: [s],
        gradientColorStopPositions: [Bi, fs],
        inset: $(),
        margin: $(),
        opacity: re(),
        padding: G(),
        saturate: re(),
        scale: re(),
        sepia: ee(),
        skew: re(),
        space: G(),
        translate: G(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", de] }],
        container: ["container"],
        columns: [{ columns: [us] }],
        "break-after": [{ "break-after": he() }],
        "break-before": [{ "break-before": he() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...le(), de] }],
        overflow: [{ overflow: V() }],
        "overflow-x": [{ "overflow-x": V() }],
        "overflow-y": [{ "overflow-y": V() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Ps, de] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", de] }],
        grow: [{ grow: ee() }],
        shrink: [{ shrink: ee() }],
        order: [{ order: ["first", "last", "none", Ps, de] }],
        "grid-cols": [{ "grid-cols": [Os] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Ps, de] }, de] }],
        "col-start": [{ "col-start": R() }],
        "col-end": [{ "col-end": R() }],
        "grid-rows": [{ "grid-rows": [Os] }],
        "row-start-end": [{ row: ["auto", { span: [Ps, de] }, de] }],
        "row-start": [{ "row-start": R() }],
        "row-end": [{ "row-end": R() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", de] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", de] }],
        gap: [{ gap: [_] }],
        "gap-x": [{ "gap-x": [_] }],
        "gap-y": [{ "gap-y": [_] }],
        "justify-content": [{ justify: ["normal", ...J()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...J(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...J(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [E] }],
        px: [{ px: [E] }],
        py: [{ py: [E] }],
        ps: [{ ps: [E] }],
        pe: [{ pe: [E] }],
        pt: [{ pt: [E] }],
        pr: [{ pr: [E] }],
        pb: [{ pb: [E] }],
        pl: [{ pl: [E] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [D] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [D] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, e] }],
        "min-w": [{ "min-w": [de, e, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              de,
              e,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [us] },
              us,
            ],
          },
        ],
        h: [{ h: [de, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [de, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [de, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [de, e, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", us, fs] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              dn,
            ],
          },
        ],
        "font-family": [{ font: [Os] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              de,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ns, dn] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              $l,
              de,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", de] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", de] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [s] }],
        "placeholder-opacity": [{ "placeholder-opacity": [b] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [s] }],
        "text-opacity": [{ "text-opacity": [b] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...K(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", $l, fs] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", $l, de] }],
        "text-decoration-color": [{ decoration: [s] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: G() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              de,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", de] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [b] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...le(), Ui] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Fi] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Zi,
            ],
          },
        ],
        "bg-color": [{ bg: [s] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [M] }],
        "gradient-via": [{ via: [M] }],
        "gradient-to": [{ to: [M] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [b] }],
        "border-style": [{ border: [...K(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [b] }],
        "divide-style": [{ divide: K() }],
        "border-color": [{ border: [n] }],
        "border-color-x": [{ "border-x": [n] }],
        "border-color-y": [{ "border-y": [n] }],
        "border-color-t": [{ "border-t": [n] }],
        "border-color-r": [{ "border-r": [n] }],
        "border-color-b": [{ "border-b": [n] }],
        "border-color-l": [{ "border-l": [n] }],
        "divide-color": [{ divide: [n] }],
        "outline-style": [{ outline: ["", ...K()] }],
        "outline-offset": [{ "outline-offset": [$l, de] }],
        "outline-w": [{ outline: [$l, fs] }],
        "outline-color": [{ outline: [s] }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [s] }],
        "ring-opacity": [{ "ring-opacity": [b] }],
        "ring-offset-w": [{ "ring-offset": [$l, fs] }],
        "ring-offset-color": [{ "ring-offset": [s] }],
        shadow: [{ shadow: ["", "inner", "none", us, Xi] }],
        "shadow-color": [{ shadow: [Os] }],
        opacity: [{ opacity: [b] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": W() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [t] }],
        brightness: [{ brightness: [l] }],
        contrast: [{ contrast: [i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", us, de] }],
        grayscale: [{ grayscale: [p] }],
        "hue-rotate": [{ "hue-rotate": [m] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [A] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [t] }],
        "backdrop-brightness": [{ "backdrop-brightness": [l] }],
        "backdrop-contrast": [{ "backdrop-contrast": [i] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [p] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [m] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [b] }],
        "backdrop-saturate": [{ "backdrop-saturate": [A] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [r] }],
        "border-spacing-x": [{ "border-spacing-x": [r] }],
        "border-spacing-y": [{ "border-spacing-y": [r] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              de,
            ],
          },
        ],
        duration: [{ duration: re() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", de] }],
        delay: [{ delay: re() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", de] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [T] }],
        "scale-x": [{ "scale-x": [T] }],
        "scale-y": [{ "scale-y": [T] }],
        rotate: [{ rotate: [Ps, de] }],
        "translate-x": [{ "translate-x": [z] }],
        "translate-y": [{ "translate-y": [z] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              de,
            ],
          },
        ],
        accent: [{ accent: ["auto", s] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              de,
            ],
          },
        ],
        "caret-color": [{ caret: [s] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": G() }],
        "scroll-mx": [{ "scroll-mx": G() }],
        "scroll-my": [{ "scroll-my": G() }],
        "scroll-ms": [{ "scroll-ms": G() }],
        "scroll-me": [{ "scroll-me": G() }],
        "scroll-mt": [{ "scroll-mt": G() }],
        "scroll-mr": [{ "scroll-mr": G() }],
        "scroll-mb": [{ "scroll-mb": G() }],
        "scroll-ml": [{ "scroll-ml": G() }],
        "scroll-p": [{ "scroll-p": G() }],
        "scroll-px": [{ "scroll-px": G() }],
        "scroll-py": [{ "scroll-py": G() }],
        "scroll-ps": [{ "scroll-ps": G() }],
        "scroll-pe": [{ "scroll-pe": G() }],
        "scroll-pt": [{ "scroll-pt": G() }],
        "scroll-pr": [{ "scroll-pr": G() }],
        "scroll-pb": [{ "scroll-pb": G() }],
        "scroll-pl": [{ "scroll-pl": G() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", de] },
        ],
        fill: [{ fill: [s, "none"] }],
        "stroke-w": [{ stroke: [$l, fs, dn] }],
        stroke: [{ stroke: [s, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Qi = Li(Ji);
function ni(s) {
  var e,
    t,
    l = "";
  if (typeof s == "string" || typeof s == "number") l += s;
  else if (typeof s == "object")
    if (Array.isArray(s)) {
      var n = s.length;
      for (e = 0; e < n; e++)
        s[e] && (t = ni(s[e])) && (l && (l += " "), (l += t));
    } else for (t in s) s[t] && (l && (l += " "), (l += t));
  return l;
}
function eo() {
  for (var s, e, t = 0, l = "", n = arguments.length; t < n; t++)
    (s = arguments[t]) && (e = ni(s)) && (l && (l += " "), (l += e));
  return l;
}
function nn(...s) {
  return Qi(eo(s));
}
function ri(s) {
  if (!s || s === document.documentElement) return null;
  const t = window.getComputedStyle(s).getPropertyValue("overflow-x");
  return t === "auto" || t === "scroll" ? s : ri(s.parentElement);
}
function ii(s) {
  const e = document.getElementById(s);
  e && e.scrollIntoView({ behavior: "smooth" });
}
const ul = () => {
    document.querySelectorAll("video").forEach((e) => e.play());
  },
  to = (s, e) => {
    const t = window.pageYOffset,
      l = s - t;
    let n = null;
    const o = (r) => {
      n || (n = r);
      const a = r - n,
        i = Math.min(a / e, 1);
      window.scrollTo(0, t + l * i), i < 1 && requestAnimationFrame(o);
    };
    requestAnimationFrame(o);
  };
function tr(s) {
  let e,
    t,
    l,
    n,
    o,
    r = s[2].title + "",
    a,
    i,
    p = "CLOSE",
    m,
    g,
    _,
    M,
    w = s[2].contentTitle + "",
    y,
    k,
    b,
    E,
    A = s[2].content + "",
    T,
    S;
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("div")),
        (n = d("h2")),
        (o = new ae(!1)),
        (a = I()),
        (i = d("button")),
        (i.textContent = p),
        (m = I()),
        (g = d("div")),
        (_ = d("p")),
        (M = new ae(!1)),
        (y = d("br")),
        (k = I()),
        (b = d("p")),
        (E = new ae(!1)),
        this.h();
    },
    l(N) {
      e = h(N, "DIV", { class: !0, "aria-hidden": !0 });
      var D = v(e);
      t = h(D, "DIV", { class: !0, role: !0 });
      var z = v(t);
      l = h(z, "DIV", { class: !0 });
      var L = v(l);
      n = h(L, "H2", { class: !0 });
      var V = v(n);
      (o = ce(V, !1)),
        V.forEach(u),
        (a = C(L)),
        (i = h(L, "BUTTON", { class: !0, "data-svelte-h": !0 })),
        _e(i) !== "svelte-tnm3sc" && (i.textContent = p),
        L.forEach(u),
        (m = C(z)),
        (g = h(z, "DIV", { class: !0 }));
      var $ = v(g);
      _ = h($, "P", { class: !0 });
      var G = v(_);
      (M = ce(G, !1)),
        (y = h(G, "BR", {})),
        G.forEach(u),
        (k = C($)),
        (b = h($, "P", { class: !0 }));
      var P = v(b);
      (E = ce(P, !1)),
        P.forEach(u),
        $.forEach(u),
        z.forEach(u),
        D.forEach(u),
        this.h();
    },
    h() {
      (o.a = null),
        f(n, "class", "title svelte-1bo3sas"),
        f(i, "class", "closeButton svelte-1bo3sas"),
        f(
          l,
          "class",
          "flex h-[84px] items-center justify-between border-b border-white"
        ),
        (M.a = y),
        f(_, "class", "content-title svelte-1bo3sas"),
        (E.a = null),
        f(b, "class", "content svelte-1bo3sas"),
        f(g, "class", "description-container svelte-1bo3sas"),
        f(t, "class", "modal svelte-1bo3sas"),
        f(t, "role", "dialog"),
        f(e, "class", "modal-backdrop svelte-1bo3sas"),
        f(e, "aria-hidden", "true");
    },
    m(N, D) {
      O(N, e, D),
        c(e, t),
        c(t, l),
        c(l, n),
        o.m(r, n),
        c(l, a),
        c(l, i),
        c(t, m),
        c(t, g),
        c(g, _),
        M.m(w, _),
        c(_, y),
        c(g, k),
        c(g, b),
        E.m(A, b),
        s[6](t),
        T ||
          ((S = [
            fe(i, "click", s[5]),
            fe(t, "keydown", s[3]),
            fe(e, "click", kn(s[7])),
          ]),
          (T = !0));
    },
    p(N, D) {
      D & 4 && r !== (r = N[2].title + "") && o.p(r),
        D & 4 && w !== (w = N[2].contentTitle + "") && M.p(w),
        D & 4 && A !== (A = N[2].content + "") && E.p(A);
    },
    d(N) {
      N && u(e), s[6](null), (T = !1), Ml(S);
    },
  };
}
function lo(s) {
  let e,
    t = s[0] && tr(s);
  return {
    c() {
      t && t.c(), (e = pe());
    },
    l(l) {
      t && t.l(l), (e = pe());
    },
    m(l, n) {
      t && t.m(l, n), O(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = tr(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Be,
    o: Be,
    d(l) {
      l && u(e), t && t.d(l);
    },
  };
}
function so(s, e, t) {
  let l,
    { showModal: n } = e,
    { content: o } = e,
    r,
    a,
    i,
    p,
    m;
  const { key: g } = o,
    _ = () => {
      document.body.style.overflow = "hidden";
    },
    M = () => {
      document.body.style.overflow = "";
    },
    w = (T) => {
      T.key === "Tab"
        ? T.shiftKey
          ? document.activeElement === i && (T.preventDefault(), p.focus())
          : document.activeElement === p && (T.preventDefault(), i.focus())
        : T.key === "Escape" && t(0, (n = !1));
    },
    y = () => {
      (m = document.activeElement),
        _(),
        r &&
          ((a = r.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )),
          (i = a[0]),
          (p = a[a.length - 1]),
          i == null || i.focus());
    },
    k = () => {
      M(), m && m.focus();
    };
  yl(() => {
    console.log("key", l), n && y();
  }),
    yn(() => {
      k();
    });
  const b = () => t(0, (n = !1));
  function E(T) {
    Ae[T ? "unshift" : "push"](() => {
      (r = T), t(1, r);
    });
  }
  const A = () => t(0, (n = !1));
  return (
    (s.$$set = (T) => {
      "showModal" in T && t(0, (n = T.showModal)),
        "content" in T && t(4, (o = T.content));
    }),
    t(2, (l = Jr[g.trim()])),
    [n, r, l, w, o, b, E, A]
  );
}
class In extends Ze {
  constructor(e) {
    super(), Xe(this, e, so, lo, Se, { showModal: 0, content: 4 });
  }
}
function lr(s) {
  let e,
    t,
    l,
    n,
    o,
    r = s[2].title + "",
    a,
    i,
    p = "CLOSE",
    m,
    g,
    _,
    M,
    w = s[2].contentTitle + "",
    y,
    k,
    b,
    E,
    A = s[2].content + "",
    T,
    S;
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("div")),
        (n = d("h2")),
        (o = new ae(!1)),
        (a = I()),
        (i = d("button")),
        (i.textContent = p),
        (m = I()),
        (g = d("div")),
        (_ = d("p")),
        (M = new ae(!1)),
        (y = d("br")),
        (k = I()),
        (b = d("p")),
        (E = new ae(!1)),
        this.h();
    },
    l(N) {
      e = h(N, "DIV", { class: !0, "aria-hidden": !0 });
      var D = v(e);
      t = h(D, "DIV", { class: !0, role: !0 });
      var z = v(t);
      l = h(z, "DIV", { class: !0 });
      var L = v(l);
      n = h(L, "H2", { class: !0 });
      var V = v(n);
      (o = ce(V, !1)),
        V.forEach(u),
        (a = C(L)),
        (i = h(L, "BUTTON", { class: !0, "data-svelte-h": !0 })),
        _e(i) !== "svelte-tnm3sc" && (i.textContent = p),
        L.forEach(u),
        (m = C(z)),
        (g = h(z, "DIV", { class: !0 }));
      var $ = v(g);
      _ = h($, "P", { class: !0 });
      var G = v(_);
      (M = ce(G, !1)),
        (y = h(G, "BR", { class: !0 })),
        G.forEach(u),
        (k = C($)),
        (b = h($, "P", { class: !0 }));
      var P = v(b);
      (E = ce(P, !1)),
        P.forEach(u),
        $.forEach(u),
        z.forEach(u),
        D.forEach(u),
        this.h();
    },
    h() {
      (o.a = null),
        f(n, "class", "title svelte-1reove0"),
        f(i, "class", "closeButton svelte-1reove0"),
        f(
          l,
          "class",
          "flex h-[84px] items-center justify-between border-b border-white svelte-1reove0"
        ),
        (M.a = y),
        f(y, "class", "svelte-1reove0"),
        f(_, "class", "content-title svelte-1reove0"),
        (E.a = null),
        f(b, "class", "content svelte-1reove0"),
        f(g, "class", "description-container svelte-1reove0"),
        f(t, "class", "modal svelte-1reove0"),
        f(t, "role", "dialog"),
        f(e, "class", "modal-backdrop svelte-1reove0"),
        f(e, "aria-hidden", "true");
    },
    m(N, D) {
      O(N, e, D),
        c(e, t),
        c(t, l),
        c(l, n),
        o.m(r, n),
        c(l, a),
        c(l, i),
        c(t, m),
        c(t, g),
        c(g, _),
        M.m(w, _),
        c(_, y),
        c(g, k),
        c(g, b),
        E.m(A, b),
        s[6](t),
        T ||
          ((S = [
            fe(i, "click", s[5]),
            fe(t, "keydown", s[3]),
            fe(e, "click", kn(s[7])),
          ]),
          (T = !0));
    },
    p(N, D) {
      D & 4 && r !== (r = N[2].title + "") && o.p(r),
        D & 4 && w !== (w = N[2].contentTitle + "") && M.p(w),
        D & 4 && A !== (A = N[2].content + "") && E.p(A);
    },
    d(N) {
      N && u(e), s[6](null), (T = !1), Ml(S);
    },
  };
}
function no(s) {
  let e,
    t = s[0] && lr(s);
  return {
    c() {
      t && t.c(), (e = pe());
    },
    l(l) {
      t && t.l(l), (e = pe());
    },
    m(l, n) {
      t && t.m(l, n), O(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = lr(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Be,
    o: Be,
    d(l) {
      l && u(e), t && t.d(l);
    },
  };
}
function ro(s, e, t) {
  let l,
    { showModal: n } = e,
    { content: o } = e,
    r,
    a,
    i,
    p,
    m;
  const { key: g } = o,
    _ = () => {
      document.body.style.overflow = "hidden";
    },
    M = () => {
      document.body.style.overflow = "";
    },
    w = (T) => {
      T.key === "Tab"
        ? T.shiftKey
          ? document.activeElement === i && (T.preventDefault(), p.focus())
          : document.activeElement === p && (T.preventDefault(), i.focus())
        : T.key === "Escape" && t(0, (n = !1));
    },
    y = () => {
      (m = document.activeElement),
        _(),
        r &&
          ((a = r.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )),
          (i = a[0]),
          (p = a[a.length - 1]),
          i == null || i.focus());
    },
    k = () => {
      M(), m && m.focus();
    };
  yl(() => {
    console.log("key", l), n && y();
  }),
    yn(() => {
      k();
    });
  const b = () => t(0, (n = !1));
  function E(T) {
    Ae[T ? "unshift" : "push"](() => {
      (r = T), t(1, r);
    });
  }
  const A = () => t(0, (n = !1));
  return (
    (s.$$set = (T) => {
      "showModal" in T && t(0, (n = T.showModal)),
        "content" in T && t(4, (o = T.content));
    }),
    t(2, (l = Jr[g.trim()])),
    [n, r, l, w, o, b, E, A]
  );
}
class Cn extends Ze {
  constructor(e) {
    super(), Xe(this, e, ro, no, Se, { showModal: 0, content: 4 });
  }
}
function sr(s) {
  let e,
    t,
    l = " ",
    n,
    o,
    r;
  return {
    c() {
      (e = d("button")),
        (t = d("span")),
        (t.textContent = l),
        (n = He(s[3])),
        this.h();
    },
    l(a) {
      e = h(a, "BUTTON", { class: !0 });
      var i = v(e);
      (t = h(i, "SPAN", { "data-svelte-h": !0 })),
        _e(t) !== "svelte-1uypmr0" && (t.textContent = l),
        (n = je(i, s[3])),
        i.forEach(u),
        this.h();
    },
    h() {
      f(e, "class", "");
    },
    m(a, i) {
      O(a, e, i), c(e, t), c(e, n), o || ((r = fe(e, "click", s[9])), (o = !0));
    },
    p(a, i) {
      i & 8 && ll(n, a[3]);
    },
    d(a) {
      a && u(e), (o = !1), r();
    },
  };
}
function nr(s) {
  let e;
  return {
    c() {
      e = He(s[4]);
    },
    l(t) {
      e = je(t, s[4]);
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l & 16 && ll(e, t[4]);
    },
    d(t) {
      t && u(e);
    },
  };
}
function hn(s) {
  let e,
    t,
    l,
    n,
    o,
    r = s[3] && sr(s),
    a = s[4] && nr(s),
    i = [
      { id: s[5] },
      { class: "text svelte-mpa2mv" },
      { style: (o = s[3] ? "display: flex" : "") },
    ],
    p = {};
  for (let m = 0; m < i.length; m += 1) p = Vs(p, i[m]);
  return {
    c() {
      (e = d(s[2])),
        (t = new ae(!1)),
        (l = I()),
        r && r.c(),
        (n = I()),
        a && a.c(),
        this.h();
    },
    l(m) {
      e = h(m, (s[2] || "null").toUpperCase(), {
        id: !0,
        class: !0,
        style: !0,
      });
      var g = v(e);
      (t = ce(g, !1)),
        (l = C(g)),
        r && r.l(g),
        (n = C(g)),
        a && a.l(g),
        g.forEach(u),
        this.h();
    },
    h() {
      (t.a = l), hs(s[2])(e, p);
    },
    m(m, g) {
      O(m, e, g),
        t.m(s[1], e),
        c(e, l),
        r && r.m(e, null),
        c(e, n),
        a && a.m(e, null);
    },
    p(m, g) {
      g & 2 && t.p(m[1]),
        m[3]
          ? r
            ? r.p(m, g)
            : ((r = sr(m)), r.c(), r.m(e, n))
          : r && (r.d(1), (r = null)),
        m[4]
          ? a
            ? a.p(m, g)
            : ((a = nr(m)), a.c(), a.m(e, null))
          : a && (a.d(1), (a = null)),
        hs(m[2])(
          e,
          (p = on(i, [
            g & 32 && { id: m[5] },
            { class: "text svelte-mpa2mv" },
            g & 8 && o !== (o = m[3] ? "display: flex" : "") && { style: o },
          ]))
        );
    },
    d(m) {
      m && u(e), r && r.d(), a && a.d();
    },
  };
}
function rr(s) {
  let e, t, l;
  function n(r) {
    s[10](r);
  }
  let o = { content: s[7] };
  return (
    s[6] !== void 0 && (o.showModal = s[6]),
    (e = new In({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a & 128 && (i.content = r[7]),
          !t && a & 64 && ((t = !0), (i.showModal = r[6]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function ir(s) {
  let e, t, l;
  function n(r) {
    s[11](r);
  }
  let o = { content: s[7] };
  return (
    s[6] !== void 0 && (o.showModal = s[6]),
    (e = new Cn({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a & 128 && (i.content = r[7]),
          !t && a & 64 && ((t = !0), (i.showModal = r[6]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function io(s) {
  let e = s[2],
    t,
    l,
    n,
    o,
    r = s[2] && hn(s),
    a = s[6] && !s[0] && rr(s),
    i = s[6] && s[0] && ir(s);
  return {
    c() {
      r && r.c(), (t = I()), a && a.c(), (l = I()), i && i.c(), (n = pe());
    },
    l(p) {
      r && r.l(p), (t = C(p)), a && a.l(p), (l = C(p)), i && i.l(p), (n = pe());
    },
    m(p, m) {
      r && r.m(p, m),
        O(p, t, m),
        a && a.m(p, m),
        O(p, l, m),
        i && i.m(p, m),
        O(p, n, m),
        (o = !0);
    },
    p(p, [m]) {
      p[2]
        ? e
          ? Se(e, p[2])
            ? (r.d(1), (r = hn(p)), (e = p[2]), r.c(), r.m(t.parentNode, t))
            : r.p(p, m)
          : ((r = hn(p)), (e = p[2]), r.c(), r.m(t.parentNode, t))
        : e && (r.d(1), (r = null), (e = p[2])),
        p[6] && !p[0]
          ? a
            ? (a.p(p, m), m & 65 && H(a, 1))
            : ((a = rr(p)), a.c(), H(a, 1), a.m(l.parentNode, l))
          : a &&
            (wt(),
            j(a, 1, 1, () => {
              a = null;
            }),
            yt()),
        p[6] && p[0]
          ? i
            ? (i.p(p, m), m & 65 && H(i, 1))
            : ((i = ir(p)), i.c(), H(i, 1), i.m(n.parentNode, n))
          : i &&
            (wt(),
            j(i, 1, 1, () => {
              i = null;
            }),
            yt());
    },
    i(p) {
      o || (H(a), H(i), (o = !0));
    },
    o(p) {
      j(a), j(i), (o = !1);
    },
    d(p) {
      p && (u(t), u(l), u(n)), r && r.d(p), a && a.d(p), i && i.d(p);
    },
  };
}
function oo(s, e, t) {
  let { isMobile: l = !1 } = e,
    { title: n } = e,
    { element: o = "h2" } = e,
    { buttonText: r = void 0 } = e,
    { titleEnd: a = void 0 } = e,
    { id: i = void 0 } = e,
    p = !1,
    m = {};
  const g = (y) => {
      t(7, (m = { key: y.toLowerCase() })), t(6, (p = !0));
    },
    _ = () => g(r);
  function M(y) {
    (p = y), t(6, p);
  }
  function w(y) {
    (p = y), t(6, p);
  }
  return (
    (s.$$set = (y) => {
      "isMobile" in y && t(0, (l = y.isMobile)),
        "title" in y && t(1, (n = y.title)),
        "element" in y && t(2, (o = y.element)),
        "buttonText" in y && t(3, (r = y.buttonText)),
        "titleEnd" in y && t(4, (a = y.titleEnd)),
        "id" in y && t(5, (i = y.id));
    }),
    [l, n, o, r, a, i, p, m, g, _, M, w]
  );
}
class Rt extends Ze {
  constructor(e) {
    super(),
      Xe(this, e, oo, io, Se, {
        isMobile: 0,
        title: 1,
        element: 2,
        buttonText: 3,
        titleEnd: 4,
        id: 5,
      });
  }
}
const or =
  "data:image/svg+xml,%3csvg%20width='11'%20height='15'%20viewBox='0%200%2011%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8061%2014.9549C10.7613%2014.9848%2010.7019%2015%2010.6419%2015C10.5674%2015%2010.508%2014.9848%2010.4335%2014.9403L0.14905%207.80224C0.0593874%207.74249%200%207.62242%200%207.50234C0%207.38226%200.0593874%207.27741%200.14905%207.20243L10.4335%200.0644226C10.5377%20-0.0105534%2010.6868%20-0.0257825%2010.8061%200.0491935C10.9255%200.10894%2011%200.229016%2011%200.364332V14.6396C10.9994%2014.7749%2010.9249%2014.895%2010.8061%2014.9547V14.9549Z'%20fill='white'/%3e%3c/svg%3e";
function mn(s) {
  let e,
    t,
    l = [{ href: s[1] }, { class: "badge svelte-1nm1mnr" }],
    n = {};
  for (let o = 0; o < l.length; o += 1) n = Vs(n, l[o]);
  return {
    c() {
      (e = d(s[1] ? "a" : "p")), (t = new ae(!1)), this.h();
    },
    l(o) {
      e = h(o, ((s[1] ? "a" : "p") || "null").toUpperCase(), {
        href: !0,
        class: !0,
      });
      var r = v(e);
      (t = ce(r, !1)), r.forEach(u), this.h();
    },
    h() {
      (t.a = null), hs(s[1] ? "a" : "p")(e, n);
    },
    m(o, r) {
      O(o, e, r), t.m(s[0], e);
    },
    p(o, r) {
      r & 1 && t.p(o[0]),
        hs(o[1] ? "a" : "p")(
          e,
          (n = on(l, [
            r & 2 && { href: o[1] },
            { class: "badge svelte-1nm1mnr" },
          ]))
        );
    },
    d(o) {
      o && u(e);
    },
  };
}
function ao(s) {
  let e = s[1] ? "a" : "p",
    t,
    l = (s[1] ? "a" : "p") && mn(s);
  return {
    c() {
      l && l.c(), (t = pe());
    },
    l(n) {
      l && l.l(n), (t = pe());
    },
    m(n, o) {
      l && l.m(n, o), O(n, t, o);
    },
    p(n, [o]) {
      n[1],
        e
          ? Se(e, n[1] ? "a" : "p")
            ? (l.d(1),
              (l = mn(n)),
              (e = n[1] ? "a" : "p"),
              l.c(),
              l.m(t.parentNode, t))
            : l.p(n, o)
          : ((l = mn(n)), (e = n[1] ? "a" : "p"), l.c(), l.m(t.parentNode, t));
    },
    i: Be,
    o: Be,
    d(n) {
      n && u(t), l && l.d(n);
    },
  };
}
function co(s, e, t) {
  let { text: l = "" } = e,
    { href: n = void 0 } = e;
  return (
    (s.$$set = (o) => {
      "text" in o && t(0, (l = o.text)), "href" in o && t(1, (n = o.href));
    }),
    [l, n]
  );
}
class oi extends Ze {
  constructor(e) {
    super(), Xe(this, e, co, ao, Se, { text: 0, href: 1 });
  }
}
function ar(s, e, t) {
  const l = s.slice();
  return (l[23] = e[t]), (l[25] = t), l;
}
function cr(s) {
  let e, t;
  return (
    (e = new oi({ props: { text: "Pay Less. Use More." } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function fo(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", {
        src: !0,
        class: !0,
        alt: !0,
        style: !0,
        draggable: !0,
      })),
        this.h();
    },
    h() {
      ue(e.src, (t = s[23].src)) || f(e, "src", t),
        f(e, "class", "item-image svelte-2c489v"),
        f(e, "alt", s[23].title),
        f(e, "style", s[23].withLock ? "filter: blur(4px)" : ""),
        f(e, "draggable", !1);
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function uo(s) {
  let e,
    t = `<source src="${s[23].src}" type="video/mp4"/>`;
  return {
    c() {
      (e = d("video")), (e.innerHTML = t), this.h();
    },
    l(l) {
      (e = h(l, "VIDEO", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(e) !== "svelte-kx7hhd" && (e.innerHTML = t),
        this.h();
    },
    h() {
      (e.autoplay = !0),
        (e.loop = !0),
        (e.muted = !0),
        (e.playsInline = !0),
        f(e, "class", "item-image svelte-2c489v"),
        f(e, "style", s[23].withLock ? "filter: blur(4px)" : "");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ho(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = "/images/lock.webp")) || f(e, "src", t),
        f(e, "alt", ""),
        f(
          e,
          "class",
          "absolute left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%] object-cover svelte-2c489v"
        );
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function mo(s) {
  let e,
    t,
    l,
    n,
    o = s[23].description + "",
    r,
    a,
    i,
    p = s[23].title + "",
    m,
    g,
    _,
    M,
    w;
  function y(S, N) {
    return S[23].type === "video" ? uo : fo;
  }
  let b = y(s)(s),
    E = s[23].withLock && ho(),
    A = [
      { href: (M = s[23].link ? s[23].link : null) },
      { class: "item relative snap-center svelte-2c489v" },
      { style: (w = "height: " + s[6] + "px; width: " + s[5] + "px") },
    ],
    T = {};
  for (let S = 0; S < A.length; S += 1) T = Vs(T, A[S]);
  return {
    c() {
      (e = d(s[23].link ? "a" : "div")),
        (t = d("div")),
        (l = d("p")),
        (n = new ae(!1)),
        (r = I()),
        (a = d("p")),
        (i = new ae(!1)),
        (m = I()),
        (g = d("div")),
        b.c(),
        (_ = I()),
        E && E.c(),
        this.h();
    },
    l(S) {
      e = h(S, ((s[23].link ? "a" : "div") || "null").toUpperCase(), {
        href: !0,
        class: !0,
        style: !0,
      });
      var N = v(e);
      t = h(N, "DIV", { class: !0 });
      var D = v(t);
      l = h(D, "P", { class: !0, style: !0 });
      var z = v(l);
      (n = ce(z, !1)),
        z.forEach(u),
        (r = C(D)),
        (a = h(D, "P", { class: !0, style: !0 }));
      var L = v(a);
      (i = ce(L, !1)),
        L.forEach(u),
        D.forEach(u),
        (m = C(N)),
        (g = h(N, "DIV", { class: !0 }));
      var V = v(g);
      b.l(V), (_ = C(V)), E && E.l(V), V.forEach(u), N.forEach(u), this.h();
    },
    h() {
      (n.a = null),
        f(l, "class", "caption-description svelte-2c489v"),
        x(l, "font-size", s[3] + "px"),
        (i.a = null),
        f(a, "class", "caption-title svelte-2c489v"),
        x(a, "font-size", s[4] + "px"),
        f(t, "class", "caption svelte-2c489v"),
        f(g, "class", "relative h-full w-full"),
        hs(s[23].link ? "a" : "div")(e, T);
    },
    m(S, N) {
      O(S, e, N),
        c(e, t),
        c(t, l),
        n.m(o, l),
        c(t, r),
        c(t, a),
        i.m(p, a),
        c(e, m),
        c(e, g),
        b.m(g, null),
        c(g, _),
        E && E.m(g, null);
    },
    p(S, N) {
      N & 8 && x(l, "font-size", S[3] + "px"),
        N & 16 && x(a, "font-size", S[4] + "px"),
        hs(S[23].link ? "a" : "div")(
          e,
          (T = on(A, [
            { href: M },
            { class: "item relative snap-center svelte-2c489v" },
            N & 96 &&
              w !== (w = "height: " + S[6] + "px; width: " + S[5] + "px") && {
                style: w,
              },
          ]))
        );
    },
    d(S) {
      S && u(e), b.d(), E && E.d();
    },
  };
}
function fr(s) {
  let e,
    t,
    l = (s[23].link ? "a" : "div") && mo(s);
  return {
    c() {
      (e = d("li")), l && l.c(), (t = I()), this.h();
    },
    l(n) {
      e = h(n, "LI", { class: !0, style: !0 });
      var o = v(e);
      l && l.l(o), (t = C(o)), o.forEach(u), this.h();
    },
    h() {
      f(e, "class", "flex-shrink-0 snap-center overflow-hidden"),
        x(e, "width", s[5] + "px"),
        x(e, "height", s[6] + "px");
    },
    m(n, o) {
      O(n, e, o), l && l.m(e, null), c(e, t);
    },
    p(n, o) {
      n[23].link,
        l.p(n, o),
        o & 32 && x(e, "width", n[5] + "px"),
        o & 64 && x(e, "height", n[6] + "px");
    },
    d(n) {
      n && u(e), l && l.d(n);
    },
  };
}
function ur(s) {
  let e,
    t = "Pay Less. Use More.";
  return {
    c() {
      (e = d("div")), (e.textContent = t), this.h();
    },
    l(l) {
      (e = h(l, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(e) !== "svelte-1fkpyvo" && (e.textContent = t),
        this.h();
    },
    h() {
      f(
        e,
        "class",
        "bottom-[8px] left-[12px] flex h-[39.5px] w-[182px] items-center rounded-[70px] bg-[#006FB954] px-[32px] text-center text-[12px] text-white"
      );
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function po(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _ = `<img src="${or}" alt="" class="svelte-2c489v"/>`,
    M,
    w,
    y = `<img src="${or}" alt="" class="rotate-180 svelte-2c489v"/>`,
    k,
    b,
    E;
  l = new Rt({ props: { title: yi } });
  let A = !s[0] && cr(),
    T = gt(sn),
    S = [];
  for (let D = 0; D < T.length; D += 1) S[D] = fr(ar(s, T, D));
  let N = s[0] && ur();
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        Z(l.$$.fragment),
        (n = I()),
        A && A.c(),
        (o = I()),
        (r = d("ul"));
      for (let D = 0; D < S.length; D += 1) S[D].c();
      (a = I()),
        (i = d("div")),
        N && N.c(),
        (p = I()),
        (m = d("span")),
        (g = d("button")),
        (g.innerHTML = _),
        (M = I()),
        (w = d("button")),
        (w.innerHTML = y),
        this.h();
    },
    l(D) {
      e = h(D, "DIV", { class: !0 });
      var z = v(e);
      t = h(z, "DIV", { class: !0 });
      var L = v(t);
      X(l.$$.fragment, L),
        (n = C(L)),
        A && A.l(L),
        L.forEach(u),
        (o = C(z)),
        (r = h(z, "UL", { class: !0, style: !0 }));
      var V = v(r);
      for (let P = 0; P < S.length; P += 1) S[P].l(V);
      V.forEach(u), (a = C(z)), (i = h(z, "DIV", { class: !0, style: !0 }));
      var $ = v(i);
      N && N.l($), (p = C($)), (m = h($, "SPAN", { class: !0 }));
      var G = v(m);
      (g = h(G, "BUTTON", {
        "aria-label": !0,
        class: !0,
        "data-svelte-h": !0,
      })),
        _e(g) !== "svelte-gutaq1" && (g.innerHTML = _),
        (M = C(G)),
        (w = h(G, "BUTTON", {
          "aria-label": !0,
          class: !0,
          "data-svelte-h": !0,
        })),
        _e(w) !== "svelte-psfwm1" && (w.innerHTML = y),
        G.forEach(u),
        $.forEach(u),
        z.forEach(u),
        this.h();
    },
    h() {
      f(t, "class", "title svelte-2c489v"),
        f(
          r,
          "class",
          "scrollbar-hide flex snap-x snap-mandatory overflow-x-auto px-8 md:px-16 svelte-2c489v"
        ),
        x(r, "gap", s[1] + "px"),
        f(g, "aria-label", ""),
        f(g, "class", "svelte-2c489v"),
        f(w, "aria-label", ""),
        f(w, "class", "svelte-2c489v"),
        f(m, "class", "carousel-buttons svelte-2c489v"),
        f(i, "class", "carousel-bellow svelte-2c489v"),
        x(i, "justify-content", s[0] ? "space-between" : "end"),
        f(e, "class", "wrapper svelte-2c489v");
    },
    m(D, z) {
      O(D, e, z),
        c(e, t),
        Y(l, t, null),
        c(t, n),
        A && A.m(t, null),
        c(e, o),
        c(e, r);
      for (let L = 0; L < S.length; L += 1) S[L] && S[L].m(r, null);
      s[9](r),
        c(e, a),
        c(e, i),
        N && N.m(i, null),
        c(i, p),
        c(i, m),
        c(m, g),
        c(m, M),
        c(m, w),
        (k = !0),
        b || ((E = [fe(g, "click", s[10]), fe(w, "click", s[11])]), (b = !0));
    },
    p(D, [z]) {
      if (
        (D[0]
          ? A &&
            (wt(),
            j(A, 1, 1, () => {
              A = null;
            }),
            yt())
          : A
          ? z & 1 && H(A, 1)
          : ((A = cr()), A.c(), H(A, 1), A.m(t, null)),
        z & 120)
      ) {
        T = gt(sn);
        let L;
        for (L = 0; L < T.length; L += 1) {
          const V = ar(D, T, L);
          S[L] ? S[L].p(V, z) : ((S[L] = fr(V)), S[L].c(), S[L].m(r, null));
        }
        for (; L < S.length; L += 1) S[L].d(1);
        S.length = T.length;
      }
      (!k || z & 2) && x(r, "gap", D[1] + "px"),
        D[0] ? N || ((N = ur()), N.c(), N.m(i, p)) : N && (N.d(1), (N = null)),
        (!k || z & 1) &&
          x(i, "justify-content", D[0] ? "space-between" : "end");
    },
    i(D) {
      k || (H(l.$$.fragment, D), H(A), (k = !0));
    },
    o(D) {
      j(l.$$.fragment, D), j(A), (k = !1);
    },
    d(D) {
      D && u(e),
        q(l),
        A && A.d(),
        Tl(S, D),
        s[9](null),
        N && N.d(),
        (b = !1),
        Ml(E);
    },
  };
}
const go = 1e3;
function bo(s, e, t) {
  let l,
    n,
    o,
    r,
    a,
    i,
    p,
    { isMobile: m } = e,
    g;
  sn.length;
  let _,
    M = !1;
  const w = (S) => {
      const N = g.scrollWidth - g.clientWidth;
      let D = S === "next" ? g.scrollLeft + l : g.scrollLeft - l;
      (D = Math.max(0, Math.min(D, N))),
        D !== g.scrollLeft &&
          ((M = !0),
          clearTimeout(_),
          (_ = setTimeout(y, go)),
          g.scrollTo({ left: D, behavior: "smooth" }));
    },
    y = () => {
      (M = !1), g.scrollLeft;
    },
    k = () => {
      Math.floor(g.scrollLeft / o),
        sn.length -
          Math.ceil((g.scrollWidth - g.clientWidth - g.scrollLeft) / o);
    },
    b = () => {
      M || (clearTimeout(_), k());
    };
  yl(() => {
    k(), g.addEventListener("scroll", b);
    const S = g.querySelectorAll(".item");
    let N = 400;
    const D = new IntersectionObserver(
      (z) => {
        z.forEach((L, V) => {
          if (L.isIntersecting) {
            const $ = L.target;
            setTimeout(() => {
              ($.style.opacity = 1), D.unobserve($);
            }, V * N);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0 }
    );
    S.forEach((z) => {
      D.observe(z);
    });
  });
  function E(S) {
    Ae[S ? "unshift" : "push"](() => {
      (g = S), t(2, g);
    });
  }
  const A = () => w("prev"),
    T = () => w("next");
  return (
    (s.$$set = (S) => {
      "isMobile" in S && t(0, (m = S.isMobile));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(8, (l = m ? 216 : 448)),
        s.$$.dirty & 1,
        s.$$.dirty & 1 && t(1, (n = m ? 14 : 28)),
        s.$$.dirty & 258 && (o = l - n / 2),
        s.$$.dirty & 1 && t(6, (r = m ? 290 : 601)),
        s.$$.dirty & 1 && t(5, (a = m ? 202 : 420)),
        s.$$.dirty & 1 && t(4, (i = m ? 14 : 36)),
        s.$$.dirty & 1 && t(3, (p = m ? 12 : 24)),
        s.$$.dirty & 1;
    }),
    [m, n, g, p, i, a, r, w, l, E, A, T]
  );
}
class vo extends Ze {
  constructor(e) {
    super(), Xe(this, e, bo, po, Se, { isMobile: 0 });
  }
}
function _o(s) {
  let e;
  const t = s[9].default,
    l = mi(t, s, s[8], null);
  return {
    c() {
      l && l.c();
    },
    l(n) {
      l && l.l(n);
    },
    m(n, o) {
      l && l.m(n, o), (e = !0);
    },
    p(n, o) {
      l &&
        l.p &&
        (!e || o & 256) &&
        pi(l, t, n, n[8], e ? bi(t, n[8], o, null) : gi(n[8]), null);
    },
    i(n) {
      e || (H(l, n), (e = !0));
    },
    o(n) {
      j(l, n), (e = !1);
    },
    d(n) {
      l && l.d(n);
    },
  };
}
function wo(s) {
  let e, t, l;
  return {
    c() {
      (e = d("span")), (t = He(s[0])), this.h();
    },
    l(n) {
      e = h(n, "SPAN", { class: !0 });
      var o = v(e);
      (t = je(o, s[0])), o.forEach(u), this.h();
    },
    h() {
      f(
        e,
        "class",
        (l =
          ln(
            nn(
              " flex h-full w-full items-center justify-center rounded-[10px] text-center",
              s[4] === "textGradient" ? "textGradientSpan" : ""
            )
          ) + " svelte-1hz8tt0")
      );
    },
    m(n, o) {
      O(n, e, o), c(e, t);
    },
    p(n, o) {
      o & 1 && ll(t, n[0]),
        o & 16 &&
          l !==
            (l =
              ln(
                nn(
                  " flex h-full w-full items-center justify-center rounded-[10px] text-center",
                  n[4] === "textGradient" ? "textGradientSpan" : ""
                )
              ) + " svelte-1hz8tt0") &&
          f(e, "class", l);
    },
    i: Be,
    o: Be,
    d(n) {
      n && u(e);
    },
  };
}
function yo(s) {
  let e, t, l, n, o, r, a, i;
  const p = [wo, _o],
    m = [];
  function g(w, y) {
    return w[0] ? 0 : 1;
  }
  (t = g(s)), (l = m[t] = p[t](s));
  let _ = [
      {
        class: (n =
          ln(
            nn(
              "m-[2px] flex h-[41px] w-full items-center justify-center overflow-visible rounded-[10px] bg-black font-nippo text-[12px] text-white",
              s[4] && s[5],
              s[3]
            )
          ) + " svelte-1hz8tt0"),
      },
      { href: s[1] },
      { type: s[2] },
      { role: (o = s[7] === "a" ? "link" : "button") },
    ],
    M = {};
  for (let w = 0; w < _.length; w += 1) M = Vs(M, _[w]);
  return {
    c() {
      (e = d(s[7])), l.c(), this.h();
    },
    l(w) {
      e = h(w, (s[7] || "null").toUpperCase(), {
        class: !0,
        href: !0,
        type: !0,
        role: !0,
      });
      var y = v(e);
      l.l(y), y.forEach(u), this.h();
    },
    h() {
      hs(s[7])(e, M);
    },
    m(w, y) {
      O(w, e, y),
        m[t].m(e, null),
        (r = !0),
        a || ((i = fe(e, "click", s[6])), (a = !0));
    },
    p(w, y) {
      let k = t;
      (t = g(w)),
        t === k
          ? m[t].p(w, y)
          : (wt(),
            j(m[k], 1, 1, () => {
              m[k] = null;
            }),
            yt(),
            (l = m[t]),
            l ? l.p(w, y) : ((l = m[t] = p[t](w)), l.c()),
            H(l, 1),
            l.m(e, null)),
        hs(w[7])(
          e,
          (M = on(_, [
            (!r ||
              (y & 56 &&
                n !==
                  (n =
                    ln(
                      nn(
                        "m-[2px] flex h-[41px] w-full items-center justify-center overflow-visible rounded-[10px] bg-black font-nippo text-[12px] text-white",
                        w[4] && w[5],
                        w[3]
                      )
                    ) + " svelte-1hz8tt0"))) && { class: n },
            (!r || y & 2) && { href: w[1] },
            (!r || y & 4) && { type: w[2] },
            { role: o },
          ]))
        );
    },
    i(w) {
      r || (H(l), (r = !0));
    },
    o(w) {
      j(l), (r = !1);
    },
    d(w) {
      w && u(e), m[t].d(), (a = !1), i();
    },
  };
}
function ko(s) {
  let e,
    t = s[7] && yo(s);
  return {
    c() {
      t && t.c();
    },
    l(l) {
      t && t.l(l);
    },
    m(l, n) {
      t && t.m(l, n), (e = !0);
    },
    p(l, [n]) {
      l[7] && t.p(l, n);
    },
    i(l) {
      e || (H(t, l), (e = !0));
    },
    o(l) {
      j(t, l), (e = !1);
    },
    d(l) {
      t && t.d(l);
    },
  };
}
function Eo(s, e, t) {
  let l,
    { $$slots: n = {}, $$scope: o } = e,
    { text: r } = e,
    { href: a = void 0 } = e,
    { type: i = "button" } = e,
    { className: p = "" } = e,
    { gradient: m } = e;
  const g = $r(),
    _ = () => {
      g("click");
    };
  let M = a ? "a" : "button";
  return (
    (s.$$set = (w) => {
      "text" in w && t(0, (r = w.text)),
        "href" in w && t(1, (a = w.href)),
        "type" in w && t(2, (i = w.type)),
        "className" in w && t(3, (p = w.className)),
        "gradient" in w && t(4, (m = w.gradient)),
        "$$scope" in w && t(8, (o = w.$$scope));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 16 &&
        t(5, (l = m === "textGradient" ? "textGradient" : "borderGradient"));
    }),
    [r, a, i, p, m, l, _, M, o, n]
  );
}
class St extends Ze {
  constructor(e) {
    super(),
      Xe(this, e, Eo, ko, Se, {
        text: 0,
        href: 1,
        type: 2,
        className: 3,
        gradient: 4,
      });
  }
}
function Io(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = s[0])) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", " svelte-1vz76b2");
    },
    m(l, n) {
      O(l, e, n);
    },
    p(l, n) {
      n & 1 && !ue(e.src, (t = l[0])) && f(e, "src", t);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Co(s) {
  let e, t, l;
  return {
    c() {
      (e = d("video")), (t = d("source")), this.h();
    },
    l(n) {
      e = h(n, "VIDEO", { class: !0 });
      var o = v(e);
      (t = h(o, "SOURCE", { src: !0, type: !0 })), o.forEach(u), this.h();
    },
    h() {
      ue(t.src, (l = s[4])) || f(t, "src", l),
        f(t, "type", "video/mp4"),
        (e.autoplay = !0),
        (e.loop = !0),
        (e.muted = !0),
        (e.playsInline = !0),
        f(e, "class", "absolute h-[80%] rounded-full object-cover");
    },
    m(n, o) {
      O(n, e, o), c(e, t);
    },
    p(n, o) {
      o & 16 && !ue(t.src, (l = n[4])) && f(t, "src", l);
    },
    d(n) {
      n && u(e);
    },
  };
}
function Mo(s) {
  let e, t, l, n, o, r, a, i, p, m, g, _, M;
  function w(b, E) {
    return b[4] ? Co : Io;
  }
  let y = w(s),
    k = y(s);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("div")),
        k.c(),
        (n = I()),
        (o = d("span")),
        (r = new ae(!1)),
        (a = I()),
        (i = d("div")),
        (p = d("p")),
        (m = new ae(!1)),
        (g = I()),
        (_ = d("p")),
        (M = new ae(!1)),
        this.h();
    },
    l(b) {
      e = h(b, "DIV", { class: !0, style: !0 });
      var E = v(e);
      t = h(E, "DIV", { class: !0 });
      var A = v(t);
      l = h(A, "DIV", { class: !0, style: !0 });
      var T = v(l);
      k.l(T), T.forEach(u), (n = C(A)), (o = h(A, "SPAN", { class: !0 }));
      var S = v(o);
      (r = ce(S, !1)),
        S.forEach(u),
        (a = C(A)),
        (i = h(A, "DIV", { class: !0 }));
      var N = v(i);
      p = h(N, "P", { class: !0 });
      var D = v(p);
      (m = ce(D, !1)), D.forEach(u), (g = C(N)), (_ = h(N, "P", { class: !0 }));
      var z = v(_);
      (M = ce(z, !1)),
        z.forEach(u),
        N.forEach(u),
        A.forEach(u),
        E.forEach(u),
        this.h();
    },
    h() {
      f(l, "class", "image-container svelte-1vz76b2"),
        x(l, "height", s[7].images[s[5]]),
        (r.a = null),
        f(o, "class", "number svelte-1vz76b2"),
        (m.a = null),
        f(p, "class", "title svelte-1vz76b2"),
        (M.a = null),
        f(_, "class", "description svelte-1vz76b2"),
        f(i, "class", "content svelte-1vz76b2"),
        f(t, "class", "card svelte-1vz76b2"),
        f(e, "class", "wrapper svelte-1vz76b2"),
        x(e, "height", s[7].card[s[5]]),
        x(e, "--animation-delay", s[6] + "ms");
    },
    m(b, E) {
      O(b, e, E),
        c(e, t),
        c(t, l),
        k.m(l, null),
        c(t, n),
        c(t, o),
        r.m(s[3], o),
        c(t, a),
        c(t, i),
        c(i, p),
        m.m(s[1], p),
        c(i, g),
        c(i, _),
        M.m(s[2], _);
    },
    p(b, [E]) {
      y === (y = w(b)) && k
        ? k.p(b, E)
        : (k.d(1), (k = y(b)), k && (k.c(), k.m(l, null))),
        E & 32 && x(l, "height", b[7].images[b[5]]),
        E & 8 && r.p(b[3]),
        E & 2 && m.p(b[1]),
        E & 4 && M.p(b[2]),
        E & 32 && x(e, "height", b[7].card[b[5]]),
        E & 64 && x(e, "--animation-delay", b[6] + "ms");
    },
    i: Be,
    o: Be,
    d(b) {
      b && u(e), k.d();
    },
  };
}
function To(s, e, t) {
  let { src: l } = e,
    { title: n } = e,
    { description: o } = e,
    { stepNumber: r } = e,
    { animation: a = void 0 } = e,
    { size: i = "m" } = e,
    { animationDelay: p = 0 } = e;
  const m = {
    card: { s: "512px", m: "552px" },
    images: { s: "305px", m: "355px" },
  };
  return (
    `${crypto.randomUUID()}`,
    `${crypto.randomUUID()}`,
    (s.$$set = (g) => {
      "src" in g && t(0, (l = g.src)),
        "title" in g && t(1, (n = g.title)),
        "description" in g && t(2, (o = g.description)),
        "stepNumber" in g && t(3, (r = g.stepNumber)),
        "animation" in g && t(4, (a = g.animation)),
        "size" in g && t(5, (i = g.size)),
        "animationDelay" in g && t(6, (p = g.animationDelay));
    }),
    [l, n, o, r, a, i, p, m]
  );
}
class ai extends Ze {
  constructor(e) {
    super(),
      Xe(this, e, To, Mo, Se, {
        src: 0,
        title: 1,
        description: 2,
        stepNumber: 3,
        animation: 4,
        size: 5,
        animationDelay: 6,
      });
  }
}
function dr(s, e, t) {
  const l = s.slice();
  return (l[0] = e[t]), (l[2] = t), l;
}
function xo(s) {
  let e, t, l, n, o;
  t = new ai({
    props: {
      animationDelay: s[2] * 200,
      title: Ie[s[2]].title,
      description: Ie[s[2]].description,
      stepNumber: Ie[s[2]].stepNumber,
      animation: Ie[s[2]].animation,
      src: Ie[s[2]].src,
      size: s[2] % 4 >= 2 ? "s" : void 0,
    },
  });
  let r = s[2] + 1 < Ie.length && Ao(s);
  return {
    c() {
      (e = d("div")),
        Z(t.$$.fragment),
        (l = I()),
        r && r.c(),
        (n = I()),
        this.h();
    },
    l(a) {
      e = h(a, "DIV", { class: !0 });
      var i = v(e);
      X(t.$$.fragment, i),
        (l = C(i)),
        r && r.l(i),
        (n = C(i)),
        i.forEach(u),
        this.h();
    },
    h() {
      f(e, "class", "step-row svelte-1ga7ryg");
    },
    m(a, i) {
      O(a, e, i), Y(t, e, null), c(e, l), r && r.m(e, null), c(e, n), (o = !0);
    },
    p(a, i) {
      a[2] + 1 < Ie.length && r.p(a, i);
    },
    i(a) {
      o || (H(t.$$.fragment, a), H(r), (o = !0));
    },
    o(a) {
      j(t.$$.fragment, a), j(r), (o = !1);
    },
    d(a) {
      a && u(e), q(t), r && r.d();
    },
  };
}
function Ao(s) {
  let e, t;
  return (
    (e = new ai({
      props: {
        animationDelay: (s[2] + 1) * 200,
        title: Ie[s[2] + 1].title,
        description: Ie[s[2] + 1].description,
        stepNumber: Ie[s[2] + 1].stepNumber,
        animation: Ie[s[2] + 1].animation,
        src: Ie[s[2] + 1].src,
        size: s[2] % 4 >= 1 ? "s" : void 0,
      },
    })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      p: Be,
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function hr(s, e) {
  let t,
    l,
    n,
    o = e[2] % 2 === 0 && xo(e);
  return {
    key: s,
    first: null,
    c() {
      (t = pe()), o && o.c(), (l = pe()), this.h();
    },
    l(r) {
      (t = pe()), o && o.l(r), (l = pe()), this.h();
    },
    h() {
      this.first = t;
    },
    m(r, a) {
      O(r, t, a), o && o.m(r, a), O(r, l, a), (n = !0);
    },
    p(r, a) {
      (e = r), e[2] % 2 === 0 && o.p(e, a);
    },
    i(r) {
      n || (H(o), (n = !0));
    },
    o(r) {
      j(o), (n = !1);
    },
    d(r) {
      r && (u(t), u(l)), o && o.d(r);
    },
  };
}
function So(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p = "coming soon",
    m,
    g,
    _ = [],
    M = new Map(),
    w;
  (l = new Rt({ props: { title: Zr, id: "learnMore" } })),
    (r = new St({
      props: {
        text: "Push a model",
        gradient: "borderGradient",
        className: "w-[200px] h-[54px]",
      },
    }));
  let y = gt(Ie);
  const k = (b) => b[0].title;
  for (let b = 0; b < y.length; b += 1) {
    let E = dr(s, y, b),
      A = k(E);
    M.set(A, (_[b] = hr(A, E)));
  }
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        Z(l.$$.fragment),
        (n = I()),
        (o = d("span")),
        Z(r.$$.fragment),
        (a = I()),
        (i = d("p")),
        (i.textContent = p),
        (m = I()),
        (g = d("div"));
      for (let b = 0; b < _.length; b += 1) _[b].c();
      this.h();
    },
    l(b) {
      e = h(b, "DIV", { class: !0 });
      var E = v(e);
      t = h(E, "DIV", { class: !0 });
      var A = v(t);
      X(l.$$.fragment, A), (n = C(A)), (o = h(A, "SPAN", { class: !0 }));
      var T = v(o);
      X(r.$$.fragment, T),
        (a = C(T)),
        (i = h(T, "P", { class: !0, "data-svelte-h": !0 })),
        _e(i) !== "svelte-r3m10" && (i.textContent = p),
        T.forEach(u),
        A.forEach(u),
        (m = C(E)),
        (g = h(E, "DIV", { class: !0 }));
      var S = v(g);
      for (let N = 0; N < _.length; N += 1) _[N].l(S);
      S.forEach(u), E.forEach(u), this.h();
    },
    h() {
      f(
        i,
        "class",
        "absolute bottom-[-6px] left-1/2 flex -translate-x-1/2 rotate-[-3.7deg] transform items-center justify-center whitespace-nowrap rounded-[40px] bg-[#006FB9] px-[18px] text-center font-nippo text-[12px] leading-[16.2px] text-white"
      ),
        f(o, "class", "relative z-[2]"),
        f(t, "class", "title svelte-1ga7ryg"),
        f(g, "class", "steps relative z-[2] svelte-1ga7ryg"),
        f(e, "class", "wrapper svelte-1ga7ryg");
    },
    m(b, E) {
      O(b, e, E),
        c(e, t),
        Y(l, t, null),
        c(t, n),
        c(t, o),
        Y(r, o, null),
        c(o, a),
        c(o, i),
        c(e, m),
        c(e, g);
      for (let A = 0; A < _.length; A += 1) _[A] && _[A].m(g, null);
      w = !0;
    },
    p(b, [E]) {
      E & 0 &&
        ((y = gt(Ie)),
        wt(),
        (_ = Wr(_, E, k, 1, b, y, M, g, wi, hr, null, dr)),
        yt());
    },
    i(b) {
      if (!w) {
        H(l.$$.fragment, b), H(r.$$.fragment, b);
        for (let E = 0; E < y.length; E += 1) H(_[E]);
        w = !0;
      }
    },
    o(b) {
      j(l.$$.fragment, b), j(r.$$.fragment, b);
      for (let E = 0; E < _.length; E += 1) j(_[E]);
      w = !1;
    },
    d(b) {
      b && u(e), q(l), q(r);
      for (let E = 0; E < _.length; E += 1) _[E].d();
    },
  };
}
class Do extends Ze {
  constructor(e) {
    super(), Xe(this, e, null, So, Se, {});
  }
}
function rn(s) {
  return Object.prototype.toString.call(s) === "[object Date]";
}
function _n(s, e, t, l) {
  if (typeof t == "number" || rn(t)) {
    const n = l - t,
      o = (t - e) / (s.dt || 1 / 60),
      r = s.opts.stiffness * n,
      a = s.opts.damping * o,
      i = (r - a) * s.inv_mass,
      p = (o + i) * s.dt;
    return Math.abs(p) < s.opts.precision && Math.abs(n) < s.opts.precision
      ? l
      : ((s.settled = !1), rn(t) ? new Date(t.getTime() + p) : t + p);
  } else {
    if (Array.isArray(t)) return t.map((n, o) => _n(s, e[o], t[o], l[o]));
    if (typeof t == "object") {
      const n = {};
      for (const o in t) n[o] = _n(s, e[o], t[o], l[o]);
      return n;
    } else throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function No(s, e = {}) {
  const t = Pr(s),
    { stiffness: l = 0.15, damping: n = 0.8, precision: o = 0.01 } = e;
  let r,
    a,
    i,
    p = s,
    m = s,
    g = 1,
    _ = 0,
    M = !1;
  function w(k, b = {}) {
    m = k;
    const E = (i = {});
    return s == null || b.hard || (y.stiffness >= 1 && y.damping >= 1)
      ? ((M = !0), (r = gn()), (p = k), t.set((s = m)), Promise.resolve())
      : (b.soft && ((_ = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60)), (g = 0)),
        a ||
          ((r = gn()),
          (M = !1),
          (a = Br((A) => {
            if (M) return (M = !1), (a = null), !1;
            g = Math.min(g + _, 1);
            const T = {
                inv_mass: g,
                opts: y,
                settled: !0,
                dt: ((A - r) * 60) / 1e3,
              },
              S = _n(T, p, s, m);
            return (
              (r = A),
              (p = s),
              t.set((s = S)),
              T.settled && (a = null),
              !T.settled
            );
          }))),
        new Promise((A) => {
          a.promise.then(() => {
            E === i && A();
          });
        }));
  }
  const y = {
    set: w,
    update: (k, b) => w(k(m, s), b),
    subscribe: t.subscribe,
    stiffness: l,
    damping: n,
    precision: o,
  };
  return y;
}
function Vo(s) {
  const e = s - 1;
  return e * e * e + 1;
}
function wn(s, e) {
  if (s === e || s !== s) return () => s;
  const t = typeof s;
  if (t !== typeof e || Array.isArray(s) !== Array.isArray(e))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(s)) {
    const l = e.map((n, o) => wn(s[o], n));
    return (n) => l.map((o) => o(n));
  }
  if (t === "object") {
    if (!s || !e) throw new Error("Object cannot be null");
    if (rn(s) && rn(e)) {
      (s = s.getTime()), (e = e.getTime());
      const o = e - s;
      return (r) => new Date(s + r * o);
    }
    const l = Object.keys(e),
      n = {};
    return (
      l.forEach((o) => {
        n[o] = wn(s[o], e[o]);
      }),
      (o) => {
        const r = {};
        return (
          l.forEach((a) => {
            r[a] = n[a](o);
          }),
          r
        );
      }
    );
  }
  if (t === "number") {
    const l = e - s;
    return (n) => s + n * l;
  }
  throw new Error(`Cannot interpolate ${t} values`);
}
function Lo(s, e = {}) {
  const t = Pr(s);
  let l,
    n = s;
  function o(r, a) {
    if (s == null) return t.set((s = r)), Promise.resolve();
    n = r;
    let i = l,
      p = !1,
      {
        delay: m = 0,
        duration: g = 400,
        easing: _ = vi,
        interpolate: M = wn,
      } = Vs(Vs({}, e), a);
    if (g === 0)
      return i && (i.abort(), (i = null)), t.set((s = n)), Promise.resolve();
    const w = gn() + m;
    let y;
    return (
      (l = Br((k) => {
        if (k < w) return !0;
        p || ((y = M(s, r)), typeof g == "function" && (g = g(s, r)), (p = !0)),
          i && (i.abort(), (i = null));
        const b = k - w;
        return b > g ? (t.set((s = r)), !1) : (t.set((s = y(_(b / g)))), !0);
      })),
      l.promise
    );
  }
  return { set: o, update: (r, a) => o(r(n, s), a), subscribe: t.subscribe };
}
const zo = "" + new URL("../assets/swipe.CJsfKMtM.svg", import.meta.url).href;
function mr(s, e, t) {
  const l = s.slice();
  (l[15] = e[t]), (l[19] = t);
  const n = `outlineFilter_${l[15].title}+${l[19]}`;
  l[16] = n;
  const o = `imageMask_${l[15].title}+${l[19]}`;
  return (l[17] = o), l;
}
function pr(s) {
  let e, t, l;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(n) {
      (e = h(n, "IMG", { src: !0, alt: !0, class: !0, draggable: !0 })),
        this.h();
    },
    h() {
      ue(e.src, (t = Ie[s[6].x < 0 ? s[5] : s[4]].src)) || f(e, "src", t),
        f(e, "alt", (l = Ie[s[6].x < 0 ? s[5] : s[4]].title)),
        f(e, "class", "card-image svelte-1okyslt"),
        f(e, "draggable", "false");
    },
    m(n, o) {
      O(n, e, o);
    },
    p(n, o) {
      o & 112 &&
        !ue(e.src, (t = Ie[n[6].x < 0 ? n[5] : n[4]].src)) &&
        f(e, "src", t),
        o & 112 &&
          l !== (l = Ie[n[6].x < 0 ? n[5] : n[4]].title) &&
          f(e, "alt", l);
    },
    d(n) {
      n && u(e);
    },
  };
}
function gr(s) {
  let e, t, l, n;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(o) {
      (e = h(o, "IMG", {
        src: !0,
        style: !0,
        alt: !0,
        class: !0,
        draggable: !0,
      })),
        this.h();
    },
    h() {
      ue(e.src, (t = s[15].animationGif ? s[15].animationGif : s[15].src)) ||
        f(e, "src", t),
        f(e, "style", (l = s[15].animationGif ? "border-radius: 9999px;" : "")),
        f(e, "alt", (n = s[15].title)),
        f(e, "class", "card-image svelte-1okyslt"),
        f(e, "draggable", "false");
    },
    m(o, r) {
      O(o, e, r), s[12](e);
    },
    p(o, r) {
      r & 1 &&
        !ue(e.src, (t = o[15].animationGif ? o[15].animationGif : o[15].src)) &&
        f(e, "src", t),
        r & 1 &&
          l !== (l = o[15].animationGif ? "border-radius: 9999px;" : "") &&
          f(e, "style", l),
        r & 1 && n !== (n = o[15].title) && f(e, "alt", n);
    },
    d(o) {
      o && u(e), s[12](null);
    },
  };
}
function br(s, e) {
  let t,
    l,
    n,
    o = e[15].src,
    r,
    a,
    i,
    p = e[15].title + "",
    m,
    g,
    _,
    M = e[15].description + "",
    w,
    y,
    k,
    b = e[15].stepNumber + "",
    E,
    A,
    T,
    S,
    N = gr(e);
  return {
    key: s,
    first: null,
    c() {
      (t = d("div")),
        (l = d("div")),
        (n = d("div")),
        N.c(),
        (r = I()),
        (a = d("div")),
        (i = d("h3")),
        (m = He(p)),
        (g = I()),
        (_ = d("p")),
        (w = He(M)),
        (y = I()),
        (k = d("span")),
        (E = He(b)),
        (A = I()),
        this.h();
    },
    l(D) {
      t = h(D, "DIV", { class: !0, style: !0 });
      var z = v(t);
      l = h(z, "DIV", { class: !0 });
      var L = v(l);
      n = h(L, "DIV", { class: !0 });
      var V = v(n);
      N.l(V), (r = C(V)), (a = h(V, "DIV", { class: !0 }));
      var $ = v(a);
      i = h($, "H3", { class: !0 });
      var G = v(i);
      (m = je(G, p)), G.forEach(u), (g = C($)), (_ = h($, "P", { class: !0 }));
      var P = v(_);
      (w = je(P, M)),
        P.forEach(u),
        $.forEach(u),
        (y = C(V)),
        (k = h(V, "SPAN", { class: !0 }));
      var R = v(k);
      (E = je(R, b)),
        R.forEach(u),
        V.forEach(u),
        L.forEach(u),
        (A = C(z)),
        z.forEach(u),
        this.h();
    },
    h() {
      f(i, "class", "card-title svelte-1okyslt"),
        f(_, "class", "card-description svelte-1okyslt"),
        f(a, "class", "card-caption svelte-1okyslt"),
        f(k, "class", "step-number svelte-1okyslt"),
        f(n, "class", "card-content svelte-1okyslt"),
        f(l, "class", "card svelte-1okyslt"),
        f(t, "class", "card-wrapper svelte-1okyslt"),
        x(
          t,
          "transform",
          "translate3d(" + e[6].x + "px, 0, 0) rotate(" + e[7](e[6].x) + "deg)"
        ),
        x(t, "opacity", e[8](e[6].x)),
        x(t, "z-index", "2"),
        (this.first = t);
    },
    m(D, z) {
      O(D, t, z),
        c(t, l),
        c(l, n),
        N.m(n, null),
        c(n, r),
        c(n, a),
        c(a, i),
        c(i, m),
        c(a, g),
        c(a, _),
        c(_, w),
        c(n, y),
        c(n, k),
        c(k, E),
        c(t, A),
        T ||
          ((S = [
            fe(t, "mousedown", e[9]),
            fe(t, "mousemove", e[10]),
            fe(t, "mouseup", e[11]),
            fe(t, "mouseleave", e[11]),
            fe(t, "touchstart", e[9]),
            fe(t, "touchmove", e[10]),
            fe(t, "touchend", e[11], { passive: !0 }),
          ]),
          (T = !0));
    },
    p(D, z) {
      (e = D),
        z & 1 && Se(o, (o = e[15].src))
          ? (N.d(1), (N = gr(e)), N.c(), N.m(n, r))
          : N.p(e, z),
        z & 1 && p !== (p = e[15].title + "") && ll(m, p),
        z & 1 && M !== (M = e[15].description + "") && ll(w, M),
        z & 1 && b !== (b = e[15].stepNumber + "") && ll(E, b),
        z & 64 &&
          x(
            t,
            "transform",
            "translate3d(" +
              e[6].x +
              "px, 0, 0) rotate(" +
              e[7](e[6].x) +
              "deg)"
          ),
        z & 64 && x(t, "opacity", e[8](e[6].x));
    },
    d(D) {
      D && u(t), N.d(D), (T = !1), Ml(S);
    },
  };
}
function $o(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    i,
    p,
    m =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    g,
    _,
    M =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    w,
    y,
    k =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    b,
    E,
    A =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    T,
    S,
    N =
      '<div class="card svelte-1okyslt"><div class="card-content svelte-1okyslt"></div></div>',
    D,
    z,
    L,
    V,
    $ = Ie[s[6].x < 0 ? s[5] : s[4]].src,
    G,
    P,
    R,
    le = Ie[s[6].x < 0 ? s[5] : s[4]].title + "",
    K,
    W,
    J,
    ee = Ie[s[6].x < 0 ? s[5] : s[4]].description + "",
    he,
    re,
    $e,
    Ye = Ie[s[6].x < 0 ? s[5] : s[4]].stepNumber + "",
    Qe,
    Ge,
    qe,
    We = [],
    nt = new Map(),
    te,
    De,
    Ce = `<img src="${zo}" alt="" style="transform: rotate(2.76deg);"/>`,
    we;
  l = new Rt({ props: { title: Zr, id: "learnMore" } });
  let ye = pr(s),
    Zt = gt([Ie[s[0]]]);
  const Dt = (Q) => Q[15].title;
  for (let Q = 0; Q < 1; Q += 1) {
    let F = mr(s, Zt, Q),
      Pe = Dt(F);
    nt.set(Pe, (We[Q] = br(Pe, F)));
  }
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        Z(l.$$.fragment),
        (n = I()),
        (o = d("div")),
        (r = d("div")),
        (r.innerHTML = a),
        (i = I()),
        (p = d("div")),
        (p.innerHTML = m),
        (g = I()),
        (_ = d("div")),
        (_.innerHTML = M),
        (w = I()),
        (y = d("div")),
        (y.innerHTML = k),
        (b = I()),
        (E = d("div")),
        (E.innerHTML = A),
        (T = I()),
        (S = d("div")),
        (S.innerHTML = N),
        (D = I()),
        (z = d("div")),
        (L = d("div")),
        (V = d("div")),
        ye.c(),
        (G = I()),
        (P = d("div")),
        (R = d("h3")),
        (K = He(le)),
        (W = I()),
        (J = d("p")),
        (he = He(ee)),
        (re = I()),
        ($e = d("span")),
        (Qe = He(Ye)),
        (qe = I());
      for (let Q = 0; Q < 1; Q += 1) We[Q].c();
      (te = I()), (De = d("div")), (De.innerHTML = Ce), this.h();
    },
    l(Q) {
      e = h(Q, "DIV", { class: !0 });
      var F = v(e);
      t = h(F, "DIV", { class: !0 });
      var Pe = v(t);
      X(l.$$.fragment, Pe),
        Pe.forEach(u),
        (n = C(F)),
        (o = h(F, "DIV", { class: !0 }));
      var me = v(o);
      (r = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(r) !== "svelte-13opovt" && (r.innerHTML = a),
        (i = C(me)),
        (p = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(p) !== "svelte-13opovt" && (p.innerHTML = m),
        (g = C(me)),
        (_ = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(_) !== "svelte-14fxm1a" && (_.innerHTML = M),
        (w = C(me)),
        (y = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(y) !== "svelte-14fxm1a" && (y.innerHTML = k),
        (b = C(me)),
        (E = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(E) !== "svelte-16ns57c" && (E.innerHTML = A),
        (T = C(me)),
        (S = h(me, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(S) !== "svelte-16ns57c" && (S.innerHTML = N),
        (D = C(me)),
        (z = h(me, "DIV", { class: !0, style: !0 }));
      var Ue = v(z);
      L = h(Ue, "DIV", { class: !0 });
      var ft = v(L);
      V = h(ft, "DIV", { class: !0 });
      var Mt = v(V);
      ye.l(Mt), (G = C(Mt)), (P = h(Mt, "DIV", { class: !0 }));
      var tt = v(P);
      R = h(tt, "H3", { class: !0 });
      var Me = v(R);
      (K = je(Me, le)),
        Me.forEach(u),
        (W = C(tt)),
        (J = h(tt, "P", { class: !0 }));
      var kt = v(J);
      (he = je(kt, ee)),
        kt.forEach(u),
        tt.forEach(u),
        (re = C(Mt)),
        ($e = h(Mt, "SPAN", { class: !0 }));
      var hl = v($e);
      (Qe = je(hl, Ye)),
        hl.forEach(u),
        Mt.forEach(u),
        ft.forEach(u),
        Ue.forEach(u),
        (qe = C(me));
      for (let Nt = 0; Nt < 1; Nt += 1) We[Nt].l(me);
      me.forEach(u),
        F.forEach(u),
        (te = C(Q)),
        (De = h(Q, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(De) !== "svelte-ling6j" && (De.innerHTML = Ce),
        this.h();
    },
    h() {
      f(t, "class", "title svelte-1okyslt"),
        f(r, "class", "card-wrapper svelte-1okyslt"),
        x(r, "z-index", "1"),
        x(r, "transform", "translate(-5px, -15px) rotate(1deg)"),
        f(p, "class", "card-wrapper svelte-1okyslt"),
        x(p, "z-index", "1"),
        x(p, "transform", "translate(-5px, -15px) rotate(1deg)"),
        f(_, "class", "card-wrapper svelte-1okyslt"),
        x(_, "z-index", "1"),
        x(_, "transform", "translate(-6.5px, -12px) rotate(-0.08deg)"),
        f(y, "class", "card-wrapper svelte-1okyslt"),
        x(y, "z-index", "1"),
        x(y, "transform", "translate(-6.5px, -12px) rotate(-0.08deg)"),
        f(E, "class", "card-wrapper svelte-1okyslt"),
        x(E, "z-index", "1"),
        x(E, "transform", "translate(0px, -10px) rotate(-1.5deg)"),
        f(S, "class", "card-wrapper svelte-1okyslt"),
        x(S, "z-index", "1"),
        x(S, "transform", "translate(0px, -10px) rotate(-1.5deg)"),
        f(R, "class", "card-title svelte-1okyslt"),
        f(J, "class", "card-description svelte-1okyslt"),
        f(P, "class", "card-caption svelte-1okyslt"),
        f($e, "class", "step-number svelte-1okyslt"),
        f(V, "class", "card-content svelte-1okyslt"),
        f(L, "class", "card svelte-1okyslt"),
        f(z, "class", "card-wrapper svelte-1okyslt"),
        f(
          z,
          "style",
          (Ge =
            "z-index: 1; transform: translate(0px, -10px) rotate(-1.5deg); " +
            (Math.abs(s[6].x) > 50 ? "transform: translate(0, 0) ;" : ""))
        ),
        pt(z, "transition-all", s[1]),
        pt(z, "duration-300", s[1]),
        f(o, "class", "tinder-container svelte-1okyslt"),
        f(e, "class", "w-full overflow-hidden pt-[21px]"),
        f(De, "class", "flex justify-center pt-[5%]");
    },
    m(Q, F) {
      O(Q, e, F),
        c(e, t),
        Y(l, t, null),
        c(e, n),
        c(e, o),
        c(o, r),
        c(o, i),
        c(o, p),
        c(o, g),
        c(o, _),
        c(o, w),
        c(o, y),
        c(o, b),
        c(o, E),
        c(o, T),
        c(o, S),
        c(o, D),
        c(o, z),
        c(z, L),
        c(L, V),
        ye.m(V, null),
        c(V, G),
        c(V, P),
        c(P, R),
        c(R, K),
        c(P, W),
        c(P, J),
        c(J, he),
        c(V, re),
        c(V, $e),
        c($e, Qe),
        c(o, qe);
      for (let Pe = 0; Pe < 1; Pe += 1) We[Pe] && We[Pe].m(o, null);
      O(Q, te, F), O(Q, De, F), (we = !0);
    },
    p(Q, [F]) {
      F & 112 && Se($, ($ = Ie[Q[6].x < 0 ? Q[5] : Q[4]].src))
        ? (ye.d(1), (ye = pr(Q)), ye.c(), ye.m(V, G))
        : ye.p(Q, F),
        (!we || F & 112) &&
          le !== (le = Ie[Q[6].x < 0 ? Q[5] : Q[4]].title + "") &&
          ll(K, le),
        (!we || F & 112) &&
          ee !== (ee = Ie[Q[6].x < 0 ? Q[5] : Q[4]].description + "") &&
          ll(he, ee),
        (!we || F & 112) &&
          Ye !== (Ye = Ie[Q[6].x < 0 ? Q[5] : Q[4]].stepNumber + "") &&
          ll(Qe, Ye),
        (!we ||
          (F & 64 &&
            Ge !==
              (Ge =
                "z-index: 1; transform: translate(0px, -10px) rotate(-1.5deg); " +
                (Math.abs(Q[6].x) > 50
                  ? "transform: translate(0, 0) ;"
                  : "")))) &&
          f(z, "style", Ge),
        (!we || F & 2) && pt(z, "transition-all", Q[1]),
        (!we || F & 2) && pt(z, "duration-300", Q[1]),
        F & 4037 &&
          ((Zt = gt([Ie[Q[0]]])),
          (We = Wr(We, F, Dt, 1, Q, Zt, nt, o, _i, br, null, mr)));
    },
    i(Q) {
      we || (H(l.$$.fragment, Q), (we = !0));
    },
    o(Q) {
      j(l.$$.fragment, Q), (we = !1);
    },
    d(Q) {
      Q && (u(e), u(te), u(De)), q(l), ye.d(Q);
      for (let F = 0; F < 1; F += 1) We[F].d();
    },
  };
}
const vr = 100,
  Go = 0.05,
  Po = 200;
function Oo(s, e, t) {
  let l,
    n,
    o,
    r = 0,
    a,
    i = !1,
    p;
  const m = No({ x: 0, y: 0 }, { stiffness: 0.2, damping: 0.4 });
  Gr(s, m, (b) => t(6, (o = b)));
  const g = (b) => b * Go,
    _ = (b) => 1 - Math.min(Math.abs(b) / Po, 1),
    M = (b) => {
      t(1, (i = !0)),
        (a = b.type.includes("mouse") ? b.clientX : b.touches[0].clientX),
        t(3, (m.stiffness = t(3, (m.damping = 1), m)), m);
    },
    w = (b) => {
      if (!i) return;
      const A =
        (b.type.includes("mouse") ? b.clientX : b.touches[0].clientX) - a;
      m.set({ x: A, y: 0 });
      const T = Math.max(0, 1 - Math.abs(A) / vr);
      t(2, (p.style.opacity = T.toString()), p);
    },
    y = () => {
      t(1, (i = !1)),
        Math.abs(o.x) > vr && t(0, (r = o.x < 0 ? l : n)),
        m.set({ x: 0, y: 0 }),
        t(2, (p.style.opacity = "1"), p);
    };
  function k(b) {
    Ae[b ? "unshift" : "push"](() => {
      (p = b), t(2, p);
    });
  }
  return (
    (s.$$.update = () => {
      s.$$.dirty & 1 && t(5, (l = (r + 1) % Ie.length)),
        s.$$.dirty & 1 && t(4, (n = (r - 1 + Ie.length) % Ie.length));
    }),
    [r, i, p, m, n, l, o, g, _, M, w, y, k]
  );
}
class Ho extends Ze {
  constructor(e) {
    super(), Xe(this, e, Oo, $o, Se, {});
  }
}
function jo(s) {
  let e, t;
  return (
    (e = new Ho({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Bo(s) {
  let e, t;
  return (
    (e = new Do({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Wo(s) {
  let e, t, l, n;
  const o = [Bo, jo],
    r = [];
  function a(i, p) {
    return i[0] ? 1 : 0;
  }
  return (
    (e = a(s)),
    (t = r[e] = o[e](s)),
    {
      c() {
        t.c(), (l = pe());
      },
      l(i) {
        t.l(i), (l = pe());
      },
      m(i, p) {
        r[e].m(i, p), O(i, l, p), (n = !0);
      },
      p(i, [p]) {
        let m = e;
        (e = a(i)),
          e !== m &&
            (wt(),
            j(r[m], 1, 1, () => {
              r[m] = null;
            }),
            yt(),
            (t = r[e]),
            t || ((t = r[e] = o[e](i)), t.c()),
            H(t, 1),
            t.m(l.parentNode, l));
      },
      i(i) {
        n || (H(t), (n = !0));
      },
      o(i) {
        j(t), (n = !1);
      },
      d(i) {
        i && u(l), r[e].d(i);
      },
    }
  );
}
function Fo(s, e, t) {
  let { isMobile: l } = e;
  return (
    (s.$$set = (n) => {
      "isMobile" in n && t(0, (l = n.isMobile));
    }),
    [l]
  );
}
class Uo extends Ze {
  constructor(e) {
    super(), Xe(this, e, Fo, Wo, Se, { isMobile: 0 });
  }
}
const Ro =
    "" + new URL("../assets/infinity.DyYGflIG.svg", import.meta.url).href,
  pn =
    "" +
    new URL("../assets/infinityBetween.BQqz1dx_.svg", import.meta.url).href,
  sl =
    "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%2020C12.6523%2020%2015.1955%2018.9466%2017.0715%2017.0715C18.9465%2015.1956%2020%2012.6523%2020%2010C20%207.3477%2018.9466%204.8045%2017.0715%202.92852C15.1956%201.05346%2012.6523%200%2010%200C7.3477%200%204.8045%201.05343%202.92852%202.92852C1.05346%204.80444%200%207.3477%200%2010C0%2012.6523%201.05343%2015.1955%202.92852%2017.0715C4.80444%2018.9465%207.3477%2020%2010%2020ZM4.80865%2010.2634C5.16321%209.91135%205.73595%209.91135%206.0905%2010.2634L8.18203%2012.3549L13.4458%207.09109C13.8063%206.7817%2014.3441%206.80302%2014.6799%207.13882C15.0158%207.47464%2015.0362%208.01157%2014.7277%208.37294L8.8187%2014.2819H8.81784C8.46329%2014.6348%207.89054%2014.6348%207.53599%2014.2819L4.80864%2011.5546C4.63647%2011.3841%204.54016%2011.1514%204.54016%2010.9094C4.54016%2010.6665%204.63648%2010.4347%204.80865%2010.2634Z'%20fill='url(%23paint0_linear_794_539)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_794_539'%20x1='29.3048'%20y1='10'%20x2='0'%20y2='10'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%238156F9'/%3e%3cstop%20offset='1'%20stop-color='%23969AE8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function _r(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i = "CLOSE",
    p,
    m,
    g,
    _,
    M;
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("div")),
        (n = d("h2")),
        (o = new ae(!1)),
        (r = I()),
        (a = d("button")),
        (a.textContent = i),
        (p = I()),
        (m = d("p")),
        (g = new ae(!1)),
        this.h();
    },
    l(w) {
      e = h(w, "DIV", { class: !0, "aria-hidden": !0 });
      var y = v(e);
      t = h(y, "DIV", { class: !0, role: !0 });
      var k = v(t);
      l = h(k, "DIV", { class: !0 });
      var b = v(l);
      n = h(b, "H2", { class: !0 });
      var E = v(n);
      (o = ce(E, !1)),
        E.forEach(u),
        (r = C(b)),
        (a = h(b, "BUTTON", { class: !0, "data-svelte-h": !0 })),
        _e(a) !== "svelte-tnm3sc" && (a.textContent = i),
        b.forEach(u),
        (p = C(k)),
        (m = h(k, "P", { class: !0 }));
      var A = v(m);
      (g = ce(A, !1)), A.forEach(u), k.forEach(u), y.forEach(u), this.h();
    },
    h() {
      (o.a = null),
        f(n, "class", "title svelte-1412344"),
        f(a, "class", "closeButton svelte-1412344"),
        f(
          l,
          "class",
          "flex h-[84px] items-center justify-between border-b border-white"
        ),
        (g.a = null),
        f(m, "class", "description svelte-1412344"),
        f(t, "class", "modal svelte-1412344"),
        f(t, "role", "dialog"),
        f(e, "class", "modal-backdrop svelte-1412344"),
        f(e, "aria-hidden", "true");
    },
    m(w, y) {
      O(w, e, y),
        c(e, t),
        c(t, l),
        c(l, n),
        o.m(s[2], n),
        c(l, r),
        c(l, a),
        c(t, p),
        c(t, m),
        g.m(s[3], m),
        s[7](t),
        _ ||
          ((M = [
            fe(a, "click", s[6]),
            fe(t, "keydown", s[4]),
            fe(e, "click", kn(s[8])),
          ]),
          (_ = !0));
    },
    p: Be,
    d(w) {
      w && u(e), s[7](null), (_ = !1), Ml(M);
    },
  };
}
function Zo(s) {
  let e,
    t = s[0] && _r(s);
  return {
    c() {
      t && t.c(), (e = pe());
    },
    l(l) {
      t && t.l(l), (e = pe());
    },
    m(l, n) {
      t && t.m(l, n), O(l, e, n);
    },
    p(l, [n]) {
      l[0]
        ? t
          ? t.p(l, n)
          : ((t = _r(l)), t.c(), t.m(e.parentNode, e))
        : t && (t.d(1), (t = null));
    },
    i: Be,
    o: Be,
    d(l) {
      l && u(e), t && t.d(l);
    },
  };
}
function Xo(s, e, t) {
  let { showModal: l } = e,
    { content: n } = e,
    o,
    r,
    a,
    i,
    p;
  const { fullName: m, description: g } = n,
    _ = () => {
      document.body.style.overflow = "hidden";
    },
    M = () => {
      document.body.style.overflow = "";
    },
    w = (T) => {
      T.key === "Tab"
        ? T.shiftKey
          ? document.activeElement === a && (T.preventDefault(), i.focus())
          : document.activeElement === i && (T.preventDefault(), a.focus())
        : T.key === "Escape" && t(0, (l = !1));
    },
    y = () => {
      (p = document.activeElement),
        _(),
        o &&
          ((r = o.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )),
          (a = r[0]),
          (i = r[r.length - 1]),
          a == null || a.focus());
    },
    k = () => {
      M(), p && p.focus();
    };
  yl(() => {
    l && y();
  }),
    yn(() => {
      k();
    });
  const b = () => t(0, (l = !1));
  function E(T) {
    Ae[T ? "unshift" : "push"](() => {
      (o = T), t(1, o);
    });
  }
  const A = () => t(0, (l = !1));
  return (
    (s.$$set = (T) => {
      "showModal" in T && t(0, (l = T.showModal)),
        "content" in T && t(5, (n = T.content));
    }),
    [l, o, m, g, w, n, b, E, A]
  );
}
class Yo extends Ze {
  constructor(e) {
    super(), Xe(this, e, Xo, Zo, Se, { showModal: 0, content: 5 });
  }
}
function qo(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function Ko(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Jo(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function Qo(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ea(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ta(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function la(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function sa(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function na(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ra(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ia(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function oa(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function aa(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ca(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function fa(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ua(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function da(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function ha(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ma(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "completed-indicator svelte-no34o2");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function pa(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "completed-icon svelte-no34o2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ga(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "absolute bottom-[110%] left-1/2 -translate-x-1/2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function ba(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "absolute bottom-[110%] left-1/2 -translate-x-1/2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function va(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "absolute bottom-[110%] left-1/2 -translate-x-1/2");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function wr(s) {
  let e, t, l;
  function n(r) {
    s[21](r);
  }
  let o = { content: s[3] };
  return (
    s[2] !== void 0 && (o.showModal = s[2]),
    (e = new Yo({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a & 8 && (i.content = r[3]),
          !t && a & 4 && ((t = !0), (i.showModal = r[2]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function yr(s) {
  let e, t, l;
  function n(r) {
    s[22](r);
  }
  let o = { content: s[1] };
  return (
    s[0] !== void 0 && (o.showModal = s[0]),
    (e = new In({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a & 2 && (i.content = r[1]),
          !t && a & 1 && ((t = !0), (i.showModal = r[0]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function _a(s) {
  let e,
    t,
    l,
    n,
    o,
    r = "To infinity and beyond",
    a,
    i,
    p,
    m,
    g,
    _,
    M,
    w = se[1].time + "",
    y,
    k,
    b,
    E = se[1].title + "",
    A,
    T,
    S,
    N,
    D,
    z,
    L,
    V = se[2].time + "",
    $,
    G,
    P,
    R = se[2].title + "",
    le,
    K,
    W,
    J,
    ee,
    he,
    re,
    $e = se[3].time + "",
    Ye,
    Qe,
    Ge,
    qe = se[3].title + "",
    We,
    nt,
    te,
    De,
    Ce,
    we,
    ye,
    Zt = se[4].time + "",
    Dt,
    Q,
    F,
    Pe = se[4].title + "",
    me,
    Ue,
    ft,
    Mt,
    tt,
    Me,
    kt,
    hl = se[13].time + "",
    Nt,
    be,
    ot,
    at = se[13].title + "",
    Vt,
    xl,
    Et,
    Ne,
    Ke,
    ut,
    Bt,
    Lt = se[12].time + "",
    zt,
    Xt,
    lt,
    bt = se[12].title + "",
    st,
    Tt,
    Te,
    et,
    It,
    rt,
    Re,
    Al = se[10].time + "",
    nl,
    xe,
    $t,
    Wt = se[10].title + "",
    ct,
    ve,
    Ve,
    ml,
    Oe,
    ke,
    il,
    xt = se[9].time + "",
    Yt,
    qt,
    vt,
    Le = se[9].title + "",
    Sl,
    Dl,
    ie,
    U,
    ne,
    it,
    Kt,
    Jt = se[8].time + "",
    Qt,
    Gt,
    ol,
    Pt = se[8].title + "",
    Nl,
    ze,
    B,
    oe,
    Ee,
    Ot,
    _t,
    ms = se[6].time + "",
    rl,
    el,
    al,
    Vl = se[6].title + "",
    Ft,
    pl,
    At,
    Ct,
    gl,
    tl,
    Ol,
    Ht,
    kl,
    bl,
    El,
    vl,
    zs,
    Hl,
    cl,
    _l,
    bs,
    Ll,
    $s,
    vs,
    Ut,
    Gs = "<span>1</span>",
    ps,
    Il,
    Mn = "<span>2</span>",
    cn,
    zl,
    Tn = "<span>3</span>",
    fn,
    gs,
    xn,
    Hs,
    _s,
    ws,
    js,
    un,
    An;
  l = new Rt({
    props: { title: "Our ", buttonText: "Roadmap", titleEnd: ", is infinite." },
  });
  let jl = se[1].status === "Completed" && qo(),
    Bl = se[1].status === "Completed" && Ko(),
    Wl = se[2].status === "Completed" && Jo(),
    Fl = se[2].status === "Completed" && Qo(),
    Ul = se[3].status === "Completed" && ea(),
    Rl = se[3].status === "Completed" && ta(),
    Zl = se[4].status === "Completed" && la(),
    Xl = se[4].status === "Completed" && sa(),
    Yl = se[13].status === "Completed" && na(),
    ql = se[13].status === "Completed" && ra(),
    Kl = se[12].status === "Completed" && ia(),
    Jl = se[12].status === "Completed" && oa(),
    Ql = se[10].status === "Completed" && aa(),
    es = se[10].status === "Completed" && ca(),
    ts = se[9].status === "Completed" && fa(),
    ls = se[9].status === "Completed" && ua(),
    ss = se[8].status === "Completed" && da(),
    ns = se[8].status === "Completed" && ha(),
    rs = se[6].status === "Completed" && ma(),
    is = se[6].status === "Completed" && pa(),
    os = se[5].status === "Completed" && ga(),
    as = se[7].status === "Completed" && ba(),
    cs = se[11].status === "Completed" && va(),
    dt = s[2] && wr(s),
    ht = s[0] && yr(s);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        Z(l.$$.fragment),
        (n = I()),
        (o = d("span")),
        (o.textContent = r),
        (a = I()),
        (i = d("div")),
        (p = d("button")),
        jl && jl.c(),
        (m = I()),
        (g = d("span")),
        (_ = d("span")),
        (M = new ae(!1)),
        (y = I()),
        (k = d("span")),
        (b = new ae(!1)),
        (A = I()),
        Bl && Bl.c(),
        (T = I()),
        (S = d("button")),
        Wl && Wl.c(),
        (N = I()),
        (D = d("span")),
        (z = d("span")),
        (L = new ae(!1)),
        ($ = I()),
        (G = d("span")),
        (P = new ae(!1)),
        (le = I()),
        Fl && Fl.c(),
        (K = I()),
        (W = d("button")),
        Ul && Ul.c(),
        (J = I()),
        (ee = d("span")),
        (he = d("span")),
        (re = new ae(!1)),
        (Ye = I()),
        (Qe = d("span")),
        (Ge = new ae(!1)),
        (We = I()),
        Rl && Rl.c(),
        (nt = I()),
        (te = d("button")),
        Zl && Zl.c(),
        (De = I()),
        (Ce = d("span")),
        (we = d("span")),
        (ye = new ae(!1)),
        (Dt = I()),
        (Q = d("span")),
        (F = new ae(!1)),
        (me = I()),
        Xl && Xl.c(),
        (Ue = I()),
        (ft = d("button")),
        Yl && Yl.c(),
        (Mt = I()),
        (tt = d("span")),
        (Me = d("span")),
        (kt = new ae(!1)),
        (Nt = I()),
        (be = d("span")),
        (ot = new ae(!1)),
        (Vt = I()),
        ql && ql.c(),
        (xl = I()),
        (Et = d("button")),
        Kl && Kl.c(),
        (Ne = I()),
        (Ke = d("span")),
        (ut = d("span")),
        (Bt = new ae(!1)),
        (zt = I()),
        (Xt = d("span")),
        (lt = new ae(!1)),
        (st = I()),
        Jl && Jl.c(),
        (Tt = I()),
        (Te = d("button")),
        Ql && Ql.c(),
        (et = I()),
        (It = d("span")),
        (rt = d("span")),
        (Re = new ae(!1)),
        (nl = I()),
        (xe = d("span")),
        ($t = new ae(!1)),
        (ct = I()),
        es && es.c(),
        (ve = I()),
        (Ve = d("button")),
        ts && ts.c(),
        (ml = I()),
        (Oe = d("span")),
        (ke = d("span")),
        (il = new ae(!1)),
        (Yt = I()),
        (qt = d("span")),
        (vt = new ae(!1)),
        (Sl = I()),
        ls && ls.c(),
        (Dl = I()),
        (ie = d("button")),
        ss && ss.c(),
        (U = I()),
        (ne = d("span")),
        (it = d("span")),
        (Kt = new ae(!1)),
        (Qt = I()),
        (Gt = d("span")),
        (ol = new ae(!1)),
        (Nl = I()),
        ns && ns.c(),
        (ze = I()),
        (B = d("button")),
        rs && rs.c(),
        (oe = I()),
        (Ee = d("span")),
        (Ot = d("span")),
        (_t = new ae(!1)),
        (rl = I()),
        (el = d("span")),
        (al = new ae(!1)),
        (Ft = I()),
        is && is.c(),
        (pl = I()),
        (At = d("button")),
        (Ct = d("div")),
        os && os.c(),
        (gl = I()),
        (tl = d("img")),
        (Ht = I()),
        (kl = d("button")),
        (bl = d("div")),
        as && as.c(),
        (El = I()),
        (vl = d("img")),
        (Hl = I()),
        (cl = d("button")),
        (_l = d("div")),
        cs && cs.c(),
        (bs = I()),
        (Ll = d("img")),
        (vs = I()),
        (Ut = d("button")),
        (Ut.innerHTML = Gs),
        (ps = I()),
        (Il = d("button")),
        (Il.innerHTML = Mn),
        (cn = I()),
        (zl = d("div")),
        (zl.innerHTML = Tn),
        (fn = I()),
        (gs = d("img")),
        (Hs = I()),
        dt && dt.c(),
        (_s = I()),
        ht && ht.c(),
        (ws = pe()),
        this.h();
    },
    l(Fe) {
      e = h(Fe, "DIV", { class: !0 });
      var jt = v(e);
      t = h(jt, "DIV", { class: !0 });
      var Bs = v(t);
      X(l.$$.fragment, Bs),
        (n = C(Bs)),
        (o = h(Bs, "SPAN", { class: !0, "data-svelte-h": !0 })),
        _e(o) !== "svelte-123rv47" && (o.textContent = r),
        Bs.forEach(u),
        (a = C(jt)),
        (i = h(jt, "DIV", { class: !0 }));
      var ge = v(i);
      p = h(ge, "BUTTON", { class: !0 });
      var Ws = v(p);
      jl && jl.l(Ws), (m = C(Ws)), (g = h(Ws, "SPAN", { class: !0 }));
      var ys = v(g);
      _ = h(ys, "SPAN", { class: !0 });
      var Sn = v(_);
      (M = ce(Sn, !1)),
        Sn.forEach(u),
        (y = C(ys)),
        (k = h(ys, "SPAN", { class: !0 }));
      var Dn = v(k);
      (b = ce(Dn, !1)),
        Dn.forEach(u),
        (A = C(ys)),
        Bl && Bl.l(ys),
        ys.forEach(u),
        Ws.forEach(u),
        (T = C(ge)),
        (S = h(ge, "BUTTON", { class: !0 }));
      var Fs = v(S);
      Wl && Wl.l(Fs), (N = C(Fs)), (D = h(Fs, "SPAN", { class: !0 }));
      var ks = v(D);
      z = h(ks, "SPAN", { class: !0 });
      var Nn = v(z);
      (L = ce(Nn, !1)),
        Nn.forEach(u),
        ($ = C(ks)),
        (G = h(ks, "SPAN", { class: !0 }));
      var Vn = v(G);
      (P = ce(Vn, !1)),
        Vn.forEach(u),
        (le = C(ks)),
        Fl && Fl.l(ks),
        ks.forEach(u),
        Fs.forEach(u),
        (K = C(ge)),
        (W = h(ge, "BUTTON", { class: !0 }));
      var Us = v(W);
      Ul && Ul.l(Us), (J = C(Us)), (ee = h(Us, "SPAN", { class: !0 }));
      var Es = v(ee);
      he = h(Es, "SPAN", { class: !0 });
      var Ln = v(he);
      (re = ce(Ln, !1)),
        Ln.forEach(u),
        (Ye = C(Es)),
        (Qe = h(Es, "SPAN", { class: !0 }));
      var zn = v(Qe);
      (Ge = ce(zn, !1)),
        zn.forEach(u),
        (We = C(Es)),
        Rl && Rl.l(Es),
        Es.forEach(u),
        Us.forEach(u),
        (nt = C(ge)),
        (te = h(ge, "BUTTON", { class: !0 }));
      var Rs = v(te);
      Zl && Zl.l(Rs), (De = C(Rs)), (Ce = h(Rs, "SPAN", { class: !0 }));
      var Is = v(Ce);
      we = h(Is, "SPAN", { class: !0 });
      var $n = v(we);
      (ye = ce($n, !1)),
        $n.forEach(u),
        (Dt = C(Is)),
        (Q = h(Is, "SPAN", { class: !0 }));
      var Gn = v(Q);
      (F = ce(Gn, !1)),
        Gn.forEach(u),
        (me = C(Is)),
        Xl && Xl.l(Is),
        Is.forEach(u),
        Rs.forEach(u),
        (Ue = C(ge)),
        (ft = h(ge, "BUTTON", { class: !0 }));
      var Zs = v(ft);
      Yl && Yl.l(Zs), (Mt = C(Zs)), (tt = h(Zs, "SPAN", { class: !0 }));
      var Cs = v(tt);
      Me = h(Cs, "SPAN", { class: !0 });
      var Pn = v(Me);
      (kt = ce(Pn, !1)),
        Pn.forEach(u),
        (Nt = C(Cs)),
        (be = h(Cs, "SPAN", { class: !0 }));
      var On = v(be);
      (ot = ce(On, !1)),
        On.forEach(u),
        (Vt = C(Cs)),
        ql && ql.l(Cs),
        Cs.forEach(u),
        Zs.forEach(u),
        (xl = C(ge)),
        (Et = h(ge, "BUTTON", { class: !0 }));
      var Xs = v(Et);
      Kl && Kl.l(Xs), (Ne = C(Xs)), (Ke = h(Xs, "SPAN", { class: !0 }));
      var Ms = v(Ke);
      ut = h(Ms, "SPAN", { class: !0 });
      var Hn = v(ut);
      (Bt = ce(Hn, !1)),
        Hn.forEach(u),
        (zt = C(Ms)),
        (Xt = h(Ms, "SPAN", { class: !0 }));
      var jn = v(Xt);
      (lt = ce(jn, !1)),
        jn.forEach(u),
        (st = C(Ms)),
        Jl && Jl.l(Ms),
        Ms.forEach(u),
        Xs.forEach(u),
        (Tt = C(ge)),
        (Te = h(ge, "BUTTON", { class: !0 }));
      var Ys = v(Te);
      Ql && Ql.l(Ys), (et = C(Ys)), (It = h(Ys, "SPAN", { class: !0 }));
      var Ts = v(It);
      rt = h(Ts, "SPAN", { class: !0 });
      var Bn = v(rt);
      (Re = ce(Bn, !1)),
        Bn.forEach(u),
        (nl = C(Ts)),
        (xe = h(Ts, "SPAN", { class: !0 }));
      var Wn = v(xe);
      ($t = ce(Wn, !1)),
        Wn.forEach(u),
        (ct = C(Ts)),
        es && es.l(Ts),
        Ts.forEach(u),
        Ys.forEach(u),
        (ve = C(ge)),
        (Ve = h(ge, "BUTTON", { class: !0 }));
      var qs = v(Ve);
      ts && ts.l(qs), (ml = C(qs)), (Oe = h(qs, "SPAN", { class: !0 }));
      var xs = v(Oe);
      ke = h(xs, "SPAN", { class: !0 });
      var Fn = v(ke);
      (il = ce(Fn, !1)),
        Fn.forEach(u),
        (Yt = C(xs)),
        (qt = h(xs, "SPAN", { class: !0 }));
      var Un = v(qt);
      (vt = ce(Un, !1)),
        Un.forEach(u),
        (Sl = C(xs)),
        ls && ls.l(xs),
        xs.forEach(u),
        qs.forEach(u),
        (Dl = C(ge)),
        (ie = h(ge, "BUTTON", { class: !0 }));
      var Ks = v(ie);
      ss && ss.l(Ks), (U = C(Ks)), (ne = h(Ks, "SPAN", { class: !0 }));
      var As = v(ne);
      it = h(As, "SPAN", { class: !0 });
      var Rn = v(it);
      (Kt = ce(Rn, !1)),
        Rn.forEach(u),
        (Qt = C(As)),
        (Gt = h(As, "SPAN", { class: !0 }));
      var Zn = v(Gt);
      (ol = ce(Zn, !1)),
        Zn.forEach(u),
        (Nl = C(As)),
        ns && ns.l(As),
        As.forEach(u),
        Ks.forEach(u),
        (ze = C(ge)),
        (B = h(ge, "BUTTON", { class: !0 }));
      var Js = v(B);
      rs && rs.l(Js), (oe = C(Js)), (Ee = h(Js, "SPAN", { class: !0 }));
      var Ss = v(Ee);
      Ot = h(Ss, "SPAN", { class: !0 });
      var Xn = v(Ot);
      (_t = ce(Xn, !1)),
        Xn.forEach(u),
        (rl = C(Ss)),
        (el = h(Ss, "SPAN", { class: !0 }));
      var Yn = v(el);
      (al = ce(Yn, !1)),
        Yn.forEach(u),
        (Ft = C(Ss)),
        is && is.l(Ss),
        Ss.forEach(u),
        Js.forEach(u),
        (pl = C(ge)),
        (At = h(ge, "BUTTON", { class: !0 }));
      var qn = v(At);
      Ct = h(qn, "DIV", { class: !0 });
      var Qs = v(Ct);
      os && os.l(Qs),
        (gl = C(Qs)),
        (tl = h(Qs, "IMG", { src: !0, alt: !0 })),
        Qs.forEach(u),
        qn.forEach(u),
        (Ht = C(ge)),
        (kl = h(ge, "BUTTON", { class: !0 }));
      var Kn = v(kl);
      bl = h(Kn, "DIV", { class: !0 });
      var en = v(bl);
      as && as.l(en),
        (El = C(en)),
        (vl = h(en, "IMG", { src: !0, alt: !0 })),
        en.forEach(u),
        Kn.forEach(u),
        (Hl = C(ge)),
        (cl = h(ge, "BUTTON", { class: !0 }));
      var Jn = v(cl);
      _l = h(Jn, "DIV", { class: !0 });
      var tn = v(_l);
      cs && cs.l(tn),
        (bs = C(tn)),
        (Ll = h(tn, "IMG", { src: !0, alt: !0 })),
        tn.forEach(u),
        Jn.forEach(u),
        (vs = C(ge)),
        (Ut = h(ge, "BUTTON", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(Ut) !== "svelte-1a78nv4" && (Ut.innerHTML = Gs),
        (ps = C(ge)),
        (Il = h(ge, "BUTTON", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(Il) !== "svelte-10ag60k" && (Il.innerHTML = Mn),
        (cn = C(ge)),
        (zl = h(ge, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(zl) !== "svelte-1m3zhac" && (zl.innerHTML = Tn),
        (fn = C(ge)),
        (gs = h(ge, "IMG", { src: !0, alt: !0, class: !0 })),
        ge.forEach(u),
        jt.forEach(u),
        (Hs = C(Fe)),
        dt && dt.l(Fe),
        (_s = C(Fe)),
        ht && ht.l(Fe),
        (ws = pe()),
        this.h();
    },
    h() {
      f(o, "class", "badge svelte-no34o2"),
        f(t, "class", "title svelte-no34o2"),
        (M.a = null),
        f(_, "class", "text-left"),
        (b.a = null),
        f(k, "class", "text-left"),
        f(g, "class", "button-content svelte-no34o2"),
        f(
          p,
          "class",
          "infinity-button button bottom-[64.5%] left-[2.31%] svelte-no34o2"
        ),
        (L.a = null),
        f(z, "class", "text-left"),
        (P.a = null),
        f(G, "class", "text-left"),
        f(D, "class", "button-content svelte-no34o2"),
        f(
          S,
          "class",
          "infinity-button button bottom-[82.8%] left-[10.16%] svelte-no34o2"
        ),
        (re.a = null),
        f(he, "class", "text-left"),
        (Ge.a = null),
        f(Qe, "class", "text-left"),
        f(ee, "class", "button-content svelte-no34o2"),
        f(
          W,
          "class",
          "infinity-button button bottom-[99.31%] left-[24.29%] svelte-no34o2"
        ),
        (ye.a = null),
        f(we, "class", "text-left"),
        (F.a = null),
        f(Q, "class", "text-left"),
        f(Ce, "class", "button-content svelte-no34o2"),
        f(
          te,
          "class",
          "infinity-button button bottom-[81.4%] left-[41.63%] svelte-no34o2"
        ),
        (kt.a = null),
        f(Me, "class", "text-left"),
        (ot.a = null),
        f(be, "class", "text-left"),
        f(tt, "class", "button-content svelte-no34o2"),
        f(
          ft,
          "class",
          "infinity-button button bottom-[81.4%] left-[59.11%] svelte-no34o2"
        ),
        (Bt.a = null),
        f(ut, "class", "text-left"),
        (lt.a = null),
        f(Xt, "class", "text-left"),
        f(Ke, "class", "button-content svelte-no34o2"),
        f(
          Et,
          "class",
          "infinity-button button bottom-[99.31%] left-[71.67%] svelte-no34o2"
        ),
        (Re.a = null),
        f(rt, "class", "text-left"),
        ($t.a = null),
        f(xe, "class", "text-left"),
        f(It, "class", "button-content svelte-no34o2"),
        f(
          Te,
          "class",
          "infinity-button button bottom-[82.8%] left-[87.22%] svelte-no34o2"
        ),
        (il.a = null),
        f(ke, "class", "text-left"),
        (vt.a = null),
        f(qt, "class", "text-left"),
        f(Oe, "class", "button-content svelte-no34o2"),
        f(
          Ve,
          "class",
          "infinity-button button bottom-[64.5%] left-[97.68%] svelte-no34o2"
        ),
        (Kt.a = null),
        f(it, "class", "text-left"),
        (ol.a = null),
        f(Gt, "class", "text-left"),
        f(ne, "class", "button-content svelte-no34o2"),
        f(
          ie,
          "class",
          "infinity-button button bottom-[25.5%] left-[78.77%] svelte-no34o2"
        ),
        (_t.a = null),
        f(Ot, "class", "text-left"),
        (al.a = null),
        f(el, "class", "text-left"),
        f(Ee, "class", "button-content svelte-no34o2"),
        f(
          B,
          "class",
          "infinity-button button bottom-[35.26%] left-[64.72%] svelte-no34o2"
        ),
        ue(tl.src, (Ol = pn)) || f(tl, "src", Ol),
        f(tl, "alt", ""),
        f(Ct, "class", "relative"),
        f(
          At,
          "class",
          "withScaleAnimation absolute bottom-[38.14%] left-[45.52%] z-[2] w-[4.957%] object-cover svelte-no34o2"
        ),
        ue(vl.src, (zs = pn)) || f(vl, "src", zs),
        f(vl, "alt", ""),
        f(bl, "class", "relative"),
        f(
          kl,
          "class",
          "withScaleAnimation absolute bottom-[-0.83%] left-[70.5%] z-[2] w-[4.957%] object-cover svelte-no34o2"
        ),
        ue(Ll.src, ($s = pn)) || f(Ll, "src", $s),
        f(Ll, "alt", ""),
        f(_l, "class", "relative"),
        f(
          cl,
          "class",
          "withScaleAnimation absolute bottom-[63.93%] left-[78.20%] z-[2] w-[4.957%] object-cover svelte-no34o2"
        ),
        f(Ut, "class", "diamond bottom-[23.2%] left-0 svelte-no34o2"),
        x(
          Ut,
          "--background",
          "linear-gradient(180deg, #8156f9 0%, #969ae8 100%)"
        ),
        x(Ut, "transform", "translate(-103%, 50%)"),
        f(Il, "class", "diamond bottom-[23.2%] right-0 svelte-no34o2"),
        x(
          Il,
          "--background",
          "linear-gradient(270deg, #6FB8ED 0%, #327FA0 150.55%)"
        ),
        x(Il, "transform", "translate(103%, 50%)"),
        f(zl, "class", "diamond bottom-[22.3%] left-[50%] svelte-no34o2"),
        x(
          zl,
          "--background",
          "linear-gradient(270deg, #8156F9 -46.52%, #969AE8 100%)"
        ),
        x(zl, "transform", "translate(-50%, 50%)"),
        ue(gs.src, (xn = Ro)) || f(gs, "src", xn),
        f(gs, "alt", ""),
        f(gs, "class", "image svelte-no34o2"),
        f(i, "class", "infinity svelte-no34o2"),
        f(e, "class", "wrapper svelte-no34o2");
    },
    m(Fe, jt) {
      O(Fe, e, jt),
        c(e, t),
        Y(l, t, null),
        c(t, n),
        c(t, o),
        c(e, a),
        c(e, i),
        c(i, p),
        jl && jl.m(p, null),
        c(p, m),
        c(p, g),
        c(g, _),
        M.m(w, _),
        c(g, y),
        c(g, k),
        b.m(E, k),
        c(g, A),
        Bl && Bl.m(g, null),
        c(i, T),
        c(i, S),
        Wl && Wl.m(S, null),
        c(S, N),
        c(S, D),
        c(D, z),
        L.m(V, z),
        c(D, $),
        c(D, G),
        P.m(R, G),
        c(D, le),
        Fl && Fl.m(D, null),
        c(i, K),
        c(i, W),
        Ul && Ul.m(W, null),
        c(W, J),
        c(W, ee),
        c(ee, he),
        re.m($e, he),
        c(ee, Ye),
        c(ee, Qe),
        Ge.m(qe, Qe),
        c(ee, We),
        Rl && Rl.m(ee, null),
        c(i, nt),
        c(i, te),
        Zl && Zl.m(te, null),
        c(te, De),
        c(te, Ce),
        c(Ce, we),
        ye.m(Zt, we),
        c(Ce, Dt),
        c(Ce, Q),
        F.m(Pe, Q),
        c(Ce, me),
        Xl && Xl.m(Ce, null),
        c(i, Ue),
        c(i, ft),
        Yl && Yl.m(ft, null),
        c(ft, Mt),
        c(ft, tt),
        c(tt, Me),
        kt.m(hl, Me),
        c(tt, Nt),
        c(tt, be),
        ot.m(at, be),
        c(tt, Vt),
        ql && ql.m(tt, null),
        c(i, xl),
        c(i, Et),
        Kl && Kl.m(Et, null),
        c(Et, Ne),
        c(Et, Ke),
        c(Ke, ut),
        Bt.m(Lt, ut),
        c(Ke, zt),
        c(Ke, Xt),
        lt.m(bt, Xt),
        c(Ke, st),
        Jl && Jl.m(Ke, null),
        c(i, Tt),
        c(i, Te),
        Ql && Ql.m(Te, null),
        c(Te, et),
        c(Te, It),
        c(It, rt),
        Re.m(Al, rt),
        c(It, nl),
        c(It, xe),
        $t.m(Wt, xe),
        c(It, ct),
        es && es.m(It, null),
        c(i, ve),
        c(i, Ve),
        ts && ts.m(Ve, null),
        c(Ve, ml),
        c(Ve, Oe),
        c(Oe, ke),
        il.m(xt, ke),
        c(Oe, Yt),
        c(Oe, qt),
        vt.m(Le, qt),
        c(Oe, Sl),
        ls && ls.m(Oe, null),
        c(i, Dl),
        c(i, ie),
        ss && ss.m(ie, null),
        c(ie, U),
        c(ie, ne),
        c(ne, it),
        Kt.m(Jt, it),
        c(ne, Qt),
        c(ne, Gt),
        ol.m(Pt, Gt),
        c(ne, Nl),
        ns && ns.m(ne, null),
        c(i, ze),
        c(i, B),
        rs && rs.m(B, null),
        c(B, oe),
        c(B, Ee),
        c(Ee, Ot),
        _t.m(ms, Ot),
        c(Ee, rl),
        c(Ee, el),
        al.m(Vl, el),
        c(Ee, Ft),
        is && is.m(Ee, null),
        c(i, pl),
        c(i, At),
        c(At, Ct),
        os && os.m(Ct, null),
        c(Ct, gl),
        c(Ct, tl),
        c(i, Ht),
        c(i, kl),
        c(kl, bl),
        as && as.m(bl, null),
        c(bl, El),
        c(bl, vl),
        c(i, Hl),
        c(i, cl),
        c(cl, _l),
        cs && cs.m(_l, null),
        c(_l, bs),
        c(_l, Ll),
        c(i, vs),
        c(i, Ut),
        c(i, ps),
        c(i, Il),
        c(i, cn),
        c(i, zl),
        c(i, fn),
        c(i, gs),
        O(Fe, Hs, jt),
        dt && dt.m(Fe, jt),
        O(Fe, _s, jt),
        ht && ht.m(Fe, jt),
        O(Fe, ws, jt),
        (js = !0),
        un ||
          ((An = [
            fe(p, "click", s[6]),
            fe(S, "click", s[7]),
            fe(W, "click", s[8]),
            fe(te, "click", s[9]),
            fe(ft, "click", s[10]),
            fe(Et, "click", s[11]),
            fe(Te, "click", s[12]),
            fe(Ve, "click", s[13]),
            fe(ie, "click", s[14]),
            fe(B, "click", s[15]),
            fe(At, "click", s[16]),
            fe(kl, "click", s[17]),
            fe(cl, "click", s[18]),
            fe(Ut, "click", s[19]),
            fe(Il, "click", s[20]),
          ]),
          (un = !0));
    },
    p(Fe, [jt]) {
      Fe[2]
        ? dt
          ? (dt.p(Fe, jt), jt & 4 && H(dt, 1))
          : ((dt = wr(Fe)), dt.c(), H(dt, 1), dt.m(_s.parentNode, _s))
        : dt &&
          (wt(),
          j(dt, 1, 1, () => {
            dt = null;
          }),
          yt()),
        Fe[0]
          ? ht
            ? (ht.p(Fe, jt), jt & 1 && H(ht, 1))
            : ((ht = yr(Fe)), ht.c(), H(ht, 1), ht.m(ws.parentNode, ws))
          : ht &&
            (wt(),
            j(ht, 1, 1, () => {
              ht = null;
            }),
            yt());
    },
    i(Fe) {
      js || (H(l.$$.fragment, Fe), H(dt), H(ht), (js = !0));
    },
    o(Fe) {
      j(l.$$.fragment, Fe), j(dt), j(ht), (js = !1);
    },
    d(Fe) {
      Fe && (u(e), u(Hs), u(_s), u(ws)),
        q(l),
        jl && jl.d(),
        Bl && Bl.d(),
        Wl && Wl.d(),
        Fl && Fl.d(),
        Ul && Ul.d(),
        Rl && Rl.d(),
        Zl && Zl.d(),
        Xl && Xl.d(),
        Yl && Yl.d(),
        ql && ql.d(),
        Kl && Kl.d(),
        Jl && Jl.d(),
        Ql && Ql.d(),
        es && es.d(),
        ts && ts.d(),
        ls && ls.d(),
        ss && ss.d(),
        ns && ns.d(),
        rs && rs.d(),
        is && is.d(),
        os && os.d(),
        as && as.d(),
        cs && cs.d(),
        dt && dt.d(Fe),
        ht && ht.d(Fe),
        (un = !1),
        Ml(An);
    },
  };
}
function wa(s, e, t) {
  let l = !1,
    n = {};
  const o = (V) => {
    t(1, (n = { key: V })), t(0, (l = !0));
  };
  let r = !1,
    a = {};
  const i = (V) => {
      const { fullName: $, description: G } = V;
      t(3, (a = { fullName: $, description: G })), t(2, (r = !0));
    },
    p = () => i(se[1]),
    m = () => i(se[2]),
    g = () => i(se[3]),
    _ = () => i(se[4]),
    M = () => i(se[13]),
    w = () => i(se[12]),
    y = () => i(se[10]),
    k = () => i(se[9]),
    b = () => i(se[8]),
    E = () => i(se[6]),
    A = () => i(se[5]),
    T = () => i(se[7]),
    S = () => i(se[11]),
    N = () => o("1"),
    D = () => o("2");
  function z(V) {
    (r = V), t(2, r);
  }
  function L(V) {
    (l = V), t(0, l);
  }
  return [l, n, r, a, o, i, p, m, g, _, M, w, y, k, b, E, A, T, S, N, D, z, L];
}
class ya extends Ze {
  constructor(e) {
    super(), Xe(this, e, wa, _a, Se, {});
  }
}
function kr(s, e, t) {
  const l = s.slice();
  return (l[17] = e[t][0]), (l[18] = e[t][1]), (l[20] = t), l;
}
function ka(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      ue(e.src, (t = sl)) || f(e, "src", t),
        f(e, "alt", ""),
        f(e, "class", "absolute right-[8px] top-[10px] h-[20px] w-[20px]");
    },
    m(l, n) {
      O(l, e, n);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Er(s) {
  let e,
    t,
    l,
    n,
    o,
    r = s[18].time + "",
    a,
    i,
    p,
    m = s[18].title + "",
    g,
    _,
    M,
    w,
    y,
    k,
    b = s[18].description + "",
    E,
    A,
    T = s[18].status === "Completed" && ka();
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("h3")),
        (n = d("span")),
        (o = new ae(!1)),
        (a = I()),
        (i = d("span")),
        (p = new ae(!1)),
        (g = I()),
        (_ = d("div")),
        (M = I()),
        (w = d("div")),
        (y = d("p")),
        (k = new ae(!1)),
        (E = I()),
        T && T.c(),
        (A = I()),
        this.h();
    },
    l(S) {
      e = h(S, "DIV", { class: !0, style: !0 });
      var N = v(e);
      t = h(N, "DIV", { class: !0 });
      var D = v(t);
      l = h(D, "H3", { class: !0 });
      var z = v(l);
      n = h(z, "SPAN", {});
      var L = v(n);
      (o = ce(L, !1)), L.forEach(u), (a = C(z)), (i = h(z, "SPAN", {}));
      var V = v(i);
      (p = ce(V, !1)),
        V.forEach(u),
        z.forEach(u),
        (g = C(D)),
        (_ = h(D, "DIV", { class: !0, style: !0 })),
        v(_).forEach(u),
        (M = C(D)),
        (w = h(D, "DIV", { class: !0 }));
      var $ = v(w);
      y = h($, "P", { class: !0 });
      var G = v(y);
      (k = ce(G, !1)),
        G.forEach(u),
        $.forEach(u),
        D.forEach(u),
        (E = C(N)),
        T && T.l(N),
        (A = C(N)),
        N.forEach(u),
        this.h();
    },
    h() {
      (o.a = null),
        (p.a = null),
        f(l, "class", "roadmap-title svelte-1saw11j"),
        f(_, "class", "roadmap-separator svelte-1saw11j"),
        x(
          _,
          "background",
          s[18].time !== "STAGE 2"
            ? "linear-gradient(270deg, #8156F9 -46.52%, #969AE8 100%)"
            : "linear-gradient(270deg, #6FB8ED -46.52%, #327FA0 100%)"
        ),
        (k.a = null),
        f(y, "class", "roadmap-description svelte-1saw11j"),
        f(w, "class", "roadmap-description-wrapper svelte-1saw11j"),
        f(t, "class", "roadmap-content svelte-1saw11j"),
        f(
          e,
          "class",
          "roadmap-item " +
            (s[20] === 0 ? "first-item" : "") +
            " " +
            (s[20] === Object.entries(se).length - 1 ? "last-item" : "") +
            " svelte-1saw11j"
        ),
        x(
          e,
          "background",
          s[18].time !== "STAGE 2"
            ? "linear-gradient(270deg, #8156F9 -46.52%, #969AE8 100%)"
            : "linear-gradient(270deg, #6FB8ED -46.52%, #327FA0 100%)"
        );
    },
    m(S, N) {
      O(S, e, N),
        c(e, t),
        c(t, l),
        c(l, n),
        o.m(r, n),
        c(l, a),
        c(l, i),
        p.m(m, i),
        c(t, g),
        c(t, _),
        c(t, M),
        c(t, w),
        c(w, y),
        k.m(b, y),
        c(e, E),
        T && T.m(e, null),
        c(e, A);
    },
    p: Be,
    d(S) {
      S && u(e), T && T.d();
    },
  };
}
function Ir(s) {
  let e, t, l;
  function n(r) {
    s[15](r);
  }
  let o = { content: s[1] };
  return (
    s[0] !== void 0 && (o.showModal = s[0]),
    (e = new Cn({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a & 2 && (i.content = r[1]),
          !t && a & 1 && ((t = !0), (i.showModal = r[0]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Ea(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _,
    M = "1",
    w,
    y,
    k,
    b,
    E = "2",
    A,
    T,
    S,
    N,
    D = "3",
    z,
    L,
    V,
    $,
    G,
    P;
  l = new Rt({
    props: {
      title: "Our ",
      buttonText: "Roadmap",
      titleEnd: ", is infinite.",
      isMobile: !0,
    },
  });
  let R = gt(Object.entries(se)),
    le = [];
  for (let W = 0; W < R.length; W += 1) le[W] = Er(kr(s, R, W));
  let K = s[0] && Ir(s);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        Z(l.$$.fragment),
        (n = I()),
        (o = d("div")),
        (r = d("div"));
      for (let W = 0; W < le.length; W += 1) le[W].c();
      (a = I()),
        (i = d("div")),
        (p = d("div")),
        (m = I()),
        (g = d("button")),
        (_ = d("span")),
        (_.textContent = M),
        (y = I()),
        (k = d("button")),
        (b = d("span")),
        (b.textContent = E),
        (T = I()),
        (S = d("span")),
        (N = d("span")),
        (N.textContent = D),
        (L = I()),
        K && K.c(),
        (V = pe()),
        this.h();
    },
    l(W) {
      e = h(W, "DIV", { class: !0 });
      var J = v(e);
      t = h(J, "DIV", { class: !0 });
      var ee = v(t);
      X(l.$$.fragment, ee),
        ee.forEach(u),
        (n = C(J)),
        (o = h(J, "DIV", { class: !0 }));
      var he = v(o);
      r = h(he, "DIV", { class: !0 });
      var re = v(r);
      for (let qe = 0; qe < le.length; qe += 1) le[qe].l(re);
      re.forEach(u),
        he.forEach(u),
        (a = C(J)),
        (i = h(J, "DIV", { class: !0 }));
      var $e = v(i);
      (p = h($e, "DIV", { class: !0, style: !0 })),
        v(p).forEach(u),
        (m = C($e)),
        (g = h($e, "BUTTON", { class: !0, style: !0 }));
      var Ye = v(g);
      (_ = h(Ye, "SPAN", { class: !0, "data-svelte-h": !0 })),
        _e(_) !== "svelte-4rug0j" && (_.textContent = M),
        Ye.forEach(u),
        (y = C($e)),
        (k = h($e, "BUTTON", { class: !0, style: !0 }));
      var Qe = v(k);
      (b = h(Qe, "SPAN", { class: !0, "data-svelte-h": !0 })),
        _e(b) !== "svelte-1o38sr4" && (b.textContent = E),
        Qe.forEach(u),
        (T = C($e)),
        (S = h($e, "SPAN", { class: !0, style: !0 }));
      var Ge = v(S);
      (N = h(Ge, "SPAN", { class: !0, "data-svelte-h": !0 })),
        _e(N) !== "svelte-100q5wx" && (N.textContent = D),
        Ge.forEach(u),
        $e.forEach(u),
        J.forEach(u),
        (L = C(W)),
        K && K.l(W),
        (V = pe()),
        this.h();
    },
    h() {
      f(t, "class", "mb-[25px] pl-[33px]"),
        f(r, "class", "roadmap-scroll svelte-1saw11j"),
        f(o, "class", "roadmap-container svelte-1saw11j"),
        f(p, "class", "slider-track svelte-1saw11j"),
        f(p, "style", s[6]),
        f(_, "class", "svelte-1saw11j"),
        f(
          g,
          "class",
          (w = "stage-number " + (s[5] ? "active" : "") + " svelte-1saw11j")
        ),
        x(g, "left", "20%"),
        f(b, "class", "svelte-1saw11j"),
        f(
          k,
          "class",
          (A = "stage-number " + (s[4] ? "active" : "") + " svelte-1saw11j")
        ),
        x(k, "left", "50%"),
        f(N, "class", "svelte-1saw11j"),
        f(
          S,
          "class",
          (z = "stage-number " + (s[3] ? "active" : "") + " svelte-1saw11j")
        ),
        x(S, "left", "80%"),
        f(i, "class", "slider-container svelte-1saw11j"),
        f(e, "class", "relative");
    },
    m(W, J) {
      O(W, e, J), c(e, t), Y(l, t, null), c(e, n), c(e, o), c(o, r);
      for (let ee = 0; ee < le.length; ee += 1) le[ee] && le[ee].m(r, null);
      s[12](r),
        c(e, a),
        c(e, i),
        c(i, p),
        c(i, m),
        c(i, g),
        c(g, _),
        c(i, y),
        c(i, k),
        c(k, b),
        c(i, T),
        c(i, S),
        c(S, N),
        O(W, L, J),
        K && K.m(W, J),
        O(W, V, J),
        ($ = !0),
        G || ((P = [fe(g, "click", s[13]), fe(k, "click", s[14])]), (G = !0));
    },
    p(W, [J]) {
      if (J & 0) {
        R = gt(Object.entries(se));
        let ee;
        for (ee = 0; ee < R.length; ee += 1) {
          const he = kr(W, R, ee);
          le[ee]
            ? le[ee].p(he, J)
            : ((le[ee] = Er(he)), le[ee].c(), le[ee].m(r, null));
        }
        for (; ee < le.length; ee += 1) le[ee].d(1);
        le.length = R.length;
      }
      (!$ || J & 64) && f(p, "style", W[6]),
        (!$ ||
          (J & 32 &&
            w !==
              (w =
                "stage-number " +
                (W[5] ? "active" : "") +
                " svelte-1saw11j"))) &&
          f(g, "class", w),
        (!$ ||
          (J & 16 &&
            A !==
              (A =
                "stage-number " +
                (W[4] ? "active" : "") +
                " svelte-1saw11j"))) &&
          f(k, "class", A),
        (!$ ||
          (J & 8 &&
            z !==
              (z =
                "stage-number " +
                (W[3] ? "active" : "") +
                " svelte-1saw11j"))) &&
          f(S, "class", z),
        W[0]
          ? K
            ? (K.p(W, J), J & 1 && H(K, 1))
            : ((K = Ir(W)), K.c(), H(K, 1), K.m(V.parentNode, V))
          : K &&
            (wt(),
            j(K, 1, 1, () => {
              K = null;
            }),
            yt());
    },
    i(W) {
      $ || (H(l.$$.fragment, W), H(K), ($ = !0));
    },
    o(W) {
      j(l.$$.fragment, W), j(K), ($ = !1);
    },
    d(W) {
      W && (u(e), u(L), u(V)),
        q(l),
        Tl(le, W),
        s[12](null),
        K && K.d(W),
        (G = !1),
        Ml(P);
    },
  };
}
function Ia(s, e, t) {
  let l,
    n,
    o,
    r,
    a,
    i = !1,
    p = {};
  const m = (T) => {
    t(1, (p = { key: T })), t(0, (i = !0));
  };
  let g,
    _ = 0,
    M = 0,
    w = 0;
  yl(() => {
    const T = () => {
      const { scrollLeft: S, scrollWidth: N, clientWidth: D } = g;
      _ = (S / (N - D)) * 100;
      const z = 208,
        L = Object.entries(se).find((V, $) => ($ + 2) * z - 38 > S + D);
      if (L)
        switch (L[1].time) {
          case "STAGE 1":
            t(9, (M = Math.min(20, (((20 * _) / 100) * 14) / 8)));
            break;
          case "STAGE 2":
            t(
              9,
              (M = Math.max(20, Math.min(50, (((30 * _) / 100) * 14) / 5 - 30)))
            );
            break;
          case "STAGE 3":
            t(9, (M = Math.min(100, ((20 * _) / 100) * 14 - 50)));
            break;
          default:
            t(9, (M = 0));
        }
      else t(9, (M = 100));
    };
    return (
      T(),
      g.addEventListener("scroll", T),
      () => g.removeEventListener("scroll", T)
    );
  });
  const y = Lo(0, { duration: 500, easing: Vo });
  Gr(s, y, (T) => t(11, (a = T)));
  function k(T) {
    Ae[T ? "unshift" : "push"](() => {
      (g = T), t(2, g);
    });
  }
  const b = () => m("1"),
    E = () => m("2");
  function A(T) {
    (i = T), t(0, i);
  }
  return (
    (s.$$.update = () => {
      s.$$.dirty & 2560 && (y.set(M), t(10, (w = a))),
        s.$$.dirty & 1024 && t(6, (l = `--progress: ${w}%`)),
        s.$$.dirty & 1024 && t(5, (n = w >= 18)),
        s.$$.dirty & 1024 && t(4, (o = w >= 47)),
        s.$$.dirty & 1024 && t(3, (r = w >= 79));
    }),
    [i, p, g, r, o, n, l, m, y, M, w, a, k, b, E, A]
  );
}
class Ca extends Ze {
  constructor(e) {
    super(), Xe(this, e, Ia, Ea, Se, {});
  }
}
function Ma(s) {
  let e, t;
  return (
    (e = new Ca({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Ta(s) {
  let e, t;
  return (
    (e = new ya({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function xa(s) {
  let e, t, l, n;
  const o = [Ta, Ma],
    r = [];
  function a(i, p) {
    return i[0] ? 1 : 0;
  }
  return (
    (e = a(s)),
    (t = r[e] = o[e](s)),
    {
      c() {
        t.c(), (l = pe());
      },
      l(i) {
        t.l(i), (l = pe());
      },
      m(i, p) {
        r[e].m(i, p), O(i, l, p), (n = !0);
      },
      p(i, [p]) {
        let m = e;
        (e = a(i)),
          e !== m &&
            (wt(),
            j(r[m], 1, 1, () => {
              r[m] = null;
            }),
            yt(),
            (t = r[e]),
            t || ((t = r[e] = o[e](i)), t.c()),
            H(t, 1),
            t.m(l.parentNode, l));
      },
      i(i) {
        n || (H(t), (n = !0));
      },
      o(i) {
        j(t), (n = !1);
      },
      d(i) {
        i && u(l), r[e].d(i);
      },
    }
  );
}
function Aa(s, e, t) {
  let { isMobile: l } = e;
  return (
    (s.$$set = (n) => {
      "isMobile" in n && t(0, (l = n.isMobile));
    }),
    [l]
  );
}
class Sa extends Ze {
  constructor(e) {
    super(), Xe(this, e, Aa, xa, Se, { isMobile: 0 });
  }
}
const ci =
  "" + new URL("../assets/infinity.BBDAf1b_.mp4", import.meta.url).href;
function Cr(s, e, t) {
  const l = s.slice();
  return (l[27] = e[t]), (l[29] = t), l;
}
function Da(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0, style: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "line svelte-1gp76hw"),
        x(e, "animation-delay", s[6] + (s[29] / s[0]) * s[3] + "ms"),
        x(e, "opacity", s[7] ? 0.4 : 1),
        pt(e, "animate", s[9] && s[7]),
        pt(e, "highlighted", s[29] === s[10]),
        pt(
          e,
          "highlightedAlongside",
          s[29] === s[10] - 1 || s[29] === s[10] + 1
        ),
        pt(
          e,
          "highlightedAlongsideTwo",
          s[29] === s[10] - 2 || s[29] === s[10] + 2
        );
    },
    m(t, l) {
      O(t, e, l);
    },
    p(t, l) {
      l & 73 && x(e, "animation-delay", t[6] + (t[29] / t[0]) * t[3] + "ms"),
        l & 128 && x(e, "opacity", t[7] ? 0.4 : 1),
        l & 640 && pt(e, "animate", t[9] && t[7]),
        l & 1024 && pt(e, "highlighted", t[29] === t[10]),
        l & 1024 &&
          pt(
            e,
            "highlightedAlongside",
            t[29] === t[10] - 1 || t[29] === t[10] + 1
          ),
        l & 1024 &&
          pt(
            e,
            "highlightedAlongsideTwo",
            t[29] === t[10] - 2 || t[29] === t[10] + 2
          );
    },
    d(t) {
      t && u(e);
    },
  };
}
function Mr(s) {
  let e,
    t = s[29] > 1 && Da(s);
  return {
    c() {
      t && t.c(), (e = pe());
    },
    l(l) {
      t && t.l(l), (e = pe());
    },
    m(l, n) {
      t && t.m(l, n), O(l, e, n);
    },
    p(l, n) {
      l[29] > 1 && t.p(l, n);
    },
    d(l) {
      l && u(e), t && t.d(l);
    },
  };
}
function Na(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _ = gt(Array(s[0])),
    M = [];
  for (let w = 0; w < _.length; w += 1) M[w] = Mr(Cr(s, _, w));
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("p")),
        (n = He(s[4])),
        (o = I()),
        (r = d("p")),
        (a = He(s[5])),
        (i = I()),
        (p = d("div")),
        (m = d("div")),
        (g = I());
      for (let w = 0; w < M.length; w += 1) M[w].c();
      this.h();
    },
    l(w) {
      e = h(w, "DIV", { class: !0 });
      var y = v(e);
      t = h(y, "DIV", { class: !0, style: !0 });
      var k = v(t);
      l = h(k, "P", { class: !0 });
      var b = v(l);
      (n = je(b, s[4])),
        b.forEach(u),
        (o = C(k)),
        (r = h(k, "P", { class: !0 }));
      var E = v(r);
      (a = je(E, s[5])),
        E.forEach(u),
        k.forEach(u),
        (i = C(y)),
        (p = h(y, "DIV", { class: !0 }));
      var A = v(p);
      (m = h(A, "DIV", { class: !0, style: !0 })), v(m).forEach(u), (g = C(A));
      for (let T = 0; T < M.length; T += 1) M[T].l(A);
      A.forEach(u), y.forEach(u), this.h();
    },
    h() {
      f(l, "class", "gradient title svelte-1gp76hw"),
        f(r, "class", "gradient description svelte-1gp76hw"),
        f(t, "class", "title-container svelte-1gp76hw"),
        x(t, "transition-delay", s[6] + "ms"),
        pt(t, "animate", s[9] && s[7]),
        pt(t, "static", !s[7]),
        f(m, "class", "start-line svelte-1gp76hw"),
        x(m, "width", s[1] + "px"),
        x(m, "height", 2 * s[2] + "px"),
        x(m, "transform", "translateY(-50%)"),
        f(p, "class", "line-container svelte-1gp76hw"),
        f(e, "class", "animation-container svelte-1gp76hw");
    },
    m(w, y) {
      O(w, e, y),
        c(e, t),
        c(t, l),
        c(l, n),
        c(t, o),
        c(t, r),
        c(r, a),
        c(e, i),
        c(e, p),
        c(p, m),
        c(p, g);
      for (let k = 0; k < M.length; k += 1) M[k] && M[k].m(p, null);
      s[16](e);
    },
    p(w, [y]) {
      if (
        (y & 16 && ll(n, w[4]),
        y & 32 && ll(a, w[5]),
        y & 64 && x(t, "transition-delay", w[6] + "ms"),
        y & 640 && pt(t, "animate", w[9] && w[7]),
        y & 128 && pt(t, "static", !w[7]),
        y & 2 && x(m, "width", w[1] + "px"),
        y & 4 && x(m, "height", 2 * w[2] + "px"),
        y & 1737)
      ) {
        _ = gt(Array(w[0]));
        let k;
        for (k = 0; k < _.length; k += 1) {
          const b = Cr(w, _, k);
          M[k] ? M[k].p(b, y) : ((M[k] = Mr(b)), M[k].c(), M[k].m(p, null));
        }
        for (; k < M.length; k += 1) M[k].d(1);
        M.length = _.length;
      }
    },
    i: Be,
    o: Be,
    d(w) {
      w && u(e), Tl(M, w), s[16](null);
    },
  };
}
function Va(s, e, t) {
  let l,
    { lineCount: n = 20 } = e,
    { lineWidth: o = 1 } = e,
    { lineHeight: r = 100 } = e,
    { animationDuration: a = 2e3 } = e,
    { title: i = "" } = e,
    { description: p = "" } = e,
    { startDelay: m = 0 } = e,
    { animateLines: g = !0 } = e,
    _,
    M = !1,
    w = 0,
    y = 0,
    k = 0,
    b = 0,
    E = "mouse",
    A = !1,
    T = -5,
    S;
  const N = (P) => {
      A ||
        (t(11, (w = P.clientX)), t(12, (y = P.clientY)), t(15, (E = "mouse")));
    },
    D = (P) => {
      !A &&
        P.touches &&
        P.touches[0] &&
        (t(13, (k = P.touches[0].clientX)),
        t(14, (b = P.touches[0].clientY)),
        t(15, (E = "touch")));
    },
    z = () => {
      A || (A = !0);
    },
    L = () => {
      const R = _.querySelector(".line-container").querySelectorAll(".line");
      let le, K;
      t(
        10,
        (T = Array.from(R).findIndex((W, J) => {
          const he = W.getBoundingClientRect().x - l;
          return (le = he <= 0 && he >= -5), (K = he <= 0 && he >= -10), he > 0;
        }))
      ),
        t(10, (T = T === 0 ? -5 : T)),
        t(10, (T = K ? n : T)),
        t(10, (T = le ? n - 1 : T)),
        clearTimeout(S),
        (S = setTimeout(() => {
          V();
        }, 150));
    },
    V = () => {
      (A = !1), t(10, (T = -5));
    },
    $ = () => {
      (A = !1), t(10, (T = -5));
    };
  yl(() => {
    const P = new IntersectionObserver(
      (le) => {
        le[0].isIntersecting && (t(9, (M = !0)), P.disconnect());
      },
      { threshold: 0.1 }
    );
    P.observe(_),
      window.addEventListener("mousemove", N),
      window.addEventListener("touchmove", D),
      window.addEventListener("touchend", $);
    const R = ri(_);
    return (
      R &&
        (R.addEventListener("scroll", z, { passive: !0 }),
        R.addEventListener("scrollend", V, { passive: !0 }),
        R.addEventListener("scroll", L, { passive: !0 })),
      () => {
        P.disconnect(),
          R &&
            (R.removeEventListener("scroll", z),
            R.removeEventListener("scrollend", V),
            R.removeEventListener("scroll", L)),
          window.removeEventListener("mousemove", N),
          window.removeEventListener("touchmove", D),
          window.removeEventListener("touchend", $);
      }
    );
  });
  function G(P) {
    Ae[P ? "unshift" : "push"](() => {
      (_ = P), t(8, _);
    });
  }
  return (
    (s.$$set = (P) => {
      "lineCount" in P && t(0, (n = P.lineCount)),
        "lineWidth" in P && t(1, (o = P.lineWidth)),
        "lineHeight" in P && t(2, (r = P.lineHeight)),
        "animationDuration" in P && t(3, (a = P.animationDuration)),
        "title" in P && t(4, (i = P.title)),
        "description" in P && t(5, (p = P.description)),
        "startDelay" in P && t(6, (m = P.startDelay)),
        "animateLines" in P && t(7, (g = P.animateLines));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 43008 && (l = E === "touch" ? k : w), s.$$.dirty & 53248;
    }),
    [n, o, r, a, i, p, m, g, _, M, T, w, y, k, b, E, G]
  );
}
class Cl extends Ze {
  constructor(e) {
    super(),
      Xe(this, e, Va, Na, Se, {
        lineCount: 0,
        lineWidth: 1,
        lineHeight: 2,
        animationDuration: 3,
        title: 4,
        description: 5,
        startDelay: 6,
        animateLines: 7,
      });
  }
}
function La(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i = "CA: ",
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k,
    b,
    E,
    A,
    T,
    S,
    N,
    D,
    z,
    L,
    V;
  return (
    (n = new Rt({ props: { title: Xr } })),
    (_ = new oi({
      props: {
        text: "Own A Piece Of Nfinity",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x000000000000000000000000000",
      },
    })),
    (y = new Cl({
      props: {
        lineCount: 70,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 1e3,
        title: mt[1].title,
        description: mt[1].description,
      },
    })),
    (b = new Cl({
      props: {
        lineCount: 39,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 600,
        title: mt[2].title,
        description: mt[2].description,
        startDelay: 1e3,
      },
    })),
    (A = new Cl({
      props: {
        lineCount: 35,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 600,
        title: mt[3].title,
        description: mt[3].description,
        startDelay: 1600,
      },
    })),
    (S = new Cl({
      props: {
        lineCount: 30,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 500,
        title: mt[4].title,
        description: mt[4].description,
        startDelay: 2200,
      },
    })),
    (D = new Cl({
      props: {
        lineCount: 30,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 500,
        title: mt[5].title,
        description: mt[5].description,
        startDelay: 2700,
      },
    })),
    {
      c() {
        (e = d("div")),
          (t = d("div")),
          (l = d("span")),
          Z(n.$$.fragment),
          (o = I()),
          (r = d("p")),
          (a = d("strong")),
          (a.textContent = i),
          (p = d("span")),
          (m = He(bn)),
          (g = I()),
          Z(_.$$.fragment),
          (M = I()),
          (w = d("div")),
          Z(y.$$.fragment),
          (k = I()),
          Z(b.$$.fragment),
          (E = I()),
          Z(A.$$.fragment),
          (T = I()),
          Z(S.$$.fragment),
          (N = I()),
          Z(D.$$.fragment),
          this.h();
      },
      l($) {
        e = h($, "DIV", { class: !0 });
        var G = v(e);
        t = h(G, "DIV", { class: !0 });
        var P = v(t);
        l = h(P, "SPAN", { class: !0 });
        var R = v(l);
        X(n.$$.fragment, R), (o = C(R)), (r = h(R, "P", { class: !0 }));
        var le = v(r);
        (a = h(le, "STRONG", { "data-svelte-h": !0 })),
          _e(a) !== "svelte-j2m8om" && (a.textContent = i),
          (p = h(le, "SPAN", { class: !0 }));
        var K = v(p);
        (m = je(K, bn)),
          K.forEach(u),
          le.forEach(u),
          R.forEach(u),
          (g = C(P)),
          X(_.$$.fragment, P),
          P.forEach(u),
          (M = C(G)),
          (w = h(G, "DIV", { class: !0 }));
        var W = v(w);
        X(y.$$.fragment, W),
          (k = C(W)),
          X(b.$$.fragment, W),
          (E = C(W)),
          X(A.$$.fragment, W),
          (T = C(W)),
          X(S.$$.fragment, W),
          (N = C(W)),
          X(D.$$.fragment, W),
          W.forEach(u),
          G.forEach(u),
          this.h();
      },
      h() {
        f(p, "class", "tracking-[0.5em]"),
          f(r, "class", "token svelte-1vuh5og"),
          f(l, "class", "touch-none"),
          f(t, "class", "title svelte-1vuh5og"),
          f(w, "class", "domino svelte-1vuh5og"),
          f(e, "class", "wrapper svelte-1vuh5og");
      },
      m($, G) {
        O($, e, G),
          c(e, t),
          c(t, l),
          Y(n, l, null),
          c(l, o),
          c(l, r),
          c(r, a),
          c(r, p),
          c(p, m),
          c(t, g),
          Y(_, t, null),
          c(e, M),
          c(e, w),
          Y(y, w, null),
          c(w, k),
          Y(b, w, null),
          c(w, E),
          Y(A, w, null),
          c(w, T),
          Y(S, w, null),
          c(w, N),
          Y(D, w, null),
          (z = !0),
          L || ((V = fe(r, "dblclick", s[0])), (L = !0));
      },
      p: Be,
      i($) {
        z ||
          (H(n.$$.fragment, $),
          H(_.$$.fragment, $),
          H(y.$$.fragment, $),
          H(b.$$.fragment, $),
          H(A.$$.fragment, $),
          H(S.$$.fragment, $),
          H(D.$$.fragment, $),
          (z = !0));
      },
      o($) {
        j(n.$$.fragment, $),
          j(_.$$.fragment, $),
          j(y.$$.fragment, $),
          j(b.$$.fragment, $),
          j(A.$$.fragment, $),
          j(S.$$.fragment, $),
          j(D.$$.fragment, $),
          (z = !1);
      },
      d($) {
        $ && u(e), q(n), q(_), q(y), q(b), q(A), q(S), q(D), (L = !1), V();
      },
    }
  );
}
function za(s) {
  return [() => navigator.clipboard.writeText(bn)];
}
class $a extends Ze {
  constructor(e) {
    super(), Xe(this, e, za, La, Se, {});
  }
}
function Ga(s) {
  let e, t, l, n, o, r, a, i, p, m, g, _, M, w, y, k;
  return (
    (l = new Rt({ props: { title: Xr } })),
    (a = new Cl({
      props: {
        lineCount: 70,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 1e3,
        title: mt[1].title,
        description: mt[1].description,
        animateLines: !1,
      },
    })),
    (p = new Cl({
      props: {
        lineCount: 39,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 600,
        title: mt[2].title,
        description: mt[2].description,
        startDelay: 1e3,
        animateLines: !1,
      },
    })),
    (g = new Cl({
      props: {
        lineCount: 35,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 600,
        title: mt[3].title,
        description: mt[3].description,
        startDelay: 1600,
        animateLines: !1,
      },
    })),
    (M = new Cl({
      props: {
        lineCount: 27,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 500,
        title: mt[4].title,
        description: mt[4].description,
        startDelay: 2200,
        animateLines: !1,
      },
    })),
    (y = new Cl({
      props: {
        lineCount: 27,
        lineWidth: 1,
        lineHeight: 100,
        animationDuration: 500,
        title: mt[5].title,
        description: mt[5].description,
        startDelay: 2700,
        animateLines: !1,
      },
    })),
    {
      c() {
        (e = d("div")),
          (t = d("div")),
          Z(l.$$.fragment),
          (n = I()),
          (o = d("div")),
          (r = d("div")),
          Z(a.$$.fragment),
          (i = I()),
          Z(p.$$.fragment),
          (m = I()),
          Z(g.$$.fragment),
          (_ = I()),
          Z(M.$$.fragment),
          (w = I()),
          Z(y.$$.fragment),
          this.h();
      },
      l(b) {
        e = h(b, "DIV", { class: !0 });
        var E = v(e);
        t = h(E, "DIV", { class: !0 });
        var A = v(t);
        X(l.$$.fragment, A),
          A.forEach(u),
          (n = C(E)),
          (o = h(E, "DIV", { class: !0 }));
        var T = v(o);
        r = h(T, "DIV", { class: !0 });
        var S = v(r);
        X(a.$$.fragment, S),
          (i = C(S)),
          X(p.$$.fragment, S),
          (m = C(S)),
          X(g.$$.fragment, S),
          (_ = C(S)),
          X(M.$$.fragment, S),
          (w = C(S)),
          X(y.$$.fragment, S),
          S.forEach(u),
          T.forEach(u),
          E.forEach(u),
          this.h();
      },
      h() {
        f(t, "class", "title svelte-1mgo49m"),
          f(r, "class", "domino svelte-1mgo49m"),
          f(o, "class", "domino-container svelte-1mgo49m"),
          f(e, "class", "wrapper svelte-1mgo49m");
      },
      m(b, E) {
        O(b, e, E),
          c(e, t),
          Y(l, t, null),
          c(e, n),
          c(e, o),
          c(o, r),
          Y(a, r, null),
          c(r, i),
          Y(p, r, null),
          c(r, m),
          Y(g, r, null),
          c(r, _),
          Y(M, r, null),
          c(r, w),
          Y(y, r, null),
          (k = !0);
      },
      p: Be,
      i(b) {
        k ||
          (H(l.$$.fragment, b),
          H(a.$$.fragment, b),
          H(p.$$.fragment, b),
          H(g.$$.fragment, b),
          H(M.$$.fragment, b),
          H(y.$$.fragment, b),
          (k = !0));
      },
      o(b) {
        j(l.$$.fragment, b),
          j(a.$$.fragment, b),
          j(p.$$.fragment, b),
          j(g.$$.fragment, b),
          j(M.$$.fragment, b),
          j(y.$$.fragment, b),
          (k = !1);
      },
      d(b) {
        b && u(e), q(l), q(a), q(p), q(g), q(M), q(y);
      },
    }
  );
}
class Pa extends Ze {
  constructor(e) {
    super(), Xe(this, e, null, Ga, Se, {});
  }
}
function Oa(s) {
  let e, t;
  return (
    (e = new Pa({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Ha(s) {
  let e, t;
  return (
    (e = new $a({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function ja(s) {
  let e, t, l, n;
  const o = [Ha, Oa],
    r = [];
  function a(i, p) {
    return i[0] ? 1 : 0;
  }
  return (
    (e = a(s)),
    (t = r[e] = o[e](s)),
    {
      c() {
        t.c(), (l = pe());
      },
      l(i) {
        t.l(i), (l = pe());
      },
      m(i, p) {
        r[e].m(i, p), O(i, l, p), (n = !0);
      },
      p(i, [p]) {
        let m = e;
        (e = a(i)),
          e !== m &&
            (wt(),
            j(r[m], 1, 1, () => {
              r[m] = null;
            }),
            yt(),
            (t = r[e]),
            t || ((t = r[e] = o[e](i)), t.c()),
            H(t, 1),
            t.m(l.parentNode, l));
      },
      i(i) {
        n || (H(t), (n = !0));
      },
      o(i) {
        j(t), (n = !1);
      },
      d(i) {
        i && u(l), r[e].d(i);
      },
    }
  );
}
function Ba(s, e, t) {
  let { isMobile: l } = e;
  return (
    (s.$$set = (n) => {
      "isMobile" in n && t(0, (l = n.isMobile));
    }),
    [l]
  );
}
class Wa extends Ze {
  constructor(e) {
    super(), Xe(this, e, Ba, ja, Se, { isMobile: 0 });
  }
}
const an =
  "data:image/svg+xml,%3csvg%20width='185'%20height='19'%20viewBox='0%200%20185%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.91512%203.10962H11.8868V17.165H9.35686L2.99179%208.39042V17.165H0V3.10962H2.75083L8.91512%2011.6834V3.10962ZM29.3145%205.94077H23.9735V9.03299H28.7925V11.7838H23.9735V17.165H20.9215V3.10962H29.3145V5.94077ZM37.4899%2017.165V3.10962H40.5419V17.165H37.4899ZM58.4831%203.10962H61.4548V17.165H58.9249L52.5597%208.39042V17.165H49.568V3.10962H52.3188L58.4831%2011.6834V3.10962ZM70.4895%2017.165V3.10962H73.5415V17.165H70.4895ZM92.2657%203.10962V5.94077H88.3503V17.165H85.2984V5.94077H81.4029V3.10962H92.2657ZM111.822%203.10962L106.883%2011.4826V17.165H103.751V11.4626L98.8514%203.10962H102.084L105.337%208.73179L108.59%203.10962H111.822ZM170.432%2017.165L169.448%2014.4945H163.846L162.882%2017.165H159.669L165.171%203.10962H168.042L173.725%2017.165H170.432ZM166.637%206.82425L164.81%2011.844H168.484L166.637%206.82425ZM181.33%2017.165V3.10962H184.382V17.165H181.33Z'%20fill='white'/%3e%3cpath%20d='M133.59%204.26731C132.441%202.56401%20130.766%201.28201%20128.823%200.615671C126.879%20-0.0506652%20124.77%20-0.0649961%20122.818%200.574856C120.865%201.2147%20119.174%202.47383%20118.001%204.16135C116.829%205.84886%20116.238%207.87273%20116.319%209.92615C116.401%2011.9795%20117.15%2013.9504%20118.451%2015.54C119.754%2017.1296%20121.538%2018.2512%20123.536%2018.7348C125.534%2019.2184%20127.634%2019.0376%20129.52%2018.2198C131.404%2017.402%20132.972%2015.9918%20133.983%2014.203L130.259%2012.0973C129.706%2013.0761%20128.849%2013.8477%20127.817%2014.2953C126.785%2014.7427%20125.636%2014.8417%20124.543%2014.577C123.45%2014.3124%20122.473%2013.6987%20121.761%2012.8289C121.048%2011.959%20120.638%2010.8806%20120.594%209.75704C120.55%208.63348%20120.873%207.52596%20121.514%206.60261C122.156%205.67922%20123.082%204.99024%20124.15%204.64013C125.218%204.29001%20126.372%204.29785%20127.436%204.66246C128.5%205.02707%20129.415%205.72856%20130.044%206.66063L133.59%204.26731Z'%20fill='url(%23paint0_radial_202_1222)'/%3e%3cpath%20d='M134.911%205.25994C135.837%203.40207%20137.345%201.89872%20139.207%200.980147C141.067%200.0615707%20143.179%20-0.221598%20145.216%200.174027C147.254%200.569652%20149.106%201.62225%20150.487%203.1706C151.87%204.71897%20152.706%206.67769%20152.868%208.74682C153.031%2010.816%20152.512%2012.8814%20151.388%2014.6269C150.266%2016.3723%20148.602%2017.7014%20146.65%2018.4108C144.7%2019.1201%20142.571%2019.1704%20140.589%2018.5542C138.607%2017.9379%20136.881%2016.6889%20135.677%2014.9986L139.179%2012.5037C139.837%2013.4284%20140.781%2014.1114%20141.865%2014.4486C142.949%2014.7857%20144.114%2014.7582%20145.181%2014.3701C146.248%2013.9822%20147.159%2013.2551%20147.772%2012.3003C148.387%2011.3456%20148.671%2010.2158%20148.583%209.08405C148.494%207.95218%20148.036%206.8807%20147.28%206.0338C146.525%205.18684%20145.511%204.61108%20144.397%204.39467C143.282%204.17826%20142.128%204.33315%20141.11%204.83561C140.091%205.33807%20139.266%206.1604%20138.76%207.17662L134.911%205.25994Z'%20fill='url(%23paint1_radial_202_1222)'/%3e%3cpath%20d='M133.487%204.10049L129.919%206.51831L135.766%2015.1457L139.334%2012.7279L133.487%204.10049Z'%20fill='white'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_202_1222'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(125.811%209.56278)%20rotate(22.6293)%20scale(10.0064%2010.0064)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.475'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_202_1222'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(143.354%209.48187)%20rotate(-156.757)%20scale(10.2165%2010.2165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.475'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e";
function Tr(s, e, t) {
  const l = s.slice();
  return (l[6] = e[t]), l;
}
function Fa(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(
        e,
        "class",
        "skeleton h-full w-full animate-pulse bg-[hsl(240,5.9%,10%)] svelte-10zuj4r"
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p: Be,
    d(t) {
      t && u(e);
    },
  };
}
function Ua(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, class: !0, alt: !0, draggable: !0 })),
        this.h();
    },
    h() {
      ue(e.src, (t = s[6].pfp.src)) || f(e, "src", t),
        f(e, "class", "h-full w-full object-cover"),
        f(e, "alt", ""),
        f(e, "draggable", "false");
    },
    m(l, n) {
      O(l, e, n);
    },
    p(l, n) {
      n & 1 && !ue(e.src, (t = l[6].pfp.src)) && f(e, "src", t);
    },
    d(l) {
      l && u(e);
    },
  };
}
function xr(s) {
  let e, t;
  function l(r, a) {
    return r[6].pfp ? Ua : Fa;
  }
  let n = l(s),
    o = n(s);
  return {
    c() {
      (e = d("div")), o.c(), (t = I()), this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0, style: !0 });
      var a = v(e);
      o.l(a), (t = C(a)), a.forEach(u), this.h();
    },
    h() {
      f(
        e,
        "class",
        "circle z-1 absolute animate-[float_ease-in-out_infinite] overflow-hidden rounded-full shadow-[0_0.25rem_1.125rem_0_#006fb9] svelte-10zuj4r"
      ),
        x(e, "bottom", s[6].bottom),
        x(e, "left", s[6].left),
        x(e, "width", s[6].size * s[1] + "px"),
        x(e, "height", s[6].size * s[1] + "px"),
        x(e, "animation-duration", (s[6].duration || 3) + "s"),
        x(
          e,
          "--x-offset",
          (s[6].xOffset ? parseFloat(s[6].xOffset) / 16 : 0) + "rem"
        ),
        x(
          e,
          "--y-offset",
          (s[6].yOffset ? parseFloat(s[6].yOffset) / 16 : 0) + "rem"
        );
    },
    m(r, a) {
      O(r, e, a), o.m(e, null), c(e, t);
    },
    p(r, a) {
      n === (n = l(r)) && o
        ? o.p(r, a)
        : (o.d(1), (o = n(r)), o && (o.c(), o.m(e, t))),
        a & 1 && x(e, "bottom", r[6].bottom),
        a & 1 && x(e, "left", r[6].left),
        a & 3 && x(e, "width", r[6].size * r[1] + "px"),
        a & 3 && x(e, "height", r[6].size * r[1] + "px"),
        a & 1 && x(e, "animation-duration", (r[6].duration || 3) + "s"),
        a & 1 &&
          x(
            e,
            "--x-offset",
            (r[6].xOffset ? parseFloat(r[6].xOffset) / 16 : 0) + "rem"
          ),
        a & 1 &&
          x(
            e,
            "--y-offset",
            (r[6].yOffset ? parseFloat(r[6].yOffset) / 16 : 0) + "rem"
          );
    },
    d(r) {
      r && u(e), o.d();
    },
  };
}
function Ra(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k,
    b,
    E,
    A,
    T,
    S,
    N = `<img src="${an}" alt="Logo" width="271" height="28"/> <a href="/" class="text-white">Terms &amp; Conditions</a>`,
    D;
  (o = new Rt({ props: { title: Yr } })),
    (g = new St({
      props: {
        text: "Join our Telegram",
        gradient: "textGradient",
        href: "https://t.me/Nifinity_AI_channel",
        className: "font-avantGarde text-[18px] font-bold h-[59px]",
      },
    })),
    (M = new St({
      props: {
        text: "Follow us on X",
        gradient: "textGradient",
        href: "https://x.com/Infinite_AI_X",
        className: "font-avantGarde text-[18px] font-bold h-[59px]",
      },
    })),
    (y = new St({
      props: {
        text: "Buy on Uniswap",
        gradient: "textGradient",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x0000000000000000000000000000000000000",
        className: "font-avantGarde text-[18px] font-bold h-[59px]",
      },
    }));
  let z = gt(s[0]),
    L = [];
  for (let V = 0; V < z.length; V += 1) L[V] = xr(Tr(s, z, V));
  return {
    c() {
      (e = d("footer")),
        (t = d("div")),
        (l = d("div")),
        (n = d("div")),
        Z(o.$$.fragment),
        (r = I()),
        (a = d("p")),
        (i = new ae(!1)),
        (p = I()),
        (m = d("div")),
        Z(g.$$.fragment),
        (_ = I()),
        Z(M.$$.fragment),
        (w = I()),
        Z(y.$$.fragment),
        (k = I()),
        (b = d("div"));
      for (let V = 0; V < L.length; V += 1) L[V].c();
      (E = I()),
        (A = d("div")),
        (T = I()),
        (S = d("div")),
        (S.innerHTML = N),
        this.h();
    },
    l(V) {
      e = h(V, "FOOTER", { class: !0 });
      var $ = v(e);
      t = h($, "DIV", { class: !0 });
      var G = v(t);
      l = h(G, "DIV", { class: !0 });
      var P = v(l);
      n = h(P, "DIV", { class: !0 });
      var R = v(n);
      X(o.$$.fragment, R), (r = C(R)), (a = h(R, "P", { class: !0 }));
      var le = v(a);
      (i = ce(le, !1)),
        le.forEach(u),
        R.forEach(u),
        (p = C(P)),
        (m = h(P, "DIV", { class: !0 }));
      var K = v(m);
      X(g.$$.fragment, K),
        (_ = C(K)),
        X(M.$$.fragment, K),
        (w = C(K)),
        X(y.$$.fragment, K),
        K.forEach(u),
        (k = C(P)),
        (b = h(P, "DIV", { class: !0 }));
      var W = v(b);
      for (let J = 0; J < L.length; J += 1) L[J].l(W);
      W.forEach(u),
        P.forEach(u),
        G.forEach(u),
        (E = C($)),
        (A = h($, "DIV", { class: !0 })),
        v(A).forEach(u),
        (T = C($)),
        (S = h($, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(S) !== "svelte-xp7xpo" && (S.innerHTML = N),
        $.forEach(u),
        this.h();
    },
    h() {
      (i.a = null),
        f(a, "class", "description svelte-10zuj4r"),
        f(n, "class", "title svelte-10zuj4r"),
        f(m, "class", "buttons svelte-10zuj4r"),
        f(b, "class", "circles svelte-10zuj4r"),
        f(l, "class", "content svelte-10zuj4r"),
        f(t, "class", "footer svelte-10zuj4r"),
        f(A, "class", "separator svelte-10zuj4r"),
        f(S, "class", "terms svelte-10zuj4r"),
        f(e, "class", "wrapper");
    },
    m(V, $) {
      O(V, e, $),
        c(e, t),
        c(t, l),
        c(l, n),
        Y(o, n, null),
        c(n, r),
        c(n, a),
        i.m(qr, a),
        c(l, p),
        c(l, m),
        Y(g, m, null),
        c(m, _),
        Y(M, m, null),
        c(m, w),
        Y(y, m, null),
        c(l, k),
        c(l, b);
      for (let G = 0; G < L.length; G += 1) L[G] && L[G].m(b, null);
      c(e, E), c(e, A), c(e, T), c(e, S), (D = !0);
    },
    p(V, [$]) {
      if ($ & 3) {
        z = gt(V[0]);
        let G;
        for (G = 0; G < z.length; G += 1) {
          const P = Tr(V, z, G);
          L[G] ? L[G].p(P, $) : ((L[G] = xr(P)), L[G].c(), L[G].m(b, null));
        }
        for (; G < L.length; G += 1) L[G].d(1);
        L.length = z.length;
      }
    },
    i(V) {
      D ||
        (H(o.$$.fragment, V),
        H(g.$$.fragment, V),
        H(M.$$.fragment, V),
        H(y.$$.fragment, V),
        (D = !0));
    },
    o(V) {
      j(o.$$.fragment, V),
        j(g.$$.fragment, V),
        j(M.$$.fragment, V),
        j(y.$$.fragment, V),
        (D = !1);
    },
    d(V) {
      V && u(e), q(o), q(g), q(M), q(y), Tl(L, V);
    },
  };
}
function Za(s, e, t) {
  let l,
    n = [
      { size: 86, bottom: "221px", left: "0" },
      { size: 76, bottom: "48px", left: "9.1%" },
      { size: 73, bottom: "132px", left: "23%" },
      { size: 118, bottom: "60px", left: "39.3%" },
      { size: 99, bottom: "60px", left: "62%" },
      { size: 90, bottom: "141px", left: "78%" },
      { size: 85, bottom: "265px", left: "89%" },
      { size: 84, bottom: "94px", left: "93%" },
      { size: 62, bottom: "307px", left: "11%" },
    ],
    o,
    r = [],
    a = new Set();
  const i = () => {
    a.size >= r.length && a.clear();
    const p = r.filter((g) => !n.some((_) => _.pfp === g.src) && !a.has(g.src)),
      m = p[Math.floor(Math.random() * p.length)];
    return m && a.add(m.src), m;
  };
  return (
    yl(async () => {
      (r = await Promise.all(
        Kr.map(
          (m) =>
            new Promise((g, _) => {
              const M = new Image();
              (M.onload = () => g(M)), (M.onerror = _), (M.src = `/PFPs/${m}`);
            })
        )
      )),
        t(
          0,
          (n = n.map((m) => ({
            ...m,
            updateInterval: Math.random() * 1e3 + 1e3,
            duration: 3 + Math.random() * 2,
            xOffset: (Math.random() * 20 - 10).toFixed(2),
            yOffset: (Math.random() * 20 - 10).toFixed(2),
          })))
        );
      const p = () => {
        t(2, (o = window.innerWidth));
      };
      return (
        window.addEventListener("resize", p),
        p(),
        n.forEach((m, g) => {
          setInterval(() => {
            t(0, (n[g] = { ...m, pfp: i() }), n);
          }, m.updateInterval);
        }),
        () => {
          window.removeEventListener("resize", p);
        }
      );
    }),
    (s.$$.update = () => {
      s.$$.dirty & 4 && t(1, (l = Math.max(Math.min(o / 1440, 1), 0.7)));
    }),
    [n, l, o]
  );
}
class Xa extends Ze {
  constructor(e) {
    super(), Xe(this, e, Za, Ra, Se, {});
  }
}
function Ar(s, e, t) {
  const l = s.slice();
  return (l[5] = e[t]), l;
}
function Ya(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(
        e,
        "class",
        "skeleton h-full w-full animate-pulse bg-[hsl(240,5.9%,10%)] svelte-1e8e7r2"
      );
    },
    m(t, l) {
      O(t, e, l);
    },
    p: Be,
    d(t) {
      t && u(e);
    },
  };
}
function qa(s) {
  let e, t;
  return {
    c() {
      (e = d("img")), this.h();
    },
    l(l) {
      (e = h(l, "IMG", { src: !0, class: !0, alt: !0, draggable: !0 })),
        this.h();
    },
    h() {
      ue(e.src, (t = s[5].pfp.src)) || f(e, "src", t),
        f(e, "class", "h-full w-full object-cover"),
        f(e, "alt", ""),
        f(e, "draggable", "false");
    },
    m(l, n) {
      O(l, e, n);
    },
    p(l, n) {
      n & 1 && !ue(e.src, (t = l[5].pfp.src)) && f(e, "src", t);
    },
    d(l) {
      l && u(e);
    },
  };
}
function Sr(s) {
  let e, t;
  function l(r, a) {
    return r[5].pfp ? qa : Ya;
  }
  let n = l(s),
    o = n(s);
  return {
    c() {
      (e = d("div")), o.c(), (t = I()), this.h();
    },
    l(r) {
      e = h(r, "DIV", { class: !0, style: !0 });
      var a = v(e);
      o.l(a), (t = C(a)), a.forEach(u), this.h();
    },
    h() {
      f(
        e,
        "class",
        "circle z-1 absolute animate-[float_ease-in-out_infinite] overflow-hidden rounded-full shadow-[0_0.25rem_1.125rem_0_#006fb9] svelte-1e8e7r2"
      ),
        x(e, "bottom", s[5].bottom),
        x(e, "left", s[5].left),
        x(e, "width", s[5].size + "px"),
        x(e, "height", s[5].size + "px"),
        x(e, "animation-duration", (s[5].duration || 3) + "s"),
        x(
          e,
          "--x-offset",
          (s[5].xOffset ? parseFloat(s[5].xOffset) / 16 : 0) + "rem"
        ),
        x(
          e,
          "--y-offset",
          (s[5].yOffset ? parseFloat(s[5].yOffset) / 16 : 0) + "rem"
        );
    },
    m(r, a) {
      O(r, e, a), o.m(e, null), c(e, t);
    },
    p(r, a) {
      n === (n = l(r)) && o
        ? o.p(r, a)
        : (o.d(1), (o = n(r)), o && (o.c(), o.m(e, t))),
        a & 1 && x(e, "bottom", r[5].bottom),
        a & 1 && x(e, "left", r[5].left),
        a & 1 && x(e, "width", r[5].size + "px"),
        a & 1 && x(e, "height", r[5].size + "px"),
        a & 1 && x(e, "animation-duration", (r[5].duration || 3) + "s"),
        a & 1 &&
          x(
            e,
            "--x-offset",
            (r[5].xOffset ? parseFloat(r[5].xOffset) / 16 : 0) + "rem"
          ),
        a & 1 &&
          x(
            e,
            "--y-offset",
            (r[5].yOffset ? parseFloat(r[5].yOffset) / 16 : 0) + "rem"
          );
    },
    d(r) {
      r && u(e), o.d();
    },
  };
}
function Ka(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k,
    b,
    E,
    A,
    T,
    S,
    N,
    D = "",
    z;
  (o = new Rt({ props: { title: Yr } })),
    (g = new St({
      props: {
        text: "Join our Telegram",
        gradient: "borderGradient",
        className: "h-[32px]",
        href: "https://t.me/Nifinity_AI_channel",
      },
    })),
    (M = new St({
      props: {
        text: "Follow us on X",
        gradient: "borderGradient",
        className: "h-[32px]",
        href: "https://x.com/Infinite_AI_X",
      },
    }));
  let L = gt(s[0]),
    V = [];
  for (let $ = 0; $ < L.length; $ += 1) V[$] = Sr(Ar(s, L, $));
  return (
    (T = new St({
      props: {
        text: "Buy on Uniswap",
        gradient: "textGradient",
        className:
          "font-avantGarde text-[18px] font-bold w-[241px] mx-auto mt-[8px] h-[59px]",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x000000000000000000000000000000000000",
      },
    })),
    {
      c() {
        (e = d("footer")),
          (t = d("div")),
          (l = d("div")),
          (n = d("div")),
          Z(o.$$.fragment),
          (r = I()),
          (a = d("p")),
          (i = new ae(!1)),
          (p = I()),
          (m = d("div")),
          Z(g.$$.fragment),
          (_ = I()),
          Z(M.$$.fragment),
          (w = I()),
          (y = d("div"));
        for (let $ = 0; $ < V.length; $ += 1) V[$].c();
        (k = I()),
          (b = d("img")),
          (A = I()),
          Z(T.$$.fragment),
          (S = I()),
          (N = d("a")),
          (N.textContent = D),
          this.h();
      },
      l($) {
        e = h($, "FOOTER", { class: !0 });
        var G = v(e);
        t = h(G, "DIV", { class: !0 });
        var P = v(t);
        l = h(P, "DIV", { class: !0 });
        var R = v(l);
        n = h(R, "DIV", { class: !0 });
        var le = v(n);
        X(o.$$.fragment, le), (r = C(le)), (a = h(le, "P", { class: !0 }));
        var K = v(a);
        (i = ce(K, !1)),
          K.forEach(u),
          le.forEach(u),
          (p = C(R)),
          (m = h(R, "DIV", { class: !0 }));
        var W = v(m);
        X(g.$$.fragment, W),
          (_ = C(W)),
          X(M.$$.fragment, W),
          W.forEach(u),
          (w = C(R)),
          (y = h(R, "DIV", { class: !0 }));
        var J = v(y);
        for (let ee = 0; ee < V.length; ee += 1) V[ee].l(J);
        J.forEach(u),
          (k = C(R)),
          (b = h(R, "IMG", {
            src: !0,
            alt: !0,
            class: !0,
            width: !0,
            height: !0,
          })),
          R.forEach(u),
          P.forEach(u),
          (A = C(G)),
          X(T.$$.fragment, G),
          (S = C(G)),
          (N = h(G, "A", { href: !0, class: !0, "data-svelte-h": !0 })),
          _e(N) !== "svelte-1g7wv5i" && (N.textContent = D),
          G.forEach(u),
          this.h();
      },
      h() {
        (i.a = null),
          f(a, "class", "description svelte-1e8e7r2"),
          f(n, "class", "title svelte-1e8e7r2"),
          f(m, "class", "buttons svelte-1e8e7r2"),
          f(y, "class", "circles svelte-1e8e7r2"),
          ue(b.src, (E = an)) || f(b, "src", E),
          f(b, "alt", "Logo"),
          f(b, "class", "logo svelte-1e8e7r2"),
          f(b, "width", "271"),
          f(b, "height", "28"),
          f(l, "class", "content svelte-1e8e7r2"),
          f(t, "class", "footer svelte-1e8e7r2"),
          f(N, "href", "/"),
          f(N, "class", "terms svelte-1e8e7r2"),
          f(e, "class", "wrapper");
      },
      m($, G) {
        O($, e, G),
          c(e, t),
          c(t, l),
          c(l, n),
          Y(o, n, null),
          c(n, r),
          c(n, a),
          i.m(qr, a),
          c(l, p),
          c(l, m),
          Y(g, m, null),
          c(m, _),
          Y(M, m, null),
          c(l, w),
          c(l, y);
        for (let P = 0; P < V.length; P += 1) V[P] && V[P].m(y, null);
        c(l, k), c(l, b), c(e, A), Y(T, e, null), c(e, S), c(e, N), (z = !0);
      },
      p($, [G]) {
        if (G & 1) {
          L = gt($[0]);
          let P;
          for (P = 0; P < L.length; P += 1) {
            const R = Ar($, L, P);
            V[P] ? V[P].p(R, G) : ((V[P] = Sr(R)), V[P].c(), V[P].m(y, null));
          }
          for (; P < V.length; P += 1) V[P].d(1);
          V.length = L.length;
        }
      },
      i($) {
        z ||
          (H(o.$$.fragment, $),
          H(g.$$.fragment, $),
          H(M.$$.fragment, $),
          H(T.$$.fragment, $),
          (z = !0));
      },
      o($) {
        j(o.$$.fragment, $),
          j(g.$$.fragment, $),
          j(M.$$.fragment, $),
          j(T.$$.fragment, $),
          (z = !1);
      },
      d($) {
        $ && u(e), q(o), q(g), q(M), Tl(V, $), q(T);
      },
    }
  );
}
function Ja(s, e, t) {
  let l = [
      { size: 56, bottom: "234px", left: "12.7%" },
      { size: 86, bottom: "112px", left: "5.5%" },
      { size: 62, bottom: "251px", left: "44.5%" },
      { size: 60, bottom: "127px", left: "44.5%" },
      { size: 45, bottom: "278px", left: "78.8%" },
      { size: 73, bottom: "129px", left: "77.8%" },
    ],
    n = [],
    o = new Set();
  const r = () => {
    o.size >= n.length && o.clear();
    const a = n.filter((p) => !l.some((m) => m.pfp === p.src) && !o.has(p.src)),
      i = a[Math.floor(Math.random() * a.length)];
    return i && o.add(i.src), i;
  };
  return (
    yl(async () => {
      (n = await Promise.all(
        Kr.map(
          (i) =>
            new Promise((p, m) => {
              const g = new Image();
              (g.onload = () => p(g)), (g.onerror = m), (g.src = `/PFPs/${i}`);
            })
        )
      )),
        t(
          0,
          (l = l.map((i) => ({
            ...i,
            updateInterval: Math.random() * 1e3 + 1e3,
            duration: 3 + Math.random() * 2,
            xOffset: (Math.random() * 20 - 10).toFixed(2),
            yOffset: (Math.random() * 20 - 10).toFixed(2),
          })))
        );
      const a = () => {};
      return (
        window.addEventListener("resize", a),
        l.forEach((i, p) => {
          setInterval(() => {
            t(0, (l[p] = { ...i, pfp: r() }), l);
          }, i.updateInterval);
        }),
        () => {
          window.removeEventListener("resize", a);
        }
      );
    }),
    [l]
  );
}
class Qa extends Ze {
  constructor(e) {
    super(), Xe(this, e, Ja, Ka, Se, {});
  }
}
function ec(s) {
  let e, t;
  return (
    (e = new Qa({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function tc(s) {
  let e, t;
  return (
    (e = new Xa({})),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function lc(s) {
  let e, t, l, n;
  const o = [tc, ec],
    r = [];
  function a(i, p) {
    return i[0] ? 1 : 0;
  }
  return (
    (e = a(s)),
    (t = r[e] = o[e](s)),
    {
      c() {
        t.c(), (l = pe());
      },
      l(i) {
        t.l(i), (l = pe());
      },
      m(i, p) {
        r[e].m(i, p), O(i, l, p), (n = !0);
      },
      p(i, [p]) {
        let m = e;
        (e = a(i)),
          e !== m &&
            (wt(),
            j(r[m], 1, 1, () => {
              r[m] = null;
            }),
            yt(),
            (t = r[e]),
            t || ((t = r[e] = o[e](i)), t.c()),
            H(t, 1),
            t.m(l.parentNode, l));
      },
      i(i) {
        n || (H(t), (n = !0));
      },
      o(i) {
        j(t), (n = !1);
      },
      d(i) {
        i && u(l), r[e].d(i);
      },
    }
  );
}
function sc(s, e, t) {
  let { isMobile: l } = e;
  return (
    (s.$$set = (n) => {
      "isMobile" in n && t(0, (l = n.isMobile));
    }),
    [l]
  );
}
class nc extends Ze {
  constructor(e) {
    super(), Xe(this, e, sc, lc, Se, { isMobile: 0 });
  }
}
const fi = "" + new URL("../assets/home.B8mmwTkh.mp4", import.meta.url).href,
  rc =
    "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.1875%2011.9538C6.1875%2013.5674%204.79919%2014.8809%203.09375%2014.8809C1.38831%2014.8809%200%2013.5674%200%2011.9538C0%2010.3403%201.38831%209.02677%203.09375%209.02677C4.79919%209.02677%206.1875%2010.3403%206.1875%2011.9538ZM12.375%2017.8079C10.6696%2017.8079%209.28125%2019.1214%209.28125%2020.735C9.28125%2022.3485%2010.6696%2023.662%2012.375%2023.662C14.0804%2023.662%2015.4688%2022.3485%2015.4688%2020.735C15.4688%2019.1214%2014.0804%2017.8079%2012.375%2017.8079ZM3.09375%2017.8079C1.38831%2017.8079%200%2019.1214%200%2020.735C0%2022.3485%201.38831%2023.662%203.09375%2023.662C4.79919%2023.662%206.1875%2022.3485%206.1875%2020.735C6.1875%2019.1214%204.79919%2017.8079%203.09375%2017.8079ZM21.6563%206.09971C23.3617%206.09971%2024.75%204.78621%2024.75%203.17266C24.75%201.55911%2023.3617%200.245605%2021.6563%200.245605C19.9508%200.245605%2018.5625%201.55911%2018.5625%203.17266C18.5625%204.78621%2019.9508%206.09971%2021.6563%206.09971ZM3.09375%200.245605C1.38831%200.245605%200%201.55911%200%203.17266C0%204.78621%201.38831%206.09971%203.09375%206.09971C4.79919%206.09971%206.1875%204.78621%206.1875%203.17266C6.1875%201.55911%204.79919%200.245605%203.09375%200.245605ZM21.6563%2017.8079C19.9508%2017.8079%2018.5625%2019.1214%2018.5625%2020.735C18.5625%2022.3485%2019.9508%2023.662%2021.6563%2023.662C23.3617%2023.662%2024.75%2022.3485%2024.75%2020.735C24.75%2019.1214%2023.3617%2017.8079%2021.6563%2017.8079ZM21.6563%209.02677C19.9508%209.02677%2018.5625%2010.3403%2018.5625%2011.9538C18.5625%2013.5674%2019.9508%2014.8809%2021.6563%2014.8809C23.3617%2014.8809%2024.75%2013.5674%2024.75%2011.9538C24.75%2010.3403%2023.3617%209.02677%2021.6563%209.02677ZM12.375%209.02677C10.6696%209.02677%209.28125%2010.3403%209.28125%2011.9538C9.28125%2013.5674%2010.6696%2014.8809%2012.375%2014.8809C14.0804%2014.8809%2015.4688%2013.5674%2015.4688%2011.9538C15.4688%2010.3403%2014.0804%209.02677%2012.375%209.02677ZM12.375%200.245605C10.6696%200.245605%209.28125%201.55911%209.28125%203.17266C9.28125%204.78621%2010.6696%206.09971%2012.375%206.09971C14.0804%206.09971%2015.4688%204.78621%2015.4688%203.17266C15.4688%201.55911%2014.0804%200.245605%2012.375%200.245605Z'%20fill='white'/%3e%3c/svg%3e",
  ui = "" + new URL("../assets/block.DYRvY0pE.mp4", import.meta.url).href,
  di = "" + new URL("../assets/stage3.D0v2YbEv.webp", import.meta.url).href;
function Dr(s, e, t) {
  const l = s.slice();
  return (l[6] = e[t]), l;
}
function Nr(s) {
  let e,
    t = s[6].toUpperCase() + "",
    l,
    n,
    o,
    r;
  function a(...i) {
    return s[4](s[6], ...i);
  }
  return {
    c() {
      (e = d("button")), (l = He(t)), (n = I()), this.h();
    },
    l(i) {
      e = h(i, "BUTTON", { class: !0 });
      var p = v(e);
      (l = je(p, t)), (n = C(p)), p.forEach(u), this.h();
    },
    h() {
      f(e, "class", "svelte-1fsv5un"), pt(e, "active", s[0] === s[6]);
    },
    m(i, p) {
      O(i, e, p), c(e, l), c(e, n), o || ((r = fe(e, "click", a)), (o = !0));
    },
    p(i, p) {
      (s = i),
        p & 2 && t !== (t = s[6].toUpperCase() + "") && ll(l, t),
        p & 3 && pt(e, "active", s[0] === s[6]);
    },
    d(i) {
      i && u(e), (o = !1), r();
    },
  };
}
function ic(s) {
  let e,
    t = gt(s[1]),
    l = [];
  for (let n = 0; n < t.length; n += 1) l[n] = Nr(Dr(s, t, n));
  return {
    c() {
      e = d("div");
      for (let n = 0; n < l.length; n += 1) l[n].c();
      this.h();
    },
    l(n) {
      e = h(n, "DIV", { class: !0 });
      var o = v(e);
      for (let r = 0; r < l.length; r += 1) l[r].l(o);
      o.forEach(u), this.h();
    },
    h() {
      f(e, "class", "stage-control svelte-1fsv5un"), pt(e, "disabled", s[2]);
    },
    m(n, o) {
      O(n, e, o);
      for (let r = 0; r < l.length; r += 1) l[r] && l[r].m(e, null);
    },
    p(n, [o]) {
      if (o & 11) {
        t = gt(n[1]);
        let r;
        for (r = 0; r < t.length; r += 1) {
          const a = Dr(n, t, r);
          l[r] ? l[r].p(a, o) : ((l[r] = Nr(a)), l[r].c(), l[r].m(e, null));
        }
        for (; r < l.length; r += 1) l[r].d(1);
        l.length = t.length;
      }
      o & 4 && pt(e, "disabled", n[2]);
    },
    i: Be,
    o: Be,
    d(n) {
      n && u(e), Tl(l, n);
    },
  };
}
function oc(s, e, t) {
  let { sections: l = ["Stage1", "Stage2", "Stage3"] } = e,
    { value: n = "Stage1" } = e,
    { disabled: o = !1 } = e;
  const r = $r(),
    a = (p, m) => {
      p.preventDefault(), t(0, (n = m)), r("change", { value: m });
    },
    i = (p, m) => a(m, p);
  return (
    (s.$$set = (p) => {
      "sections" in p && t(1, (l = p.sections)),
        "value" in p && t(0, (n = p.value)),
        "disabled" in p && t(2, (o = p.disabled));
    }),
    [n, l, o, a, i]
  );
}
class hi extends Ze {
  constructor(e) {
    super(), Xe(this, e, oc, ic, Se, { sections: 1, value: 0, disabled: 2 });
  }
}
function ac(s, e, t) {
  const l = s.slice();
  return (l[45] = e[t]), (l[47] = t), l;
}
function cc(s) {
  let e, t;
  return {
    c() {
      (e = d("span")), (t = He(s[45])), this.h();
    },
    l(l) {
      e = h(l, "SPAN", { class: !0, style: !0 });
      var n = v(e);
      (t = je(n, s[45])), n.forEach(u), this.h();
    },
    h() {
      f(e, "class", "word svelte-uxffec"),
        x(e, "animation-delay", s[47] * 2 + "s");
    },
    m(l, n) {
      O(l, e, n), c(e, t);
    },
    p: Be,
    d(l) {
      l && u(e);
    },
  };
}
function fc(s) {
  let e, t;
  return (
    (e = new Rt({ props: { title: Rr } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function uc(s) {
  let e, t;
  return (
    (e = new Rt({ props: { title: Ur } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function dc(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i = "coming soon",
    p;
  return (
    (t = new St({ props: { gradient: "borderGradient", text: "Learn more" } })),
    t.$on("click", s[22]),
    (o = new St({
      props: { gradient: "borderGradient", text: "Push a model" },
    })),
    {
      c() {
        (e = d("div")),
          Z(t.$$.fragment),
          (l = I()),
          (n = d("span")),
          Z(o.$$.fragment),
          (r = I()),
          (a = d("p")),
          (a.textContent = i),
          this.h();
      },
      l(m) {
        e = h(m, "DIV", { class: !0 });
        var g = v(e);
        X(t.$$.fragment, g), (l = C(g)), (n = h(g, "SPAN", { class: !0 }));
        var _ = v(n);
        X(o.$$.fragment, _),
          (r = C(_)),
          (a = h(_, "P", { class: !0, "data-svelte-h": !0 })),
          _e(a) !== "svelte-1baf3lg" && (a.textContent = i),
          _.forEach(u),
          g.forEach(u),
          this.h();
      },
      h() {
        f(
          a,
          "class",
          "absolute bottom-[-6px] left-1/2 flex -translate-x-1/2 rotate-[-3.7deg] transform items-center justify-center whitespace-nowrap rounded-[40px] bg-[#006FB9] px-[18px] text-center font-nippo text-[12px] leading-[16.2px] text-white"
        ),
          f(n, "class", "relative block w-full"),
          f(e, "class", "stege1-button w-[420px] svelte-uxffec");
      },
      m(m, g) {
        O(m, e, g),
          Y(t, e, null),
          c(e, l),
          c(e, n),
          Y(o, n, null),
          c(n, r),
          c(n, a),
          (p = !0);
      },
      i(m) {
        p || (H(t.$$.fragment, m), H(o.$$.fragment, m), (p = !0));
      },
      o(m) {
        j(t.$$.fragment, m), j(o.$$.fragment, m), (p = !1);
      },
      d(m) {
        m && u(e), q(t), q(o);
      },
    }
  );
}
function hc(s) {
  let e, t, l;
  return (
    (t = new St({
      props: {
        gradient: "borderGradient",
        text: "Explore the app",
        href: "https://nfinity-ai-app.vercel.app/",
      },
    })),
    {
      c() {
        (e = d("div")), Z(t.$$.fragment), this.h();
      },
      l(n) {
        e = h(n, "DIV", { class: !0 });
        var o = v(e);
        X(t.$$.fragment, o), o.forEach(u), this.h();
      },
      h() {
        f(e, "class", "stege1-button w-[200px] svelte-uxffec");
      },
      m(n, o) {
        O(n, e, o), Y(t, e, null), (l = !0);
      },
      i(n) {
        l || (H(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        j(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && u(e), q(t);
      },
    }
  );
}
function Vr(s) {
  let e, t, l;
  function n(r) {
    s[26](r);
  }
  let o = { content: s[4] };
  return (
    s[3] !== void 0 && (o.showModal = s[3]),
    (e = new In({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a[0] & 16 && (i.content = r[4]),
          !t &&
            a[0] & 8 &&
            ((t = !0), (i.showModal = r[3]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function mc(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p = '<track kind="captions"/>',
    m,
    g,
    _,
    M = `<img src="${an}" alt="Logo" class="ml-[20px] w-[165px]" fill="white"/> <div class="menu-container items-center svelte-uxffec"><a href="https://x.com/Infinite_AI_X" class="menu-item svelte-uxffec">X</a> <a href="https://medium.com/@nifinity_ai" class="menu-item svelte-uxffec">Blog</a> <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x000000000000000000000000000000?t=1726065650678" class="menu-item svelte-uxffec">Dextools</a> <a href="https://t.me/Nifinity_AI_channel" class="menu-item svelte-uxffec">Telegram</a> <div class="ml-[31px] mr-[24px] h-[70px] w-[1px] bg-[#323232]"></div> <a href="https://nfinity-ai-app.vercel.app/" class="menu-item svelte-uxffec">Explore Models</a></div>`,
    w,
    y,
    k,
    b,
    E,
    A = ds.firstString + "",
    T,
    S,
    N,
    D = ds.left + "",
    z,
    L,
    V,
    $,
    G = ds.right + "",
    P,
    R,
    le,
    K,
    W,
    J,
    ee,
    he,
    re,
    $e = dl.left + "",
    Ye,
    Qe,
    Ge,
    qe = dl.firstLink + "",
    We,
    nt,
    te = dl.middle + "",
    De,
    Ce,
    we,
    ye = dl.secondLink + "",
    Zt,
    Dt,
    Q,
    F,
    Pe,
    me,
    Ue,
    ft,
    Mt,
    tt,
    Me,
    kt,
    hl,
    Nt,
    be,
    ot,
    at,
    Vt,
    xl = `Whitepaper coming soon
						<span class="stage3-badgeInfo svelte-uxffec">Locked</span>`,
    Et,
    Ne,
    Ke,
    ut,
    Bt,
    Lt = s[2].replace(/(\D)(\d)/, "$1 $2") + "",
    zt,
    Xt,
    lt,
    bt,
    st,
    Tt,
    Te,
    et,
    It,
    rt,
    Re,
    Al,
    nl,
    xe,
    $t = '<div class="relative h-screen w-full"></div>',
    Wt,
    ct,
    ve,
    Ve,
    ml,
    Oe = gt(ds.change),
    ke = [];
  for (let U = 0; U < Oe.length; U += 1) ke[U] = cc(ac(s, Oe, U));
  (K = new St({
    props: {
      gradient: "borderGradient",
      text: "Launch App",
      href: "https://nfinity-ai-app.vercel.app/",
      className: "text-[16px]",
    },
  })),
    (ee = new St({
      props: {
        gradient: "borderGradient",
        text: "$NFNT",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x000000000000000000000000000000000",
        className: "text-[16px]",
      },
    })),
    (ot = new Rt({ props: { title: "Tokenization Of AI" } }));
  const il = [uc, fc],
    xt = [];
  function Yt(U, ne) {
    return U[2] === "Stage1" ? 0 : U[2] === "Stage2" ? 1 : -1;
  }
  ~(bt = Yt(s)) && (st = xt[bt] = il[bt](s));
  const qt = [hc, dc],
    vt = [];
  function Le(U, ne) {
    return U[2] === "Stage1" ? 0 : U[2] === "Stage2" ? 1 : -1;
  }
  ~(Te = Le(s)) && (et = vt[Te] = qt[Te](s));
  function Sl(U) {
    s[23](U);
  }
  let Dl = {};
  s[2] !== void 0 && (Dl.value = s[2]),
    (Re = new hi({ props: Dl })),
    Ae.push(() => Pl(Re, "value", Sl)),
    Re.$on("change", s[24]);
  let ie = s[3] && Vr(s);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("video")),
        (n = d("track")),
        (r = I()),
        (a = d("header")),
        (i = d("video")),
        (i.innerHTML = p),
        (g = I()),
        (_ = d("div")),
        (_.innerHTML = M),
        (w = I()),
        (y = d("div")),
        (k = d("div")),
        (b = d("h1")),
        (E = new ae(!1)),
        (T = I()),
        (S = d("div")),
        (N = new ae(!1)),
        (z = I()),
        (L = d("span"));
      for (let U = 0; U < ke.length; U += 1) ke[U].c();
      (V = I()),
        ($ = new ae(!1)),
        (P = I()),
        (R = d("div")),
        (le = d("span")),
        Z(K.$$.fragment),
        (W = I()),
        (J = d("span")),
        Z(ee.$$.fragment),
        (he = I()),
        (re = d("p")),
        (Ye = He($e)),
        (Qe = I()),
        (Ge = d("button")),
        (We = He(qe)),
        (nt = I()),
        (De = He(te)),
        (Ce = I()),
        (we = d("button")),
        (Zt = He(ye)),
        (Dt = He(".")),
        (Q = I()),
        (F = d("div")),
        (Pe = d("div")),
        (me = d("div")),
        (Ue = d("video")),
        (ft = d("track")),
        (tt = I()),
        (Me = d("div")),
        (kt = d("img")),
        (Nt = I()),
        (be = d("div")),
        Z(ot.$$.fragment),
        (at = I()),
        (Vt = d("div")),
        (Vt.innerHTML = xl),
        (Et = I()),
        (Ne = d("div")),
        (Ke = d("div")),
        (ut = d("div")),
        (Bt = d("div")),
        (zt = He(Lt)),
        (Xt = I()),
        (lt = d("div")),
        st && st.c(),
        (Tt = I()),
        et && et.c(),
        (It = I()),
        (rt = d("span")),
        Z(Re.$$.fragment),
        (nl = I()),
        (xe = d("div")),
        (xe.innerHTML = $t),
        (Wt = I()),
        ie && ie.c(),
        (ct = pe()),
        this.h();
    },
    l(U) {
      e = h(U, "DIV", { class: !0, style: !0 });
      var ne = v(e);
      t = h(ne, "DIV", { class: !0, style: !0 });
      var it = v(t);
      l = h(it, "VIDEO", { src: !0, class: !0, style: !0 });
      var Kt = v(l);
      (n = h(Kt, "TRACK", { kind: !0 })),
        Kt.forEach(u),
        (r = C(it)),
        (a = h(it, "HEADER", { class: !0, style: !0 }));
      var Jt = v(a);
      (i = h(Jt, "VIDEO", {
        class: !0,
        style: !0,
        src: !0,
        "data-svelte-h": !0,
      })),
        _e(i) !== "svelte-1mwj93u" && (i.innerHTML = p),
        (g = C(Jt)),
        (_ = h(Jt, "DIV", { class: !0, style: !0, "data-svelte-h": !0 })),
        _e(_) !== "svelte-10cvdk" && (_.innerHTML = M),
        (w = C(Jt)),
        (y = h(Jt, "DIV", { class: !0, style: !0 }));
      var Qt = v(y);
      k = h(Qt, "DIV", { class: !0, style: !0 });
      var Gt = v(k);
      b = h(Gt, "H1", { class: !0 });
      var ol = v(b);
      (E = ce(ol, !1)), (T = C(ol)), (S = h(ol, "DIV", { class: !0 }));
      var Pt = v(S);
      (N = ce(Pt, !1)),
        (z = C(Pt)),
        (L = h(Pt, "SPAN", { class: !0, style: !0 }));
      var Nl = v(L);
      for (let Ht = 0; Ht < ke.length; Ht += 1) ke[Ht].l(Nl);
      Nl.forEach(u),
        (V = C(Pt)),
        ($ = ce(Pt, !1)),
        Pt.forEach(u),
        ol.forEach(u),
        (P = C(Gt)),
        (R = h(Gt, "DIV", { class: !0 }));
      var ze = v(R);
      le = h(ze, "SPAN", { class: !0 });
      var B = v(le);
      X(K.$$.fragment, B),
        B.forEach(u),
        (W = C(ze)),
        (J = h(ze, "SPAN", { class: !0 }));
      var oe = v(J);
      X(ee.$$.fragment, oe),
        oe.forEach(u),
        ze.forEach(u),
        (he = C(Gt)),
        (re = h(Gt, "P", { class: !0 }));
      var Ee = v(re);
      (Ye = je(Ee, $e)), (Qe = C(Ee)), (Ge = h(Ee, "BUTTON", { style: !0 }));
      var Ot = v(Ge);
      (We = je(Ot, qe)),
        Ot.forEach(u),
        (nt = C(Ee)),
        (De = je(Ee, te)),
        (Ce = C(Ee)),
        (we = h(Ee, "BUTTON", { style: !0 }));
      var _t = v(we);
      (Zt = je(_t, ye)),
        (Dt = je(_t, ".")),
        _t.forEach(u),
        Ee.forEach(u),
        Gt.forEach(u),
        Qt.forEach(u),
        Jt.forEach(u),
        it.forEach(u),
        ne.forEach(u),
        (Q = C(U)),
        (F = h(U, "DIV", { class: !0, style: !0 }));
      var ms = v(F);
      Pe = h(ms, "DIV", { class: !0, style: !0 });
      var rl = v(Pe);
      me = h(rl, "DIV", { class: !0 });
      var el = v(me);
      Ue = h(el, "VIDEO", { class: !0, style: !0, src: !0 });
      var al = v(Ue);
      (ft = h(al, "TRACK", { kind: !0 })),
        al.forEach(u),
        (tt = C(el)),
        (Me = h(el, "DIV", { class: !0, style: !0 }));
      var Vl = v(Me);
      (kt = h(Vl, "IMG", { src: !0, alt: !0, class: !0 })),
        (Nt = C(Vl)),
        (be = h(Vl, "DIV", { class: !0 }));
      var Ft = v(be);
      X(ot.$$.fragment, Ft),
        (at = C(Ft)),
        (Vt = h(Ft, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(Vt) !== "svelte-12flakr" && (Vt.innerHTML = xl),
        Ft.forEach(u),
        Vl.forEach(u),
        el.forEach(u),
        rl.forEach(u),
        ms.forEach(u),
        (Et = C(U)),
        (Ne = h(U, "DIV", { class: !0, style: !0, id: !0 }));
      var pl = v(Ne);
      Ke = h(pl, "DIV", { class: !0 });
      var At = v(Ke);
      ut = h(At, "DIV", { class: !0 });
      var Ct = v(ut);
      Bt = h(Ct, "DIV", { class: !0 });
      var gl = v(Bt);
      (zt = je(gl, Lt)),
        gl.forEach(u),
        (Xt = C(Ct)),
        (lt = h(Ct, "DIV", { class: !0 }));
      var tl = v(lt);
      st && st.l(tl),
        (Tt = C(tl)),
        et && et.l(tl),
        tl.forEach(u),
        (It = C(Ct)),
        (rt = h(Ct, "SPAN", { class: !0 }));
      var Ol = v(rt);
      X(Re.$$.fragment, Ol),
        Ol.forEach(u),
        Ct.forEach(u),
        At.forEach(u),
        pl.forEach(u),
        (nl = C(U)),
        (xe = h(U, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(xe) !== "svelte-33acis" && (xe.innerHTML = $t),
        (Wt = C(U)),
        ie && ie.l(U),
        (ct = pe()),
        this.h();
    },
    h() {
      f(n, "kind", "captions"),
        ue(l.src, (o = fi)) || f(l, "src", o),
        f(l, "class", "background svelte-uxffec"),
        x(l, "position", "fixed"),
        x(l, "top", "0"),
        x(l, "left", "0"),
        x(l, "visibility", "hidden"),
        x(l, "min-width", s[0]),
        (l.autoplay = !0),
        (l.loop = !0),
        (l.muted = !0),
        (l.playsInline = !0),
        f(
          i,
          "class",
          "h-content max-h-[50vh] min-h-[72px] max-w-[24vh] rounded-full bg-black"
        ),
        x(i, "position", "fixed"),
        x(i, "top", "50vh"),
        x(i, "z-index", "4"),
        x(i, "aspect-ratio", "1 / 1"),
        x(i, "left", "max(50%, 384px)"),
        x(i, "min-width", "max(72px, 5vw)"),
        (i.autoplay = !0),
        (i.loop = !0),
        (i.muted = !0),
        (i.playsInline = !0),
        ue(i.src, (m = ci)) || f(i, "src", m),
        f(_, "class", "logoDesktop svelte-uxffec"),
        x(_, "position", "relative"),
        x(_, "z-index", "6"),
        x(_, "pointer-events", "all"),
        (E.a = T),
        (N.a = z),
        f(L, "class", "rotating-word svelte-uxffec"),
        x(L, "width", "6ch"),
        ($.a = null),
        f(S, "class", "flex justify-center"),
        f(b, "class", "title svelte-uxffec"),
        f(le, "class", "button svelte-uxffec"),
        f(J, "class", "button svelte-uxffec"),
        f(R, "class", "buttons svelte-uxffec"),
        x(Ge, "display", "inline"),
        x(we, "display", "inline"),
        f(re, "class", "description svelte-uxffec"),
        f(k, "class", "section"),
        x(k, "opacity", s[12]),
        f(y, "class", "content svelte-uxffec"),
        x(y, "height", "calc(100vh - 0px)"),
        f(
          a,
          "class",
          "top-0 z-10 flex h-screen w-full justify-center text-white"
        ),
        x(a, "visibility", "hidden"),
        f(t, "class", "relative w-full"),
        x(t, "height", "calc(100vh + " + wl + "px)"),
        x(t, "min-width", s[0]),
        f(e, "class", "relative"),
        x(e, "min-width", s[0]),
        f(ft, "kind", "captions"),
        (Ue.autoplay = !0),
        (Ue.loop = !0),
        (Ue.muted = !0),
        (Ue.playsInline = !0),
        f(Ue, "class", "h-full w-auto object-contain"),
        x(Ue, "display", s[2] === "Stage2" ? "unset" : "none"),
        ue(Ue.src, (Mt = ui)) || f(Ue, "src", Mt),
        ue(kt.src, (hl = "/images/lock.webp")) || f(kt, "src", hl),
        f(kt, "alt", ""),
        f(
          kt,
          "class",
          "absolute left-[50%] top-[43%] w-[258px] translate-x-[-50%] translate-y-[-50%] object-cover"
        ),
        f(Vt, "class", "stage3-badge svelte-uxffec"),
        f(
          be,
          "class",
          "mb-[30px] flex w-full items-center justify-between px-[41px]"
        ),
        f(Me, "class", "stage3 svelte-uxffec"),
        x(Me, "background", "url(" + di + ") center no-repeat"),
        x(Me, "background-size", "contain"),
        x(Me, "display", s[2] === "Stage3" ? "flex" : "none"),
        f(me, "class", "gradient-inner svelte-uxffec"),
        f(Pe, "class", "gradient svelte-uxffec"),
        x(Pe, "min-width", s[0]),
        f(F, "class", "top-0 z-[3] h-screen w-full"),
        x(F, "opacity", "0"),
        x(F, "min-width", s[0]),
        f(Bt, "class", "stege1-labels svelte-uxffec"),
        f(lt, "class", "stege1-content svelte-uxffec"),
        f(rt, "class", "stage-control svelte-uxffec"),
        f(ut, "class", "stage svelte-uxffec"),
        f(Ke, "class", "stege1-wrapper svelte-uxffec"),
        f(
          Ne,
          "class",
          "fixed relative top-0 z-[4] h-screen w-full bg-transparent"
        ),
        x(Ne, "opacity", "0"),
        x(Ne, "min-width", s[0]),
        f(Ne, "id", "stage1"),
        f(xe, "class", "relative");
    },
    m(U, ne) {
      O(U, e, ne),
        c(e, t),
        c(t, l),
        c(l, n),
        s[14](l),
        c(t, r),
        c(t, a),
        c(a, i),
        s[15](i),
        c(a, g),
        c(a, _),
        c(a, w),
        c(a, y),
        c(y, k),
        c(k, b),
        E.m(A, b),
        c(b, T),
        c(b, S),
        N.m(D, S),
        c(S, z),
        c(S, L);
      for (let it = 0; it < ke.length; it += 1) ke[it] && ke[it].m(L, null);
      c(S, V),
        $.m(G, S),
        c(k, P),
        c(k, R),
        c(R, le),
        Y(K, le, null),
        c(R, W),
        c(R, J),
        Y(ee, J, null),
        c(k, he),
        c(k, re),
        c(re, Ye),
        c(re, Qe),
        c(re, Ge),
        c(Ge, We),
        c(re, nt),
        c(re, De),
        c(re, Ce),
        c(re, we),
        c(we, Zt),
        c(we, Dt),
        s[18](k),
        s[19](a),
        O(U, Q, ne),
        O(U, F, ne),
        c(F, Pe),
        c(Pe, me),
        c(me, Ue),
        c(Ue, ft),
        s[20](Ue),
        c(me, tt),
        c(me, Me),
        c(Me, kt),
        c(Me, Nt),
        c(Me, be),
        Y(ot, be, null),
        c(be, at),
        c(be, Vt),
        s[21](F),
        O(U, Et, ne),
        O(U, Ne, ne),
        c(Ne, Ke),
        c(Ke, ut),
        c(ut, Bt),
        c(Bt, zt),
        c(ut, Xt),
        c(ut, lt),
        ~bt && xt[bt].m(lt, null),
        c(lt, Tt),
        ~Te && vt[Te].m(lt, null),
        c(ut, It),
        c(ut, rt),
        Y(Re, rt, null),
        s[25](Ne),
        O(U, nl, ne),
        O(U, xe, ne),
        O(U, Wt, ne),
        ie && ie.m(U, ne),
        O(U, ct, ne),
        (ve = !0),
        Ve ||
          ((ml = [fe(Ge, "click", s[16]), fe(we, "click", s[17])]), (Ve = !0));
    },
    p(U, ne) {
      (!ve || ne[0] & 1) && x(l, "min-width", U[0]),
        (!ve || ne[0] & 4096) && x(k, "opacity", U[12]),
        (!ve || ne[0] & 1) && x(t, "min-width", U[0]),
        (!ve || ne[0] & 1) && x(e, "min-width", U[0]),
        (!ve || ne[0] & 4) &&
          x(Ue, "display", U[2] === "Stage2" ? "unset" : "none"),
        (!ve || ne[0] & 4) &&
          x(Me, "display", U[2] === "Stage3" ? "flex" : "none"),
        (!ve || ne[0] & 1) && x(Pe, "min-width", U[0]),
        (!ve || ne[0] & 1) && x(F, "min-width", U[0]),
        (!ve || ne[0] & 4) &&
          Lt !== (Lt = U[2].replace(/(\D)(\d)/, "$1 $2") + "") &&
          ll(zt, Lt);
      let it = bt;
      (bt = Yt(U)),
        bt !== it &&
          (st &&
            (wt(),
            j(xt[it], 1, 1, () => {
              xt[it] = null;
            }),
            yt()),
          ~bt
            ? ((st = xt[bt]),
              st || ((st = xt[bt] = il[bt](U)), st.c()),
              H(st, 1),
              st.m(lt, Tt))
            : (st = null));
      let Kt = Te;
      (Te = Le(U)),
        Te !== Kt &&
          (et &&
            (wt(),
            j(vt[Kt], 1, 1, () => {
              vt[Kt] = null;
            }),
            yt()),
          ~Te
            ? ((et = vt[Te]),
              et || ((et = vt[Te] = qt[Te](U)), et.c()),
              H(et, 1),
              et.m(lt, null))
            : (et = null));
      const Jt = {};
      !Al && ne[0] & 4 && ((Al = !0), (Jt.value = U[2]), Gl(() => (Al = !1))),
        Re.$set(Jt),
        (!ve || ne[0] & 1) && x(Ne, "min-width", U[0]),
        U[3]
          ? ie
            ? (ie.p(U, ne), ne[0] & 8 && H(ie, 1))
            : ((ie = Vr(U)), ie.c(), H(ie, 1), ie.m(ct.parentNode, ct))
          : ie &&
            (wt(),
            j(ie, 1, 1, () => {
              ie = null;
            }),
            yt());
    },
    i(U) {
      ve ||
        (H(K.$$.fragment, U),
        H(ee.$$.fragment, U),
        H(ot.$$.fragment, U),
        H(st),
        H(et),
        H(Re.$$.fragment, U),
        H(ie),
        (ve = !0));
    },
    o(U) {
      j(K.$$.fragment, U),
        j(ee.$$.fragment, U),
        j(ot.$$.fragment, U),
        j(st),
        j(et),
        j(Re.$$.fragment, U),
        j(ie),
        (ve = !1);
    },
    d(U) {
      U && (u(e), u(Q), u(F), u(Et), u(Ne), u(nl), u(xe), u(Wt), u(ct)),
        s[14](null),
        s[15](null),
        Tl(ke, U),
        q(K),
        q(ee),
        s[18](null),
        s[19](null),
        s[20](null),
        q(ot),
        s[21](null),
        ~bt && xt[bt].d(),
        ~Te && vt[Te].d(),
        q(Re),
        s[25](null),
        ie && ie.d(U),
        (Ve = !1),
        Ml(ml);
    },
  };
}
const pc = 11,
  wl = 500;
function gc(s, e, t) {
  let l = !1,
    n = {};
  const o = (te) => {
    t(4, (n = { key: te })), t(3, (l = !0));
  };
  let { minWidth: r = "auto" } = e,
    a = 1,
    i,
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k,
    b = 0,
    E = 1,
    A = 1,
    T = 0,
    S = 0,
    N = 0,
    D = "Stage1",
    z = 0,
    L = "down";
  const V = () => {
      t(1, (g.style.width = `${m.clientHeight * 0.08}px`), g),
        (b = window.scrollY),
        t(12, (E = Math.max(0, 1 - b / wl))),
        (a = Math.min(
          pc,
          Math.max(1, 1 + (b / wl) * 4.5),
          window.innerHeight / 2 / 55,
          (window.innerWidth > 1440 ? 1440 : window.innerWidth) / 2 / 72,
          590 / 80
        )),
        (A = Math.max(0, 1 - b / wl)),
        (T = Math.min(1, Math.max(0, (b - window.innerHeight) / wl))),
        $(),
        G(),
        R(),
        le();
    },
    $ = () => {
      b <= wl
        ? (t(5, (i.style.position = "fixed"), i), t(5, (i.style.top = "0"), i))
        : (t(5, (i.style.position = "absolute"), i),
          t(5, (i.style.top = `${wl}px`), i));
    },
    G = () => {
      if (b <= window.innerHeight)
        t(1, (g.style["min-height"] = "72px"), g),
          t(1, (g.style["aspect-ratio"] = "1/1"), g),
          (N = 0);
      else {
        t(1, (g.style["min-height"] = "auto"), g),
          t(1, (g.style["aspect-ratio"] = "unset"), g);
        const te = window.innerWidth < 1440 ? window.innerWidth : 1440;
        (S = te / 2 - (g.clientWidth * a) / 2 - (te * 0.23) / 2),
          (N = Math.min((b - window.innerHeight) / 2, S, (b - 768) / 2));
      }
      t(
        1,
        (g.style.transform = `translateX(calc(-50% + ${
          N > 0 ? N : 0
        }px)) translateY(-50%) scale(${a})`),
        g
      );
    },
    P = () => {
      clearInterval(k),
        t(
          11,
          (k = setInterval(() => {
            y &&
              t(
                2,
                (D =
                  D === "Stage3"
                    ? "Stage1"
                    : `Stage${parseInt(D.slice(-1)) + 1}`)
              );
          }, 4e3))
        );
    },
    R = () => {
      const te = b <= window.innerHeight + wl,
        De = te ? "fixed" : "absolute",
        Ce = te ? "0" : `calc(100vh + ${wl / 1}px)`;
      (y = b >= window.innerHeight + wl * 0.8),
        (L = b > z ? "down" : "up"),
        (z = b),
        te && L === "up" && (t(2, (D = "Stage1")), P()),
        t(8, (_.style.position = De), _),
        t(8, (_.style.top = Ce), _),
        t(9, (M.style.position = De), M),
        t(9, (M.style.top = Ce), M),
        t(1, (g.style.position = De), g),
        t(
          1,
          (g.style.top = te ? "50vh" : `calc(100vh + ${wl / 2}px + 50%)`),
          g
        );
    },
    le = () => {
      t(8, (_.style.opacity = T), _),
        t(9, (M.style.opacity = T), M),
        t(5, (i.style.opacity = A), i),
        t(5, (i.style.visibility = "visible"), i),
        t(7, (m.style.visibility = "visible"), m);
    };
  yl(
    () => (
      V(),
      P(),
      window.addEventListener("scroll", V),
      window.addEventListener("resize", V),
      document.addEventListener("click", ul),
      window.addEventListener("scroll", ul),
      window.addEventListener("load", ul),
      setTimeout(() => {
        t(6, (p.style.transition = "opacity 0.3s ease-out"), p);
      }, 0),
      () => {
        window.removeEventListener("scroll", V),
          window.removeEventListener("resize", V),
          document.removeEventListener("click", ul),
          window.removeEventListener("scroll", ul),
          window.removeEventListener("load", ul),
          clearInterval(k);
      }
    )
  );
  function K(te) {
    Ae[te ? "unshift" : "push"](() => {
      (i = te), t(5, i);
    });
  }
  function W(te) {
    Ae[te ? "unshift" : "push"](() => {
      (g = te), t(1, g), t(2, D);
    });
  }
  const J = () => o(dl.firstLink),
    ee = () => o(dl.secondLink);
  function he(te) {
    Ae[te ? "unshift" : "push"](() => {
      (p = te), t(6, p);
    });
  }
  function re(te) {
    Ae[te ? "unshift" : "push"](() => {
      (m = te), t(7, m);
    });
  }
  function $e(te) {
    Ae[te ? "unshift" : "push"](() => {
      (w = te), t(10, w);
    });
  }
  function Ye(te) {
    Ae[te ? "unshift" : "push"](() => {
      (_ = te), t(8, _);
    });
  }
  const Qe = () => ii("learnMore");
  function Ge(te) {
    (D = te), t(2, D);
  }
  const qe = () => {
    clearInterval(k);
  };
  function We(te) {
    Ae[te ? "unshift" : "push"](() => {
      (M = te), t(9, M);
    });
  }
  function nt(te) {
    (l = te), t(3, l);
  }
  return (
    (s.$$set = (te) => {
      "minWidth" in te && t(0, (r = te.minWidth));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 6 &&
        g &&
        (D === "Stage1"
          ? t(1, (g.style.visibility = "visible"), g)
          : t(1, (g.style.visibility = "hidden"), g));
    }),
    [
      r,
      g,
      D,
      l,
      n,
      i,
      p,
      m,
      _,
      M,
      w,
      k,
      E,
      o,
      K,
      W,
      J,
      ee,
      he,
      re,
      $e,
      Ye,
      Qe,
      Ge,
      qe,
      We,
      nt,
    ]
  );
}
class bc extends Ze {
  constructor(e) {
    super(), Xe(this, e, gc, mc, Se, { minWidth: 0 }, null, [-1, -1]);
  }
}
const vc =
  "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.09375%2017.8079C1.38831%2017.8079%200%2019.1214%200%2020.735C0%2022.3485%201.38831%2023.662%203.09375%2023.662C4.79919%2023.662%206.1875%2022.3485%206.1875%2020.735C6.1875%2019.1214%204.79919%2017.8079%203.09375%2017.8079ZM21.6563%206.09971C23.3617%206.09971%2024.75%204.78621%2024.75%203.17266C24.75%201.55911%2023.3617%200.245605%2021.6563%200.245605C19.9508%200.245605%2018.5625%201.55911%2018.5625%203.17266C18.5625%204.78621%2019.9508%206.09971%2021.6563%206.09971ZM3.09375%200.245605C1.38831%200.245605%200%201.55911%200%203.17266C0%204.78621%201.38831%206.09971%203.09375%206.09971C4.79919%206.09971%206.1875%204.78621%206.1875%203.17266C6.1875%201.55911%204.79919%200.245605%203.09375%200.245605ZM21.6563%2017.8079C19.9508%2017.8079%2018.5625%2019.1214%2018.5625%2020.735C18.5625%2022.3485%2019.9508%2023.662%2021.6563%2023.662C23.3617%2023.662%2024.75%2022.3485%2024.75%2020.735C24.75%2019.1214%2023.3617%2017.8079%2021.6563%2017.8079ZM12.375%209.02677C10.6696%209.02677%209.28125%2010.3403%209.28125%2011.9538C9.28125%2013.5674%2010.6696%2014.8809%2012.375%2014.8809C14.0804%2014.8809%2015.4688%2013.5674%2015.4688%2011.9538C15.4688%2010.3403%2014.0804%209.02677%2012.375%209.02677Z'%20fill='white'/%3e%3c/svg%3e";
function _c(s, e, t) {
  const l = s.slice();
  return (l[54] = e[t]), (l[56] = t), l;
}
function wc(s, e, t) {
  const l = s.slice();
  return (l[57] = e[t]), (l[56] = t), l;
}
function yc(s, e, t) {
  const l = s.slice();
  return (l[59] = e[t]), l;
}
function Lr(s) {
  let e,
    t = gt(Fr),
    l = [];
  for (let n = 0; n < t.length; n += 1) l[n] = Cc(wc(s, t, n));
  return {
    c() {
      e = d("div");
      for (let n = 0; n < l.length; n += 1) l[n].c();
      this.h();
    },
    l(n) {
      e = h(n, "DIV", { class: !0 });
      var o = v(e);
      for (let r = 0; r < l.length; r += 1) l[r].l(o);
      o.forEach(u), this.h();
    },
    h() {
      f(e, "class", "menu-container svelte-ffroea");
    },
    m(n, o) {
      O(n, e, o);
      for (let r = 0; r < l.length; r += 1) l[r] && l[r].m(e, null);
    },
    d(n) {
      n && u(e), Tl(l, n);
    },
  };
}
function kc(s) {
  let e,
    t = s[57].name + "",
    l;
  return {
    c() {
      (e = d("p")), (l = He(t)), this.h();
    },
    l(n) {
      e = h(n, "P", { class: !0 });
      var o = v(e);
      (l = je(o, t)), o.forEach(u), this.h();
    },
    h() {
      f(e, "class", "menu-name svelte-ffroea");
    },
    m(n, o) {
      O(n, e, o), c(e, l);
    },
    d(n) {
      n && u(e);
    },
  };
}
function Ec(s) {
  let e,
    t = s[59].label + "",
    l;
  return {
    c() {
      (e = d("a")), (l = He(t)), this.h();
    },
    l(n) {
      e = h(n, "A", { href: !0, class: !0 });
      var o = v(e);
      (l = je(o, t)), o.forEach(u), this.h();
    },
    h() {
      f(e, "href", s[59].href), f(e, "class", "menu-item svelte-ffroea");
    },
    m(n, o) {
      O(n, e, o), c(e, l);
    },
    p: Be,
    d(n) {
      n && u(e);
    },
  };
}
function Ic(s) {
  let e;
  return {
    c() {
      (e = d("div")), this.h();
    },
    l(t) {
      (e = h(t, "DIV", { class: !0, style: !0 })), v(e).forEach(u), this.h();
    },
    h() {
      f(e, "class", "divider"),
        x(e, "height", "1px"),
        x(e, "background-color", "#00233B"),
        x(e, "width", "calc(100% - 45px)");
    },
    m(t, l) {
      O(t, e, l);
    },
    d(t) {
      t && u(e);
    },
  };
}
function Cc(s) {
  let e,
    t,
    l,
    n = s[57].name && kc(s),
    o = gt(s[57].items),
    r = [];
  for (let i = 0; i < o.length; i += 1) r[i] = Ec(yc(s, o, i));
  let a = s[56] < Fr.length - 1 && Ic();
  return {
    c() {
      n && n.c(), (e = I());
      for (let i = 0; i < r.length; i += 1) r[i].c();
      (t = I()), a && a.c(), (l = pe());
    },
    l(i) {
      n && n.l(i), (e = C(i));
      for (let p = 0; p < r.length; p += 1) r[p].l(i);
      (t = C(i)), a && a.l(i), (l = pe());
    },
    m(i, p) {
      n && n.m(i, p), O(i, e, p);
      for (let m = 0; m < r.length; m += 1) r[m] && r[m].m(i, p);
      O(i, t, p), a && a.m(i, p), O(i, l, p);
    },
    p: Be,
    d(i) {
      i && (u(e), u(t), u(l)), n && n.d(i), Tl(r, i), a && a.d(i);
    },
  };
}
function Mc(s) {
  let e, t;
  return {
    c() {
      (e = d("span")), (t = He(s[54])), this.h();
    },
    l(l) {
      e = h(l, "SPAN", { class: !0, style: !0 });
      var n = v(e);
      (t = je(n, s[54])), n.forEach(u), this.h();
    },
    h() {
      f(e, "class", "word svelte-ffroea"),
        x(e, "animation-delay", s[56] * 2 + "s");
    },
    m(l, n) {
      O(l, e, n), c(e, t);
    },
    p: Be,
    d(l) {
      l && u(e);
    },
  };
}
function Tc(s) {
  let e, t;
  return (
    (e = new Rt({ props: { title: Rr } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function xc(s) {
  let e, t;
  return (
    (e = new Rt({ props: { title: Ur } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Ac(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i = "coming soon",
    p;
  return (
    (t = new St({ props: { gradient: "borderGradient", text: "Learn more" } })),
    t.$on("click", s[29]),
    (o = new St({
      props: { gradient: "borderGradient", text: "Push a model" },
    })),
    {
      c() {
        (e = d("div")),
          Z(t.$$.fragment),
          (l = I()),
          (n = d("span")),
          Z(o.$$.fragment),
          (r = I()),
          (a = d("p")),
          (a.textContent = i),
          this.h();
      },
      l(m) {
        e = h(m, "DIV", { class: !0 });
        var g = v(e);
        X(t.$$.fragment, g), (l = C(g)), (n = h(g, "SPAN", { class: !0 }));
        var _ = v(n);
        X(o.$$.fragment, _),
          (r = C(_)),
          (a = h(_, "P", { class: !0, "data-svelte-h": !0 })),
          _e(a) !== "svelte-gidkzb" && (a.textContent = i),
          _.forEach(u),
          g.forEach(u),
          this.h();
      },
      h() {
        f(
          a,
          "class",
          "absolute bottom-[-4px] left-1/2 flex -translate-x-1/2 rotate-[-3.7deg] transform items-center justify-center whitespace-nowrap rounded-[40px] bg-[#006FB9] px-[18px] text-center font-nippo text-[8px] text-white"
        ),
          f(n, "class", "relative block w-full"),
          f(
            e,
            "class",
            "stege1-button mx-[-10px] flex gap-[10px] svelte-ffroea"
          );
      },
      m(m, g) {
        O(m, e, g),
          Y(t, e, null),
          c(e, l),
          c(e, n),
          Y(o, n, null),
          c(n, r),
          c(n, a),
          (p = !0);
      },
      i(m) {
        p || (H(t.$$.fragment, m), H(o.$$.fragment, m), (p = !0));
      },
      o(m) {
        j(t.$$.fragment, m), j(o.$$.fragment, m), (p = !1);
      },
      d(m) {
        m && u(e), q(t), q(o);
      },
    }
  );
}
function Sc(s) {
  let e, t, l;
  return (
    (t = new St({
      props: {
        gradient: "borderGradient",
        text: "Explore the app",
        href: "https://nfinity-ai-app.vercel.app/",
      },
    })),
    {
      c() {
        (e = d("div")), Z(t.$$.fragment), this.h();
      },
      l(n) {
        e = h(n, "DIV", { class: !0 });
        var o = v(e);
        X(t.$$.fragment, o), o.forEach(u), this.h();
      },
      h() {
        f(e, "class", "stege1-button max-w-[260px] svelte-ffroea");
      },
      m(n, o) {
        O(n, e, o), Y(t, e, null), (l = !0);
      },
      i(n) {
        l || (H(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        j(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        n && u(e), q(t);
      },
    }
  );
}
function zr(s) {
  let e, t, l;
  function n(r) {
    s[31](r);
  }
  let o = { content: s[4] };
  return (
    s[3] !== void 0 && (o.showModal = s[3]),
    (e = new Cn({ props: o })),
    Ae.push(() => Pl(e, "showModal", n)),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(r) {
        X(e.$$.fragment, r);
      },
      m(r, a) {
        Y(e, r, a), (l = !0);
      },
      p(r, a) {
        const i = {};
        a[0] & 16 && (i.content = r[4]),
          !t &&
            a[0] & 8 &&
            ((t = !0), (i.showModal = r[3]), Gl(() => (t = !1))),
          e.$set(i);
      },
      i(r) {
        l || (H(e.$$.fragment, r), (l = !0));
      },
      o(r) {
        j(e.$$.fragment, r), (l = !1);
      },
      d(r) {
        q(e, r);
      },
    }
  );
}
function Dc(s) {
  let e,
    t,
    l,
    n,
    o,
    r,
    a,
    i,
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k,
    b,
    E,
    A,
    T,
    S,
    N,
    D,
    z,
    L,
    V,
    $,
    G,
    P,
    R,
    le = ds.firstString + "",
    K,
    W,
    J,
    ee = ds.left + "",
    he,
    re,
    $e,
    Ye,
    Qe = ds.right + "",
    Ge,
    qe,
    We,
    nt,
    te,
    De,
    Ce,
    we,
    ye,
    Zt = dl.left + "",
    Dt,
    Q,
    F,
    Pe = dl.firstLink + "",
    me,
    Ue,
    ft = dl.middle + "",
    Mt,
    tt,
    Me,
    kt = dl.secondLink + "",
    hl,
    Nt,
    be,
    ot,
    at,
    Vt,
    xl,
    Et,
    Ne,
    Ke,
    ut,
    Bt,
    Lt,
    zt,
    Xt,
    lt,
    bt = `Whitepaper coming soon
					<span class="stage3-badgeInfo svelte-ffroea">Locked</span>`,
    st,
    Tt,
    Te = s[2].replace(/(\D)(\d)/, "$1 $2") + "",
    et,
    It,
    rt,
    Re,
    Al,
    nl,
    xe,
    $t,
    Wt,
    ct,
    ve,
    Ve,
    ml,
    Oe,
    ke,
    il,
    xt,
    Yt,
    qt,
    vt,
    Le,
    Sl,
    Dl,
    ie = s[16] && Lr(s),
    U = gt(ds.change),
    ne = [];
  for (let B = 0; B < U.length; B += 1) ne[B] = Mc(_c(s, U, B));
  (nt = new St({
    props: {
      gradient: "borderGradient",
      text: "Launch App",
      href: "https://nfinity-ai-app.vercel.app/",
      className: "text-[16px]",
    },
  })),
    (Ce = new St({
      props: {
        gradient: "borderGradient",
        text: "$NFNT",
        href: "https://app.uniswap.org/explore/tokens/ethereum/0x00000000000000000000000000000000",
        className: "text-[16px]",
      },
    })),
    (zt = new Rt({ props: { title: "Tokenization Of AI" } }));
  function it(B) {
    s[26](B);
  }
  let Kt = {};
  s[2] !== void 0 && (Kt.value = s[2]),
    (Re = new hi({ props: Kt })),
    Ae.push(() => Pl(Re, "value", it)),
    Re.$on("change", s[27]);
  const Jt = [xc, Tc],
    Qt = [];
  function Gt(B, oe) {
    return B[2] === "Stage1" ? 0 : B[2] === "Stage2" ? 1 : -1;
  }
  ~(ve = Gt(s)) && (Ve = Qt[ve] = Jt[ve](s));
  const ol = [Sc, Ac],
    Pt = [];
  function Nl(B, oe) {
    return B[2] === "Stage1" ? 0 : B[2] === "Stage2" ? 1 : -1;
  }
  ~(Oe = Nl(s)) && (ke = Pt[Oe] = ol[Oe](s));
  let ze = s[3] && zr(s);
  return {
    c() {
      (e = d("div")),
        (t = d("div")),
        (l = d("video")),
        (n = d("track")),
        (r = I()),
        (a = d("header")),
        (i = d("video")),
        (p = d("track")),
        (g = I()),
        (_ = d("div")),
        (M = d("img")),
        (y = I()),
        (k = d("button")),
        (b = d("div")),
        (E = d("img")),
        (S = I()),
        (N = d("img")),
        (L = I()),
        ie && ie.c(),
        (V = I()),
        ($ = d("div")),
        (G = d("div")),
        (P = d("h1")),
        (R = new ae(!1)),
        (K = I()),
        (W = d("div")),
        (J = new ae(!1)),
        (he = I()),
        (re = d("span"));
      for (let B = 0; B < ne.length; B += 1) ne[B].c();
      ($e = I()),
        (Ye = new ae(!1)),
        (Ge = I()),
        (qe = d("div")),
        (We = d("span")),
        Z(nt.$$.fragment),
        (te = I()),
        (De = d("span")),
        Z(Ce.$$.fragment),
        (we = I()),
        (ye = d("p")),
        (Dt = He(Zt)),
        (Q = I()),
        (F = d("button")),
        (me = He(Pe)),
        (Ue = I()),
        (Mt = He(ft)),
        (tt = I()),
        (Me = d("button")),
        (hl = He(kt)),
        (Nt = I()),
        (be = d("div")),
        (ot = d("div")),
        (at = d("video")),
        (Vt = d("track")),
        (Et = I()),
        (Ne = d("div")),
        (Ke = d("img")),
        (Bt = I()),
        (Lt = d("div")),
        Z(zt.$$.fragment),
        (Xt = I()),
        (lt = d("div")),
        (lt.innerHTML = bt),
        (st = I()),
        (Tt = d("div")),
        (et = He(Te)),
        (It = I()),
        (rt = d("div")),
        Z(Re.$$.fragment),
        (nl = I()),
        (xe = d("div")),
        ($t = d("div")),
        (Wt = d("div")),
        (ct = d("div")),
        Ve && Ve.c(),
        (ml = I()),
        ke && ke.c(),
        (il = I()),
        (xt = d("div")),
        (Yt = d("div")),
        (qt = I()),
        ze && ze.c(),
        (vt = pe()),
        this.h();
    },
    l(B) {
      e = h(B, "DIV", { class: !0, style: !0 });
      var oe = v(e);
      t = h(oe, "DIV", { class: !0, style: !0 });
      var Ee = v(t);
      l = h(Ee, "VIDEO", { src: !0, class: !0, style: !0 });
      var Ot = v(l);
      (n = h(Ot, "TRACK", { kind: !0 })),
        Ot.forEach(u),
        (r = C(Ee)),
        (a = h(Ee, "HEADER", { class: !0, style: !0 }));
      var _t = v(a);
      i = h(_t, "VIDEO", { class: !0, style: !0, src: !0 });
      var ms = v(i);
      (p = h(ms, "TRACK", { kind: !0 })),
        ms.forEach(u),
        (g = C(_t)),
        (_ = h(_t, "DIV", { class: !0, style: !0 }));
      var rl = v(_);
      (M = h(rl, "IMG", { src: !0, alt: !0, class: !0, fill: !0 })),
        (y = C(rl)),
        (k = h(rl, "BUTTON", { class: !0 }));
      var el = v(k);
      b = h(el, "DIV", { class: !0 });
      var al = v(b);
      (E = h(al, "IMG", { src: !0, alt: !0, class: !0, fill: !0 })),
        (S = C(al)),
        (N = h(al, "IMG", { src: !0, alt: !0, class: !0, fill: !0 })),
        al.forEach(u),
        el.forEach(u),
        (L = C(rl)),
        ie && ie.l(rl),
        rl.forEach(u),
        (V = C(_t)),
        ($ = h(_t, "DIV", { class: !0, style: !0 }));
      var Vl = v($);
      G = h(Vl, "DIV", { class: !0, style: !0 });
      var Ft = v(G);
      P = h(Ft, "H1", { class: !0 });
      var pl = v(P);
      (R = ce(pl, !1)), (K = C(pl)), (W = h(pl, "DIV", { class: !0 }));
      var At = v(W);
      (J = ce(At, !1)),
        (he = C(At)),
        (re = h(At, "SPAN", { class: !0, style: !0 }));
      var Ct = v(re);
      for (let ps = 0; ps < ne.length; ps += 1) ne[ps].l(Ct);
      Ct.forEach(u),
        ($e = C(At)),
        (Ye = ce(At, !1)),
        At.forEach(u),
        pl.forEach(u),
        (Ge = C(Ft)),
        (qe = h(Ft, "DIV", { class: !0 }));
      var gl = v(qe);
      We = h(gl, "SPAN", { class: !0 });
      var tl = v(We);
      X(nt.$$.fragment, tl),
        tl.forEach(u),
        (te = C(gl)),
        (De = h(gl, "SPAN", { class: !0 }));
      var Ol = v(De);
      X(Ce.$$.fragment, Ol),
        Ol.forEach(u),
        gl.forEach(u),
        (we = C(Ft)),
        (ye = h(Ft, "P", { class: !0 }));
      var Ht = v(ye);
      (Dt = je(Ht, Zt)), (Q = C(Ht)), (F = h(Ht, "BUTTON", { style: !0 }));
      var kl = v(F);
      (me = je(kl, Pe)),
        kl.forEach(u),
        (Ue = C(Ht)),
        (Mt = je(Ht, ft)),
        (tt = C(Ht)),
        (Me = h(Ht, "BUTTON", { style: !0 }));
      var bl = v(Me);
      (hl = je(bl, kt)),
        bl.forEach(u),
        Ht.forEach(u),
        Ft.forEach(u),
        Vl.forEach(u),
        _t.forEach(u),
        Ee.forEach(u),
        oe.forEach(u),
        (Nt = C(B)),
        (be = h(B, "DIV", { class: !0, style: !0 }));
      var El = v(be);
      ot = h(El, "DIV", { class: !0 });
      var vl = v(ot);
      at = h(vl, "VIDEO", { class: !0, style: !0, src: !0 });
      var zs = v(at);
      (Vt = h(zs, "TRACK", { kind: !0 })),
        zs.forEach(u),
        (Et = C(vl)),
        (Ne = h(vl, "DIV", { class: !0, style: !0 }));
      var Hl = v(Ne);
      (Ke = h(Hl, "IMG", { src: !0, alt: !0, class: !0 })),
        (Bt = C(Hl)),
        (Lt = h(Hl, "DIV", { class: !0 }));
      var cl = v(Lt);
      X(zt.$$.fragment, cl),
        (Xt = C(cl)),
        (lt = h(cl, "DIV", { class: !0, "data-svelte-h": !0 })),
        _e(lt) !== "svelte-1g0wq2c" && (lt.innerHTML = bt),
        cl.forEach(u),
        Hl.forEach(u),
        vl.forEach(u),
        (st = C(El)),
        (Tt = h(El, "DIV", { class: !0, style: !0 }));
      var _l = v(Tt);
      (et = je(_l, Te)),
        _l.forEach(u),
        (It = C(El)),
        (rt = h(El, "DIV", { class: !0, style: !0 }));
      var bs = v(rt);
      X(Re.$$.fragment, bs),
        bs.forEach(u),
        El.forEach(u),
        (nl = C(B)),
        (xe = h(B, "DIV", { class: !0, style: !0, id: !0 }));
      var Ll = v(xe);
      $t = h(Ll, "DIV", { class: !0, style: !0 });
      var $s = v($t);
      Wt = h($s, "DIV", { class: !0, style: !0 });
      var vs = v(Wt);
      ct = h(vs, "DIV", { class: !0 });
      var Ut = v(ct);
      Ve && Ve.l(Ut),
        (ml = C(Ut)),
        ke && ke.l(Ut),
        Ut.forEach(u),
        vs.forEach(u),
        $s.forEach(u),
        Ll.forEach(u),
        (il = C(B)),
        (xt = h(B, "DIV", { class: !0 }));
      var Gs = v(xt);
      (Yt = h(Gs, "DIV", { class: !0, style: !0 })),
        v(Yt).forEach(u),
        Gs.forEach(u),
        (qt = C(B)),
        ze && ze.l(B),
        (vt = pe()),
        this.h();
    },
    h() {
      f(n, "kind", "captions"),
        ue(l.src, (o = fi)) || f(l, "src", o),
        f(l, "class", "background svelte-ffroea"),
        x(l, "position", "fixed"),
        x(l, "top", "0"),
        x(l, "left", "0"),
        x(l, "visibility", "hidden"),
        x(l, "height", s[15] + "px"),
        (l.autoplay = !0),
        (l.loop = !0),
        (l.muted = !0),
        (l.playsInline = !0),
        f(p, "kind", "captions"),
        f(
          i,
          "class",
          "h-content left-[50%] max-h-[50vh] max-w-[24vh] rounded-full bg-black"
        ),
        x(i, "position", "fixed"),
        x(i, "top", s[15] / 2 + "px"),
        x(i, "z-index", "4"),
        x(i, "aspect-ratio", "1 / 1"),
        x(i, "min-width", "max(72px, 5vw)"),
        x(i, "min-height", "max(72px, 8vh)"),
        (i.autoplay = !0),
        (i.loop = !0),
        (i.muted = !0),
        (i.playsInline = !0),
        ue(i.src, (m = ci)) || f(i, "src", m),
        ue(M.src, (w = an)) || f(M, "src", w),
        f(M, "alt", "Logo"),
        f(M, "class", "ml-[19px]"),
        f(M, "fill", "white"),
        ue(E.src, (A = rc)) || f(E, "src", A),
        f(E, "alt", "Menu Icon"),
        f(
          E,
          "class",
          (T =
            "linear absolute h-[53px] w-[54px] bg-[#00233B] p-[14px] transition duration-300 " +
            (s[16] ? "opacity-0" : "opacity-100"))
        ),
        f(E, "fill", "white"),
        ue(N.src, (D = vc)) || f(N, "src", D),
        f(N, "alt", "Menu Open Icon"),
        f(
          N,
          "class",
          (z =
            "linear absolute h-[53px] w-[54px] bg-[#00233B] p-[14px] transition duration-300 " +
            (s[16] ? "opacity-100" : "opacity-0"))
        ),
        f(N, "fill", "white"),
        f(b, "class", "relative h-[53px] w-[54px]"),
        f(k, "class", "z-[2]"),
        f(_, "class", "logoMobile svelte-ffroea"),
        x(_, "pointer-events", "all"),
        (R.a = K),
        (J.a = he),
        f(re, "class", "rotating-word svelte-ffroea"),
        x(re, "width", "6ch"),
        (Ye.a = null),
        f(W, "class", "flex justify-center"),
        f(P, "class", "title svelte-ffroea"),
        f(We, "class", "button svelte-ffroea"),
        f(De, "class", "button svelte-ffroea"),
        f(qe, "class", "buttons svelte-ffroea"),
        x(F, "display", "inline"),
        x(Me, "display", "inline"),
        f(ye, "class", "description svelte-ffroea"),
        f(G, "class", "section"),
        x(G, "opacity", s[14]),
        f($, "class", "content svelte-ffroea"),
        x($, "height", "calc(100hv - 0px)"),
        f(a, "class", "top-0 z-10 flex w-full justify-center text-white"),
        x(a, "visibility", "hidden"),
        x(a, "height", s[15] + "px"),
        f(t, "class", "relative w-full"),
        x(t, "height", "calc(" + s[15] + "px + " + fl + "px)"),
        f(e, "class", "relative"),
        x(e, "min-width", s[0]),
        f(Vt, "kind", "captions"),
        (at.autoplay = !0),
        (at.loop = !0),
        (at.muted = !0),
        (at.playsInline = !0),
        f(at, "class", "h-full w-auto object-contain"),
        x(at, "display", s[2] === "Stage2" ? "unset" : "none"),
        ue(at.src, (xl = ui)) || f(at, "src", xl),
        ue(Ke.src, (ut = "/images/lock.webp")) || f(Ke, "src", ut),
        f(Ke, "alt", ""),
        f(
          Ke,
          "class",
          "absolute left-[50%] top-[43%] h-[100px] translate-x-[-50%] translate-y-[-50%] object-cover"
        ),
        f(lt, "class", "stage3-badge svelte-ffroea"),
        f(
          Lt,
          "class",
          "mb-[10px] flex w-full items-center justify-between px-[10px]"
        ),
        f(Ne, "class", "stage3 svelte-ffroea"),
        x(Ne, "background", "url(" + di + ") center no-repeat"),
        x(Ne, "background-size", "contain"),
        x(Ne, "display", s[2] === "Stage3" ? "flex" : "none"),
        f(ot, "class", "gradient-inner svelte-ffroea"),
        f(Tt, "class", "stege1-labels svelte-ffroea"),
        x(Tt, "top", s[12] + "%"),
        f(rt, "class", "stage-control svelte-ffroea"),
        x(rt, "bottom", s[13] + "%"),
        f(be, "class", "gradient top-0 z-[3] w-full svelte-ffroea"),
        x(be, "opacity", "0"),
        x(be, "min-width", s[0]),
        x(be, "height", s[15] + "px"),
        f(ct, "class", "stege1-content svelte-ffroea"),
        f(Wt, "class", "stage svelte-ffroea"),
        x(Wt, "height", s[15] + "px"),
        f($t, "class", "stege1-wrapper svelte-ffroea"),
        x($t, "height", s[15] + "px"),
        f(
          xe,
          "class",
          "pointer-events-none fixed relative top-0 z-[4] w-full bg-transparent"
        ),
        x(xe, "opacity", "0"),
        x(xe, "min-width", s[0]),
        x(xe, "height", s[15] + "px"),
        f(xe, "id", "stage1"),
        f(Yt, "class", "relative w-full"),
        x(Yt, "height", s[15] + "px"),
        f(xt, "class", "relative");
    },
    m(B, oe) {
      O(B, e, oe),
        c(e, t),
        c(t, l),
        c(l, n),
        s[19](l),
        c(t, r),
        c(t, a),
        c(a, i),
        c(i, p),
        s[20](i),
        c(a, g),
        c(a, _),
        c(_, M),
        c(_, y),
        c(_, k),
        c(k, b),
        c(b, E),
        c(b, S),
        c(b, N),
        c(_, L),
        ie && ie.m(_, null),
        c(a, V),
        c(a, $),
        c($, G),
        c(G, P),
        R.m(le, P),
        c(P, K),
        c(P, W),
        J.m(ee, W),
        c(W, he),
        c(W, re);
      for (let Ee = 0; Ee < ne.length; Ee += 1) ne[Ee] && ne[Ee].m(re, null);
      c(W, $e),
        Ye.m(Qe, W),
        c(G, Ge),
        c(G, qe),
        c(qe, We),
        Y(nt, We, null),
        c(qe, te),
        c(qe, De),
        Y(Ce, De, null),
        c(G, we),
        c(G, ye),
        c(ye, Dt),
        c(ye, Q),
        c(ye, F),
        c(F, me),
        c(ye, Ue),
        c(ye, Mt),
        c(ye, tt),
        c(ye, Me),
        c(Me, hl),
        s[23](G),
        s[24](a),
        O(B, Nt, oe),
        O(B, be, oe),
        c(be, ot),
        c(ot, at),
        c(at, Vt),
        s[25](at),
        c(ot, Et),
        c(ot, Ne),
        c(Ne, Ke),
        c(Ne, Bt),
        c(Ne, Lt),
        Y(zt, Lt, null),
        c(Lt, Xt),
        c(Lt, lt),
        c(be, st),
        c(be, Tt),
        c(Tt, et),
        c(be, It),
        c(be, rt),
        Y(Re, rt, null),
        s[28](be),
        O(B, nl, oe),
        O(B, xe, oe),
        c(xe, $t),
        c($t, Wt),
        c(Wt, ct),
        ~ve && Qt[ve].m(ct, null),
        c(ct, ml),
        ~Oe && Pt[Oe].m(ct, null),
        s[30](xe),
        O(B, il, oe),
        O(B, xt, oe),
        c(xt, Yt),
        O(B, qt, oe),
        ze && ze.m(B, oe),
        O(B, vt, oe),
        (Le = !0),
        Sl ||
          ((Dl = [
            fe(k, "click", s[18]),
            fe(F, "click", s[21]),
            fe(Me, "click", s[22]),
          ]),
          (Sl = !0));
    },
    p(B, oe) {
      (!Le || oe[0] & 32768) && x(l, "height", B[15] + "px"),
        (!Le || oe[0] & 32768) && x(i, "top", B[15] / 2 + "px"),
        (!Le ||
          (oe[0] & 65536 &&
            T !==
              (T =
                "linear absolute h-[53px] w-[54px] bg-[#00233B] p-[14px] transition duration-300 " +
                (B[16] ? "opacity-0" : "opacity-100")))) &&
          f(E, "class", T),
        (!Le ||
          (oe[0] & 65536 &&
            z !==
              (z =
                "linear absolute h-[53px] w-[54px] bg-[#00233B] p-[14px] transition duration-300 " +
                (B[16] ? "opacity-100" : "opacity-0")))) &&
          f(N, "class", z),
        B[16]
          ? ie || ((ie = Lr(B)), ie.c(), ie.m(_, null))
          : ie && (ie.d(1), (ie = null)),
        (!Le || oe[0] & 16384) && x(G, "opacity", B[14]),
        (!Le || oe[0] & 32768) && x(a, "height", B[15] + "px"),
        (!Le || oe[0] & 32768) &&
          x(t, "height", "calc(" + B[15] + "px + " + fl + "px)"),
        (!Le || oe[0] & 1) && x(e, "min-width", B[0]),
        (!Le || oe[0] & 4) &&
          x(at, "display", B[2] === "Stage2" ? "unset" : "none"),
        (!Le || oe[0] & 4) &&
          x(Ne, "display", B[2] === "Stage3" ? "flex" : "none"),
        (!Le || oe[0] & 4) &&
          Te !== (Te = B[2].replace(/(\D)(\d)/, "$1 $2") + "") &&
          ll(et, Te),
        (!Le || oe[0] & 4096) && x(Tt, "top", B[12] + "%");
      const Ee = {};
      !Al && oe[0] & 4 && ((Al = !0), (Ee.value = B[2]), Gl(() => (Al = !1))),
        Re.$set(Ee),
        (!Le || oe[0] & 8192) && x(rt, "bottom", B[13] + "%"),
        (!Le || oe[0] & 1) && x(be, "min-width", B[0]),
        (!Le || oe[0] & 32768) && x(be, "height", B[15] + "px");
      let Ot = ve;
      (ve = Gt(B)),
        ve !== Ot &&
          (Ve &&
            (wt(),
            j(Qt[Ot], 1, 1, () => {
              Qt[Ot] = null;
            }),
            yt()),
          ~ve
            ? ((Ve = Qt[ve]),
              Ve || ((Ve = Qt[ve] = Jt[ve](B)), Ve.c()),
              H(Ve, 1),
              Ve.m(ct, ml))
            : (Ve = null));
      let _t = Oe;
      (Oe = Nl(B)),
        Oe !== _t &&
          (ke &&
            (wt(),
            j(Pt[_t], 1, 1, () => {
              Pt[_t] = null;
            }),
            yt()),
          ~Oe
            ? ((ke = Pt[Oe]),
              ke || ((ke = Pt[Oe] = ol[Oe](B)), ke.c()),
              H(ke, 1),
              ke.m(ct, null))
            : (ke = null)),
        (!Le || oe[0] & 32768) && x(Wt, "height", B[15] + "px"),
        (!Le || oe[0] & 32768) && x($t, "height", B[15] + "px"),
        (!Le || oe[0] & 1) && x(xe, "min-width", B[0]),
        (!Le || oe[0] & 32768) && x(xe, "height", B[15] + "px"),
        (!Le || oe[0] & 32768) && x(Yt, "height", B[15] + "px"),
        B[3]
          ? ze
            ? (ze.p(B, oe), oe[0] & 8 && H(ze, 1))
            : ((ze = zr(B)), ze.c(), H(ze, 1), ze.m(vt.parentNode, vt))
          : ze &&
            (wt(),
            j(ze, 1, 1, () => {
              ze = null;
            }),
            yt());
    },
    i(B) {
      Le ||
        (H(nt.$$.fragment, B),
        H(Ce.$$.fragment, B),
        H(zt.$$.fragment, B),
        H(Re.$$.fragment, B),
        H(Ve),
        H(ke),
        H(ze),
        (Le = !0));
    },
    o(B) {
      j(nt.$$.fragment, B),
        j(Ce.$$.fragment, B),
        j(zt.$$.fragment, B),
        j(Re.$$.fragment, B),
        j(Ve),
        j(ke),
        j(ze),
        (Le = !1);
    },
    d(B) {
      B && (u(e), u(Nt), u(be), u(nl), u(xe), u(il), u(xt), u(qt), u(vt)),
        s[19](null),
        s[20](null),
        ie && ie.d(),
        Tl(ne, B),
        q(nt),
        q(Ce),
        s[23](null),
        s[24](null),
        s[25](null),
        q(zt),
        q(Re),
        s[28](null),
        ~ve && Qt[ve].d(),
        ~Oe && Pt[Oe].d(),
        s[30](null),
        ze && ze.d(B),
        (Sl = !1),
        Ml(Dl);
    },
  };
}
const Nc = 3,
  fl = 200;
function Vc(s, e, t) {
  let l = !1,
    n = {};
  const o = (F) => {
    t(4, (n = { key: F })), t(3, (l = !0));
  };
  let { minWidth: r = "auto" } = e,
    a,
    i,
    p,
    m,
    g,
    _,
    M,
    w,
    y,
    k = 29,
    b = 29,
    E = 1,
    A = 0,
    T = 1,
    S = 1,
    N = 0,
    D = 0,
    z = 0,
    L,
    V = "Stage1",
    $ = 0,
    G = "down",
    P = !1;
  const R = () => {
      t(16, (P = !P)), le();
    },
    le = () => {
      P
        ? (to(-1, 300), (document.body.style.overflow = "hidden"))
        : (document.body.style.overflow = "");
    },
    K = () => {
      t(
        15,
        (L = window.visualViewport
          ? window.visualViewport.height
          : window.innerHeight)
      );
    },
    W = () => {
      L <= 700 && (t(12, (k = 12)), t(13, (b = 12))),
        L <= 500 && (t(12, (k = 13)), t(13, (b = 13))),
        L <= 400 && (t(12, (k = 10)), t(13, (b = 10)));
    },
    J = () => {
      t(
        1,
        (m.style.width = `${Math.max(
          p.clientHeight * 0.08,
          p.clientWidth * 0.11
        )}px`),
        m
      ),
        (A = window.scrollY),
        t(14, (T = Math.max(0, 1 - A / fl))),
        (E = Math.min(
          Nc,
          Math.max(1, 1 + (A / fl) * 4.5),
          window.innerHeight / 2 / 55,
          (window.innerWidth > 1440 ? 1440 : window.innerWidth) / 2 / 72,
          590 / 80
        )),
        (S = Math.max(0, 1 - A / fl)),
        (N = Math.min(1, Math.max(0, (A - window.innerHeight) / fl))),
        ee(),
        he(),
        $e(),
        Ye();
    },
    ee = () => {
      A <= fl
        ? (t(5, (a.style.position = "fixed"), a), t(5, (a.style.top = "0"), a))
        : (t(5, (a.style.position = "absolute"), a),
          t(5, (a.style.top = `${fl}px`), a));
    },
    he = () => {
      A <= window.innerHeight
        ? (t(1, (m.style["min-height"] = "72px"), m),
          t(1, (m.style["aspect-ratio"] = "1/1"), m),
          (z = 0))
        : (t(1, (m.style["min-height"] = "auto"), m),
          t(1, (m.style["aspect-ratio"] = "unset"), m),
          (D =
            window.innerWidth / 2 -
            (m.clientWidth * E) / 2 -
            (window.innerWidth * 0.23) / 2),
          (z = Math.min((A - window.innerHeight) / 2, D))),
        t(
          1,
          (m.style.transform = `translateX(calc(-50% + ${
            z > 0 ? z : 0
          }px)) translateY(-50%) scale(${E})`),
          m
        );
    },
    re = () => {
      clearInterval(y),
        t(
          11,
          (y = setInterval(() => {
            w &&
              t(
                2,
                (V =
                  V === "Stage3"
                    ? "Stage1"
                    : `Stage${parseInt(V.slice(-1)) + 1}`)
              );
          }, 4e3))
        );
    },
    $e = () => {
      const F = A <= L + fl,
        Pe = F ? "fixed" : "absolute",
        me = F ? "0" : `calc(${L}px + ${fl / 1}px)`;
      (w = A >= window.innerHeight + fl * 0.8),
        (G = A > $ ? "down" : "up"),
        ($ = A),
        F && G === "up" && (t(2, (V = "Stage1")), re()),
        t(8, (g.style.position = Pe), g),
        t(8, (g.style.top = me), g),
        t(9, (_.style.position = Pe), _),
        t(9, (_.style.top = me), _),
        t(1, (m.style.position = Pe), m),
        t(
          1,
          (m.style.top = F ? `${L / 2}px` : `calc(${L}px + ${fl / 2}px + 50%)`),
          m
        );
    },
    Ye = () => {
      t(8, (g.style.opacity = N), g),
        t(9, (_.style.opacity = N), _),
        t(5, (a.style.opacity = S), a),
        t(5, (a.style.visibility = "visible"), a),
        t(7, (p.style.visibility = "visible"), p);
    };
  yl(
    () => (
      K(),
      W(),
      J(),
      window.addEventListener("scroll", J),
      window.addEventListener("resize", J),
      document.addEventListener("click", ul),
      window.addEventListener("scroll", ul),
      window.addEventListener("load", ul),
      setTimeout(() => {
        t(6, (i.style.transition = "opacity 0.3s ease-out"), i);
      }, 0),
      () => {
        window.removeEventListener("scroll", J),
          window.removeEventListener("resize", J),
          document.removeEventListener("click", ul),
          window.addEventListener("scroll", ul),
          window.removeEventListener("load", ul);
      }
    )
  );
  function Qe(F) {
    Ae[F ? "unshift" : "push"](() => {
      (a = F), t(5, a);
    });
  }
  function Ge(F) {
    Ae[F ? "unshift" : "push"](() => {
      (m = F), t(1, m), t(2, V);
    });
  }
  const qe = () => o(dl.firstLink),
    We = () => o(dl.secondLink);
  function nt(F) {
    Ae[F ? "unshift" : "push"](() => {
      (i = F), t(6, i);
    });
  }
  function te(F) {
    Ae[F ? "unshift" : "push"](() => {
      (p = F), t(7, p);
    });
  }
  function De(F) {
    Ae[F ? "unshift" : "push"](() => {
      (M = F), t(10, M);
    });
  }
  function Ce(F) {
    (V = F), t(2, V);
  }
  const we = () => {
    clearInterval(y);
  };
  function ye(F) {
    Ae[F ? "unshift" : "push"](() => {
      (g = F), t(8, g);
    });
  }
  const Zt = () => ii("learnMore");
  function Dt(F) {
    Ae[F ? "unshift" : "push"](() => {
      (_ = F), t(9, _);
    });
  }
  function Q(F) {
    (l = F), t(3, l);
  }
  return (
    (s.$$set = (F) => {
      "minWidth" in F && t(0, (r = F.minWidth));
    }),
    (s.$$.update = () => {
      s.$$.dirty[0] & 6 &&
        m &&
        (V === "Stage1"
          ? t(1, (m.style.visibility = "visible"), m)
          : t(1, (m.style.visibility = "hidden"), m));
    }),
    [
      r,
      m,
      V,
      l,
      n,
      a,
      i,
      p,
      g,
      _,
      M,
      y,
      k,
      b,
      T,
      L,
      P,
      o,
      R,
      Qe,
      Ge,
      qe,
      We,
      nt,
      te,
      De,
      Ce,
      we,
      ye,
      Zt,
      Dt,
      Q,
    ]
  );
}
class Lc extends Ze {
  constructor(e) {
    super(), Xe(this, e, Vc, Dc, Se, { minWidth: 0 }, null, [-1, -1]);
  }
}
function zc(s) {
  let e, t;
  return (
    (e = new Lc({ props: { minWidth: s[0] } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      p(l, n) {
        const o = {};
        n & 1 && (o.minWidth = l[0]), e.$set(o);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function $c(s) {
  let e, t;
  return (
    (e = new bc({ props: { minWidth: s[0] } })),
    {
      c() {
        Z(e.$$.fragment);
      },
      l(l) {
        X(e.$$.fragment, l);
      },
      m(l, n) {
        Y(e, l, n), (t = !0);
      },
      p(l, n) {
        const o = {};
        n & 1 && (o.minWidth = l[0]), e.$set(o);
      },
      i(l) {
        t || (H(e.$$.fragment, l), (t = !0));
      },
      o(l) {
        j(e.$$.fragment, l), (t = !1);
      },
      d(l) {
        q(e, l);
      },
    }
  );
}
function Gc(s) {
  let e, t, l, n;
  const o = [$c, zc],
    r = [];
  function a(i, p) {
    return i[1] ? 1 : 0;
  }
  return (
    (e = a(s)),
    (t = r[e] = o[e](s)),
    {
      c() {
        t.c(), (l = pe());
      },
      l(i) {
        t.l(i), (l = pe());
      },
      m(i, p) {
        r[e].m(i, p), O(i, l, p), (n = !0);
      },
      p(i, [p]) {
        let m = e;
        (e = a(i)),
          e === m
            ? r[e].p(i, p)
            : (wt(),
              j(r[m], 1, 1, () => {
                r[m] = null;
              }),
              yt(),
              (t = r[e]),
              t ? t.p(i, p) : ((t = r[e] = o[e](i)), t.c()),
              H(t, 1),
              t.m(l.parentNode, l));
      },
      i(i) {
        n || (H(t), (n = !0));
      },
      o(i) {
        j(t), (n = !1);
      },
      d(i) {
        i && u(l), r[e].d(i);
      },
    }
  );
}
function Pc(s, e, t) {
  let { minWidth: l } = e,
    { isMobile: n } = e;
  return (
    (s.$$set = (o) => {
      "minWidth" in o && t(0, (l = o.minWidth)),
        "isMobile" in o && t(1, (n = o.isMobile));
    }),
    [l, n]
  );
}
class Oc extends Ze {
  constructor(e) {
    super(), Xe(this, e, Pc, Gc, Se, { minWidth: 0, isMobile: 1 });
  }
}
function Hc(s) {
  let e, t, l, n, o, r, a, i, p, m, g, _, M, w, y, k, b;
  return (
    (e = new Oc({ props: { isMobile: s[1], minWidth: s[0] } })),
    (o = new vo({ props: { isMobile: s[1] } })),
    (i = new Uo({ props: { isMobile: s[1] } })),
    (g = new Sa({ props: { isMobile: s[1] } })),
    (w = new Wa({ props: { isMobile: s[1] } })),
    (k = new nc({ props: { isMobile: s[1] } })),
    {
      c() {
        Z(e.$$.fragment),
          (t = I()),
          (l = d("main")),
          (n = d("section")),
          Z(o.$$.fragment),
          (r = I()),
          (a = d("section")),
          Z(i.$$.fragment),
          (p = I()),
          (m = d("section")),
          Z(g.$$.fragment),
          (_ = I()),
          (M = d("section")),
          Z(w.$$.fragment),
          (y = I()),
          Z(k.$$.fragment),
          this.h();
      },
      l(E) {
        X(e.$$.fragment, E),
          (t = C(E)),
          (l = h(E, "MAIN", { class: !0, style: !0 }));
        var A = v(l);
        n = h(A, "SECTION", { id: !0, class: !0 });
        var T = v(n);
        X(o.$$.fragment, T),
          T.forEach(u),
          (r = C(A)),
          (a = h(A, "SECTION", { id: !0, class: !0 }));
        var S = v(a);
        X(i.$$.fragment, S),
          S.forEach(u),
          (p = C(A)),
          (m = h(A, "SECTION", { id: !0, class: !0 }));
        var N = v(m);
        X(g.$$.fragment, N),
          N.forEach(u),
          (_ = C(A)),
          (M = h(A, "SECTION", { id: !0, class: !0 }));
        var D = v(M);
        X(w.$$.fragment, D),
          D.forEach(u),
          A.forEach(u),
          (y = C(E)),
          X(k.$$.fragment, E),
          this.h();
      },
      h() {
        f(n, "id", "stage2"),
          f(n, "class", "carousel svelte-1q5gtsz"),
          f(a, "id", "stage3"),
          f(a, "class", "stepsBlock svelte-1q5gtsz"),
          f(m, "id", "stage4"),
          f(m, "class", "infinityBlock svelte-1q5gtsz"),
          f(M, "id", "stage5"),
          f(M, "class", "DominoBlock svelte-1q5gtsz"),
          f(l, "class", "main-content svelte-1q5gtsz"),
          x(l, "min-width", s[0]);
      },
      m(E, A) {
        Y(e, E, A),
          O(E, t, A),
          O(E, l, A),
          c(l, n),
          Y(o, n, null),
          c(l, r),
          c(l, a),
          Y(i, a, null),
          c(l, p),
          c(l, m),
          Y(g, m, null),
          c(l, _),
          c(l, M),
          Y(w, M, null),
          O(E, y, A),
          Y(k, E, A),
          (b = !0);
      },
      p(E, [A]) {
        const T = {};
        A & 1 && (T.minWidth = E[0]),
          e.$set(T),
          (!b || A & 1) && x(l, "min-width", E[0]);
      },
      i(E) {
        b ||
          (H(e.$$.fragment, E),
          H(o.$$.fragment, E),
          H(i.$$.fragment, E),
          H(g.$$.fragment, E),
          H(w.$$.fragment, E),
          H(k.$$.fragment, E),
          (b = !0));
      },
      o(E) {
        j(e.$$.fragment, E),
          j(o.$$.fragment, E),
          j(i.$$.fragment, E),
          j(g.$$.fragment, E),
          j(w.$$.fragment, E),
          j(k.$$.fragment, E),
          (b = !1);
      },
      d(E) {
        E && (u(t), u(l), u(y)), q(e, E), q(o), q(i), q(g), q(w), q(k, E);
      },
    }
  );
}
function jc(s, e, t) {
  let { data: l } = e,
    n = l.isMobileserver,
    o = "auto";
  return (
    yl(() => {
      function r() {
        window.innerWidth <= 768 && !n
          ? t(0, (o = "768px"))
          : t(0, (o = "auto"));
      }
      return (
        r(),
        window.addEventListener("resize", r),
        () => {
          window.removeEventListener("resize", r);
        }
      );
    }),
    (s.$$set = (r) => {
      "data" in r && t(2, (l = r.data));
    }),
    [o, n, l]
  );
}
class Uc extends Ze {
  constructor(e) {
    super(), Xe(this, e, jc, Hc, Se, { data: 2 });
  }
}
export { Uc as component };

export type Lang = "fa" | "en";

export const content = {
  fa: {
    dir: "rtl",
    meta: {
      title: "امیرحسین فلاح — توسعه‌دهنده فرانت‌اند و بک‌اند",
      description:
        "امیرحسین فلاح، توسعه‌دهنده فرانت‌اند و بک‌اند. طراحی و پیاده‌سازی رابط‌های کاربری سریع و سرویس‌های پایدار.",
    },
    nav: {
      logo: "امیرحسین.فلاح",
      about: "درباره من",
      skills: "مهارت‌ها",
      projects: "پروژه‌ها",
      blog: "مقالات",
      contact: "تماس با من",
    },
    hero: {
      eyebrow: "FULL-STACK DEVELOPER",
      title1: "من امیرحسین فلاح‌ام؛",
      titleHighlight: "می‌سازم چیزهایی که واقعاً کار می‌کنن.",
      subtitle:
        "توسعه‌دهنده فرانت‌اند و بک‌اند. از ایده تا محصول نهایی، رابط‌های کاربری سریع و سرویس‌های پایدار طراحی و پیاده‌سازی می‌کنم.",
      ctaPrimary: "مشاهده پروژه‌ها",
      ctaSecondary: "همکاری با من",
      terminal: "~/amirhossein $ status: available_for_work",
      initials: "ا.ف",
    },
    about: {
      label: "درباره من",
      paragraphs: [
        "مسیر من از کنجکاوی نسبت به این‌که «این وب‌سایت‌ها چطور کار می‌کنن» شروع شد و به علاقه‌ای جدی به ساختن محصولات دیجیتال رسید. از همون روزهای اول، چیزی که برام مهم بود این بود که کد فقط «کار کنه» نه؛ باید درست، قابل نگهداری و قابل‌فهم برای نفر بعدی هم باشه.",
        "امروز روی هر دو لایه‌ی فرانت‌اند و بک‌اند کار می‌کنم، چون معتقدم برای ساختن یک محصول خوب باید کل مسیر داده — از دیتابیس تا پیکسلی که کاربر می‌بینه — رو درک کنی.",
        "فلسفه‌ی کاری‌ام ساده‌ست: ساده‌سازی قبل از بهینه‌سازی، شفافیت در ارتباط با کارفرما یا تیم، و تحویل چیزی که واقعاً حل‌کننده‌ی مشکله، نه فقط یک دمو.",
      ],
      values: [
        "کد تمیز رو انتخاب می‌کنم، نه راه‌حل سریع و کثیف.",
        "ارتباط شفاف با کارفرما، از روز اول تا تحویل.",
        "یادگیری مداوم؛ ابزار درست برای مسئله‌ی درست.",
      ],
    },
    skills: {
      label: "مهارت‌ها",
      groups: [
        { name: "فرانت‌اند", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
        { name: "بک‌اند", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST / GraphQL"] },
        { name: "ابزار و زیرساخت", items: ["Git", "Docker", "CI/CD", "Vercel", "AWS (پایه)"] },
      ],
    },
    projects: {
      label: "پروژه‌ها",
      note: "* پروژه‌های بالا نمونه‌اند — بعداً با پروژه‌های واقعی خودت جایگزینشون کن.",
      items: [
        {
          tag: "نمونه — جایگزین کن",
          title: "پلتفرم مدیریت سفارش فروشگاهی",
          problem: "تیم فروش با یک اکسل شلوغ سفارش‌ها رو پیگیری می‌کرد و خطای انسانی زیاد بود.",
          solution: "یک داشبورد بلادرنگ با Next.js و PostgreSQL ساختم که وضعیت سفارش‌ها رو زنده نشون می‌داد.",
          result: "زمان پردازش هر سفارش ۴۰٪ کاهش پیدا کرد.",
          stack: ["Next.js", "PostgreSQL", "Tailwind"],
        },
        {
          tag: "نمونه — جایگزین کن",
          title: "سیستم احراز هویت چند‌نقشی",
          problem: "اپلیکیشن نیاز به سطوح دسترسی متفاوت برای ادمین، فروشنده و مشتری داشت.",
          solution: "یک لایه‌ی Auth مبتنی بر JWT با کنترل دسترسی نقش‌محور (RBAC) طراحی و پیاده‌سازی کردم.",
          result: "زمان توسعه‌ی فیچرهای جدید به‌خاطر معماری تمیز، نصف شد.",
          stack: ["Node.js", "Express", "JWT"],
        },
        {
          tag: "نمونه — جایگزین کن",
          title: "بازطراحی رابط کاربری یک اپ داخلی",
          problem: "ابزار داخلی تیم عملیات کند و گیج‌کننده بود و کاربرها ازش فرار می‌کردن.",
          solution: "رابط کاربری رو از صفر با تمرکز روی سرعت و سادگی با React بازطراحی کردم.",
          result: "رضایت کاربران داخلی طبق نظرسنجی تیم به‌طور محسوس بالا رفت.",
          stack: ["React", "TypeScript", "Framer"],
        },
      ],
    },
    blog: {
      label: "مقالات",
      readMore: "ادامه مطلب",
      posts: [
        {
          title: "چرا معماری تمیز، سرعت تیم رو تو بلندمدت بیشتر می‌کنه",
          excerpt: "تجربه‌ای که از رفکتور یک پروژه‌ی شلوغ یاد گرفتم و چطور تصمیم‌های ساده جلوی بدهی فنی رو می‌گیرن.",
        },
        {
          title: "State Management در ۲۰۲۶: کِی واقعاً بهش نیاز داری؟",
          excerpt: "نگاهی صادقانه به این‌که کِی Redux لازمه و کِی فقط دارید پیچیده‌ش می‌کنید.",
        },
        {
          title: "از فریلنسری تا کار تیمی: چیزهایی که کسی بهم نگفت",
          excerpt: "چند درسی که در مسیر حرفه‌ای‌ام، بین پروژه‌های مستقل و کار تیمی یاد گرفتم.",
        },
      ],
    },
    contact: {
      label: "تماس با من",
      formName: "نام شما",
      formEmail: "ایمیل شما",
      formMessage: "پیام‌تون رو بنویسید...",
      formSubmit: "ارسال پیام",
      telegram: "تلگرام",
      instagram: "اینستاگرام",
      phone: "تماس تلفنی",
    },
    footer: {
      rights: "امیرحسین فلاح",
      builtWith: "built with Next.js + Tailwind",
    },
  },
  en: {
    dir: "ltr",
    meta: {
      title: "Amirhossein Fallah — Full-Stack Developer",
      description:
        "Amirhossein Fallah, a full-stack developer designing and building fast interfaces and reliable services.",
    },
    nav: {
      logo: "amirhossein.fallah",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      blog: "Writing",
      contact: "Contact",
    },
    hero: {
      eyebrow: "FULL-STACK DEVELOPER",
      title1: "I'm Amirhossein Fallah —",
      titleHighlight: "I build things that actually work.",
      subtitle:
        "A full-stack developer. From idea to shipped product, I design and build fast interfaces and reliable services.",
      ctaPrimary: "View projects",
      ctaSecondary: "Work with me",
      terminal: "~/amirhossein $ status: available_for_work",
      initials: "AF",
    },
    about: {
      label: "About",
      paragraphs: [
        "My path started with curiosity about how websites actually work, and grew into a serious interest in building digital products. From the beginning, what mattered to me wasn't just making code run — it had to be correct, maintainable, and understandable for whoever came after me.",
        "Today I work across both the frontend and backend, because I believe building a good product means understanding the full path of data — from the database to the pixel a user sees.",
        "My working philosophy is simple: simplify before you optimize, communicate clearly with clients and teams, and ship something that actually solves the problem, not just a demo.",
      ],
      values: [
        "I choose clean code over a quick, messy fix.",
        "Clear communication with clients, from day one to delivery.",
        "Continuous learning — the right tool for the right problem.",
      ],
    },
    skills: {
      label: "Skills",
      groups: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
        { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST / GraphQL"] },
        { name: "Tools & infra", items: ["Git", "Docker", "CI/CD", "Vercel", "AWS (basics)"] },
      ],
    },
    projects: {
      label: "Projects",
      note: "* The projects above are placeholders — swap them for your real work.",
      items: [
        {
          tag: "Sample — replace me",
          title: "Store order management platform",
          problem: "The sales team tracked orders in a messy spreadsheet, causing frequent human error.",
          solution: "Built a real-time dashboard with Next.js and PostgreSQL to track order status live.",
          result: "Cut order processing time by 40%.",
          stack: ["Next.js", "PostgreSQL", "Tailwind"],
        },
        {
          tag: "Sample — replace me",
          title: "Multi-role authentication system",
          problem: "The app needed different access levels for admins, sellers, and customers.",
          solution: "Designed and implemented a JWT-based auth layer with role-based access control (RBAC).",
          result: "Cut new feature development time in half thanks to the clean architecture.",
          stack: ["Node.js", "Express", "JWT"],
        },
        {
          tag: "Sample — replace me",
          title: "Internal tool UI redesign",
          problem: "The operations team's internal tool was slow and confusing, and people avoided it.",
          solution: "Rebuilt the interface from scratch in React, focused on speed and simplicity.",
          result: "Noticeably higher internal user satisfaction per the team's survey.",
          stack: ["React", "TypeScript", "Framer"],
        },
      ],
    },
    blog: {
      label: "Writing",
      readMore: "Read more",
      posts: [
        {
          title: "Why clean architecture pays off in team speed, long-term",
          excerpt: "What I learned refactoring a messy project, and how small decisions prevent technical debt.",
        },
        {
          title: "State management in 2026: when do you actually need it?",
          excerpt: "An honest look at when Redux is warranted, and when you're just overcomplicating things.",
        },
        {
          title: "From freelancing to team work: what nobody told me",
          excerpt: "A few lessons from moving between independent projects and team-based work.",
        },
      ],
    },
    contact: {
      label: "Contact",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Write your message...",
      formSubmit: "Send message",
      telegram: "Telegram",
      instagram: "Instagram",
      phone: "Phone",
    },
    footer: {
      rights: "Amirhossein Fallah",
      builtWith: "built with Next.js + Tailwind",
    },
  },
} as const;

export const socials = {
  email: "panamir77@gmail.com",
  telegram: "https://t.me/RishSefied",
  instagram: "https://instagram.com/ll4mirffx",
  phone: "09906509033",
  // Placeholder links — replace with your real profiles
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

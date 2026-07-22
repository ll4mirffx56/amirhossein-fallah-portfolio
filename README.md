# amirhossein-fallah-portfolio

سایت شخصی امیرحسین فلاح — Next.js 14 (App Router) + TypeScript + Tailwind CSS، دوزبانه (فارسی/انگلیسی).

## اجرا روی سیستم خودت

```bash
npm install
npm run dev
```

بعد آدرس `http://localhost:3000` رو باز کن.

## قبل از انتشار حتماً این‌ها رو انجام بده

1. **پروژه‌های واقعی**: در `lib/content.ts` بخش `projects.items` (هم `fa` هم `en`) رو با پروژه‌های واقعی خودت جایگزین کن.
2. **لینک‌های شبکه اجتماعی**: در `lib/content.ts` مقدار `socials.github` و `socials.linkedin` را با لینک واقعی خودت جایگزین کن (الان placeholder هستند).
3. **دامنه**: در `app/sitemap.ts` و `app/robots.ts` مقدار `https://your-domain.com` را با دامنه‌ی واقعی سایتت جایگزین کن.
4. **مقالات**: بخش `blog.posts` نمونه‌ست؛ وقتی مقاله‌ی واقعی نوشتی جایگزینش کن، یا بعداً یک روت `/blog/[slug]` واقعی اضافه کن.
5. **عکس پروفایل (اختیاری)**: الان به‌جای عکس، یک مونوگرام حروف اول اسم (`ا.ف`) در هدر گذاشته شده. اگه عکس داشتی، می‌تونی در `components/Hero.tsx` جایگزینش کنی (با `next/image`).

## دیپلوی

ساده‌ترین راه، دیپلوی روی [Vercel](https://vercel.com) است:

```bash
npm run build
```

و بعد ریپازیتوری رو به Vercel وصل کن (یا با CLI: `vercel`).

## ساختار پروژه

```
app/
  layout.tsx      → فونت‌ها، متادیتای SEO، Provider زبان
  page.tsx        → صفحه‌ی اصلی (تمام بخش‌ها)
  globals.css     → استایل پایه
  sitemap.ts      → sitemap خودکار برای SEO
  robots.ts       → robots.txt خودکار
components/
  Nav.tsx         → هدر و سوییچ زبان
  Hero.tsx        → بخش اول با امضای طراحی (ترمینال زنده)
  About.tsx
  Skills.tsx
  Projects.tsx
  Blog.tsx
  Contact.tsx     → فرم تماس + لینک‌های واقعی
  Footer.tsx
  Reveal.tsx      → انیمیشن ظریف scroll-reveal
  ui.tsx          → کامپوننت‌های کوچک مشترک
lib/
  content.ts      → تمام متن‌های سایت، دوزبانه (fa/en)
  LanguageContext.tsx → مدیریت زبان فعال
```

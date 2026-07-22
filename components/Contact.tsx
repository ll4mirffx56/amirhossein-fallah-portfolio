"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { SectionMark } from "./ui";
import { socials } from "@/lib/content";
import { Send, Instagram, Phone, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("پیام از سایت شخصی / Website message");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionMark label={t.contact.label} />
      </Reveal>
      <div className="grid sm:grid-cols-5 gap-10">
        <Reveal delay={80} className="sm:col-span-3">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              required
              placeholder={t.contact.formName}
              className="w-full border border-line rounded-xl px-4 py-3 text-[14px] bg-white outline-none focus:border-signal transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t.contact.formEmail}
              dir="ltr"
              className="w-full border border-line rounded-xl px-4 py-3 text-[14px] bg-white outline-none focus:border-signal transition-colors"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.contact.formMessage}
              className="w-full border border-line rounded-xl px-4 py-3 text-[14px] bg-white outline-none focus:border-signal transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-[14px] font-medium hover:bg-signal transition-colors"
            >
              {t.contact.formSubmit}
              <Send size={15} />
            </button>
          </form>
        </Reveal>

        <Reveal delay={160} className="sm:col-span-2 space-y-3">
          <a
            href={socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-line rounded-xl px-4 py-3 bg-white/60 hover:border-signal/40 transition-colors text-[14px]"
          >
            <Send size={17} className="text-signal" />
            {t.contact.telegram} — RishSefied@
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-line rounded-xl px-4 py-3 bg-white/60 hover:border-signal/40 transition-colors text-[14px]"
          >
            <Instagram size={17} className="text-signal" />
            {t.contact.instagram} — ll4mirffx@
          </a>
          <a
            href={`tel:${socials.phone}`}
            dir="ltr"
            className="flex items-center gap-3 border border-line rounded-xl px-4 py-3 bg-white/60 hover:border-signal/40 transition-colors text-[14px]"
          >
            <Phone size={17} className="text-signal" />
            {socials.phone}
          </a>
          <a
            href={`mailto:${socials.email}`}
            dir="ltr"
            className="flex items-center gap-3 border border-line rounded-xl px-4 py-3 bg-white/60 hover:border-signal/40 transition-colors text-[14px]"
          >
            <Mail size={17} className="text-signal" />
            {socials.email}
          </a>

          <div className="flex gap-3 pt-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-line hover:border-signal hover:text-signal transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-line hover:border-signal hover:text-signal transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </div>
          <p className="text-[12px] text-muted pt-1">
            GitHub / LinkedIn links are placeholders — replace with your real profiles.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

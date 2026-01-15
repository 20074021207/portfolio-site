import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#050505] px-4 py-20"
    >
      <motion.div
        className="mx-auto max-w-5xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <header className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">联系我</h2>
          <p className="text-sm text-white/70">
            如果你对我的项目或经历感兴趣，欢迎通过以下方式联系。
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:example@email.com"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs text-white/60">邮箱</p>
            <p className="mt-1 break-all text-sm">example@email.com</p>
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs text-white/60">GitHub</p>
            <p className="mt-1 text-sm">@example</p>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-xs text-white/60">LinkedIn</p>
            <p className="mt-1 text-sm">Profile</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

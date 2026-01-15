import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4 pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.2),_transparent_60%)]" />
      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300/80">
            前端开发者
          </p>
          <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
            打造简洁现代的个人作品集
          </h1>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            使用 React、TypeScript 和 Tailwind CSS 构建的深色主题网站，展示项目、
            技能和联系方式。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              联系我
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 p-[2px] md:h-52 md:w-52">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#050505] text-4xl font-semibold text-white/90">
              Me
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

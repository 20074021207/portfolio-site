import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#050505] px-4 py-20"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-white">关于我</h2>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            我是一名专注于前端的开发者，喜欢用 React、TypeScript 和 Tailwind CSS
            打造简洁、性能优秀、体验流畅的 Web 应用。
          </p>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            关注代码质量和用户体验，重视组件复用性和可维护性，同时兼顾移动端适配和加载性能。
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
            技能
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
              >
                <p className="font-medium">{skill.name}</p>
                {skill.level ? (
                  <p className="mt-1 text-[11px] text-white/60">
                    {skill.level}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;

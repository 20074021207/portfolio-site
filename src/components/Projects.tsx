import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#050505] px-4 py-20"
    >
      <motion.div
        className="mx-auto max-w-5xl space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <header className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">项目展示</h2>
          <p className="text-sm text-white/70">
            通过实际项目展示技术栈、设计思路以及工程能力，项目卡片包含截图、
            描述、技术栈和访问链接。
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#090909] shadow-lg shadow-black/40"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                    >
                      查看项目
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-purple-300 underline underline-offset-4 hover:text-purple-200"
                    >
                      查看代码
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;

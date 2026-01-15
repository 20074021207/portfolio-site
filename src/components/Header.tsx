import React from "react";

const sections = [
  { id: "about", label: "关于我" },
  { id: "projects", label: "项目" },
  { id: "contact", label: "联系" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;


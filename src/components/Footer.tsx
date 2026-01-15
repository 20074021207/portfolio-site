import React from "react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-white/50">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p>Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;


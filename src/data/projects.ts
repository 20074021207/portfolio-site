export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "个人作品集网站",
    description:
      "使用 React、TypeScript 和 Tailwind CSS 构建的深色主题作品集网站，包含首页、关于我、项目展示和联系方式。",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "https://via.placeholder.com/600x400?text=Portfolio",
    link: "#hero",
  },
  {
    id: "dashboard",
    title: "数据可视化面板",
    description:
      "响应式数据面板，支持多种图表组件和主题切换，聚焦交互体验和性能优化。",
    tech: ["React", "TypeScript", "Chart", "Responsive Design"],
    image: "https://via.placeholder.com/600x400?text=Dashboard",
  },
];


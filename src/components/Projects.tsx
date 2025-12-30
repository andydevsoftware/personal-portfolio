"use client";

import Image from "next/image";

interface Project {
  icon: string;
  title: string;
  description: string;
  tags: Array<{ name: string; icon: string }>;
  link?: string;
  projectLink?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    icon: "/todo.svg",
    title: "To do list",
    description:
      "✅ Aplicación para la gestión de tareas con enfoque en organización diaria y productividad personal.",
    badge: "updated",
    projectLink: "https://todo-app-inky-five-33.vercel.app/",
    link: "https://github.com/andydevsoftware/todo-app",
    tags: [
      { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
    ],
  },
  {
    icon: "/finance.svg",
    title: "Personal Finance Dashboard",
    description:
      "Panel para el control y análisis de finanzas personales mediante visualización de ingresos y gastos.",
    projectLink: "https://personal-finance-dashboard-rosy-sigma.vercel.app/",
    link: "https://github.com/andydevsoftware/personal-finance-dashboard",
    tags: [
      { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
      { name: "React", icon: "/reactjs.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
    ],
  },
  {
    icon: "/favicon_mf.ico",
    title: "Movie Finder",
    description:
      "Aplicación para descubrir y buscar películas utilizando una API externa.",
    projectLink: "https://movie-finder-phi-two.vercel.app/",
    link: "https://github.com/andydevsoftware/movie-finder",
    tags: [
      { name: "React", icon: "/reactjs.svg" },
      { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
    ],
  },
  {
    icon: "/favicon_carrito.ico",
    title: "E-Commerce Store",
    description:
      "Plataforma de tienda con catálogo de productos y carrito de compras.",
    projectLink: "https://ecommerce-store-xi-one.vercel.app/",
    link: "https://github.com/andydevsoftware/ecommerce-store",
    tags: [
      { name: "React", icon: "/reactjs.svg" },
      { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
    ],
  },
  {
    icon: "/favicon_music.ico",
    title: " Music Playlist Manager (En desarrollo)",
    description:
      "Aplicación para crear playlists personalizadas y organizar canciones usando datos de una API pública.",
    projectLink: "#",
    link: "#",
    tags: [
      { name: "Turborepo", icon: "/turborepo-icon-dark.svg" },
      { name: "Tauri", icon: "/tauri.svg" },
      { name: "React", icon: "/reactjs.svg" },
    ],
  },
  {
    icon: "/favicon_fac.ico",
    title: "Invoice Manager (En desarrollo)",
    description:
      "Aplicación para registrar clientes, generar facturas y exportarlas en PDF, con filtros y estado de pago.",
    projectLink: "#",
    link: "#",
    tags: [
      { name: "Next.js", icon: "/nextjs_icon_dark.svg" },
      { name: "T3 Stack", icon: "/t3-light.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[17px] font-medium tracking-tight">Projects</h2>

          <a
            href="https://github.com/andydevsoftware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            More
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              suppressHydrationWarning
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
              className="group relative rounded-xl border border-neutral-800/50 bg-neutral-950/30 overflow-hidden"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 45%)",
                }}
              />

              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--x) var(--y), rgba(255,255,255,0.35), transparent 60%)",
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              />

              <div className="relative z-10 project-card-content">
                <div className="flex items-start justify-between project-card-header">
                  <div className="flex items-center gap-3">
                    <div className="project-card-emoji shrink-0">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-medium tracking-tight">
                        {project.title}
                      </h3>

                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="w-3 h-3 text-neutral-500 hover:text-neutral-300 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 ml-3 flex items-center gap-2">
                    {project.badge && (
                      <span className="px-2 py-0.5 text-[9px] rounded-md bg-neutral-900/80 border border-neutral-800/60 text-neutral-400">
                        {project.badge}
                      </span>
                    )}

                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors block"
                    >
                      <svg
                        className="w-4.25"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-[13px] text-neutral-400 font-geist-mono project-card-description">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-geist-mono project-card-tags">
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-[10.5px] rounded-md bg-neutral-900/60 border border-neutral-800/50 text-neutral-300 flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <Image
                          src={tag.icon}
                          alt={tag.name}
                          width={14}
                          height={14}
                          className="w-3.5 h-3.5"
                        />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

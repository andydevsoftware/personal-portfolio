import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
  category: string;
}

const technologies: Technology[] = [
  { name: "React", icon: "/reactjs.svg", category: "Frontend" },
  { name: "Next.js", icon: "/nextjs_icon_dark.svg", category: "Frontend" },
  {
    name: "TypeScript",
    icon: "/typescript.svg",
    category: "Language",
  },
  { name: "Tailwind CSS", icon: "/tailwind.svg", category: "Styling" },
  { name: "JavaScript", icon: "/javascript_1.svg", category: "Language" },
  { name: "CSS", icon: "/css_icon.svg", category: "Styling" },
  { name: "MySQL", icon: "/mysql.svg", category: "Database" },
  { name: "Git", icon: "/github_dark.svg", category: "Tools" },
];

export default function Technologies() {
  return (
    <section id="technologies">
      <h2 className="text-lg font-semibold mb-6 tracking-tight">
        Tecnologías que domino
      </h2>

      <p className="max-w-xl text-neutral-400 text-sm mb-12 leading-relaxed">
        Herramientas y tecnologías con las que trabajo actualmente.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group border border-neutral-800/50 rounded-xl px-7 py-6 hover:border-neutral-700 transition-all cursor-pointer bg-neutral-950/30 hover:bg-neutral-950/50"
          >
            <div className="mb-3">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </div>
            <h3 className="text-sm font-medium mb-0.5 leading-snug pl-0.5">
              {tech.name}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {tech.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

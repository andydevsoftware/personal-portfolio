interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  companyUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 — Present",
    title: "Software Developer",
    company: "Corporación IBGROUP",
    description:
      "Apoyo en el desarrollo y mantenimiento de aplicaciones web usando PHP y Laravel, colaborando en la implementación de nuevas funcionalidades, consumo básico de APIs y mejora del rendimiento del sistema.",
    companyUrl: "#",
  },
  {
    period: "2023 — 2024",
    title: "Freelance Developer",
    company: "Proyectos Independientes",
    description:
      "Desarrollo de sitios web y aplicaciones a medida para clientes, enfocado en frontend, implementación de funcionalidades personalizadas y optimización de la experiencia de usuario.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-lg font-medium mb-10 tracking-tight">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-[20px_1fr] gap-6">
            {/* LINE */}
            <div className="relative flex justify-center">
              <span className="absolute top-0 bottom-0 w-px bg-neutral-800"></span>
              <span className="relative mt-1 w-2 h-2 rounded-full bg-neutral-500"></span>
            </div>

            {/* CONTENT */}
            <div>
              <div className="text-[11px] text-neutral-500 mb-2 font-geist-mono tracking-tight">
                {exp.period}
              </div>

              <h3 className="text-[15px] font-medium tracking-tight mb-1">
                {exp.title}
              </h3>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] text-neutral-300 hover:text-white transition-colors mb-2"
                >
                  {exp.company}
                </a>
              ) : (
                <div className="text-sm text-neutral-400 mb-2">
                  {exp.company}
                </div>
              )}

              <p className="text-[13.5px] text-neutral-400 leading-relaxed max-w-prose font-geist-sans">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

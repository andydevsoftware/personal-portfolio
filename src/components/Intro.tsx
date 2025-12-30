import { GeistSans } from "geist/font";

const geistSans = GeistSans;
export default function Intro() {
  return (
    <section className={`${geistSans.className} pt-6`}>
      <p className="max-w-3xl text-[var(--text-secondary)] text-sm sm:text-[15px] leading-relaxed">
        Soy <span className="text-[var(--text-primary)] font-medium">Andy</span>
        , estudiante del VII ciclo de Ingeniería de Sistemas orientado al
        desarrollo web, +1 de experiencia construyendo aplicaciones modernas
        centradas en rendimiento, usabilidad y buenas prácticas.
      </p>
    </section>
  );
}

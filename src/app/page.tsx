import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative flex-col py-4 md:py-6 flex min-h-screen w-full items-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 flex flex-col gap-20 sm:gap-28">
          {/* HERO SPACER */}
          <Header />
          <Intro />
          <Projects />
          <Experience />
          <Technologies />
          <Footer />
        </div>
      </main>
    </>
  );
}

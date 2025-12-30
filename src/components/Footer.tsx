export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(11,11,11)] transition-colors duration-300 mt-12 sm:mt-24 mb-6 sm:mb-8">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 py-6">
          {/* Desktop layout - horizontal */}
          <div className="hidden sm:flex items-center justify-between gap-6">
            <p className="text-neutral-500 text-[15px] flex items-center gap-1.5 font-serif">
              <span>✨</span> Building amazing things
            </p>

            <div className="flex items-center gap-2 text-[15px] text-neutral-500">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>|</span>
              <span>Andy - {currentYear}</span>
            </div>
          </div>
          {/* Mobile layout - vertical */}
          <div className="flex sm:hidden flex-col items-center gap-3 text-center">
            <p className="text-neutral-500 text-[13px] flex items-center gap-1.5 font-serif">
              <span>✨</span> Building amazing things
            </p>

            <div className="flex flex-col items-center gap-1 text-[13px] text-neutral-500">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>Andy - {currentYear}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

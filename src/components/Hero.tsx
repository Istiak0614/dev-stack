import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="pointer-events-none absolute right-[-100px] top-16 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-16 sm:px-6 md:py-20 lg:min-h-[580px] lg:flex-row lg:justify-between lg:gap-14 lg:py-20">
        {/* Left Content */}
        <div className="w-full text-center lg:w-[55%] lg:text-left">
          <div className="mb-5 inline-flex rounded-full border border-violet-100 bg-violet-50 px-4 py-2">
            <span className="text-xs font-semibold tracking-wide text-violet-700 sm:text-sm">
              Build smarter. Develop faster.
            </span>
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:mx-0">
            Build Your Ideal
            <span className="text-brand-gradient mt-2 block pb-2">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
            Explore modern frontend, backend, database, language,
            styling, DevOps, and developer tools. Compare technologies
            and build the perfect stack for your next project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="brand-gradient inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
            >
              Explore Technologies
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#about"
              className="brand-border inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-50 sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-[45%] lg:justify-end">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="w-full max-w-[430px] object-contain sm:max-w-[500px] lg:max-w-[530px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
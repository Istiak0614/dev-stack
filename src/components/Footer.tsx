import logoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer id="about" className="bg-[#0b1120] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center">
              <div className="rounded-lg bg-white px-3 py-2">
                <img
                  src={logoText}
                  alt="Dev Stack"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Discover modern technologies, compare developer tools,
              and create a development stack that fits your next
              project.
            </p>

            <div id="contact" className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-400 transition duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="#"
                aria-label="X Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-400 transition duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-400 transition duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#home"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
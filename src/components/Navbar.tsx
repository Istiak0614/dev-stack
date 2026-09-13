import { useState } from "react";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      {/* Desktop Navbar */}
      <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-6 lg:flex">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="Dev Stack Home"
        >
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-700 transition hover:text-violet-600"
          >
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-2 px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-slate-700 transition hover:bg-slate-100"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
>
         <i className="fa-solid fa-bars"></i>
        </button>

        <a
          href="#home"
          className="flex justify-center"
          onClick={closeMenu}
          aria-label="Dev Stack Home"
        >
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-8 max-w-[125px] object-contain sm:h-9 sm:max-w-[150px]"
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="whitespace-nowrap px-1.5 py-2 text-[11px] font-semibold text-slate-700 sm:px-2 sm:text-xs"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient whitespace-nowrap rounded-full px-2.5 py-2 text-[10px] font-semibold text-white sm:px-4 sm:text-xs"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[350px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-violet-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
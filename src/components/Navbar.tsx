const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="./assets/banner-stack.png"
                alt="Dev Stack Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="h-8 flex items-center">
              {
              <img
                src="./assets/logo-text.png"
                alt="Dev Stack"
                className="h-full w-auto object-contain"
              />
              }
            </div>

          </div>
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-700 font-medium hover:text-violet-600 transition-colors"
            >
              Contact
            </a>

          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:block px-4 py-2 font-medium text-gray-700 hover:text-violet-600 transition-colors cursor-pointer"
            >
              Sign In
            </button>

            <button
              type="button"
              className="
                px-5 py-2.5
                rounded-full
                text-white
                font-semibold
                bg-gradient-to-r
                from-orange-500
                via-pink-500
                to-violet-600
                hover:opacity-90
                transition
                cursor-pointer
              "
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;
const Navbar = ({ menuOpen }) => {
  return (
    <nav
      className={
        "my-navbar absolute inset-0 lg:inset-auto lg:w-2/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center pt-36 lg:pt-0 bg-black transform transition-transform duration-500 ease-in-out " +
        (menuOpen ? "translate-x-0" : "translate-x-full")
      }
    >
      <ul className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-10 text-sm">
        <li>
          <a>About</a>
        </li>
        <li className="flex flex-col -mt-[7px]">
          <span className="text-yellow text-[9px] leading-none -mb-0.5">
            LIVE
          </span>
          <a>Masterclass</a>
        </li>
        <li className="flex flex-col -mt-[7px]">
          <span className="text-yellow text-[9px] leading-none -mb-0.5">
            FREE
          </span>
          <a>Study Material</a>
        </li>
        <li className="flex flex-col -mt-[7px]">
          <span className="text-yellow text-[9px] leading-none -mb-0.5">
            HOT
          </span>
          <a>Solved Questions</a>
        </li>
        <li>
          <a>Doubt Space</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

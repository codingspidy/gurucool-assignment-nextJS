import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-black text-white">
      <header className="flex items-center justify-between h-[70px] max-w-[80rem] mx-auto px-4">
        <div>
          <Image src="/logo.png" width={120} height={40} />
        </div>
        {menuOpen ? (
          <XMarkIcon
            onClick={handleClick}
            className="menu-btn absolute z-50 right-[0.7rem] top-4 lg:hidden h-8 text-yellow cursor-pointer"
          />
        ) : (
          <Bars3Icon
            onClick={handleClick}
            className="menu-btn absolute z-50 right-[0.7rem] top-4 lg:hidden h-8 text-yellow cursor-pointer"
          />
        )}
        <nav
          className={
            "my-navbar absolute z-40 inset-0 lg:inset-auto lg:w-2/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center pt-36 lg:pt-0 bg-black transform transition-transform duration-500 ease-in-out " +
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
        <div className="hidden lg:flex items-center space-x-2">
          <Image src="/profile-img.png" width={40} height={40} />
          <span>GmatriX</span>
        </div>
      </header>
    </div>
  );
};

export default Header;

import { useState } from "react";

import Button from "./Button";
import HamburguerBtn from "./HamburguerBtn";
import MenuNav from "./MenuNav";
import { pages } from "../utils/lists";
import logo from "../assets/logos/moviemarathon.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const border = isOpen ? "" : " border-b border-stone-200";

  return (
    <header
      className={`font-body bg-stone-900 px-4 py-2.5 md:px-8 md:py-3.5 lg:px-28 lg:py-6 relative z-20 ${border}`}
    >
      {/* MOBILE NAV DROPDOWN MENU */}
      <MenuNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* NAV */}
      <div className="container mx-auto flex justify-between">
        <div className="w-60 flex items-center justify-start">
          <a href="/" className="flex gap-1 items-end">
            <img alt="MovieMarathon logo" src={logo} className=" h-8" />
            <span className="font-display text-base text-stone-50">
              MovieMarathon
            </span>
          </a>
        </div>

        {/* MOBILE HAMBURGUER BUTTON */}
        <HamburguerBtn isOpen={isOpen} setIsOpen={setIsOpen} />

        <nav className="hidden lg:flex grow justify-center">
          <ul className="flex items-center justify-stretch gap-8">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Button type="nav" to={page.to}>
                    {page.name}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden lg:flex gap-4 justify-end w-60">
          <Button type="outline" to="login">
            Login
          </Button>
          <Button type="primary" to="createaccount">
            Create account
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

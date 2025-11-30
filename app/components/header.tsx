"use client";

import Logo from "./logo";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export const menuItems = [
  { label: "О нас", href: "#about" },
  { label: "Цены", href: "#prices" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 100; // Offset for sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="px-4 md:px-5 2xl:px-0">
        <div className="flex items-center justify-between gap-20 max-w-7xl mx-auto py-5">
          {/* Desktop logo and text - hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="block w-24 md:w-33 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="наверх"
            >
              <Logo />
            </button>
            <span className="text-xs font-normal">
              Профессиональная
              <br />
              стяжка пола
            </span>
          </div>
          {/* Desktop menu and buttons - hidden on mobile */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-base">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-start gap-3 text-sky-900 text-lg">
              <PhoneIcon className="w-6 h-6 mt-1" />
              <div className="flex flex-col">
                <a
                  href="tel:+79162499167"
                  className="font-medium hover:text-sky-800 transition-colors"
                >
                  +7 916 249-91-67
                </a>
                <a
                  href="tel:+79265606349"
                  className="font-medium hover:text-sky-800 transition-colors"
                >
                  +7 926 560-63-49
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => handleSmoothScroll(e, "#form")}
              className="bg-sky-900 hover:bg-sky-800 text-white px-6 py-4 rounded-full cursor-pointer"
            >
              Оставить заявку
            </button>
          </div>
          {/* Mobile version - visible only on mobile */}
          <div className="flex md:hidden items-center justify-between w-full gap-4">
            {/* Mobile logo */}
            <button
              className="block w-24 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="наверх"
            >
              <Logo />
            </button>
            {/* Mobile buttons */}
            <div className="flex items-center gap-3">
              {/* Contacts button - scrolls to about section */}
              <button
                type="button"
                onClick={(e) => handleSmoothScroll(e, "#contacts")}
                className="p-3 text-sky-900 hover:bg-sky-50 rounded-full transition-colors"
                title="Контакты"
              >
                <PhoneIcon className="w-6 h-6" />
              </button>
              {/* Menu dropdown button */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="p-3 text-sky-900 hover:bg-sky-50 rounded-full transition-colors"
                  aria-label="Меню"
                  title="Меню"
                >
                  <Bars3Icon className="w-8 h-8" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white shadow-lg rounded-box w-52 mt-2 z-10 border border-gray-200"
                >
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="text-gray-700 hover:bg-sky-50 hover:text-sky-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

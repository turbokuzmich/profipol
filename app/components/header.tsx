"use client";

import Link from "next/link";
import Logo from "./logo";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="px-2 md:px-5 2xl:px-0">
        <div className="flex items-center justify-between gap-20 max-w-7xl mx-auto py-5">
          <div className="flex items-center gap-4">
            <Link className="block w-24 md:w-33 cursor-pointer" href="/">
              <Logo />
            </Link>
            <span className="text-xs font-normal">
              Профессиональная
              <br />
              стяжка пола
            </span>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-8 text-base">
              <a href="/" className="hover:underline">
                Цены
              </a>
              <a href="/" className="hover:underline">
                Работы
              </a>
              <a href="/" className="hover:underline">
                Контакты
              </a>
            </div>
            <div className="flex items-center gap-2 text-sky-900 text-lg">
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
              className="bg-sky-900 hover:bg-sky-800 text-white px-6 py-4 rounded-full cursor-pointer"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

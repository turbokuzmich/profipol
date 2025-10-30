import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <nav className="px-2 md:px-5 2xl:px-0">
          <div className="flex items-center justify-between gap-20 max-w-7xl mx-auto py-5">
            <div className="flex items-center gap-4">
              <Link href="/">
                <img src="/vercel.svg" alt="Профипол" className="w-16" />
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
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="font-medium">+7 (999) 123-45-67</span>
              </a>
              <button
                type="button"
                className="bg-sky-600 hover:bg-sky-800 text-white px-6 py-4 rounded-full cursor-pointer"
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-2 md:px-5 2xl:px-0">
        <div className="max-w-7xl mx-auto pt-40">
          <h1 className="text-7xl font-bold tracking-tight text-center mb-5">
            Профессиональная стяжка пола
          </h1>
          <div className="flex justify-center mb-10">
            <p className="text-2xl font-normal text-center max-w-2xl leading-10">
              С пожизненной гарантией в Москве и Московской области от 280 ₽ за
              м²
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="bg-sky-600 hover:bg-sky-800 text-white px-6 py-4 rounded-full cursor-pointer"
            >
              Оставить заявку
            </button>
            <button
              type="button"
              className="bg-white text-sky-600 hover:text-sky-800 border border-sky-600 px-6 py-4 rounded-full cursor-pointer"
            >
              Узнать цены
            </button>
          </div>

          {/* Форма для заявки на стяжку пола */}
          <div></div>
        </div>
      </section>

      <section className="px-2 md:px-5 2xl:px-0 bg-neutral-100">
        <div className="max-w-7xl mx-auto py-40">Тут дальше идет контент</div>
      </section>
    </>
  );
}

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
          <div className="mt-20 flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full mx-4">
              <div className="flex flex-col lg:flex-row">
                {/* Form Section - appears first on mobile */}
                <div className="flex-1 p-8 lg:p-12 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Оставить заявку
                  </h3>
                  <form className="space-y-6">
                    {/* Size Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Тип объекта
                      </label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="objectType"
                            value="apartment"
                            className="mr-2 text-sky-600 focus:ring-sky-500"
                          />
                          <span className="text-sm">Квартира</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="objectType"
                            value="house"
                            className="mr-2 text-sky-600 focus:ring-sky-500"
                          />
                          <span className="text-sm">Дом</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="objectType"
                            value="commercial"
                            className="mr-2 text-sky-600 focus:ring-sky-500"
                          />
                          <span className="text-sm">
                            Коммерческое помещение
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    {/* Comment Field */}
                    <div>
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Комментарий
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors resize-none"
                        placeholder="Дополнительная информация о проекте..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-sky-600 hover:bg-sky-800 text-white py-4 px-6 rounded-full font-medium transition-colors"
                    >
                      Отправить заявку
                    </button>
                  </form>
                </div>

                {/* Divider */}
                <div className="lg:w-px lg:bg-gray-200 lg:mx-0 mx-8 h-px lg:h-auto bg-gray-200 order-2 lg:order-1"></div>

                {/* Description Section - appears second on mobile */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center order-3 lg:order-1">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Быстрая связь
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      Мы свяжемся с вами в течение 15 минут и ответим на все
                      вопросы.
                    </p>
                    <p className="leading-relaxed">
                      Наши специалисты проконсультируют вас по всем вопросам
                      стяжки пола, рассчитают стоимость работ и подберут
                      оптимальное решение для вашего объекта.
                    </p>
                    <div className="pt-4">
                      <p className="text-sm text-gray-500">
                        Есть вопросы? Звоните прямо сейчас:
                      </p>
                      <a
                        href="tel:+79991234567"
                        className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors font-medium mt-2"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        +7 (999) 123-45-67
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок «Почему стоит выбрать полусухую стяжку» */}
      <section className="px-2 md:px-5 2xl:px-0 bg-neutral-100">
        <div className="max-w-7xl mx-auto py-40"></div>
      </section>
    </>
  );
}

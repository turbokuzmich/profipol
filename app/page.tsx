"use client";

import {
  PhoneIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import FAQSection from "./components/faq";
import Logo from "./components/logo";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section
        className="px-4 md:px-5 2xl:px-0"
        style={{
          background:
            "linear-gradient(to bottom, white 0%, white 80%, #f5f5f4 80%, #f5f5f4 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto pt-20 md:pt-40">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-center mb-5">
            Профессиональная стяжка пола
          </h1>
          <div className="flex justify-center mb-10">
            <p className="text-xl md:text-2xl font-normal text-center max-w-2xl leading-8 md:leading-10">
              С&nbsp;пожизненной гарантией в&nbsp;Москве и&nbsp;Московской
              области от&nbsp;280&nbsp;₽ за&nbsp;м&sup2;
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="bg-sky-900 hover:bg-sky-800 text-white px-6 py-4 rounded-full cursor-pointer"
            >
              Оставить заявку
            </button>
            <button
              type="button"
              className="bg-white text-sky-900 hover:text-sky-800 border border-sky-900 px-6 py-4 rounded-full cursor-pointer"
            >
              Узнать цены
            </button>
          </div>

          {/* Форма для заявки на стяжку пола */}
          <div id="form" className="mt-20 flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Form Section - appears first on mobile */}
                <div className="flex-1 p-8 lg:p-12 order-1 lg:order-3">
                  <h3 className="text-3xl font-semibold mb-6 text-gray-900">
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
                            className="mr-2 text-sky-900 focus:ring-sky-600"
                          />
                          <span className="text-sm">Квартира</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="objectType"
                            value="house"
                            className="mr-2 text-sky-900 focus:ring-sky-600"
                          />
                          <span className="text-sm">Дом</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="objectType"
                            value="commercial"
                            className="mr-2 text-sky-900 focus:ring-sky-600"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-colors resize-none"
                        placeholder="Дополнительная информация о проекте..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-sky-900 hover:bg-sky-800 text-white py-4 px-6 rounded-full font-medium transition-colors"
                    >
                      Отправить заявку
                    </button>
                  </form>
                </div>

                {/* Divider */}
                <div className="lg:w-px lg:bg-gray-200 lg:mx-0 mx-8 h-px lg:h-auto bg-gray-200 order-2 lg:order-2"></div>

                {/* Description Section - appears second on mobile */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col order-3 lg:order-1">
                  <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                    Быстрая связь
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-xl leading-relaxed">
                      Мы свяжемся с вами в течение 15 минут и ответим на все
                      вопросы.
                    </p>
                    <p className="leading-relaxed">
                      Наши специалисты проконсультируют вас по всем вопросам
                      стяжки пола, рассчитают стоимость работ и подберут
                      оптимальное решение для вашего объекта.
                    </p>
                    <div className="pt-4 space-y-4">
                      <p className="text-sm text-gray-800">
                        Есть вопросы? Звоните прямо сейчас:
                      </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок «Почему стоит выбрать полусухую стяжку» */}
      <section className="px-4 md:px-5 2xl:px-0 bg-neutral-100">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему стоит выбрать полусухую стяжку
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современная технология, которая обеспечивает идеальный результат
              за минимальное время
            </p>
          </div>

          {/* Грид с преимуществами */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Блок 1: Идеально ровная поверхность */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <ChartBarSquareIcon className="w-8 h-8 text-sky-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Идеально ровная поверхность
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Механизированная стяжка обеспечивает минимальные перепады
                  плоскости, выполняется с учетом допустимых отклонений согласно
                  СНиП.
                </p>
              </div>
            </div>

            {/* Блок 2: Пол не деформируется со временем */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-green-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Пол не деформируется со временем
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы используем качественную смесь с добавлением фиброволокна,
                  это обеспечивает надежность и долговечность покрытия.
                </p>
              </div>
            </div>

            {/* Блок 3: Отличный черновой пол */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <BuildingOfficeIcon className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Отличный черновой пол
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Полусухая стяжка пола служит основой для напольных покрытий:
                  ламината, линолеума, плитки или паркета.
                </p>
              </div>
            </div>

            {/* Блок 4: Экономия времени */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Экономия времени
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Полусухая стяжка устанавливается за один день. Быстро сохнет –
                  по покрытию можно ходить уже через 12 часов!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок «Как мы работаем» */}
      <section className="px-4 md:px-5 2xl:px-0 bg-white">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Как мы работаем
            </h2>
          </div>

          {/* Линейка из четырех блоков */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Блок 1 */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative z-10">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  Вы отправляете заявку или звоните нам
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-0">
                <span className="text-8xl lg:text-9xl font-bold text-sky-50 select-none">
                  1
                </span>
              </div>
            </div>

            {/* Блок 2 */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative z-10">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  Мы согласовываем дату замера на объекте
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-0">
                <span className="text-8xl lg:text-9xl font-bold text-sky-50 select-none">
                  2
                </span>
              </div>
            </div>

            {/* Блок 3 */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative z-10">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  Проводим замер и расчет точной стоимости
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-0">
                <span className="text-8xl lg:text-9xl font-bold text-sky-50 select-none">
                  3
                </span>
              </div>
            </div>

            {/* Блок 4 */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative z-10">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                  Производим монтаж стяжки пола точно в срок
                </p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-0">
                <span className="text-8xl lg:text-9xl font-bold text-sky-50 select-none">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок «Наши цены» */}
      <section id="prices" className="px-4 md:px-5 2xl:px-0 bg-neutral-100">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши цены
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачное ценообразование для всех типов объектов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Категория: Для квартир */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Для квартир
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-2 text-sm font-semibold text-gray-700">
                      площадь, м<sup>2</sup>
                    </th>
                    <th className="text-right py-4 px-2 text-sm font-semibold text-gray-700">
                      стоимость, ₽ за м<sup>2</sup>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-2">
                      <p className="text-lg font-medium text-gray-900">До 75</p>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <p className="text-3xl font-bold text-sky-900">80 000</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-2">
                      <p className="text-lg font-medium text-gray-900">
                        75&ndash;100
                      </p>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <p className="text-3xl font-bold text-sky-900">100 000</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Категория: Для других объектов */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Для других объектов
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-2 text-sm font-semibold text-gray-700">
                      площадь, м<sup>2</sup>
                    </th>
                    <th className="text-right py-4 px-2 text-sm font-semibold text-gray-700">
                      стоимость, ₽ за м<sup>2</sup>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-2">
                      <p className="text-lg font-medium text-gray-900">
                        100&ndash;200
                      </p>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <p className="text-3xl font-bold text-sky-900">850</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-2">
                      <p className="text-lg font-medium text-gray-900">
                        200&ndash;300
                      </p>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <p className="text-3xl font-bold text-sky-900">800</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Блок FAQ */}
      <FAQSection />

      {/* Блок «О нас» */}
      <section
        id="about"
        className="relative w-full bg-neutral-100 py-20 md:py-32 overflow-hidden"
      >
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/about.jpg')",
          }}
        />

        {/* Контент */}
        <div className="relative z-10 px-4 md:px-5 2xl:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Левая часть */}
              <div id="contacts" className="space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="block w-24 md:w-33">
                    <Logo />
                  </h2>
                  <p className="text-xl leading-relaxed">
                    Мы — команда профессионалов с многолетним опытом в области
                    стяжки пола
                  </p>
                </div>

                {/* Контакты */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-gray-900 text-lg">
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
                  <a
                    href="https://t.me/your_telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-900 hover:text-sky-900 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.174 1.584-1.11 5.433-1.567 7.21-.198.808-.587 1.078-.965.66-.299-.31-1.15-1.13-1.76-1.62-.622-.5-.217-.775.135-1.225.093-.116 1.707-1.566 1.74-1.7.008-.033.016-.155-.06-.23-.075-.075-.194-.05-.278-.03-.118.02-2.002 1.27-5.65 3.73-.535.33-1.02.49-1.455.48-.48-.01-1.404-.27-2.09-.49-.844-.27-1.515-.42-1.457-.888.023-.19.32-.385.884-.585 3.47-1.52 5.79-2.52 6.97-3.01 3.33-1.38 4.02-1.62 4.47-1.63.1 0 .32.024.465.14.118.1.15.234.165.33.014.095.033.31.02.48z" />
                    </svg>
                    <span className="text-lg font-medium">Telegram</span>
                  </a>
                </div>

                {/* Юридическая информация */}
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-xs text-gray-800 space-y-1">
                    <span className="block">ИНН: 123456789012</span>
                    <span className="block">ОГРН: 1234567890123</span>
                    <span className="block mt-2">
                      © 2025. Все права защищены.
                    </span>
                  </p>
                </div>
              </div>

              {/* Правая часть */}
              <div className="text-base md:text-lg leading-relaxed space-y-4 order-1 lg:order-2">
                <p>
                  Наша компания предлагает услуги по&nbsp;устройству полусухой
                  стяжки в&nbsp;Москве и&nbsp;регионе под ключ.
                </p>
                <p>
                  Мы&nbsp;берёмся за&nbsp;задачи любой сложности и&nbsp;объёма,
                  обеспечивая высокую скорость работы&nbsp;&mdash; до&nbsp;300 м
                  <sup>2</sup>&nbsp;за&nbsp;один рабочий день.
                </p>
                <p>
                  Даём твёрдые гарантии на&nbsp;качество, соответствие
                  заявленным параметрам прочности и&nbsp;создание надёжного,
                  долговечного основания.
                </p>
                <p>
                  Этот результат достигается благодаря использованию
                  качественных материалов, современной техники для стяжки
                  и&nbsp;высококвалифицированных исполнителей с&nbsp;более чем
                  восьмилетним стажем работы в&nbsp;данной области.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

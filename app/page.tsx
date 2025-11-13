import Link from "next/link";
import {
  PhoneIcon,
  ChartBarSquareIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

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
            <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full">
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
                  <ChartBarSquareIcon className="w-8 h-8 text-sky-600" />
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
                  <ShieldCheckIcon className="w-8 h-8 text-green-600" />
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
                  <BuildingOfficeIcon className="w-8 h-8 text-purple-600" />
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
      <section className="px-2 md:px-5 2xl:px-0 bg-white">
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
      <section className="px-2 md:px-5 2xl:px-0 bg-neutral-100">
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
              <div className="space-y-6">
                {/* Подраздел 1 */}
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-1">
                        До 75 кв. м
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-sky-600">
                        80 000 ₽
                      </p>
                    </div>
                  </div>
                </div>

                {/* Подраздел 2 */}
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-1">
                        75 - 100 кв. м
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-sky-600">
                        100 000 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Категория: Для других объектов */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Для других объектов
              </h3>
              <div className="space-y-6">
                {/* Подраздел 1 */}
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-1">
                        100-200 кв. м
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-sky-600">850 ₽</p>
                      <p className="text-sm text-gray-500 mt-1">за м²</p>
                    </div>
                  </div>
                </div>

                {/* Подраздел 2 */}
                <div className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-1">
                        200-300 кв. м
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-sky-600">800 ₽</p>
                      <p className="text-sm text-gray-500 mt-1">за м²</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

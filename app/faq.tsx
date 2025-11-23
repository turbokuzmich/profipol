"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Сколько времени занимает выполнение стяжки пола?",
      answer:
        "Время выполнения работ зависит от площади помещения. В среднем, для квартиры площадью 50-100 м² стяжка выполняется за один рабочий день. После завершения работ по покрытию можно ходить уже через 12 часов, а полное высыхание происходит в течение 3-5 дней в зависимости от толщины слоя и условий в помещении.",
    },
    {
      question: "Какая гарантия на выполненные работы?",
      answer:
        "Мы предоставляем пожизненную гарантию на все выполненные работы. Это означает, что мы несем ответственность за качество стяжки на протяжении всего срока эксплуатации. В случае возникновения проблем, связанных с качеством выполненных работ, мы устраним их бесплатно.",
    },
    {
      question: "Можно ли делать стяжку в зимнее время?",
      answer:
        "Да, стяжку можно выполнять в любое время года, включая зимний период. Мы используем специальные добавки, которые позволяют работать при низких температурах. Важно обеспечить нормальные условия в помещении (температура не ниже +5°C) и защитить объект от сквозняков во время выполнения работ.",
    },
    {
      question: "Какая минимальная толщина стяжки?",
      answer:
        "Минимальная толщина полусухой стяжки составляет 30 мм. Однако оптимальная толщина зависит от состояния основания и требований к уровню пола. При необходимости выравнивания больших перепадов толщина может достигать 100 мм и более. Наш специалист определит необходимую толщину во время замера.",
    },
    {
      question: "Нужна ли дополнительная подготовка основания?",
      answer:
        "Перед выполнением стяжки мы проводим подготовку основания: удаляем мусор, пыль и отслоившиеся части старого покрытия. При необходимости выполняем грунтовку для улучшения сцепления. Если на основании есть значительные неровности или повреждения, мы устраняем их перед укладкой стяжки. Все подготовительные работы входят в стоимость услуги.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-2 md:px-5 2xl:px-0 bg-white">
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о стяжке пола
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={openIndex === index ? "true" : "false"}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 text-sky-900 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

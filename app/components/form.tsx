"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  objectType: string;
  name: string;
  phone: string;
  comment?: string;
}

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Заявка успешно отправлена!",
        });
        reset(); // Reset form after successful submission
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            result.errors?.join(", ") ||
            "Произошла ошибка при отправке заявки",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Произошла ошибка при отправке заявки. Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h3 className="text-3xl font-semibold mb-6 text-gray-900">
        Оставить заявку
      </h3>

      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Size Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Тип объекта *
          </label>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center">
              <input
                type="radio"
                value="apartment"
                {...register("objectType", {
                  required: "Пожалуйста, выберите тип объекта",
                })}
                className="mr-2 text-sky-900 focus:ring-sky-600"
              />
              <span className="text-sm">Квартира</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="house"
                {...register("objectType", {
                  required: "Пожалуйста, выберите тип объекта",
                })}
                className="mr-2 text-sky-900 focus:ring-sky-600"
              />
              <span className="text-sm">Дом</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="commercial"
                {...register("objectType", {
                  required: "Пожалуйста, выберите тип объекта",
                })}
                className="mr-2 text-sky-900 focus:ring-sky-600"
              />
              <span className="text-sm">Коммерческое помещение</span>
            </label>
          </div>
          {errors.objectType && (
            <p className="mt-2 text-sm text-red-600">
              {errors.objectType.message}
            </p>
          )}
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
            {...register("name", {
              required: "Пожалуйста, введите ваше имя",
              minLength: {
                value: 2,
                message: "Имя должно содержать минимум 2 символа",
              },
              pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z\s]+$/,
                message: "Имя может содержать только буквы",
              },
            })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-sky-500 focus:ring-sky-500"
            }`}
            placeholder="Введите ваше имя"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
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
            {...register("phone", {
              required: "Пожалуйста, введите номер телефона",
              pattern: {
                value:
                  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                message: "Введите корректный номер телефона",
              },
            })}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-sky-500 focus:ring-sky-500"
            }`}
            placeholder="+7 (999) 123-45-67"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
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
            {...register("comment", {
              maxLength: {
                value: 500,
                message: "Комментарий не должен превышать 500 символов",
              },
            })}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none ${
              errors.comment
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-sky-500 focus:ring-sky-500"
            }`}
            placeholder="Дополнительная информация о проекте..."
          />
          {errors.comment && (
            <p className="mt-2 text-sm text-red-600">
              {errors.comment.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-sky-900 text-white py-4 px-6 rounded-full font-medium transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-800"
          }`}
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>
    </>
  );
}

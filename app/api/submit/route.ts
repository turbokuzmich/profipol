import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  objectType: string;
  name: string;
  phone: string;
  comment?: string;
}

// Validation function
function validateFormData(data: FormData): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Validate objectType
  if (
    !data.objectType ||
    !["apartment", "house", "commercial"].includes(data.objectType)
  ) {
    errors.push("Неверный тип объекта");
  }

  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.push("Имя должно содержать минимум 2 символа");
  } else if (!/^[а-яА-ЯёЁa-zA-Z\s]+$/.test(data.name)) {
    errors.push("Имя может содержать только буквы");
  }

  // Validate phone
  if (!data.phone) {
    errors.push("Телефон обязателен для заполнения");
  } else if (
    !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
      data.phone
    )
  ) {
    errors.push("Неверный формат телефона");
  }

  // Validate comment (optional but check max length if provided)
  if (data.comment && data.comment.length > 500) {
    errors.push("Комментарий не должен превышать 500 символов");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Email configuration
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

// Get object type label in Russian
function getObjectTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    apartment: "Квартира",
    house: "Дом",
    commercial: "Коммерческое помещение",
  };
  return labels[type] || type;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    // Validate input
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Check if email credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Prepare email content
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.SMTP_USER;
    const objectTypeLabel = getObjectTypeLabel(body.objectType);

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: recipientEmail,
      subject: `Новая заявка: ${objectTypeLabel}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Тип объекта:</strong> ${objectTypeLabel}</p>
        <p><strong>Имя:</strong> ${body.name}</p>
        <p><strong>Телефон:</strong> ${body.phone}</p>
        ${
          body.comment
            ? `<p><strong>Комментарий:</strong> ${body.comment}</p>`
            : ""
        }
        <hr>
        <p><small>Отправлено: ${new Date().toLocaleString("ru-RU")}</small></p>
      `,
      text: `
Новая заявка с сайта

Тип объекта: ${objectTypeLabel}
Имя: ${body.name}
Телефон: ${body.phone}
${body.comment ? `Комментарий: ${body.comment}` : ""}

Отправлено: ${new Date().toLocaleString("ru-RU")}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Заявка успешно отправлена" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Произошла ошибка при отправке заявки. Попробуйте позже.",
      },
      { status: 500 }
    );
  }
}

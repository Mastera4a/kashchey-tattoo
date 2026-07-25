"use client";

import { FormEvent, useState } from "react";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function Booking() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [message, setMessage] = useState("");

async function handleSubmit(
  event: FormEvent<HTMLFormElement>
) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(
        formData.get("name") ?? ""
    ).trim();

    const contact = String(
        formData.get("contact") ?? ""
    ).trim();

    const placement = String(
        formData.get("placement") ?? ""
    ).trim();

    const size = String(
        formData.get("size") ?? ""
    ).trim();

    const idea = String(
        formData.get("idea") ?? ""
    ).trim();

    const consent =
        formData.get("consent") === "on";

    if (!name || !contact || !idea) {
        setStatus("error");
        setMessage(
        "Заполни имя, контакт и описание идеи."
        );
        return;
    }

    if (!consent) {
        setStatus("error");
        setMessage(
        "Подтверди согласие на обработку данных."
        );
        return;
    }

    setStatus("loading");
    setMessage("");

    try {
        const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            contact,
            placement,
            size,
            idea,
            consent,
        }),
        });

        const result = (await response.json()) as {
        success?: boolean;
        message?: string;
        };

        if (!response.ok || !result.success) {
        throw new Error(
            result.message ??
            "Не удалось отправить заявку."
        );
        }

        setStatus("success");
        setMessage(
        result.message ??
            "Заявка успешно отправлена."
        );

        form.reset();
    } catch (error) {
        setStatus("error");

        setMessage(
        error instanceof Error
            ? error.message
            : "Не удалось отправить заявку."
        );
    }
    }

  return (
    <section className="booking" id="booking">
      <div className="booking__inner">
        <div className="booking__content">
          <p className="section-eyebrow">
            Запись на консультацию
          </p>

          <h2 className="section-title">
            Расскажи о своей идее
          </h2>

          <div className="section-divider">
            <span />
            <b>†</b>
            <span />
          </div>

          <p className="booking__description">
            Опиши будущую татуировку, оставь удобный контакт —
            я свяжусь с тобой для обсуждения деталей.
          </p>

          <div className="booking__note">
            <span aria-hidden="true">✦</span>

            <p>
              Стоимость рассчитывается индивидуально после обсуждения
              размера, сложности и места нанесения.
            </p>
          </div>
        </div>

        <form
          className="booking-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="booking-form__row">
            <label className="booking-field">
              <span>Имя *</span>

              <input
                type="text"
                name="name"
                placeholder="Как к тебе обращаться?"
                autoComplete="name"
              />
            </label>

            <label className="booking-field">
              <span>Telegram или телефон *</span>

              <input
                type="text"
                name="contact"
                placeholder="@username или номер"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="booking-form__row">
            <label className="booking-field">
              <span>Место нанесения</span>

              <input
                type="text"
                name="placement"
                placeholder="Например, предплечье"
              />
            </label>

            <label className="booking-field">
              <span>Примерный размер</span>

              <input
                type="text"
                name="size"
                placeholder="Например, 10–15 см"
              />
            </label>
          </div>

          <label className="booking-field">
            <span>Идея татуировки *</span>

            <textarea
              name="idea"
              rows={6}
              placeholder="Опиши сюжет, стиль и важные детали"
            />
          </label>

          <label className="booking-consent">
            <input type="checkbox" name="consent" required />

            <span>
              Я согласен на обработку данных для связи по заявке.
            </span>
          </label>

          <button
            className="booking-form__submit"
            type="submit"
            disabled={status === "loading"}
            >
                {status === "loading"
                    ? "Отправляем..."
                    : "Отправить заявку"}

                <span aria-hidden="true">†</span>
            </button>

          {status === "success" && (
                <p className="booking-form__message booking-form__message--success">
                    {message}
                </p>
           )}

            {status === "error" && (
                <p className="booking-form__message booking-form__message--error">
                    {message}
                </p>
            )}
        </form>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { booking } from "@/config/site";
import type { Messages } from "@/lib/i18n";

type R = Messages["reservation"];

interface FormState {
  date: string;
  time: string;
  guests: string;
  menu: string;
  wine: string;
  allergies: string;
  name: string;
  phone: string;
  email: string;
}

const initial: FormState = {
  date: "",
  time: "19:30",
  guests: "2",
  menu: "tasting",
  wine: "yes",
  allergies: "",
  name: "",
  phone: "",
  email: "",
};

/**
 * The site's primary conversion. Deliberately not a <form> (per brief): fields
 * use onChange handlers and submission is an onClick that builds a pre-filled
 * message. Default target is WhatsApp; switch config.booking.mode to email/url
 * to repoint it in one place.
 */
export default function Reservation({ r }: { r: R }) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.date) next.date = r.errors.date;
    if (!form.guests) next.guests = r.errors.guests;
    if (!form.name.trim()) next.name = r.errors.name;
    if (!form.phone.trim() && !form.email.trim()) next.phone = r.errors.contact;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMessage(): string {
    const menuLabel =
      form.menu === "tasting"
        ? r.fields.menuTasting
        : form.menu === "alacarte"
          ? r.fields.menuAlaCarte
          : r.fields.menuUndecided;
    const wineLabel = form.wine === "yes" ? r.fields.wineYes : r.fields.wineNo;
    const lines = [
      r.messageIntro,
      "",
      `${r.fields.date}: ${form.date} ${form.time}`,
      `${r.fields.guests}: ${form.guests}`,
      `${r.fields.menu}: ${menuLabel}`,
      `${r.fields.wine}: ${wineLabel}`,
      form.allergies.trim() ? `${r.fields.allergies}: ${form.allergies.trim()}` : "",
      `${r.fields.name}: ${form.name.trim()}`,
      form.phone.trim() ? `${r.fields.phone}: ${form.phone.trim()}` : "",
      form.email.trim() ? `${r.fields.email}: ${form.email.trim()}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }

  function submit() {
    if (!validate()) return;
    const message = buildMessage();
    let href = "";
    if (booking.mode === "email") {
      const subject = encodeURIComponent("Reservation request — Kök Kalkan");
      href = `mailto:${booking.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    } else if (booking.mode === "url" && booking.url) {
      href = booking.url;
    } else {
      href = `https://wa.me/${booking.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const submitLabel =
    booking.mode === "email"
      ? r.submitEmail
      : booking.mode === "url" && booking.url
        ? r.submitUrl
        : r.submitWhatsapp;

  const fieldCls =
    "w-full rounded-md border border-olive/30 bg-bone px-3 py-2.5 font-sans text-sm text-ink focus:border-olive focus:outline-none";
  const labelCls = "mb-1.5 block font-sans text-xs uppercase tracking-wide text-olive";

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-olive/20 bg-bone p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="res-date" className={labelCls}>{r.fields.date}</label>
          <input
            id="res-date"
            type="date"
            value={form.date}
            onChange={set("date")}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "err-date" : undefined}
            className={fieldCls}
          />
          {errors.date && <p id="err-date" className="mt-1 text-xs text-terracotta">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="res-time" className={labelCls}>{r.fields.time}</label>
          <input id="res-time" type="time" value={form.time} onChange={set("time")} className={fieldCls} />
        </div>

        <div>
          <label htmlFor="res-guests" className={labelCls}>{r.fields.guests}</label>
          <select
            id="res-guests"
            value={form.guests}
            onChange={set("guests")}
            aria-invalid={!!errors.guests}
            className={fieldCls}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="res-menu" className={labelCls}>{r.fields.menu}</label>
          <select id="res-menu" value={form.menu} onChange={set("menu")} className={fieldCls}>
            <option value="tasting">{r.fields.menuTasting}</option>
            <option value="alacarte">{r.fields.menuAlaCarte}</option>
            <option value="undecided">{r.fields.menuUndecided}</option>
          </select>
        </div>

        <div>
          <label htmlFor="res-wine" className={labelCls}>{r.fields.wine}</label>
          <select id="res-wine" value={form.wine} onChange={set("wine")} className={fieldCls}>
            <option value="yes">{r.fields.wineYes}</option>
            <option value="no">{r.fields.wineNo}</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-allergies" className={labelCls}>{r.fields.allergies}</label>
          <textarea
            id="res-allergies"
            rows={2}
            value={form.allergies}
            onChange={set("allergies")}
            placeholder={r.fields.allergiesPlaceholder}
            className={`${fieldCls} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="res-name" className={labelCls}>{r.fields.name}</label>
          <input
            id="res-name"
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder={r.fields.namePlaceholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
            className={fieldCls}
          />
          {errors.name && <p id="err-name" className="mt-1 text-xs text-terracotta">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="res-phone" className={labelCls}>{r.fields.phone}</label>
          <input
            id="res-phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder={r.fields.phonePlaceholder}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={fieldCls}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="res-email" className={labelCls}>{r.fields.email}</label>
          <input
            id="res-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder={r.fields.emailPlaceholder}
            className={fieldCls}
          />
          {errors.phone && <p id="err-phone" className="mt-1 text-xs text-terracotta">{errors.phone}</p>}
        </div>
      </div>

      <button
        type="button"
        onClick={submit}
        className="mt-7 w-full rounded-full bg-forest px-6 py-3.5 font-sans text-sm font-medium text-bone transition-colors hover:bg-olive"
      >
        {submitLabel}
      </button>
      <p className="mt-3 text-center font-sans text-xs text-ink/55">{r.note}</p>
    </div>
  );
}

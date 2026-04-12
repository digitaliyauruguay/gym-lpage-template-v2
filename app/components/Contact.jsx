"use client";
import { useState } from "react";
import { siteConfig } from "../config/site";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIÓN
    if (!form.nombre || !form.email || !form.mensaje) {
      setError(siteConfig.contact.messages.error1);
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError(siteConfig.contact.messages.error2);
      setSuccess("");
      return;
    }

    try {
    const res = await fetch("https://formspree.io/f/mgorwkbb", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: new FormData(e.target),
    });

      if (res.ok) {
        setError("");
        setSuccess(siteConfig.contact.messages.success);

        // LIMPIAR FORM
        setForm({
          nombre: "",
          email: "",
          mensaje: "",
        });
      } else {
        setError("Error al enviar. Intentá nuevamente.");
        setSuccess("");
      }
    } catch (err) {
      setError("Error de conexión.");
      setSuccess("");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
      <div className="max-w-3xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {siteConfig.contact.title}
          </h2>
          <p className="mt-4 text-gray-600">
            {siteConfig.contact.subtitle}
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col gap-5"
        >

          {/* 🆕 TÍTULO DEL FORMULARIO */}
          <h3 className="text-xl font-semibold text-center mb-2 text-lg tracking-wide text-gray-700">
            Formulario de Contacto
          </h3>

          {/* NOMBRE */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {siteConfig.contact.form.name}
            </label>
            <input
              type="text"
              name="nombre"
              placeholder={siteConfig.contact.form.placeName}
              value={form.nombre}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {siteConfig.contact.form.email}
            </label>
            <input
              type="email"
              name="email"
              placeholder={siteConfig.contact.form.placeEmail}
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          {/* MENSAJE */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {siteConfig.contact.form.message}
            </label>
            <textarea
              name="mensaje"
              placeholder={siteConfig.contact.form.placeMessage}
              value={form.mensaje}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            ></textarea>
          </div>

          {/* MENSAJES */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-500 text-sm">{success}</p>
          )}

          {/* BOTÓN */}
          <button
            type="submit"
            className="bg-[var(--primary)] text-white py-3 rounded-lg hover:bg-[var(--primary-hover)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {siteConfig.contact.form.button}
          </button>
        </form>

      </div>
    </section>
  );
}
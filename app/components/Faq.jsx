"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config/site";
import { ArrowDown } from "lucide-react";

export default function FAQ() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggle = (index) => {
  if (activeIndexes.includes(index)) {
    setActiveIndexes(activeIndexes.filter((i) => i !== index));
  } else {
    setActiveIndexes([...activeIndexes, index]);
  }
};

  return (
    <section id="faq" className="py-24 bg-white">
        <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
      <div className="max-w-4xl mx-auto px-6">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {siteConfig.faq.title}
          </h2>
          <p className="mt-4 text-gray-600">
            {siteConfig.faq.subtitle}
          </p>
        </motion.div>

        {/* PREGUNTAS */}
        <div className="space-y-4">
          {siteConfig.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm will-change-transform"
            >
              {/* PREGUNTA */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
              >
                {item.question}
                <span className="text-[var(--primary)] text-xl">
                  {activeIndexes.includes(index) ? "−" : "+"}
                </span>
              </button>

              {/* RESPUESTA */}
             <AnimatePresence>
  {activeIndexes.includes(index) && (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.25 }}
      style={{ transformOrigin: "top" }}
      className="px-5 pb-5 text-gray-600 overflow-hidden"
    >
      {item.answer}
    </motion.div>
  )}
</AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="text-center mt-12 flex flex-col items-center gap-2">
        <p></p>
<p></p>
        <p></p>
<p></p>

  <p className="text-black font-bold text-lg">
    ¿Todavía tenés dudas?
  </p>
<p></p>
<p></p>
  <a
    href="#contacto"
    className="text-[var(--primary)] animate-bounce"
  >
    <ArrowDown size={50} />
  </a>
</div>
    </section>
  );
}
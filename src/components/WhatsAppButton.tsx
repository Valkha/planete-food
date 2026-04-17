"use client";

import { useTranslation } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { m } from "framer-motion";
import { restaurantConfig } from "@/config/restaurant";

export default function WhatsAppButton() {
  const { lang } = useTranslation();

  const phoneNumber = restaurantConfig.whatsappNumber;

  if (!phoneNumber) return null;

  const getDefaultMessage = () => {
    switch (lang) {
      case "en":
        return `Hello ${restaurantConfig.name} team! I would like to place an order or make a reservation...`;
      case "es":
        return `¡Hola equipo ${restaurantConfig.name}! Me gustaría hacer un pedido o reservar una mesa...`;
      case "fr":
      default:
        return `Bonjour l'équipe ${restaurantConfig.name} ! J'aimerais passer une commande ou réserver une table...`;
    }
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getDefaultMessage())}`;

  return (
    <m.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="hidden md:flex fixed bottom-10 right-10 z-50 group items-center gap-3"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <span className="absolute right-16 bg-white text-black text-xs font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-200">
        {lang === "fr" ? "Commander via WhatsApp" : lang === "es" ? "Pedir por WhatsApp" : "Order via WhatsApp"}
      </span>

      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300">
        <MessageCircle size={32} />

        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-primary border-2 border-white"></span>
        </span>
      </div>
    </m.a>
  );
}

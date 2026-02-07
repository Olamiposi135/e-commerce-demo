import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppBtn = () => {
  return (
    <div>
      <a
        href="https://wa.me/+2347061118147?text=Hello%20OlaBadmus."
        target="_blank"
        rel="noopener noreferrer"
        class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      >
        <BsWhatsapp class="text-white text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppBtn;

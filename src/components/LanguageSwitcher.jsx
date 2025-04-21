import React, { useState } from "react";
import georgia from "../assets/flags/georgia.svg";
import usa from "../assets/flags/usa.svg";
import { useTranslation } from 'react-i18next';

const languages = [
  { code: "ge", label: "GE", flag: georgia },
  { code: "en", label: "EN", flag: usa },
];

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setIsOpen(false);
  };


  const selectedLanguage = localStorage.getItem("i18nextLng") || "en";
  const selectedLang = languages.find((btn) => btn.code === selectedLanguage) || languages[0];

  return (
    <div className="md:absolute md:top-6 md:right-[-24px] flex flex-col gap-2 md:p-2 rounded-xl  max-w-fit md:w-full">
      <button
        className="flex items-center  md:justify-between py-1 px-2 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedLang.flag} alt={selectedLang.label} className="w-10 h-10" />
        <span className="ml-4 text-white hover:text-cyan-300">{selectedLang.label}</span>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-2 mt-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-2 md:justify-between p-1 border rounded"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="w-10 h-10" />
              <span className="ml-4 text-white hover:text-cyan-300">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;

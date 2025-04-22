import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useTranslation } from "react-i18next";
import { Sun, Moon } from 'lucide-react';

function Contacts() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');

  // Save theme to localStorage and apply it
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <div className="border-t border-neutral-400 pb-4">
      <div className="text-center tracking-tighter">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t('contact.address')}
        </motion.p>

        {/* Phone (now clickable) */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href={`tel:${t('contact.phoneNo').replace(/\s+/g, '')}`} className="underline hover:text-cyan-300">
            {t('contact.phoneNo')}
          </a>
        </motion.p>

        {/* Email */}
        <a href={`mailto:${t('contact.email')}`} className="border-b">
          {t('contact.email')}
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-4 gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/anri-tsetskhlashvili-753a43297/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/anritsetskhla10" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/anritsetskhla" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/anri_tsetskhla/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="flex justify-center my-4 space-x-4">
        <button onClick={toggleTheme} className="hover:text-gray-300" aria-label="Toggle theme">
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}

export default Contacts;

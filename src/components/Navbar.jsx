import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <nav className="md:relative py-3 md:py-6 mb-4 md:mb-10">
      <div className="flex items-center justify-between md:justify-normal md:gap-2 lg:justify-between lg:gap-0">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-cyan-300">{t("nav.home")}</Link>
          <Link to="/experience" className="hover:text-cyan-300">{t("nav.experience")}</Link>
          <Link to="/projects" className="hover:text-cyan-300">{t("nav.projects")}</Link>
          <Link to="/certificates" className="hover:text-cyan-300">{t("nav.achievements")}</Link>
          <Link to="/contact" className="hover:text-cyan-300">{t("nav.contact")}</Link>
        </div>

        {/* Language Switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Burger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={closeMenu}>
          <div
            className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 p-6 shadow-lg transition-transform transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button onClick={toggleMenu}>
                <X size={28} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link to="/" onClick={closeMenu} className="hover:text-cyan-300">{t("nav.home")}</Link>
              <Link to="/experience" onClick={closeMenu} className="hover:text-cyan-300">{t("nav.experience")}</Link>
              <Link to="/projects" onClick={closeMenu} className="hover:text-cyan-300">{t("nav.projects")}</Link>
              <Link to="/certificates" onClick={closeMenu} className="hover:text-cyan-300">{t("nav.achievements")}</Link>
              <Link to="/contact" onClick={closeMenu} className="hover:text-cyan-300">{t("nav.contact")}</Link>
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


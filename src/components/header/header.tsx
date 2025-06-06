"use client";
import { useState } from "react";
import { IconNino } from "../icons/IconNino";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-end bottom-0 p-4 text-white z-50 fixed w-full">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-12 h-12 space-y-1 z-50 relative bg-gray-800 rounded-full"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </header>

      {/* Menu Fullscreen avec effet cercle */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ease-in-out ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Cercle qui s'agrandit */}
        <div
          className={`absolute bottom-4 right-4 bg-gray-800 rounded-full transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "scale-[100] w-16 h-16" : "scale-0 w-16 h-16"
          }`}
          style={{
            transformOrigin: "center",
          }}
        />

        {/* Contenu du menu */}
        <div
          className={`relative z-10 flex-col items-center justify-center h-full transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100 delay-200" : "opacity-0"
          }`}
        >
          <IconNino className="self-center w-full mt-10 ml-7" />
          <nav className="flex flex-col items-center justify-start pt-50 h-full">
            <ul className="text-center space-y-8 text-white text-3xl font-bold">
              <li>
                <a
                  href="#home"
                  onClick={toggleMenu}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

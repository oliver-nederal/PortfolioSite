"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { FiX, FiChevronRight, FiCheck } from "react-icons/fi";
import {
  RiMenuLine,
  RiGithubLine,
  RiSunLine,
  RiMoonLine,
  RiComputerLine
} from "react-icons/ri";

type ThemeOption = "system" | "light" | "dark";

interface NavigationItem {
  title: string;
  url: string;
}

const navigationItems: NavigationItem[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Contact", url: "/contact" },
  { title: "Photography", url: "/photography" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] =
    useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as Element).closest(".mobile-menu-container")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isThemeDropdownOpen &&
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(e.target as Node)
      ) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isThemeDropdownOpen]);

  // Prevent body overflow when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  if (!mounted) {
    return null;
  }

  const themeOptions: ThemeOption[] = ["system", "light", "dark"];

  const handleThemeChange = (selectedTheme: ThemeOption) => {
    setTheme(selectedTheme);
    setIsThemeDropdownOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`fixed flex justify-center w-full bg-red-300 z-50 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-sm" : ""
          }`}
        >
          <div
            className={`fixed w-full h-[80px] flex justify-between items-center px-6
            ${
              isScrolled
                ? "bg-white dark:bg-[#202120]/80 shadow-lg"
                : "bg-white dark:bg-[#202120]/60"
            }
            backdrop-filter backdrop-blur-md border-b border-black dark:border-gray-400/50 transition-all duration-300`}
          >
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src="/static/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-xl"
                />
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map(({ title, url }) => {
                const isActive = pathname === url;
                return (
                  <motion.div
                    key={title}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={url}
                      className={`relative flex items-center px-4 py-2 rounded-xl transition-all duration-200
                        ${
                          isActive
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        }`}
                    >
                      {title}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex items-center space-x-3">
              {/* Theme Dropdown */}
              <div ref={themeDropdownRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors"
                  aria-label="Theme Selection"
                >
                  {mounted &&
                    (theme === "dark" ? (
                      <RiMoonLine className="w-5 h-5" />
                    ) : theme === "light" ? (
                      <RiSunLine className="w-5 h-5" />
                    ) : resolvedTheme === "light" ? (
                      <RiSunLine className="w-5 h-5" />
                    ) : (
                      <RiMoonLine className="w-5 h-5" />
                    ))}
                </motion.button>

                <AnimatePresence>
                  {isThemeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      className="z-50 absolute right-0 top-full mt-2 w-[150px] bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl overflow-hidden text-black dark:text-white shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                    >
                      {themeOptions.map((themeOption) => (
                        <button
                          key={themeOption}
                          onClick={() => handleThemeChange(themeOption)}
                          className={`w-full flex justify-between space-x-2 items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                            ${
                              theme === themeOption
                                ? "bg-gray-100 dark:bg-gray-700"
                                : ""
                            }`}
                        >
                          <span className="flex flex-row space-x-2 items-center">
                            {themeOption === "system" ? (
                              <RiComputerLine />
                            ) : themeOption === "light" ? (
                              <RiSunLine />
                            ) : (
                              <RiMoonLine />
                            )}
                            <span className="capitalize">{themeOption}</span>
                          </span>
                          {theme === themeOption && (
                            <FiCheck className="w-4 h-4 text-green-500" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                aria-label="Menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {isMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <RiMenuLine className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (unchanged from previous implementation) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed flex justify-center items-center z-50 h-screen w-screen overflow-hidden mobile-menu-container"
            >
              <nav className="z-50 w-[90vw] bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
                <div className="p-4">
                  {navigationItems.map(({ title, url }) => {
                    const isActive = pathname === url;
                    return (
                      <Link
                        key={title}
                        href={url}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors mb-1
                          ${
                            isActive
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          }`}
                      >
                        <div className="flex items-center">
                          <span>{title}</span>
                        </div>
                        <FiChevronRight className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

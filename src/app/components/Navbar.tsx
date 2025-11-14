"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      sub: [
        { label: "Overview", href: "/about/overview" },
        { label: "Vision & Mission", href: "/about/vision" },
        {
          label: "Leadership",
          sub: [
            { label: "Principal’s Message", href: "/about/principal" },
            { label: "Management", href: "/about/management" },
          ],
        },
      ],
    },
    {
      label: "Departments",
      sub: [
        { label: "Kayachikitsa", href: "/departments/kayachikitsa" },
        { label: "Shalya Tantra", href: "/departments/shalya" },
        { label: "Panchakarma", href: "/departments/panchakarma" },
      ],
    },
    {
      label: "Doctors",
      sub: [
        { label: "Faculty", href: "/doctors/faculty" },
        { label: "Visiting Consultants", href: "/doctors/consultants" },
      ],
    },
    {
      label: "Patient Services",
      sub: [
        { label: "OPD Services", href: "/services/opd" },
        { label: "IPD Services", href: "/services/ipd" },
        { label: "Pharmacy", href: "/services/pharmacy" },
      ],
    },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* 🌿 Top Bar */}
      <div className="bg-green-100 text-green-700 text-sm py-2 border-b border-green-500">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneCall size={15} />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <Mail size={15} />
              <span>info@svkmayurveda.edu.in</span>
            </div>
          </div>
          <div className="text-xs md:text-sm font-medium hidden md:block">
            SVKM&apos;s Krutiben Bhupeshbhai Patel Ayurveda College, Hospital &
            Research Center
          </div>
        </div>
      </div>

      {/* 🌿 Main Navbar */}
      <nav
        ref={dropdownRef}
        className="bg-white backdrop-blur-md shadow-sm border-b border-green-500"
      >
        <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-green-800"
          >
            <Image
              src="/images/nursing_logo.png"
              alt="Nursing Logo"
              width={180}
              height={180}
              className="w-auto h-[60px] md:h-[70px]"
            />
            {/* <img
              src="/images/nursing_logo.png"
              alt=""
              style={{ maxHeight: "60px" }}
            /> */}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex xl:space-x-5 md:space-x-3 text-green-800 font-medium relative text-sm xl:text-base">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative group">
                {menu.sub ? (
                  <>
                    <button
                      onClick={() => handleDropdown(menu.label)}
                      className="flex items-center gap-1 hover:text-green-500 transition"
                    >
                      {menu.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === menu.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* 2nd Level */}
                    {activeDropdown === menu.label && (
                      <ul className="absolute bg-green-100 shadow-lg mt-2 py-2 w-56 rounded-lg border border-green-500 animate-fadeIn">
                        {menu.sub.map((subItem) => (
                          <li key={subItem.label} className="relative group">
                            {subItem.sub ? (
                              <>
                                <button
                                  onClick={() => handleDropdown(subItem.label)}
                                  className="flex justify-between w-full text-left px-4 py-2 hover:bg-[var(--ayu-green)] hover:text-white"
                                >
                                  {subItem.label}
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                      activeDropdown === subItem.label
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>

                                {/* 3rd Level */}
                                {activeDropdown === subItem.label && (
                                  <ul className="absolute left-full top-0 bg-[var(--ayu-beige)] shadow-lg py-2 w-56 rounded-lg border border-[var(--ayu-brown)] animate-fadeIn">
                                    {subItem.sub.map((thirdItem) => (
                                      <li key={thirdItem.label}>
                                        <Link
                                          href={thirdItem.href}
                                          className="block px-4 py-2 hover:bg-[var(--ayu-green)] hover:text-white"
                                        >
                                          {thirdItem.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 hover:bg-[var(--ayu-green)] hover:text-white"
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.href}
                    className="hover:text-green-500 transition"
                  >
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[var(--ayu-green)]"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🌿 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[var(--ayu-beige)] border-t border-[var(--ayu-brown)] lg:hidden animate-fadeIn">
            <ul className="flex flex-col p-4 space-y-2 text-[var(--ayu-brown)]">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href || "#"}
                    className="block py-2 border-b border-[var(--ayu-brown)] hover:text-[var(--ayu-green)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

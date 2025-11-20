"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FIXED STATE — separate parent/child dropdown
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveParent(null);
        setActiveChild(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleParent = (menu: string) => {
    setActiveParent(activeParent === menu ? null : menu);
    setActiveChild(null);
  };

  const toggleChild = (menu: string) => {
    setActiveChild(activeChild === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveParent(null);
    setActiveChild(null);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      sub: [
        { label: "About Institution", href: "/about/institution" },
        { label: "About SVKM", href: "/about/svkm" },
        { label: "Vision & Mission", href: "/about/mission-vision" },
        {
          label: "Leadership",
          sub: [
            { label: "President’s Message", href: "/about/president" },
            { label: "Principal’s Message", href: "/about/principal" },
            { label: "Management", href: "/about/management" },
          ],
        },
      ],
    },
    {
      label: "Hospital",
      sub: [
        { label: "Doctors", href: "/hospital/doctors" },
        {
          label: "Services Offered",
          sub: [
            { label: "Kayachikitsa", href: "/departments/kayachikitsa" },
            { label: "Shalya Tantra", href: "/departments/shalya" },
            { label: "Panchakarma", href: "/departments/panchakarma" },
          ],
        },
        {
          label: "OPD",
          sub: [
            { label: "Kayachikitsa OPD", href: "/about/president" },
            { label: "Kaumarbhritya OPD", href: "/about/principal" },
            { label: "Shalya Tantra OPD", href: "/about/management" },
            {
              label: "Prasutitantra & Striroga OPD",
              href: "/about/management",
            },
            { label: "Shalakyatantra OPD", href: "/about/management" },
          ],
        },
        {
          label: "IDP",
          sub: [
            { label: "Panchakarma (Male)", href: "/about/president" },
            { label: "Panchakarma (Female)", href: "/about/president" },
            { label: "Kayachikitsa (Male)", href: "/about/principal" },
            { label: "Kayachikitsa (Female)", href: "/about/principal" },
            { label: "Shalyatantra (Male)", href: "/about/management" },
            { label: "Shalyatantra (Female)", href: "/about/management" },
          ],
        },
        { label: "Online Consultation", href: "/hospital/online-consultation" },
      ],
    },
    {
      label: "For Students",
      sub: [
        { label: "List of Students", href: "/hospital/doctors" },
        {
          label: "Courses Offered",
          sub: [
            { label: "President’s Message", href: "/about/president" },
            { label: "Principal’s Message", href: "/about/principal" },
            { label: "Management", href: "/about/management" },
          ],
        },
        { label: "Admission Process", href: "/hospital/doctors" },
        { label: "Fees", href: "/hospital/doctors" },
        { label: "Curriculum", href: "/hospital/doctors" },
        { label: "Acadamic Time Table", href: "/hospital/doctors" },
        { label: "Anti Ragging Committee", href: "/hospital/doctors" },
      ],
    },
    { label: "Research & Publications", href: "/career" },
    {
      label: "Community",
      sub: [
        { label: "News & Events", href: "/hospital/doctors" },
        { label: "Image Gallery", href: "/hospital/doctors" },
        { label: "Blogs", href: "/hospital/doctors" },
      ],
    },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar */}
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

      {/* Main Navbar */}
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
              alt="Logo"
              width={180}
              height={180}
              className="w-auto h-[60px] md:h-[70px]"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex xl:space-x-5 md:space-x-3 text-green-800 font-medium relative text-sm xl:text-base">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative group">
                {menu.sub ? (
                  <>
                    {/* Parent Button */}
                    <button
                      onClick={() => toggleParent(menu.label)}
                      className="flex items-center gap-1 hover:text-green-500 transition"
                    >
                      {menu.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeParent === menu.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Parent Dropdown */}
                    {activeParent === menu.label && (
                      <ul className="absolute bg-green-100 shadow-lg mt-2 py-2 w-56 rounded-lg border border-green-500 animate-fadeIn">
                        {menu.sub.map((sub) => (
                          <li key={sub.label} className="relative group">
                            {sub.sub ? (
                              <>
                                {/* Child Button */}
                                <button
                                  onClick={() => toggleChild(sub.label)}
                                  className="flex justify-between w-full text-left px-4 py-2 hover:bg-green-600 hover:text-white"
                                >
                                  {sub.label}
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform ${
                                      activeChild === sub.label
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>

                                {/* Third Level */}
                                {activeChild === sub.label && (
                                  <ul className="absolute left-full top-0 bg-green-50 shadow-lg py-2 w-56 rounded-lg border border-green-500 animate-fadeIn">
                                    {sub.sub.map((third) => (
                                      <li key={third.label}>
                                        <Link
                                          href={third.href}
                                          className="block px-4 py-2 hover:bg-green-600 hover:text-white"
                                        >
                                          {third.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block px-4 py-2 hover:bg-green-600 hover:text-white"
                              >
                                {sub.label}
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

          {/* Mobile Button */}
          <button
            className="lg:hidden text-green-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-green-50 border-t border-green-500 lg:hidden animate-fadeIn">
            <ul className="flex flex-col p-4 space-y-2 text-green-800">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href || "#"}
                    className="block py-2 border-b border-green-400 hover:text-green-600"
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

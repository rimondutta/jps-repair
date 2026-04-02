"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Clock, MapPin, ShoppingCart, Phone, Menu, X, Wrench, Rss } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "./services/SocialIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PAGES", href: "#" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/#blog" },
    { name: "SHOP", href: "#" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "#") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col transition-all duration-300">
      
      {/* ROW 1: TOP INFO BAR (Always Sticky) */}
      <div 
        className="hidden lg:flex w-full bg-[#0E0E0E] text-white text-[11px] py-3.5 border-b border-[#222] transition-all duration-300 h-11"
      >
        <div className="container mx-auto px-8 max-w-[1920px] flex justify-between items-center">
          
          <div className="flex items-center">
            <div className="flex items-center gap-2 pr-6 border-r border-[#333]">
              <Mail className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="font-medium tracking-wider">test@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 px-6 border-r border-[#333]">
              <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="font-medium tracking-wider uppercase">8.00am - 10.00pm</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span className="font-medium tracking-wider">3205 NW 5th Ave, Miami, FL 33127, United States</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Facebook className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Twitter className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Linkedin className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Instagram className="w-3.5 h-3.5" /></Link>
            <Link href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Rss className="w-3.5 h-3.5" /></Link>
          </div>

        </div>
      </div>

      {/* ROW 2: MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-[#0E0E0E]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-[#333]" 
            : "bg-[#0A0A0A] border-b border-[#222]"
        }`}
      >
        <div className="flex justify-between items-center px-8 lg:px-12 max-w-[1920px] mx-auto h-[80px] md:h-[90px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
              <Wrench className="text-white w-5 h-5" />
            </div>
            <span className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight whitespace-nowrap flex items-center">
              AUTO<span className="text-[var(--color-primary)]">FIX</span>PRO
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10 uppercase tracking-[0.2em] text-[12px] font-bold h-full">
            {navLinks.map((link, index) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`relative flex items-center h-full transition-all duration-300 group ${
                    active ? "text-[var(--color-primary)]" : "text-white hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-primary)] transition-all duration-500 ease-in-out ${
                    active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-stretch justify-end">
            
            {/* SHOPPING CART */}
            <div className="hidden lg:flex items-center justify-center px-10 border-l border-white/10 h-[50px] my-auto">
              <button className="relative text-white hover:text-[var(--color-primary)] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-3 -right-4 bg-[var(--color-primary)] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black shadow-lg">
                  0
                </span>
              </button>
            </div>

            {/* CALL TO ACTION */}
            <div className="hidden sm:flex items-center gap-4 px-10 border-l border-white/10 h-[50px] my-auto">
              <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shadow-[0_0_15px_rgba(215,0,6,0.3)] hover:scale-110 transition-transform cursor-pointer">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-0.5">Need Help?</span>
                <a href="tel:+17869881966" className="text-white font-black text-lg hover:text-[var(--color-primary)] transition-colors">
                  +1 786 988 1966
                </a>
              </div>
            </div>

            {/* MOBILE HAMBURGER BLOCK */}
            <button
              className="bg-[var(--color-primary)] hover:bg-[#b00005] transition-colors w-[80px] lg:hidden h-[80px] md:h-[90px] flex items-center justify-center text-white z-[110]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 z-[99] transition-all duration-500 ease-in-out transform ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-[100px] px-10 gap-8">
          {navLinks.map((link, index) => {
            const active = isActiveLink(link.href);
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-black text-4xl uppercase tracking-tighter transition-colors inline-block ${
                  active ? "text-[var(--color-primary)]" : "text-white hover:text-[var(--color-primary)]"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-[var(--color-primary)] text-sm font-medium tracking-[0.3em] mr-4 opacity-50">0{index + 1}</span>
                {link.name}
              </Link>
            );
          })}
          
          <div className="mt-12 pt-12 border-t border-[#333] flex flex-col gap-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-primary)]">
                   <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                   <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Call Now</span>
                   <span className="text-white font-bold text-xl">+1 786 988 1966</span>
                </div>
             </div>
          </div>
        </div>
      </div>

    </header>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navbar({ onBookDemo }: { onBookDemo?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { 
      name: "Solutions", 
      href: "/#solutions",
      hasDropdown: true,
      dropdownItems: [
        { name: "For Startups", href: "/startups" },
        { name: "For Agencies", href: "/agencies" },
        { name: "For Mid-market", href: "/mid-market" }
      ] 
    },
    { 
      name: "Products", 
      href: "/#products",
      hasDropdown: true,
      dropdownItems: [
        { name: "Core HR", href: "/core-hr" },
        { name: "Payroll", href: "/payroll" },
        { name: "Recruitment", href: "/recruitment" },
        { name: "Performance Management", href: "/performance" }
      ] 
    },
    { name: "TalentOps Hiring", hasDropdown: false, href: "/#talentops-hiring" },
    { 
      name: "Resources", 
      href: "/#resources",
      hasDropdown: true,
      dropdownItems: [
        { name: "Blog & Articles", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Help Center", href: "/help-center" }
      ] 
    },
    { name: "About", hasDropdown: false, href: "/#about" },
  ];

  const handleDropdownClick = (name: string, hasDropdown: boolean, href: string | undefined, e: React.MouseEvent) => {
    if (href && href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (hasDropdown) {
      setOpenDropdown(openDropdown === name ? null : name);
    } else {
      setOpenDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b bg-white py-4",
      isScrolled ? "shadow-sm border-slate-200" : "border-transparent"
    )}>
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center shadow-premium">
                <span className="text-white font-display font-bold text-xl leading-none">T</span>
              </div>
              <span className="font-display font-bold text-3xl text-slate-900 tracking-tight">TalentOps</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link 
                  to={link.href || "#"} 
                  onClick={(e) => handleDropdownClick(link.name, link.hasDropdown, link.href, e)}
                  className={cn(
                    "flex items-center gap-1 text-[15px] font-semibold transition-colors py-2 cursor-pointer",
                    openDropdown === link.name ? "text-primary-600" : "text-slate-600 hover:text-primary-600"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === link.name ? "rotate-180 text-primary-600" : "text-slate-400"
                    )} />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && openDropdown === link.name && link.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-premium animate-in fade-in slide-in-from-top-2 duration-200 p-2 flex flex-col gap-1 z-50">
                    {link.dropdownItems.map((item) => (
                      <Link key={item.name} to={item.href} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setOpenDropdown(null)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login" className="flex items-center justify-center rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg px-8 h-12 shadow-sm transition-all whitespace-nowrap">Login</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-600 p-2" onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setOpenDropdown(null); }}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg transition-all duration-300 origin-top overflow-y-auto max-h-[80vh]",
        mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <div key={link.name} className="flex flex-col border-b border-slate-100 last:border-0">
            <Link 
              to={link.href || "#"} 
              onClick={(e) => handleDropdownClick(link.name, link.hasDropdown, link.href, e)}
              className={cn(
                "flex items-center justify-between text-lg font-medium py-3 cursor-pointer",
                openDropdown === link.name ? "text-primary-600" : "text-slate-900"
              )}
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  openDropdown === link.name ? "rotate-180 text-primary-600" : "text-slate-400"
                )} />
              )}
            </Link>
            {/* Mobile Dropdown Menu */}
            {link.hasDropdown && openDropdown === link.name && link.dropdownItems && (
              <div className="flex flex-col gap-2 pl-4 pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {link.dropdownItems.map((item) => (
                  <Link key={item.name} to={item.href} className="text-[15px] font-medium text-slate-500 py-1" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-3 mt-4">
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full flex justify-center items-center rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium h-12 shadow-sm transition-colors">Login</Link>
        </div>
      </div>
    </header>
  );
}

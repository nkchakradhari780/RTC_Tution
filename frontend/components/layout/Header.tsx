"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap as Graduation, BookOpen, Video, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Videos", href: "/videos" },
    { name: "PDF Notes", href: "/pdf-notes" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Graduation className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl tracking-tight">RTC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="sm">Enroll Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name === "Home" && <Graduation className="h-5 w-5" />}
                {link.name === "Courses" && <BookOpen className="h-5 w-5" />}
                {link.name === "Videos" && <Video className="h-5 w-5" />}
                {link.name === "PDF Notes" && <FileText className="h-5 w-5" />}
                {link.name === "Contact" && <User className="h-5 w-5" />}
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
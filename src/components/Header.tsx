"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl shadow-black/40"
                : "bg-transparent py-5"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group">
                    <span className="text-accent group-hover:text-accent-hover transition-colors">Tonmoy</span> Jihan
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-foreground-muted hover:text-foreground transition-all duration-300 text-sm font-semibold tracking-wide uppercase"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm" className="rounded-full px-6">
                        <a href="#contact">Contact</a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2 hover:bg-surface rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
                    >
                        <ul className="px-4 sm:px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="block text-foreground-muted hover:text-accent transition-colors py-2 text-base font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-border">
                                <Button className="w-full" size="md">
                                    <a href="#contact" className="block w-full">Let&apos;s Talk</a>
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

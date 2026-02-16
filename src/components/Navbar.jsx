"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, User, Palette, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    const navLinks = [
        { href: "/shop", label: "Curio Shop", icon: <Store size={16} /> },
        { href: "/gallery", label: "Art Gallery", icon: <Palette size={16} /> },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50">
            {/* Main Navbar */}
            <nav className="bg-warm-black/95 backdrop-blur-md border-b border-white/5 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-brand-light to-amber-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                        >
                            OaksCurioCrate
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Right Actions */}
                        <div className="hidden md:flex items-center gap-2">
                            <Link
                                href="/login"
                                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                            >
                                <User size={16} />
                                Sign In
                            </Link>
                            <Link
                                href="/cart"
                                className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-brand hover:bg-brand-dark text-white rounded-lg transition-all duration-200"
                            >
                                <ShoppingCart size={16} />
                                Cart
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-warm-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-fade-in">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-3">
                            <Link href="/cart" className="relative p-2">
                                <ShoppingCart size={20} className="text-white/80" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-warm-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="p-2 text-white/80 hover:text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden animate-slide-down border-t border-white/5">
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-white/10 my-2" />
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                                <User size={16} />
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                            >
                                <User size={16} />
                                Create Account
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

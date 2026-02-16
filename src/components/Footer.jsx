"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-warm-black text-white/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-brand-light to-amber-400 bg-clip-text text-transparent mb-4">
                            OaksCurioCrate
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Discover handcrafted African curios and original fine art. Every
                            piece carries the spirit of its maker.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                { href: "/shop", label: "Curio Shop" },
                                { href: "/gallery", label: "Art Gallery" },
                                { href: "/about", label: "About Us" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-brand-light transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Get in Touch
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin size={14} className="text-brand-light flex-shrink-0" />
                                Nairobi, Kenya
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-brand-light flex-shrink-0" />
                                +254 700 000 000
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-brand-light flex-shrink-0" />
                                hello@oakscuriocrate.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Newsletter
                        </h4>
                        <p className="text-sm mb-4">
                            Subscribe for new arrivals and exclusive offers.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-brand-light/50"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-brand hover:bg-brand-dark text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
                    <p>
                        &copy; {new Date().getFullYear()} OaksCurioCrate. All rights
                        reserved. Celebrating African artistry worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
}

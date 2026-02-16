"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-warm-black text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-brand-light">Touch</span>
                    </h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Have a question, want to collaborate, or looking for a specific
                        piece? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <div className="md:col-span-3">
                        <h2 className="text-2xl font-bold text-warm-black mb-6">
                            Send us a message
                        </h2>
                        <form
                            className="space-y-5"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-warm-gray/70 mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-warm-gray/70 mb-1.5">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-warm-gray/70 mb-1.5">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-warm-gray/70 mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us more..."
                                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-lg hover:shadow-brand/30 cursor-pointer"
                            >
                                <Send size={16} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-warm-black mb-6">
                            Contact Info
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <MapPin size={20} />,
                                    title: "Visit Us",
                                    detail: "Nairobi, Kenya",
                                    sub: "Mon – Fri, 9:00 AM – 6:00 PM",
                                },
                                {
                                    icon: <Phone size={20} />,
                                    title: "Call Us",
                                    detail: "+254 700 000 000",
                                    sub: "Available during business hours",
                                },
                                {
                                    icon: <Mail size={20} />,
                                    title: "Email Us",
                                    detail: "hello@oakscuriocrate.com",
                                    sub: "We reply within 24 hours",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 p-4 bg-cream-dark rounded-xl"
                                >
                                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-warm-black text-sm">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-warm-gray/80">{item.detail}</p>
                                        <p className="text-xs text-warm-gray/50 mt-0.5">
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map placeholder */}
                        <div className="mt-8 h-48 bg-cream-dark rounded-xl border border-black/5 flex items-center justify-center text-warm-gray/30 text-sm">
                            Map Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-warm-black via-[#2a1710] to-warm-black">
            <div className="w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Create Account
                        </h1>
                        <p className="text-white/50 text-sm">
                            Join OaksCurioCrate and explore African treasures
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        className="space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-1.5">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-brand-light/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-brand-light/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-brand-light/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/60 mb-1.5">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-light/50 focus:border-brand-light/50 transition-all"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg hover:shadow-brand/30 cursor-pointer"
                        >
                            <UserPlus size={18} />
                            Create Account
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-white/40 mt-6">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-brand-light hover:text-amber-400 font-medium transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

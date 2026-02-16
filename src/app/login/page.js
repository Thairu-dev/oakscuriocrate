"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-warm-black via-[#2a1710] to-warm-black">
            <div className="w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                        <p className="text-white/50 text-sm">
                            Sign in to your OaksCurioCrate account
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        className="space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
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
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-white/50">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-white/20 bg-white/10 accent-brand"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-brand-light hover:text-amber-400 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg hover:shadow-brand/30 cursor-pointer"
                        >
                            <LogIn size={18} />
                            Sign In
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-white/40 mt-6">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-brand-light hover:text-amber-400 font-medium transition-colors"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
                <div className="text-center">
                    <div className="w-24 h-24 bg-cream-dark rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag size={40} className="text-warm-gray/30" />
                    </div>
                    <h1 className="text-3xl font-bold text-warm-black mb-3">
                        Your Cart is Empty
                    </h1>
                    <p className="text-warm-gray/50 mb-8 max-w-md">
                        Looks like you haven&apos;t added any treasures yet. Explore our
                        curio shop or art gallery to find something you love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
                        >
                            Shop Curios
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/gallery"
                            className="inline-flex items-center gap-2 bg-warm-black hover:bg-warm-gray text-white px-6 py-3 rounded-full font-semibold transition-all"
                        >
                            Explore Art
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-warm-black text-white py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Your <span className="text-brand-light">Cart</span>
                    </h1>
                    <p className="text-white/50 mt-2">
                        {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
                <div className="space-y-4">
                    {cartItems.map((item) => {
                        const isExternal = item.image.startsWith("http");
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 md:gap-6 bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                            >
                                {/* Image */}
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-cream-dark flex-shrink-0">
                                    {isExternal ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain p-2"
                                            sizes="96px"
                                        />
                                    )}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-warm-black text-base truncate">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-warm-gray/50 capitalize">
                                        {item.type === "art" ? "Artwork" : "Curio"} •{" "}
                                        {item.category}
                                    </p>
                                    <p className="text-brand-dark font-bold mt-1">
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity - 1)
                                        }
                                        className="w-8 h-8 flex items-center justify-center bg-cream-dark rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                                        aria-label="Decrease quantity"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="w-8 text-center font-medium text-sm">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity + 1)
                                        }
                                        className="w-8 h-8 flex items-center justify-center bg-cream-dark rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                                        aria-label="Increase quantity"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>

                                {/* Item Total */}
                                <div className="hidden sm:block text-right min-w-[80px]">
                                    <p className="font-bold text-warm-black">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                                    aria-label="Remove item"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Summary */}
                <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-black/5">
                        <span className="text-warm-gray/60">Subtotal</span>
                        <span className="font-bold text-lg text-warm-black">
                            ${cartTotal.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between mb-6 text-sm text-warm-gray/50">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] shadow-lg hover:shadow-brand/30 cursor-pointer">
                        Proceed to Checkout
                        <ArrowRight size={18} />
                    </button>
                    <div className="text-center mt-4">
                        <Link
                            href="/shop"
                            className="text-sm text-brand hover:text-brand-dark font-medium transition-colors"
                        >
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const isExternal = product.image.startsWith("http");

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-black/5">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-cream-dark">
                {isExternal ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                )}
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-warm-black/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full capitalize">
                    {product.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold text-warm-gray text-base mb-1 truncate">
                    {product.name}
                </h3>
                {product.artist && (
                    <p className="text-xs text-warm-gray/60 mb-2">by {product.artist}</p>
                )}
                <p className="text-sm text-warm-gray/50 line-clamp-2 mb-3 leading-relaxed">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-dark">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={handleAdd}
                        disabled={added}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${added
                                ? "bg-green-500 text-white"
                                : "bg-brand hover:bg-brand-dark text-white hover:shadow-md active:scale-95"
                            }`}
                    >
                        {added ? (
                            <>
                                <Check size={14} />
                                Added
                            </>
                        ) : (
                            <>
                                <ShoppingCart size={14} />
                                Add to Cart
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

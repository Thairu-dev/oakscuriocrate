"use client";

import { ShoppingCart, Check, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ArtworkCard({ product }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-black/5">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black/90 via-warm-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <p className="text-white/80 text-xs mb-3 line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={handleAdd}
                            disabled={added}
                            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${added
                                    ? "bg-green-500 text-white"
                                    : "bg-brand hover:bg-brand-dark text-white"
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
                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full capitalize">
                    {product.category}
                </span>
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="font-semibold text-warm-gray text-base mb-0.5">
                    {product.name}
                </h3>
                <p className="text-xs text-warm-gray/60 mb-1">
                    by <span className="text-brand">{product.artist}</span>
                </p>
                <div className="flex items-center justify-between text-xs text-warm-gray/50 mb-2">
                    <span>{product.medium}</span>
                    <span>{product.dimensions}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                    <span className="text-lg font-bold text-brand-dark">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-warm-gray/40 uppercase tracking-wider">
                        Original
                    </span>
                </div>
            </div>
        </div>
    );
}

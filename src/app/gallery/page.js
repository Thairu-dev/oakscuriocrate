"use client";

import { useState } from "react";
import { artProducts } from "@/data/products";
import ArtworkCard from "@/components/ArtworkCard";
import { SlidersHorizontal } from "lucide-react";

const categories = [
    "all",
    "paintings",
    "sculptures",
    "photography",
    "mixed-media",
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered =
        activeCategory === "all"
            ? artProducts
            : artProducts.filter((p) => p.category === activeCategory);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-warm-black text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Art{" "}
                        <span className="bg-gradient-to-r from-brand-light to-amber-400 bg-clip-text text-transparent">
                            Gallery
                        </span>
                    </h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Original works from emerging African artists. Every piece tells a
                        story of heritage, identity, and creative vision.
                    </p>
                </div>
            </div>

            {/* Filters & Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filter */}
                <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
                    <SlidersHorizontal
                        size={16}
                        className="text-warm-gray/50 flex-shrink-0"
                    />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 capitalize whitespace-nowrap cursor-pointer ${activeCategory === cat
                                    ? "bg-brand text-white shadow-md"
                                    : "bg-cream-dark text-warm-gray/60 hover:bg-cream-dark hover:text-warm-gray"
                                }`}
                        >
                            {cat === "mixed-media" ? "Mixed Media" : cat}
                        </button>
                    ))}
                </div>

                <p className="text-sm text-warm-gray/50 mb-6">
                    Showing {filtered.length} artwork{filtered.length !== 1 && "s"}
                </p>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((product) => (
                        <ArtworkCard key={product.id} product={product} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-warm-gray/40">
                        <p className="text-lg">No artworks found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

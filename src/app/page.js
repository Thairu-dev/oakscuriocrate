"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Palette, Store } from "lucide-react";
import { curioProducts, artProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ArtworkCard from "@/components/ArtworkCard";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Home() {
  const featuredCurios = curioProducts.slice(0, 4);
  const featuredArt = artProducts.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/africa 2.0.webp"
            alt="African art background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-black/70 via-warm-black/50 to-warm-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Unbox Africa&apos;s
            <span className="block bg-gradient-to-r from-brand-light via-amber-400 to-brand-light bg-clip-text text-transparent">
              Hidden Treasures
            </span>
          </h1>

          <div className="text-lg md:text-xl text-white/80 mb-10 h-16 animate-fade-in-up delay-200">
            <Typewriter
              options={{
                strings: [
                  "From handwoven baskets to carved wooden figures — each item carries the spirit of its maker.",
                  "Discover rare artifacts rooted in culture, crafted with pride across African communities.",
                  "Original artwork from emerging African artists — paintings, sculptures, and beyond.",
                  "Ethically sourced, uniquely made — experience Africa's warmth in every detail.",
                  "Handpicked from local artisans, made to spark wonder in your home.",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 20,
                pauseFor: 2500,
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Store size={18} />
              Shop Curios
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Palette size={18} />
              Explore Art
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Curio Items Row */}
          <div className="mt-16 flex justify-center flex-wrap gap-6 animate-fade-in-up delay-400">
            {[
              { src: "/images/owl.webp", alt: "Owl sculpture" },
              { src: "/images/african-head.webp", alt: "African bust" },
              { src: "/images/basket.webp", alt: "Woven basket" },
              { src: "/images/gazelle.webp", alt: "Wooden gazelle" },
            ].map((item) => (
              <div
                key={item.alt}
                className="relative h-32 w-28 md:h-40 md:w-36 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-2"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Curios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-black">
              Featured{" "}
              <span className="text-brand">Curios</span>
            </h2>
            <p className="text-warm-gray/60 mt-2">
              Handpicked treasures from African artisans
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-1 text-brand hover:text-brand-dark font-medium text-sm transition-colors"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredCurios.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-brand hover:text-brand-dark font-medium text-sm"
          >
            View All Curios
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Art Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Art{" "}
                <span className="bg-gradient-to-r from-brand-light to-amber-400 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h2>
              <p className="text-white/50 mt-2">
                Original works from emerging African artists
              </p>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:flex items-center gap-1 text-brand-light hover:text-amber-400 font-medium text-sm transition-colors"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArt.map((product) => (
              <ArtworkCard key={product.id} product={product} />
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 text-brand-light hover:text-amber-400 font-medium text-sm"
            >
              View All Art
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-black mb-6">
            Our Story
          </h2>
          <p className="text-warm-gray/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Born from a passion for African artistry, OaksCurioCrate bridges the
            gap between talented artisans and art lovers worldwide. Every piece
            in our collection is ethically sourced and tells a unique story of
            heritage, culture, and craftsmanship.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-warm-black hover:bg-warm-gray text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

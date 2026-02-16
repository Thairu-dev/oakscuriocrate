import Image from "next/image";
import { Heart, Globe, Users, Sparkles } from "lucide-react";

const values = [
    {
        icon: <Heart className="text-brand" size={28} />,
        title: "Ethically Sourced",
        description:
            "Every piece is purchased directly from artisans at fair prices, ensuring sustainable livelihoods.",
    },
    {
        icon: <Globe className="text-brand" size={28} />,
        title: "Cultural Preservation",
        description:
            "We celebrate traditional techniques while supporting contemporary African artists and their evolving craft.",
    },
    {
        icon: <Users className="text-brand" size={28} />,
        title: "Community First",
        description:
            "A portion of every sale goes back to artisan communities, funding workshops and education programs.",
    },
    {
        icon: <Sparkles className="text-brand" size={28} />,
        title: "Authentic & Unique",
        description:
            "No mass production — every item is handmade, making each purchase a one-of-a-kind treasure.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="relative bg-warm-black text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/african-print-2.jpg"
                        alt="African print background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-brand-light">Story</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Born from a deep love for African artistry, OaksCurioCrate is more
                        than a shop — it&apos;s a bridge between talented artisans and art
                        lovers worldwide.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-warm-black mb-6">
                            Celebrating Africa&apos;s Rich{" "}
                            <span className="text-brand">Artistic Heritage</span>
                        </h2>
                        <div className="space-y-4 text-warm-gray/70 leading-relaxed">
                            <p>
                                From the vibrant markets of Nairobi to the workshops of Accra,
                                African art tells stories that transcend borders. Each sculpture,
                                painting, and handwoven piece carries centuries of tradition,
                                innovation, and soul.
                            </p>
                            <p>
                                We founded OaksCurioCrate to share these stories with the world.
                                Our team travels across the continent, personally selecting each
                                piece and building lasting relationships with the artists behind
                                them.
                            </p>
                            <p>
                                Whether you&apos;re drawn to a hand-carved wooden figure or a
                                bold contemporary painting, every item in our collection has been
                                chosen for its authenticity, craftsmanship, and ability to bring
                                Africa&apos;s warmth into your space.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/AFRICA 1.0.webp"
                            alt="African artisan at work"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-dark">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-warm-black text-center mb-12">
                        What We Stand For
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="font-semibold text-warm-black mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-warm-gray/60 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

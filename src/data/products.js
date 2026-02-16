export const curioProducts = [
  {
    id: "c1",
    name: "Owl Sculpture",
    price: 40,
    image: "/images/owl.webp",
    category: "sculptures",
    type: "curio",
    description:
      "Hand-carved wooden owl sculpture, symbolizing wisdom in many African cultures. Each piece is uniquely crafted by local artisans.",
  },
  {
    id: "c2",
    name: "African Bust",
    price: 55,
    image: "/images/african-head.webp",
    category: "sculptures",
    type: "curio",
    description:
      "Striking sculpted bust celebrating the beauty and strength of African heritage. A bold centerpiece for any room.",
  },
  {
    id: "c3",
    name: "Woven Basket",
    price: 30,
    image: "/images/basket.webp",
    category: "baskets",
    type: "curio",
    description:
      "Intricately handwoven basket, made with traditional techniques passed down through generations of skilled weavers.",
  },
  {
    id: "c4",
    name: "Wooden Gazelle",
    price: 45,
    image: "/images/gazelle.webp",
    category: "carvings",
    type: "curio",
    description:
      "Graceful wooden gazelle carved from sustainable hardwood. A tribute to the majesty of African wildlife.",
  },
  {
    id: "c5",
    name: "Maasai Shield",
    price: 85,
    image: "/images/owl.webp",
    category: "sculptures",
    type: "curio",
    description:
      "Replica Maasai warrior shield with authentic geometric patterns. Hand-painted with natural pigments.",
  },
  {
    id: "c6",
    name: "Beaded Necklace",
    price: 25,
    image: "/images/african-head.webp",
    category: "jewelry",
    type: "curio",
    description:
      "Vibrant multi-strand beaded necklace crafted by Maasai women. Each bead tells a story of culture and identity.",
  },
  {
    id: "c7",
    name: "Drum Carving",
    price: 60,
    image: "/images/basket.webp",
    category: "carvings",
    type: "curio",
    description:
      "Beautifully carved djembe drum with traditional patterns. A functional art piece that resonates with rhythm.",
  },
  {
    id: "c8",
    name: "Soapstone Bowl",
    price: 35,
    image: "/images/gazelle.webp",
    category: "sculptures",
    type: "curio",
    description:
      "Polished soapstone bowl with etched African motifs. Perfect as a decorative or functional piece.",
  },
];

export const artProducts = [
  {
    id: "a1",
    name: "Savanna Sunset",
    price: 320,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop",
    category: "paintings",
    type: "art",
    artist: "Amara Osei",
    medium: "Acrylic on Canvas",
    dimensions: '36" × 24"',
    description:
      "A breathtaking depiction of the African savanna bathed in golden sunset light, with silhouetted acacia trees.",
  },
  {
    id: "a2",
    name: "Market Day",
    price: 450,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600&h=400&fit=crop",
    category: "paintings",
    type: "art",
    artist: "Kwame Mensah",
    medium: "Oil on Canvas",
    dimensions: '48" × 36"',
    description:
      "Vibrant scene of an African marketplace bursting with color, movement, and the energy of daily life.",
  },
  {
    id: "a3",
    name: "Ancestral Rhythm",
    price: 280,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=400&fit=crop",
    category: "mixed-media",
    type: "art",
    artist: "Zuri Adebayo",
    medium: "Mixed Media",
    dimensions: '30" × 40"',
    description:
      "A dynamic mixed-media piece combining traditional African textiles with contemporary abstract forms.",
  },
  {
    id: "a4",
    name: "The Elder",
    price: 520,
    image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&h=400&fit=crop",
    category: "photography",
    type: "art",
    artist: "Nia Chukwu",
    medium: "Fine Art Photography",
    dimensions: '24" × 36"',
    description:
      "A powerful portrait capturing the wisdom and dignity of an African elder, printed on archival paper.",
  },
  {
    id: "a5",
    name: "Ubuntu Spirit",
    price: 380,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&h=400&fit=crop",
    category: "paintings",
    type: "art",
    artist: "Tendai Moyo",
    medium: "Watercolor",
    dimensions: '24" × 18"',
    description:
      "An evocative watercolor portraying the spirit of Ubuntu — community, togetherness, and shared humanity.",
  },
  {
    id: "a6",
    name: "Kente Dreams",
    price: 290,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
    category: "mixed-media",
    type: "art",
    artist: "Amara Osei",
    medium: "Textile Art",
    dimensions: '42" × 42"',
    description:
      "Contemporary textile art inspired by traditional Kente cloth patterns, reimagined with modern colors.",
  },
  {
    id: "a7",
    name: "Baobab Dreams",
    price: 410,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
    category: "paintings",
    type: "art",
    artist: "Kwame Mensah",
    medium: "Acrylic on Canvas",
    dimensions: '36" × 48"',
    description:
      "Majestic baobab tree rendered in rich, textured acrylics against a twilight sky. A celebration of African landscapes.",
  },
  {
    id: "a8",
    name: "Dance of Life",
    price: 350,
    image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?w=600&h=400&fit=crop",
    category: "sculptures",
    type: "art",
    artist: "Zuri Adebayo",
    medium: "Bronze Sculpture",
    dimensions: '18" × 12" × 8"',
    description:
      "A dynamic bronze sculpture capturing the fluid movement of traditional African dance.",
  },
];

export const allProducts = [...curioProducts, ...artProducts];

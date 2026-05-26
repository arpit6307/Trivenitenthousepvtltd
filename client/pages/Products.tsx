import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "Wedding Tents",
      category: "Wedding Equipment",
      description: "Elegant and luxurious wedding tents designed for grand celebrations and memorable ceremonies.",
      image: "https://cdn.imageurlgenerator.com/uploads/c73be229-4c65-4229-a7c1-4d0600887bf5.jpg",
      specifications: ["Decorative designs", "Multiple sizes", "Weather resistant", "Elegant finishes"]
    },
    {
      id: 2,
      name: "Wedding Tent Pipes & Structures",
      category: "Tent Pipes",
      description: "Premium quality tent pipes, aluminum frames, and structural components for wedding tent installations.",
      image: "https://cdn.imageurlgenerator.com/uploads/f1e9b4ca-10cf-45c3-b43e-4a4d906e08ee.jpg",
      specifications: ["Heavy-duty aluminum", "Corrosion resistant", "Easy assembly", "Reusable"]
    },
    {
      id: 3,
      name: "Wedding Crockery Sets",
      category: "Crockery",
      description: "High-quality crockery items, plates, bowls, and serving dishes specifically for wedding events.",
      image: "https://cdn.imageurlgenerator.com/uploads/39aaa27c-5bc6-43d5-a4ca-6b5ea8492675.jpg",
      specifications: ["Food-grade ceramic", "Elegant designs", "Dishwasher safe", "Bulk quantities available"]
    },
    {
      id: 4,
      name: "Wedding Cutlery & Utensils",
      category: "Crockery",
      description: "Premium cutlery sets including forks, spoons, knives and serving utensils for wedding events.",
      image: "https://cdn.imageurlgenerator.com/uploads/c232aba3-4818-43f8-a305-1960d80163d0.jpg",
      specifications: ["Stainless steel", "Professional finish", "Bulk packing", "Food-safe materials"]
    },
    {
      id: 5,
      name: "Wedding Serving Equipment",
      category: "Crockery",
      description: "Complete serving equipment including platters, bowls, utensils and serving stations for weddings.",
      image: "https://cdn.imageurlgenerator.com/uploads/a121ad56-e6a9-4177-87e1-df16905b24d6.jpg",
      specifications: ["Complete sets", "Professional grade", "Various sizes", "Easy to clean"]
    },
    {
      id: 6,
      name: "Pandals & Shamianas",
      category: "Wedding Equipment",
      description: "Traditional and modern pandals and shamianas for weddings, festivals, and cultural events.",
      image: "https://cdn.imageurlgenerator.com/uploads/6059d71f-b538-48da-a28d-59907270cb3c.jpg",
      specifications: ["Customizable designs", "Decorative options", "Various sizes", "Weather proof"]
    }
  ];

  const categories = ["All", "Wedding Equipment", "Tent Pipes", "Crockery"];

  const filteredProducts = selectedCategory && selectedCategory !== "All"
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">Our Products</h1>
          <p className="text-xl text-blue-700 max-w-3xl">
            Explore our comprehensive range of tent house materials and equipment for every occasion and requirement.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  (selectedCategory === cat || (cat === "All" && !selectedCategory))
                    ? "glass bg-blue-600/70 text-white"
                    : "glass bg-white/40 text-blue-900 hover:bg-white/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="glass-dark overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-bold mb-2 uppercase">{product.category}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{product.name}</h3>
                  <p className="text-blue-700 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Key Features:</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {product.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

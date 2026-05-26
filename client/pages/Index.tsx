import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Wedding Tents",
      description: "Elegant and luxurious wedding tents designed for grand celebrations and memorable ceremonies.",
      image: "https://cdn.imageurlgenerator.com/uploads/c73be229-4c65-4229-a7c1-4d0600887bf5.jpg",
      category: "Wedding Equipment"
    },
    {
      id: 2,
      name: "Wedding Tent Pipes",
      description: "Premium quality tent pipes and structural components for wedding tent installations.",
      image: "https://cdn.imageurlgenerator.com/uploads/6a3f5f94-e6da-4b21-a6f9-87367292091d.jpg",
      category: "Tent Pipes"
    },
    {
      id: 3,
      name: "Wedding Crockery Sets",
      description: "High-quality crockery, plates, bowls, and serving dishes for wedding events.",
      image: "https://cdn.imageurlgenerator.com/uploads/39aaa27c-5bc6-43d5-a4ca-6b5ea8492675.jpg",
      category: "Crockery"
    }
  ];

  const features = [
    {
      title: "Premium Quality",
      description: "Manufactured with the finest materials for durability and longevity."
    },
    {
      title: "Customization",
      description: "Tailored solutions to meet your specific project requirements."
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality."
    },
    {
      title: "Expert Support",
      description: "Professional guidance throughout your project lifecycle."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-32 right-5 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-900">
              Premium Tent House Solutions
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
              Manufacturing excellence in tent houses, shamianas, and event equipment since 1985. Your trusted partner for every occasion.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/products"
                className="glass px-8 py-4 bg-blue-500/60 text-white font-semibold rounded-lg hover:bg-blue-600/70 transition flex items-center gap-2"
              >
                Explore Products
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="glass px-8 py-4 bg-white/40 text-blue-900 font-semibold rounded-lg hover:bg-white/60 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-blue-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              View All
              <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="glass-dark overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{product.name}</h3>
                  <p className="text-blue-700 mb-6">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto glass p-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready for Your Next Project?</h2>
          <p className="text-lg text-blue-700 mb-8">
            Contact us today to discuss your tent house requirements and get a custom quote.
          </p>
          <Link
            to="/contact"
            className="inline-block glass px-10 py-4 bg-blue-600/70 text-white font-bold rounded-lg hover:bg-blue-700/80 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

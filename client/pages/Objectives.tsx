import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Objectives() {
  const mainObjectives = [
    {
      title: "Manufacturing & Fabrication",
      description: "To carry on the business of manufacturing, fabricating, assembling, and processing all kinds of tent house materials and equipment."
    },
    {
      title: "Distribution & Logistics",
      description: "Supplying, distributing, and dealing in tents, shamianas, pandals, waterproof coverings, and related accessories across India."
    },
    {
      title: "Quality & Innovation",
      description: "Producing premium quality tent structures with innovative designs that meet international standards and customer expectations."
    },
    {
      title: "Event Solutions",
      description: "Providing comprehensive tent house solutions for marriages, events, exhibitions, and social/commercial functions."
    }
  ];

  const products = [
    "Tents",
    "Shamianas",
    "Pandals",
    "Waterproof Coverings",
    "Tent Pipes",
    "Iron & Steel Structures",
    "Aluminum Frames",
    "Stages",
    "Furniture",
    "Lighting Equipment",
    "Sound Systems",
    "Crockery Items",
    "Cutlery",
    "Utensils",
    "Serving Equipment",
    "Related Accessories"
  ];

  const applications = [
    "Wedding Ceremonies",
    "Social Events",
    "Corporate Functions",
    "Exhibitions & Trade Shows",
    "Religious Gatherings",
    "Community Events",
    "Industrial Storage",
    "Warehouse Solutions",
    "Emergency Relief",
    "Festival Celebrations",
    "Promotional Events",
    "Outdoor Conferences"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">Company Objectives</h1>
          <p className="text-xl text-blue-700 max-w-3xl">
            Our mission is to be the leading provider of tent house materials and event solutions, delivering quality, reliability, and innovation.
          </p>
        </div>
      </section>

      {/* Main Objectives */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">Main Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mainObjectives.map((obj, i) => {
              const images = [
                "https://cdn.imageurlgenerator.com/uploads/deee71f5-f39c-4be8-8375-967efc9e38df.jpg",
                "https://cdn.imageurlgenerator.com/uploads/64d49c55-ffce-4571-a21d-0146ea64f0a0.webp",
                "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop",
                "https://cdn.imageurlgenerator.com/uploads/e8714dc1-431b-4469-b0f1-9069269b4b97.jpg"
              ];
              return (
                <div key={i} className="glass-dark overflow-hidden rounded-2xl hover:shadow-xl transition transform hover:scale-105">
                  <img
                    src={images[i]}
                    alt={obj.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex gap-4">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{obj.title}</h3>
                        <p className="text-blue-700">{obj.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">Products & Services</h2>
          <div className="glass p-8">
            <p className="text-blue-700 mb-6">
              We manufacture, fabricate, assemble, process, produce, and distribute a comprehensive range of products including:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/30">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-900 font-semibold">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-blue-900">Applications & Use Cases</h2>
          <div className="glass-dark p-8">
            <p className="text-blue-800 mb-6">
              Our tent house solutions are perfectly suited for a wide variety of occasions and scenarios:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/20">
                  <span className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-blue-900 font-semibold">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass p-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Commitment</h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-8">
              We are committed to excellence in manufacturing, quality assurance, timely delivery, and exceptional customer service. Our objective is to become the preferred partner for all tent house and event management solutions across India and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="glass-dark p-6 flex-1 min-w-64">
                <h3 className="font-bold text-blue-900 mb-2">Quality First</h3>
                <p className="text-blue-700">Premium materials and rigorous testing</p>
              </div>
              <div className="glass-dark p-6 flex-1 min-w-64">
                <h3 className="font-bold text-blue-900 mb-2">Customer Focused</h3>
                <p className="text-blue-700">Tailored solutions for every need</p>
              </div>
              <div className="glass-dark p-6 flex-1 min-w-64">
                <h3 className="font-bold text-blue-900 mb-2">Reliable Delivery</h3>
                <p className="text-blue-700">On-time fulfillment guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

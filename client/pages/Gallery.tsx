import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Wedding Tents",
      category: "Wedding Equipment",
      image: "https://cdn.imageurlgenerator.com/uploads/c73be229-4c65-4229-a7c1-4d0600887bf5.jpg"
    },
    {
      id: 2,
      title: "Wedding Tent Pipes & Structures",
      category: "Tent Pipes",
      image: "https://cdn.imageurlgenerator.com/uploads/f1e9b4ca-10cf-45c3-b43e-4a4d906e08ee.jpg"
    },
    {
      id: 3,
      title: "Wedding Crockery Sets",
      category: "Crockery",
      image: "https://cdn.imageurlgenerator.com/uploads/39aaa27c-5bc6-43d5-a4ca-6b5ea8492675.jpg"
    },
    {
      id: 4,
      title: "Wedding Cutlery & Utensils",
      category: "Crockery",
      image: "https://cdn.imageurlgenerator.com/uploads/c232aba3-4818-43f8-a305-1960d80163d0.jpg"
    },
    {
      id: 5,
      title: "Wedding Serving Equipment",
      category: "Crockery",
      image: "https://cdn.imageurlgenerator.com/uploads/a121ad56-e6a9-4177-87e1-df16905b24d6.jpg"
    },
    {
      id: 6,
      title: "Pandals & Shamianas",
      category: "Wedding Equipment",
      image: "https://cdn.imageurlgenerator.com/uploads/6059d71f-b538-48da-a28d-59907270cb3c.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">Gallery</h1>
          <p className="text-xl text-blue-700 max-w-3xl">
            Explore our portfolio of completed projects and see the quality of work we deliver.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map(img => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img.id)}
                className="glass-dark overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl transition transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                </div>
                <div className="p-4">
                  <div className="text-sm text-blue-600 font-bold mb-1">{img.category}</div>
                  <h3 className="text-lg font-bold text-blue-900">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
            >
              ✕
            </button>
            {galleryImages.map(img => (
              img.id === selectedImage && (
                <div key={img.id} className="rounded-2xl overflow-hidden">
                  <img src={img.image} alt={img.title} className="w-full" />
                  <div className="bg-blue-900 p-6 text-white">
                    <div className="text-sm text-blue-300 font-bold mb-2">{img.category}</div>
                    <h2 className="text-2xl font-bold">{img.title}</h2>
                  </div>
                </div>
              )
            ))}
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-4 text-white">
              <button
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  if (currentIndex > 0) {
                    setSelectedImage(galleryImages[currentIndex - 1].id);
                  }
                }}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  if (currentIndex < galleryImages.length - 1) {
                    setSelectedImage(galleryImages[currentIndex + 1].id);
                  }
                }}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

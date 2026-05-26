import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">About Triveni Tent House</h1>
          <p className="text-xl text-blue-700 max-w-3xl">
            Established in 1985, Triveni Tent House has been a pioneer in manufacturing and distributing premium tent house materials and equipment.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass p-12 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Journey</h2>
            <p className="text-lg text-blue-700 mb-4">
              With nearly four decades of experience, Triveni Tent House has established itself as a trusted name in the tent manufacturing industry. Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for events, corporate functions, weddings, exhibitions, and industrial applications across India.
            </p>
            <p className="text-lg text-blue-700">
              We pride ourselves on delivering customized solutions that meet the unique needs of each client, whether it's a small gathering or a large-scale industrial project.
            </p>
          </div>

          {/* Director Message */}
          <div className="glass p-12 bg-blue-100/40">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Director's Message</h2>
            <p className="text-lg text-blue-700 italic mb-4">
              "At Triveni Tent House, we believe that quality is not just about the product—it's about the experience we deliver to every customer. Over the years, we've built lasting relationships with clients who trust us with their most important events and operations. We remain committed to innovation, sustainability, and excellence."
            </p>
            <p className="text-blue-800 font-semibold">– Management, Triveni Tent House Pvt. Ltd.</p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark overflow-hidden rounded-2xl hover:shadow-xl transition transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=400&fit=crop"
                alt="Quality Assurance"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Award className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Quality Assurance</h3>
                <p className="text-blue-700">
                  Every product undergoes rigorous quality checks to ensure durability, safety, and performance standards.
                </p>
              </div>
            </div>
            <div className="glass-dark overflow-hidden rounded-2xl hover:shadow-xl transition transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Expert Team"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Expert Team</h3>
                <p className="text-blue-700">
                  Our experienced team brings decades of combined expertise in design, manufacturing, and customer service.
                </p>
              </div>
            </div>
            <div className="glass-dark overflow-hidden rounded-2xl hover:shadow-xl transition transform hover:scale-105">
              <img
                src="https://cdn.imageurlgenerator.com/uploads/c78723e8-4d6b-48d6-ab8e-d8ffacc982f7.jpg"
                alt="Innovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <Zap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-blue-700">
                  We continuously innovate to develop products that meet evolving market demands and customer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <p className="text-blue-900 font-semibold">Years of Experience</p>
            </div>
            <div className="glass p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-blue-900 font-semibold">Satisfied Clients</p>
            </div>
            <div className="glass p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-blue-900 font-semibold">Products & Services</p>
            </div>
            <div className="glass p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-blue-900 font-semibold">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

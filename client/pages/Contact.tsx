import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send message via WhatsApp
    const whatsappNumber = "919918531821"; // Format: country code + number without + or spaces
    const message = `Hi, I'm ${formData.name}\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');

    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">Contact Us</h1>
          <p className="text-xl text-blue-700 max-w-3xl">
            Get in touch with us for inquiries, quotes, or to discuss your tent house requirements.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="glass p-6">
                <div className="flex gap-4">
                  <Phone className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Phone</h3>
                    <a href="tel:+919918531821" className="text-blue-700 hover:text-blue-900">
                      +91&nbsp;9918531821
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass p-6">
                <div className="flex gap-4">
                  <Mail className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Email</h3>
                    <a href="mailto:trivenitenthousepvtltd@gmail.com" className="text-blue-700 hover:text-blue-900">
                      trivenitenthousepvtltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="glass p-6">
                <div className="flex gap-4">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-3">Address</h3>
                    <div className="mb-4">
                      <p className="font-semibold text-blue-900 mb-1">Office:</p>
                      <a
                        href="https://www.google.com/maps/search/1229B+1048B+09A+MALVIYA+NAGAR+Mutthiganj+Allahabad+Uttar+Pradesh+211003+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition text-sm"
                      >
                        1229B/1048B/09A, MALVIYA NAGAR, Mutthiganj<br />
                        Allahabad, Uttar Pradesh 211003, India
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900 mb-1">Factory:</p>
                      <a
                        href="https://www.google.com/maps/search/Arazi+No+256+village+dandi+tehsil+karchanna+prayagraj+uttar+pradesh+211008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition text-sm"
                      >
                        Arazi No. 256, Village Dandi<br />
                        Tehsil Karchanna, Prayagraj<br />
                        Uttar Pradesh 211008, India
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass p-6">
                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Business Hours</h3>
                    <p className="text-blue-700">
                      <span className="font-semibold">Monday - Friday:</span> 10:00 AM - 6:00 PM
                    </p>
                    <p className="text-blue-700 mt-1">
                      <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-blue-700">
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
              <div>
                <label className="block text-blue-900 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-blue-600"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-blue-600"
                  placeholder="Subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-blue-900 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 placeholder-blue-600 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full glass px-6 py-3 bg-blue-600/70 text-white font-bold rounded-lg hover:bg-blue-700/80 transition flex items-center justify-center gap-2"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.852L.057 23.55a.75.75 0 00.921.921l5.696-1.465A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 01-4.95-1.355l-.355-.21-3.682.947.963-3.585-.23-.368A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Visit Us</h2>
          <a
            href="https://www.google.com/maps/search/1229B+1048B+09A+MALVIYA+NAGAR+Mutthiganj+Allahabad+Uttar+Pradesh+211003+India"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-dark p-8 rounded-2xl h-96 flex items-center justify-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-blue-700 text-lg font-semibold mb-2">
                1229B/1048B/09A, MALVIYA NAGAR, Mutthiganj
              </p>
              <p className="text-blue-700 text-lg">
                Allahabad, Uttar Pradesh 211003, India
              </p>
              <p className="text-blue-600 mt-4 font-semibold hover:text-blue-700">
                Click to open in Google Maps
              </p>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

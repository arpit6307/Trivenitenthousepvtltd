import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Triveni Tent House</h3>
            <p className="text-blue-100 text-sm mb-4">
              Manufacturing premium tent house materials and wedding crockery since 1985.
            </p>
            <div className="flex gap-4">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/objectives" className="hover:text-white transition">
                  Objectives
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+919918531821" className="hover:text-white transition">
                  +91&nbsp;9918531821
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:trivenitenthousepvtltd@gmail.com" className="hover:text-white transition">
                  trivenitenthousepvtltd@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Office:</p>
                  <a
                    href="https://www.google.com/maps/search/1229B+1048B+09A+MALVIYA+NAGAR+Mutthiganj+Allahabad+Uttar+Pradesh+211003+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                  >
                    1229B/1048B/09A, MALVIYA NAGAR, Mutthiganj, Allahabad, Uttar Pradesh 211003
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">Factory:</p>
                  <a
                    href="https://www.google.com/maps/search/Arazi+No+256+village+dandi+tehsil+karchanna+prayagraj+uttar+pradesh+211008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition"
                  >
                    Arazi No. 256, Village Dandi, Tehsil Karchanna, Prayagraj, Uttar Pradesh 211008
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <div className="text-blue-100 text-sm space-y-2">
              <p className="font-semibold">Monday - Friday</p>
              <p>10:00 AM - 6:00 PM</p>
              <p className="font-semibold mt-4">Saturday - Sunday</p>
              <p>By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100 text-sm">
          <p>&copy; 2024 Triveni Tent House Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 md:flex justify-between items-center text-sm hidden">
        <div className="flex gap-6">
          <a href="tel:+919918531821" className="flex items-center gap-2 hover:text-blue-100">
            <Phone size={16} />
            +91 9918531821
          </a>
          <a href="mailto:info@trivenitenthouse.com" className="flex items-center gap-2 hover:text-blue-100">
            <Mail size={16} />
            &nbsp;Trivenitenthousepvtltd@gmail.com
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="glass-dark mx-4 my-4 rounded-xl">
        <div className="flex justify-between items-center px-4 md:px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://cdn.imageurlgenerator.com/uploads/84bd4f52-2eb1-4f77-bdab-d56a94818b7b.jpeg"
              alt="Triveni Tent House Logo"
              className="h-8 w-auto md:h-10"
            />
            <span className="font-bold text-sm md:text-lg gradient-text hidden sm:inline">
              Triveni Tent House
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-blue-900 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-blue-900 hover:text-blue-600 font-medium transition">
              About
            </Link>
            <Link to="/products" className="text-blue-900 hover:text-blue-600 font-medium transition">
              Products
            </Link>
            <Link to="/objectives" className="text-blue-900 hover:text-blue-600 font-medium transition">
              Objectives
            </Link>
            <Link to="/gallery" className="text-blue-900 hover:text-blue-600 font-medium transition">
              Gallery
            </Link>
            <Link to="/contact" className="glass px-6 py-2 text-white bg-blue-500/50 hover:bg-blue-600/60 rounded-lg transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-blue-900" />
            ) : (
              <Menu size={24} className="text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 px-6 py-4 bg-white/20">
            <Link
              to="/"
              className="block py-3 text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="block py-3 text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/objectives"
              className="block py-3 text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Objectives
            </Link>
            <Link
              to="/gallery"
              className="block py-3 text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-blue-600 hover:text-blue-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

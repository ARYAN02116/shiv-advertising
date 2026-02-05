import { Link } from 'react-router-dom';
import { Newspaper, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                <Newspaper className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Shiv Advertisement
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Trusted paper inserting & newspaper advertising company in India. Reliable, affordable, and result-oriented advertising solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-orange-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Paper Inserting Services</li>
              <li>Pamphlet Distribution</li>
              <li>Flyer Distribution</li>
              <li>Newspaper Advertising</li>
              <li>Classified Ads</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>info@shivadvertisement.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shiv Advertisement. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Paper Inserting Services in India | Newspaper Advertising | Pamphlet Distribution
          </p>
        </div>
      </div>
    </footer>
  );
}

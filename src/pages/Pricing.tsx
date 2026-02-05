import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Newspaper, FileText, Megaphone, Package } from 'lucide-react';

export function Pricing() {
  const customPackages = [
    'Monthly paper inserting plans',
    'Political & election advertising',
    'Real estate promotion packages',
    'Festival & seasonal advertising',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertising Pricing & Packages</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
            Affordable Paper Inserting Prices by Shiv Advertisement
          </p>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-8 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            Pricing depends on newspaper type, quantity, and area coverage. Contact us for exact quotes.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Paper Inserting Charges */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <Newspaper className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Paper Inserting Charges</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Local Newspaper Insertion</h4>
                  <div className="text-3xl font-bold text-orange-600">
                    ₹0.40 – ₹0.80
                    <span className="text-sm font-normal text-gray-500"> /per insert</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">City / Metro Newspaper Insertion</h4>
                  <div className="text-3xl font-bold text-orange-600">
                    ₹0.80 – ₹1.50
                    <span className="text-sm font-normal text-gray-500"> /per insert</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Bulk Paper Inserting</h4>
                  <p className="text-sm text-gray-600 mb-2">(50,000+ copies)</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <CheckCircle className="h-5 w-5" />
                    Special discounted rates available
                  </div>
                </div>
              </div>
            </div>

            {/* Pamphlet Distribution */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pamphlet & Flyer Distribution</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Area Distribution</h4>
                  <div className="text-3xl font-bold text-blue-600">
                    ₹0.80 – ₹2.00
                    <span className="text-sm font-normal text-gray-500"> /per pamphlet</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Hand Distribution</h4>
                  <div className="text-3xl font-bold text-blue-600">
                    ₹0.80 – ₹2.00
                    <span className="text-sm font-normal text-gray-500"> /per pamphlet</span>
                  </div>
                </div>
                
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on area, quantity, and distribution method. Contact us for accurate quotes.
                  </p>
                </div>
              </div>
            </div>

            {/* Newspaper Advertising */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
              <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
                <Megaphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Newspaper Advertising Rates</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Classified Ads</h4>
                  <div className="text-3xl font-bold text-green-600">
                    Starting ₹500
                    <span className="text-sm font-normal text-gray-500"> onwards</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Display Ads</h4>
                  <p className="text-gray-600 text-sm">
                    Price depends on ad size, newspaper, and edition. Contact for custom quote.
                  </p>
                </div>
                
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-gray-600 text-sm">
                    We work with leading national and regional newspapers across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-purple-100 p-4 rounded-xl w-fit mb-6">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Advertising Packages</h2>
                <p className="text-gray-600 mb-6">
                  We offer customized advertising packages tailored to your specific needs and budget. Whether you're running a political campaign, promoting real estate, or planning seasonal promotions, we have the right solution for you.
                </p>
                <ul className="space-y-3">
                  {customPackages.map((pkg, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get a FREE Customized Quotation</h3>
                <p className="text-gray-600 mb-6">
                  Contact Shiv Advertisement today and let us create the perfect advertising package for your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-md"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">📌 Important Note</h3>
          <p className="text-orange-100">
            All prices are approximate and subject to change based on newspaper rates, area coverage, and order volume. 
            Please contact us for accurate and updated pricing information.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            👉 Contact Shiv Advertisement for a FREE customized quotation today!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg"
          >
            Get Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

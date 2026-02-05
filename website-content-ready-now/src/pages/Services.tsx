import { Link } from 'react-router-dom';
import { Newspaper, FileText, Megaphone, MapPin, CheckCircle, ArrowRight, Building, Vote, GraduationCap, Calendar } from 'lucide-react';

export function Services() {
  const paperInsertingFeatures = [
    'Daily & weekly newspaper insertion',
    'Local, city, and regional coverage',
    'Bulk insert handling',
    'Area-wise distribution',
  ];

  const bestFor = [
    { icon: Building, text: 'Retail Promotions' },
    { icon: Vote, text: 'Political Campaigns' },
    { icon: Building, text: 'Real Estate Projects' },
    { icon: Building, text: 'Hospitals & Clinics' },
    { icon: GraduationCap, text: 'Coaching Institutes' },
    { icon: Calendar, text: 'Events & Functions' },
  ];

  const pamphletIdealFor = [
    'New business openings',
    'Sale & discount promotions',
    'Brand awareness campaigns',
  ];

  const newspaperBenefits = [
    'High credibility',
    'Wide reach',
    'Cost-effective marketing',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
            Comprehensive paper inserting and newspaper advertising solutions for your business
          </p>
        </div>
      </section>

      {/* Paper Inserting Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <Newspaper className="h-10 w-10 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                1. Paper Inserting Services
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Shiv Advertisement offers professional <strong>paper inserting services</strong>, placing pamphlets, flyers, and promotional materials inside newspapers for mass distribution.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Features:</h3>
              <ul className="space-y-3 mb-8">
                {paperInsertingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Best For:</h3>
              <div className="grid grid-cols-2 gap-4">
                {bestFor.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pamphlet & Flyer Distribution */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Ideal For:</h3>
                <ul className="space-y-4">
                  {pamphletIdealFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                2. Pamphlet & Flyer Distribution
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We provide reliable <strong>pamphlet and flyer distribution services</strong> to ensure maximum visibility and customer response.
              </p>
              <p className="text-gray-600">
                Our extensive network of distributors ensures your promotional materials reach the right audience at the right time, maximizing your marketing ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Advertising Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
                <Megaphone className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                3. Newspaper Advertising Services
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Advertise through <strong>classified ads, display ads, and insert-based newspaper advertising</strong> in leading Indian newspapers.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
              <ul className="space-y-3 mb-6">
                {newspaperBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Classified Ads</h4>
                  <p className="text-gray-600 text-sm">Text-based ads for job postings, matrimonials, property listings, and more.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Display Ads</h4>
                  <p className="text-gray-600 text-sm">Visual advertisements with graphics and images for maximum impact.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Insert Advertising</h4>
                  <p className="text-gray-600 text-sm">Promotional materials inserted inside newspapers for direct reach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Reach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-orange-100 p-4 rounded-xl w-fit mx-auto mb-6">
              <MapPin className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coverage & Reach</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Shiv Advertisement offers extensive newspaper circulation coverage across selected cities and regions in India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Insert Count</h3>
              <p className="text-gray-600">We ensure the exact number of inserts as ordered.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Distribution</h3>
              <p className="text-gray-600">On-schedule delivery for maximum impact.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Execution</h3>
              <p className="text-gray-600">Clear reporting and honest practices.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">📞 Contact us to know available coverage areas and circulation details.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Coverage Details <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Advertising Campaign?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Contact Shiv Advertisement today for professional paper inserting and newspaper advertising services.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg"
          >
            View Pricing <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, Newspaper, Users, MapPin, Clock, Award, TrendingUp } from 'lucide-react';

export function Home() {
  const features = [
    { icon: CheckCircle, text: 'Trusted paper inserting service provider' },
    { icon: MapPin, text: 'Wide local & regional newspaper coverage' },
    { icon: TrendingUp, text: 'Affordable advertising packages' },
    { icon: Clock, text: 'Accurate and timely paper insertion' },
    { icon: Users, text: 'Quick response & customer support' },
  ];

  const services = [
    {
      icon: Newspaper,
      title: 'Paper Inserting',
      description: 'Professional paper inserting services placing pamphlets inside newspapers for mass distribution.',
    },
    {
      icon: Users,
      title: 'Pamphlet Distribution',
      description: 'Reliable pamphlet and flyer distribution services for maximum visibility.',
    },
    {
      icon: Award,
      title: 'Newspaper Advertising',
      description: 'Classified ads, display ads, and insert-based newspaper advertising.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shiv Advertisement – Trusted Paper Inserting & Newspaper Advertising Company in India
            </h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Reach thousands of households with <strong>professional paper inserting, newspaper insert advertising, and pamphlet distribution services</strong> across India. Reliable, affordable, and result-oriented advertising solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Book Paper Insertion
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700/50 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-orange-700/70 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">About Shiv Advertisement</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Leading Paper Inserting & Newspaper Advertising Company in India
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                <strong>Shiv Advertisement</strong> is a leading paper inserting and newspaper advertising company in India, providing high-impact marketing solutions through newspaper inserts, pamphlets, flyers, and print advertising.
              </p>
              <p className="text-gray-600 mb-8">
                We help local businesses, retailers, real estate firms, political campaigns, schools, and institutions promote their services by delivering promotional materials directly to customers' homes through trusted newspaper distribution.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
              >
                Learn more about us →
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-orange-600">10K+</div>
                    <div className="text-gray-600 text-sm mt-1">Daily Inserts</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-orange-600">500+</div>
                    <div className="text-gray-600 text-sm mt-1">Happy Clients</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-orange-600">50+</div>
                    <div className="text-gray-600 text-sm mt-1">Cities Covered</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl font-bold text-orange-600">5+</div>
                    <div className="text-gray-600 text-sm mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Why Choose Shiv Advertisement?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Advertising Services We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Business with Paper Advertising?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Contact Shiv Advertisement today for a FREE customized quotation. Let us help you reach thousands of potential customers!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

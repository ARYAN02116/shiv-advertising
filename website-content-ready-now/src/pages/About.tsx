import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shiv Advertisement</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
            Your trusted partner for paper inserting and newspaper advertising services in India
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experienced Newspaper Advertising Company in India
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                <strong>Shiv Advertisement</strong> is an experienced newspaper advertising and paper inserting company in India with a strong focus on service quality and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                We work closely with newspaper distributors to ensure <strong>proper insert placement, correct quantity, and on-time delivery</strong>. Our transparent pricing and reliable execution make us a preferred choice for print advertising.
              </p>
              <p className="text-gray-600">
                With years of experience in the advertising industry, we have served hundreds of clients including local businesses, retailers, real estate developers, political parties, educational institutions, and healthcare providers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 md:p-12">
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop" 
                alt="Newspaper advertising" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide cost-effective, high-reach paper inserting and advertising services that help businesses grow. We aim to be the most reliable and affordable advertising partner for businesses across India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's leading paper inserting and newspaper advertising company, known for exceptional service quality, wide coverage, and innovative advertising solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality Service', desc: 'Proper insert placement and quality assurance' },
              { icon: Users, title: 'Customer Focus', desc: 'Dedicated support and personalized solutions' },
              { icon: CheckCircle, title: 'Reliability', desc: 'On-time delivery and accurate distribution' },
              { icon: Target, title: 'Transparency', desc: 'Clear pricing with no hidden charges' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl w-fit mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Shiv Advertisement Today
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Let us help you reach thousands of potential customers through our trusted paper inserting services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

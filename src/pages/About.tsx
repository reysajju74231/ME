import React from 'react';
import Footer from '../components/Footer/Footer';
import PageHeader from '../components/common/PageHeader';

export default function About() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <PageHeader title="About Us" />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-playfair font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Magnates Empire, we're revolutionizing access to premium tools and services. Our mission is to empower creators, entrepreneurs, and professionals by providing affordable access to the world's leading software solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold mb-4">What We Offer</h2>
            <p className="text-gray-300 leading-relaxed">
              Through our innovative subscription model, we provide access to over 150 premium tools across various categories including AI, design, marketing, and development. We negotiate directly with service providers to offer you unbeatable value.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-playfair font-bold mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3"></span>
                <div>
                  <strong className="block text-white">Accessibility</strong>
                  Making premium tools accessible to everyone through affordable pricing
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3"></span>
                <div>
                  <strong className="block text-white">Transparency</strong>
                  Clear pricing and terms with no hidden fees or commitments
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3"></span>
                <div>
                  <strong className="block text-white">Quality</strong>
                  Partnering only with the best tools and services in each category
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
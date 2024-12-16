import React, { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer/Footer';
import SubscriptionForm from '../components/SubscriptionForm/NetlifyForm';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Hero onGetAccessClick={() => setIsFormOpen(true)} />
      <Features />
      <Footer />
      <SubscriptionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
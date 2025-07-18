import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Loading from '../components/loading'; 

function Home() {
  const [isLoading, setIsLoading] = useState(false);
 
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="font-inter bg-gradient-primary text-text-primary min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Products from '../components/home/Products';
import Footer from '../components/home/Footer';
import Loading from '../components/loading'; 
import Testimonial from '../components/home/Testimonial';
function Home() {
  const [isLoading, setIsLoading] = useState(false);
 
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="font-inter bg-gradient-primary text-text-primary min-h-screen">
      <Hero />
      <Features />
      <Products />
      <Testimonial />
    </div>
  );
}

export default Home;
import React from 'react';
import Hero from '../components/home/Hero';
import Divisions from '../components/home/Divisions';
import Philosophy from '../components/home/Philosophy';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <Divisions />
      <Philosophy />
      <Projects />
      <Contact />
    </div>
  );
}
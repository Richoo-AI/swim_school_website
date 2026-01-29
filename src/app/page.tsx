"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Waves, Shield, Award, Thermometer, ChevronRight, Menu, X, Star, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const programs = [
  {
    title: 'Infant/Toddler',
    age: '4 - 35 Months',
    description: 'A gentle introduction to water, focusing on comfort and basic safety skills with parent participation.',
    image: '/assets/infant.jpg',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    title: 'Preschool',
    age: '3 - 5 Years',
    description: 'Building confidence and independence through play-based learning and fundamental stroke techniques.',
    image: '/assets/preschool.jpg',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'School Age',
    age: '6 - 12 Years',
    description: 'Mastering all four competitive strokes while emphasizing water safety and endurance.',
    image: '/assets/hero.jpg',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Competitive',
    age: 'All Ages',
    description: 'Advanced training for swimmers looking to refine technique, improve speed, and prepare for competition.',
    image: '/assets/competitive.jpg',
    color: 'bg-amber-100 text-amber-700',
  },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Parent of 4yo',
    text: 'AquaKids Academy has been a game-changer for our daughter. She went from being afraid of the water to swimming across the pool in just 3 months!',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Parent of 2yo & 6yo',
    text: 'The instructors are incredibly patient and the 90-degree water makes such a difference. No more blue lips or shivering!',
    stars: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Parent of 8yo',
    text: 'I love the emphasis on safety. My son doesn\'t just know how to swim; he knows what to do in an emergency. Highly recommend!',
    stars: 5,
  },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-200 selection:text-cyan-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500 p-2 rounded-lg">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              AquaKids Academy
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#why-us" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Why Us</a>
            <a href="#programs" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Programs</a>
            <a href="#testimonials" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Testimonials</a>
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-200 transition-all hover:scale-105 active:scale-95">
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <a href="#why-us" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>Why Us</a>
                <a href="#programs" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>Programs</a>
                <a href="#testimonials" className="text-lg font-medium p-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                <button className="bg-amber-400 text-slate-900 w-full py-4 rounded-xl font-bold">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero.jpg"
              alt="Kid learning to swim"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Where <span className="text-amber-400">Safety</span> Meets <span className="text-cyan-400">Fun</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Empowering children with life-saving skills through our proprietary play-based curriculum in our shiver-free, 90-degree pools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-cyan-900/20 transition-all hover:scale-105">
                  Book a Free Trial
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all">
                  View Our Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">The Golden Experience</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We believe learning to swim should be an adventure. Here's why families choose AquaKids Academy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-cyan-600" />,
                  title: 'Safety First',
                  desc: 'Every lesson focuses on essential water safety skills, led by lifeguard-certified instructors.',
                },
                {
                  icon: <Award className="w-10 h-10 text-amber-500" />,
                  title: 'Certified Instructors',
                  desc: 'Our teachers undergo rigorous training to ensure your child receives the highest quality instruction.',
                },
                {
                  icon: <Thermometer className="w-10 h-10 text-blue-500" />,
                  title: 'Warm Water Pools',
                  desc: 'Our pools are kept at a shiver-free 90 degrees, making every splash comfortable and fun.',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-8 rounded-3xl text-center border border-slate-100"
                >
                  <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Swimming Programs</h2>
                <p className="text-xl text-slate-600">Progressive levels designed for every age and skill level.</p>
              </div>
              <button className="text-cyan-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Compare All Levels <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, i) => (
                <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block", program.color)}>
                      {program.age}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <button className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-900 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">What Parents Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-24 bg-cyan-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to jump in?</h2>
                <p className="text-xl text-cyan-50 mb-8">
                  Fill out the form to schedule your free trial lesson. No obligation, just splashes!
                </p>
                <div className="space-y-4">
                  {[
                    'Free 30-minute trial lesson',
                    'Meet our certified instructors',
                    'Tour our state-of-the-art facility',
                    'No registration fee for new families'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-400" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Parent's Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Child's Age</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none transition-all">
                      <option>Infant (4-35 months)</option>
                      <option>Preschool (3-5 years)</option>
                      <option>School Age (6-12 years)</option>
                      <option>Competitive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none transition-all h-32" placeholder="Tell us about your child's swimming experience..."></textarea>
                  </div>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-200 transition-all hover:scale-[1.02]">
                    Book My Free Trial
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <Waves className="w-6 h-6 text-cyan-400" />
                <span className="text-2xl font-bold">AquaKids Academy</span>
              </div>
              <p className="max-w-md mb-8">
                Building confident swimmers and safer communities through our passion for water safety and high-quality instruction.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Us</a></li>
                <li><a href="#programs" className="hover:text-cyan-400 transition-colors">Programs</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li>123 Splash Avenue<br />Poolville, FL 33101</li>
                <li>(555) AQUA-KIDS</li>
                <li>hello@aquakids.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm">
            <p>© 2026 AquaKids Academy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Wrench, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Settings,
  ShieldCheck,
  Disc,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const icons = [Settings, ShieldCheck, Disc];

// Section Label Component for consistent styling
const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="font-mono text-xs uppercase tracking-widest text-vw-teal/60 mb-6 block">
    {children}
  </span>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* 10. Header / Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-parchment/90 backdrop-blur-md py-4 border-b border-oil/5 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wrench className="w-8 h-8 text-vw-blue" />
            <span className="font-display text-2xl font-bold tracking-tight text-oil">
              BEETLE<span className="text-vw-blue">POWER</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#about" className="hover:text-vw-blue transition-colors">About</a>
            <a href="#services" className="hover:text-vw-blue transition-colors">Services</a>
            <a href="#specialty" className="hover:text-vw-blue transition-colors">Specialty</a>
            <a href="#contact" className="hover:text-vw-blue transition-colors">Contact</a>
            <a 
              href="tel:9258462025" 
              className="bg-vw-blue text-white px-6 py-2.5 rounded-full hover:bg-vw-teal transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              (925) 846-2025
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-parchment border-b border-oil/10 md:hidden p-6 shadow-xl"
            >
              <div className="flex flex-col gap-4 text-lg font-medium">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#specialty" onClick={() => setIsMenuOpen(false)}>Specialty</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="tel:9258462025" className="text-vw-blue items-center flex gap-2">
                  <Phone className="w-5 h-5" />
                  (925) 846-2025
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-vw-blue/5 rounded-l-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Est. in Pleasanton</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-oil">
              Pleasanton’s Trusted Shop for <span className="text-vw-teal underline decoration-vw-blue/20">Classic VW</span> & Everyday Vehicles
            </h1>
            <p className="text-lg md:text-xl text-oil/70 mb-10 max-w-lg leading-relaxed">
              Honest diagnostics, experienced mechanics, and reliable service you can count on for generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:9258462025"
                className="bg-oil text-white px-8 py-4 rounded-full font-medium hover:bg-oil/90 transition-all flex items-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call Now: (925) 846-2025
              </a>
              <button className="border-2 border-oil text-oil px-8 py-4 rounded-full font-medium hover:bg-oil hover:text-white transition-all">
                Request Appointment
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern professional car service" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oil/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-oil/5 flex items-center gap-4"
            >
              <div className="bg-vw-blue/10 p-3 rounded-full">
                <Star className="w-6 h-6 text-vw-blue fill-vw-blue" />
              </div>
              <div>
                <div className="font-bold text-xl">4.0 Rating</div>
                <div className="text-xs text-oil/50 uppercase tracking-widest">Local Trusted Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-oil text-white py-12 overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 group cursor-default">
              <CheckCircle2 className="w-6 h-6 text-vw-blue mb-1 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Local Trust</span>
              <span className="font-display font-medium text-sm md:text-base">4.0 Google Rating</span>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 group cursor-default">
              <Settings className="w-6 h-6 text-vw-blue mb-1 group-hover:rotate-45 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Specialty</span>
              <span className="font-display font-medium text-sm md:text-base">Classic & Air-Cooled VW</span>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 group cursor-default">
              <Wrench className="w-6 h-6 text-vw-blue mb-1 group-hover:-rotate-12 transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Services</span>
              <span className="font-display font-medium text-sm md:text-base">Full Maintenance</span>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 group cursor-default">
              <MapPin className="w-6 h-6 text-vw-blue mb-1 group-hover:translate-y-[-2px] transition-transform" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Legacy</span>
              <span className="font-display font-medium text-sm md:text-base">Serving Pleasanton for Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Inside Auto Repair Shop" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-vw-teal opacity-10 rounded-full blur-3xl -z-10" />
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-oil">About Beetle Power</h2>
              <div className="space-y-6 text-lg text-oil/70 leading-relaxed">
                <p>
                  Beetle Power has built a strong reputation in Pleasanton for honest, knowledgeable automotive repair. Known especially for expertise in classic Volkswagen vehicles, the shop also services a wide range of makes and models.
                </p>
                <p>
                  Customers appreciate straightforward advice, fair pricing, and mechanics who take the time to explain problems clearly. Whether you're driving a vintage air-cooled gem or your daily commuter, we treat every vehicle with the same meticulous care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-parchment relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-oil">Our Services</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Engine Diagnostics", desc: "Advanced scanning and light troubleshooting." },
              { title: "Oil Changes", desc: "Routine maintenance to keep your engine healthy." },
              { title: "Brake Repair", desc: "Complete safety inspections and part replacement." },
              { title: "Suspension", desc: "Steering and suspension work for a smooth ride." },
              { title: "Classic VW Repair", desc: "Specialty care for air-cooled engines and vintage rigs." },
              { title: "Air-Cooled Engine", desc: "Deep expertise in vintage Volkswagen mechanics." },
              { title: "General Repair", desc: "Servicing all makes and models with expert care." },
              { title: "Maintenance", desc: "Keep your vehicle on the road longer with scheduled checks." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemFade}
                className="hardware-card p-8 group hover:bg-vw-teal hover:text-white transition-all"
              >
                <div className="w-12 h-12 bg-vw-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Wrench className="w-6 h-6 text-vw-blue group-hover:text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SPECIALTY SECTION */}
      <section id="specialty" className="py-24 md:py-32 bg-oil text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="border border-white/10 p-2 rounded-[2.5rem]">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern car engine diagnostic" 
                className="rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design detail */}
            <div className="absolute -bottom-10 -left-10 text-white/5 font-display text-[12rem] font-black -z-10 select-none">
              VINTAGE
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <span className="font-mono text-xs uppercase tracking-widest text-vw-blue mb-6 block">Our Expertise</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Classic Volkswagen Specialists
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Beetle Power is known locally for working on classic VW vehicles including Beetles, Vanagons, and air-cooled engines. 
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Whether it’s restoration work or troubleshooting an elusive mechanical issue, customers trust our shop’s deep knowledge and decades of specialized experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-vw-blue" />
                <span className="font-medium">Beetle Restorations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-vw-blue" />
                <span className="font-medium">Vanagon Maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-vw-blue" />
                <span className="font-medium">Air-Cooled Engine Work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-vw-blue" />
                <span className="font-medium">Vintage Electrical</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS / TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-oil">What Customers Say</h2>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 text-vw-blue fill-vw-blue" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "“Great service with good advice and tons of knowledge.”",
              "“Very impressed with the care when I broke down. They really helped me out.”",
              "“Bill was very helpful, the shop is organized, and the work looks great.”",
              "“Got my car back on the road quickly. I’ll definitely be back.”",
              "“Excellent VW shop — the place to go for air-cooled work.”"
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-parchment p-10 rounded-3xl relative h-full flex flex-col justify-between"
              >
                <div className="absolute top-8 left-8 text-6xl font-serif text-oil/5 leading-none">“</div>
                <p className="text-lg italic text-oil font-medium relative z-10 mb-8">{review}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vw-blue/10 flex items-center justify-center font-bold text-vw-blue text-xs">
                    V
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-oil/40">Verified Local Customer</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-vw-teal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 block">The Beetle Power Difference</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">Why Choose Beetle Power?</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                <p className="text-xl text-white/80 leading-relaxed mb-6 font-medium">
                  We don't just fix cars; we maintain a legacy of mechanical excellence in Pleasanton.
                </p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-vw-blue"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:block hidden" />
            <div className="lg:col-span-6 flex flex-col gap-8">
              {[
                "Honest and straightforward service",
                "Deep expertise in classic vehicles",
                "Loyal long-term customers",
                "Hands-on, knowledgeable mechanics",
                "Clean and organized workspace"
              ].map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-mono text-xs font-bold text-vw-blue group-hover:bg-vw-blue group-hover:text-white transition-all">
                    0{idx + 1}
                  </div>
                  <span className="text-xl md:text-2xl font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LOCATION & CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Visit Us</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-oil mb-10">Get in Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-parchment rounded-2xl flex items-center justify-center text-vw-blue shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-oil/60 leading-relaxed font-medium">
                      1809 Santa Rita Rd Suite G,<br />Pleasanton, CA
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=1809+Santa+Rita+Rd+Suite+G+Pleasanton+CA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-vw-blue font-bold hover:underline"
                    >
                      Get Directions <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-parchment rounded-2xl flex items-center justify-center text-vw-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Call Us</h4>
                    <a href="tel:9258462025" className="text-3xl font-display font-bold text-vw-blue hover:text-vw-teal transition-colors">
                      (925) 846-2025
                    </a>
                    <p className="text-oil/40 text-sm mt-2 font-mono uppercase">Direct Shop Line</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-parchment rounded-2xl flex items-center justify-center text-vw-blue shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Shop Hours</h4>
                    <p className="text-oil/60 leading-relaxed font-medium">
                      Monday – Friday: 8:00 AM – 5:30 PM<br />
                      Saturday – Sunday: Closed
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-vw-blue/10 text-vw-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Currently Open
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full min-h-[400px] bg-parchment rounded-3xl overflow-hidden shadow-inner border border-oil/5">
              {/* Google Map Mock - Real embed could be added here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.402517865768!2d-121.8797824!3d37.6631853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe990264000eb%3A0xc3f837372332bb1d!2sBeetle%20Power!5e0!3m2!1sen!2sus!4v1713650000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION (BOTTOM) */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-oil rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-vw-blue/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-vw-teal/20 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Need Reliable Auto Repair?</h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Call today or stop by our Pleasanton shop for honest diagnostics and quality repairs from specialists who care.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="tel:9258462025"
                  className="bg-vw-blue text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-oil transition-all flex items-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (925) 846-2025
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=1809+Santa+Rita+Rd+Suite+G+Pleasanton+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-white py-16 border-t border-oil/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Wrench className="w-8 h-8 text-vw-blue" />
                <span className="font-display text-2xl font-bold tracking-tight text-oil">
                  BEETLE<span className="text-vw-blue">POWER</span>
                </span>
              </div>
              <p className="text-oil/60 max-w-md text-sm leading-relaxed mb-8">
                Your neighborhood specialist for vintage Volkswagen repair and comprehensive care for all modern makes and models in Pleasanton, CA.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders if needed */}
              </div>
            </div>
            <div>
              <h5 className="font-display font-bold uppercase tracking-widest text-xs mb-6 text-oil/40">Navigation</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#about" className="hover:text-vw-blue transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-vw-blue transition-colors">Services</a></li>
                <li><a href="#specialty" className="hover:text-vw-blue transition-colors">Specialists</a></li>
                <li><a href="#contact" className="hover:text-vw-blue transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-display font-bold uppercase tracking-widest text-xs mb-6 text-oil/40">Contact</h5>
              <ul className="space-y-4 text-sm font-medium text-oil/70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-vw-blue shrink-0 mt-0.5" />
                  1809 Santa Rita Rd Suite G,<br />Pleasanton, CA 94566
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-vw-blue shrink-0" />
                  (925) 846-2025
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-vw-blue shrink-0" />
                  Mon-Fri: 8:00 AM - 5:30 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-oil/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-oil/30 font-mono">
            <span>© {new Date().getFullYear()} Beetle Power Auto Repair. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-oil">Privacy Policy</a>
              <a href="#" className="hover:text-oil">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, MapPin, Clock, ChevronRight, Star, CheckCircle2, Facebook, Instagram, Twitter } from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Calendar className="text-white w-6 h-6" />
          </div>
          <span className={cn("text-xl font-bold tracking-tight", isScrolled ? "text-slate-900" : "text-slate-900")}>
            SmileCare
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Top Rated Dental Care in the City</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Your Smile is Our <br />
            <span className="text-blue-600">Greatest Passion.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Experience world-class dental care with a gentle touch. Our expert team uses the latest technology to give you the healthy, beautiful smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
              Book Your Visit
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              (555) 123-4567
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Patient" 
                  className="w-12 h-12 rounded-full border-4 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-500 font-medium">500+ Happy Patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/seed/dentist/800/1000" 
              alt="Modern Dental Office" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Next Available</p>
                <p className="text-slate-900 font-bold">Today, 2:30 PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      desc: "Comprehensive exams, cleanings, and preventative care for the whole family.",
      icon: "🦷",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Transform your smile with whitening, veneers, and aesthetic bonding.",
      icon: "✨",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking solutions for missing teeth.",
      icon: "🔩",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Orthodontics",
      desc: "Straighten your teeth with modern braces or clear aligners.",
      icon: "📏",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Oral Surgery",
      desc: "Expert surgical care including extractions and wisdom tooth removal.",
      icon: "🏥",
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Emergency Care",
      desc: "Same-day appointments for urgent dental needs and pain relief.",
      icon: "🚨",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Pediatric Dentistry",
      desc: "Specialized care for children in a fun and friendly environment.",
      icon: "👶",
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Periodontal Therapy",
      desc: "Advanced gum disease treatment to protect your oral health.",
      icon: "🌿",
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Sleep Apnea",
      desc: "Custom appliances to help you breathe better and sleep soundly.",
      icon: "😴",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Dental Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of dental services tailored to your unique needs, ensuring your oral health is always in top condition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6", service.color)}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a href="#" className="text-blue-600 font-bold flex items-center gap-2 group">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Book Appointment",
      desc: "Schedule your visit online or via phone in just a few clicks.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Consultation",
      desc: "Meet our experts for a detailed exam and personalized plan.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Treatment",
      desc: "Receive world-class care using the latest dental technology.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Smile Bright",
      desc: "Walk out with a healthy, beautiful smile you'll love to show.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">How it Works</h2>
          <h3 className="text-4xl font-bold text-slate-900">Your Journey to a Better Smile</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-200 border-4 border-white">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How often should I visit the dentist?",
      a: "We recommend a professional cleaning and checkup every six months to maintain optimal oral health and catch potential issues early."
    },
    {
      q: "Do you accept dental insurance?",
      a: "Yes, we accept most major PPO insurance plans. Our team will handle all the paperwork and help you maximize your benefits."
    },
    {
      q: "Is teeth whitening safe?",
      a: "Absolutely. Our professional whitening treatments are safe, effective, and monitored by our experts to ensure minimal sensitivity."
    },
    {
      q: "What should I do in a dental emergency?",
      a: "Call us immediately! We reserve time for emergency cases every day and will do our best to see you as soon as possible."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h2>
          <h3 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                <ChevronRight className={cn("w-5 h-5 text-blue-600 transition-transform", openIndex === i && "rotate-90")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-slate-500 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Trusted by Major Insurance Providers</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          {['Aetna', 'Cigna', 'Delta Dental', 'MetLife', 'UnitedHealthcare'].map((name) => (
            <span key={name} className="text-2xl font-black text-slate-900">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Miller",
      specialization: "Orthodontist",
      bio: "Specializing in modern aligners and traditional braces with over 12 years of clinical experience.",
      image: "https://picsum.photos/seed/doc1/400/500"
    },
    {
      name: "Dr. James Wilson",
      specialization: "Oral Surgeon",
      bio: "Expert in complex extractions and dental implants with a focus on painless surgical techniques.",
      image: "https://picsum.photos/seed/doc2/400/500"
    },
    {
      name: "Dr. Elena Rodriguez",
      specialization: "Cosmetic Dentist",
      bio: "Dedicated to creating perfect smiles through advanced whitening and aesthetic veneer techniques.",
      image: "https://picsum.photos/seed/doc3/400/500"
    },
    {
      name: "Dr. David Chen",
      specialization: "Pediatric Dentist",
      bio: "Passionate about making dental visits fun and stress-free for children of all ages.",
      image: "https://picsum.photos/seed/doc4/400/500"
    }
  ];

  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our Specialists</h2>
        <h3 className="text-4xl font-bold text-white">Meet Our Expert Dentists</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-4 transition-all"
          >
            <div className="relative overflow-hidden rounded-[2rem] mb-6">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5 text-white cursor-pointer hover:text-blue-400 transition-colors" />
                  <Twitter className="w-5 h-5 text-white cursor-pointer hover:text-blue-400 transition-colors" />
                  <Instagram className="w-5 h-5 text-white cursor-pointer hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">{doc.specialization}</p>
              <h4 className="text-2xl font-bold text-white mb-3">{doc.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{doc.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://picsum.photos/seed/team1/400/500" 
                  alt="Our Team" 
                  className="rounded-3xl w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-blue-600 p-6 rounded-3xl text-center">
                  <p className="text-4xl font-bold mb-1">15+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl text-center border border-white/10">
                  <p className="text-4xl font-bold mb-1">5k+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Happy Patients</p>
                </div>
                <img 
                  src="https://picsum.photos/seed/team2/400/500" 
                  alt="Our Clinic" 
                  className="rounded-3xl w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">About SmileCare</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Exceptional Care for <br />
              Every Generation.
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Founded in 2010, SmileCare has been at the forefront of dental innovation. We believe that a visit to the dentist should be comfortable, informative, and even enjoyable.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "State-of-the-art diagnostic technology",
                "Highly qualified and compassionate staff",
                "Personalized treatment plans for every patient",
                "Comfortable, spa-like clinic environment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all">
              Learn More About Us
            </button>
          </div>
        </div>

        <Doctors />
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      text: "The best dental experience I've ever had. The staff is incredibly friendly and the results of my whitening treatment were amazing!",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      text: "I was always nervous about dentists, but SmileCare made me feel completely at ease. Their implant procedure was painless and professional.",
      avatar: "https://picsum.photos/seed/michael/100/100"
    },
    {
      name: "Emily Davis",
      role: "Teacher",
      text: "My kids actually look forward to their dental checkups now. The pediatric care here is second to none. Highly recommended!",
      avatar: "https://picsum.photos/seed/emily/100/100"
    },
    {
      name: "Robert Taylor",
      role: "Architect",
      text: "The technology they use is impressive. Everything was explained clearly, and the results exceeded my expectations.",
      avatar: "https://picsum.photos/seed/robert/100/100"
    },
    {
      name: "Lisa Wong",
      role: "Designer",
      text: "Beautiful clinic and even more beautiful results. My veneers look so natural. Thank you, Dr. Rodriguez!",
      avatar: "https://picsum.photos/seed/lisa/100/100"
    },
    {
      name: "Kevin Smith",
      role: "Marketing Manager",
      text: "Professional, punctual, and very caring. The best dental team in the city without a doubt.",
      avatar: "https://picsum.photos/seed/kevin/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Patient Stories</h2>
          <h3 className="text-4xl font-bold text-slate-900">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-12 md:w-1/2 text-white">
            <h2 className="text-4xl font-bold mb-8">Ready for a Better Smile?</h2>
            <p className="text-blue-100 mb-12 text-lg">
              Book your appointment today and take the first step towards perfect oral health.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-bold">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-xl font-bold">123 Dental Plaza, Suite 400 <br />Medical District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-xl font-bold">Mon - Fri: 8:00 AM - 6:00 PM <br />Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option>General Checkup</option>
                  <option>Teeth Whitening</option>
                  <option>Dental Implants</option>
                  <option>Orthodontics</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Additional Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all h-32" placeholder="Tell us about your dental concerns..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SmileCare</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Providing top-quality dental care with a focus on patient comfort and advanced technology. Your healthy smile is our priority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Our Team', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-4">
              {['Teeth Whitening', 'Dental Implants', 'Oral Surgery', 'Orthodontics', 'Prevention'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© 2026 SmileCare Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Code, Cpu, Zap, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function B2WServicesWithStats() {
  // Custom Styles for Font & Animation
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    .font-outfit { font-family: 'Outfit', sans-serif; }
    
    @keyframes border-flow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-border-flow {
      /* Changed from 4s to 8s to make it slower */
      animation: border-flow 8s linear infinite;
    }
  `

  // --- STATE & REFS ---
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    developers: 0,
    clients: 0,
    technologies: 0
  });

  const [isVisible, setIsVisible] = useState({
    header: false,
    services: false,
    stats: false
  });

  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  const finalStats = {
    projects: 1200,
    developers: 450,
    clients: 890,
    technologies: 100
  };

  // --- ANIMATION LOGIC ---
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats({
        projects: Math.floor(finalStats.projects * easeOutCubic),
        developers: Math.floor(finalStats.developers * easeOutCubic),
        clients: Math.floor(finalStats.clients * easeOutCubic),
        technologies: Math.floor(finalStats.technologies * easeOutCubic)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // --- OBSERVER LOGIC ---
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target === headerRef.current) {
            setIsVisible(prev => ({ ...prev, header: true }));
          } else if (target === servicesRef.current) {
            setIsVisible(prev => ({ ...prev, services: true }));
          } else if (target === statsRef.current) {
            setIsVisible(prev => ({ ...prev, stats: true }));
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  // --- DATA ---
  const services = [
    {
      title: "Web Development",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Custom web applications built with modern technologies for exceptional user experiences and business growth.",
      link: "/services/web-development"
    },
    {
      title: "Mobile Application Development",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      link: "/services/mobile-application-development"
    },
    {
      title: "UI/UX Design & Prototyping",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "User-centered design solutions that create intuitive, engaging digital experiences that drive conversions.",
      link: "/services/ui-ux-design-prototyping"
    },
    {
      title: "IT Staff Augmentation",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Scale your development capacity instantly with pre-vetted IT professionals and flexible engagement models.",
      link: "/services/it-staff-augmentation"
    },
    {
      title: "Cloud Computing & DevOps",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Scalable cloud infrastructure and DevOps practices for reliable, high-performance applications.",
      link: "/services/cloud-computing-devops"
    },
    {
      title: "AI & Chatbots",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Intelligent AI solutions and conversational chatbots that enhance user experiences and automate customer interactions.",
      link: "/services/ai-chatbots"
    }
  ];

  const stats = [
    {
      number: animatedStats.projects,
      suffix: '+',
      label: 'Completed Projects Worldwide',
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
    },
    {
      number: animatedStats.developers,
      suffix: '+',
      label: 'Expert Developers Available',
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
    },
    {
      number: animatedStats.clients,
      suffix: '+',
      label: 'Satisfied Global Clients',
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" /></svg>
    },
    {
      number: animatedStats.technologies,
      suffix: '+',
      label: 'Technologies & Frameworks',
      icon: <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>
    }
  ];

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8 flex items-center justify-center font-outfit text-slate-900">
      <style>{customStyles}</style>
      <div className="max-w-[1100px] w-full flex flex-col gap-8 md:gap-10">

        {/* ==================== 1. HEADER ==================== */}
        <div 
            ref={headerRef}
            className={`flex flex-col items-center text-center gap-3 sm:gap-4 transition-all duration-1000 ${
              isVisible.header 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              Discover the Power of <span className="text-[#1e40af]">AI-Driven Development</span> 
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our comprehensive AI-powered IT outsourcing solutions designed to transform your business 
              with revolutionary development processes and digital transformation.
            </p>
        </div>
        
        {/* ==================== 2. BENTO GRID ==================== */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-200 ${
            isVisible.services
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
          }`}
        >
          
          {/* --- Column 1 (Left) --- */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Card 1: Web Development */}
            <Link href={services[0].link} className="relative group rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[240px] bg-slate-100">
              {/* Massive Spinning Gradient Layer */}
              <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />
              
              {/* Inner White Mask */}
              <div className="absolute inset-[2px] bg-white rounded-[30px] z-10" />

              {/* Content Container */}
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-between">
                <div className="w-12 h-12 bg-[#1e40af] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {React.createElement(services[0].icon, { size: 22, strokeWidth: 2.5 })}
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    <span className="text-slate-900 font-bold text-lg block mb-1">{services[0].title}</span>
                    {services[0].description}
                </p>
              </div>
            </Link>

            {/* Card 2: Mobile App */}
            <Link href={services[1].link} className="relative group rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[240px] bg-slate-100">
              {/* Massive Spinning Gradient */}
              <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />
              
              {/* Inner Mask */}
              <div className="absolute inset-[2px] bg-white rounded-[30px] z-10" />
              
              {/* Content */}
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-between">
                <div className="w-12 h-12 bg-[#1e40af] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {React.createElement(services[1].icon, { size: 22, strokeWidth: 2.5 })}
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    <span className="text-slate-900 font-bold text-lg block mb-1">{services[1].title}</span>
                    {services[1].description}
                </p>
              </div>
            </Link>
          </div>

          {/* --- Column 2 (Center) --- */}
          <div className="md:col-span-1 flex flex-col gap-4 md:gap-6 h-full">
             {/* Image Card: UI/UX (Main visual) - NOW WITH GLOWING BORDER */}
            <Link href={services[2].link} className="relative group rounded-[32px] overflow-hidden h-full w-full min-h-[300px] md:min-h-[400px] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-slate-100">
              {/* Massive Spinning Gradient */}
              <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />

              {/* Inner Mask (serving as image container now) - needs overflow hidden for rounded corners on image */}
              <div className="absolute inset-[2px] bg-white rounded-[30px] z-10 overflow-hidden">
                <img 
                    src={services[2].image} 
                    alt={services[2].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white font-bold text-xl">{services[2].title}</span>
                </div>
              </div>
            </Link>

            {/* Card 6: AI & Chatbots */}
             <Link href={services[5].link} className="relative group rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-slate-100">
               {/* Massive Spinning Gradient */}
               <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />
               
               {/* Inner Mask */}
               <div className="absolute inset-[2px] bg-white rounded-[30px] z-10" />
               
               {/* Content */}
               <div className="relative z-20 h-full w-full p-6 flex flex-row items-center gap-4">
                   <div className="w-10 h-10 bg-[#1e40af] rounded-xl flex-shrink-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                     {React.createElement(services[5].icon, { size: 20, strokeWidth: 2.5 })}
                   </div>
                   <div>
                     <span className="text-slate-900 font-bold text-md block leading-tight">{services[5].title}</span>
                     <span className="text-slate-500 text-xs font-medium block mt-1">Intelligent automation</span>
                   </div>
               </div>
            </Link>
          </div>

          {/* --- Column 3 (Right) --- */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Card 4: IT Staff Augmentation */}
            <Link href={services[3].link} className="relative group rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[240px] bg-slate-100">
              {/* Massive Spinning Gradient */}
              <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />
              
              {/* Inner Mask */}
              <div className="absolute inset-[2px] bg-white rounded-[30px] z-10" />
              
              {/* Content */}
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-between">
                <div className="w-12 h-12 bg-[#1e40af] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {React.createElement(services[3].icon, { size: 22, strokeWidth: 2.5 })}
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    <span className="text-slate-900 font-bold text-lg block mb-1">{services[3].title}</span>
                    {services[3].description}
                </p>
              </div>
            </Link>

            {/* Card 5: Cloud Computing */}
            <Link href={services[4].link} className="relative group rounded-[32px] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[240px] bg-slate-100">
              {/* Massive Spinning Gradient */}
              <div className="absolute inset-[-350%] bg-[conic-gradient(transparent_0deg,transparent_270deg,#2563eb_360deg)] animate-border-flow" />
              
              {/* Inner Mask */}
              <div className="absolute inset-[2px] bg-white rounded-[30px] z-10" />
              
              {/* Content */}
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-between">
                <div className="w-12 h-12 bg-[#1e40af] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {React.createElement(services[4].icon, { size: 22, strokeWidth: 2.5 })}
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    <span className="text-slate-900 font-bold text-lg block mb-1">{services[4].title}</span>
                    {services[4].description}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* ==================== 3. STATS SECTION ==================== */}
        <div className="relative z-10 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <div 
               ref={statsRef}
               className={`text-left mb-10 sm:mb-12 transition-all duration-1000 ${
                 isVisible.stats 
                   ? 'opacity-100 translate-x-0' 
                   : 'opacity-0 -translate-x-8'
               }`}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Platform <span className="text-[#1e40af]">Performance</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl leading-relaxed font-medium">
                We help you unleash the power of AI-driven development to transform your business processes 
                and connect with revolutionary IT outsourcing solutions worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-500 overflow-hidden ${
                    isVisible.stats 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: isVisible.stats ? `${index * 200}ms` : '0ms' }}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1e40af] rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 text-white">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 transition-all duration-300">
                      {stat.number.toLocaleString()}{stat.suffix}
                    </div>
                    
                    {/* Label */}
                    <div className="text-slate-500 font-semibold text-sm leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       

      </div>
    </div>
  )
}
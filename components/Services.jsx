"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Code, Cpu, Zap, Users, TrendingUp, Shield } from 'lucide-react';

export default function B2WServicesWithStats() {
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

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation
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

  // Intersection Observer for scroll animations
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

  const services = [
    {
      title: "Web Development",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "blue",
      description: "Custom web applications built with modern technologies for exceptional user experiences and business growth.",
      link: "/services/web-development"
    },
    {
      title: "Mobile Application Development",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "cyan",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      link: "/services/mobile-application-development"
    },
    {
      title: "UI/UX Design & Prototyping",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "purple",
      description: "User-centered design solutions that create intuitive, engaging digital experiences that drive conversions.",
      link: "/services/ui-ux-design-prototyping"
    },
    {
      title: "IT Staff Augmentation",
      icon: Users,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "green",
      description: "Scale your development capacity instantly with pre-vetted IT professionals and flexible engagement models.",
      link: "/services/it-staff-augmentation"
    },
    {
      title: "Cloud Computing & DevOps",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "blue",
      description: "Scalable cloud infrastructure and DevOps practices for reliable, high-performance applications.",
      link: "/services/cloud-computing-devops"
    },
    {
      title: "AI & Chatbots",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      iconColor: "purple",
      description: "Intelligent AI solutions and conversational chatbots that enhance user experiences and automate customer interactions.",
      link: "/services/ai-chatbots"
    }
  ];

  const stats = [
    {
      number: animatedStats.projects,
      suffix: '+',
      label: 'Completed Projects Worldwide',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: animatedStats.developers,
      suffix: '+',
      label: 'Expert Developers Available',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      number: animatedStats.clients,
      suffix: '+',
      label: 'Satisfied Global Clients',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: animatedStats.technologies,
      suffix: '+',
      label: 'Technologies & Frameworks',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#ecf1f2'}}>
      {/* Background Effects - Professional theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-2xl opacity-20" style={{backgroundColor: '#e5e7eb'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-2xl opacity-10" style={{backgroundColor: '#f3f4f6'}}></div>
      </div>

      {/* Services Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={headerRef}
            className={`flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
              isVisible.header 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight leading-tight">
              Discover the Power of <span className="text-blue-800">AI-Driven Development</span> 
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive AI-powered IT outsourcing solutions designed to transform your business 
              with revolutionary development processes and digital transformation.
            </p>
          </div>
          <div 
            ref={servicesRef}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.link}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-gray-300 hover:-translate-y-2 block ${
                  isVisible.services 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible.services ? `${index * 150}ms` : '0ms'
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div className="absolute left-4 sm:left-6 top-4 sm:top-6">
                    <div className="rounded-xl sm:rounded-2xl bg-gray-100 border border-gray-200 p-2 sm:p-3 transition-all duration-300 group-hover:bg-gray-50 group-hover:scale-110">
                      <service.icon className="h-5 w-5 sm:h-7 sm:w-7 text-gray-700" />
                    </div>
                  </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black transition-all duration-300 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div 
            ref={statsRef}
            className={`text-left mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
              isVisible.stats 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              Our Platform <span className="text-black">Performance</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
              We help you unleash the power of AI-driven development to transform your business processes 
              and connect with revolutionary IT outsourcing solutions worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isVisible.stats 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible.stats ? `${index * 200}ms` : '0ms'
                }}
              >
                {/* Background decoration */}
                {/* <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 ${stat.bgColor} rounded-full -mr-8 sm:-mr-10 -mt-8 sm:-mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div> */}
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-all duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-1 sm:mb-2 transition-all duration-300">
                    {stat.number.toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-700 font-semibold text-xs sm:text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 ${
            isVisible.stats 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: isVisible.stats ? '800ms' : '0ms'
          }}
          >
            <div className="inline-flex items-center space-x-3 text-gray-700 bg-white border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-700">Trusted by thousands of businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
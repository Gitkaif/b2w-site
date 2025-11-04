"use client";

import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      name: "Startup",
      price: "$2,999",
      period: "/month",
      billing: "billed yearly",
      billingNote: "or $3,499 billed monthly",
      buttonText: "Start AI Development",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      popular: false,
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      billing: "billed yearly", 
      billingNote: "or $9,499 billed monthly",
      buttonText: "Start AI Development",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$15,999",
      period: "/month",
      billing: "billed yearly",
      billingNote: "or $18,999 billed monthly",
      buttonText: "Start AI Development", 
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      popular: false,
    },
    {
      name: "Custom",
      price: "Contact us",
      period: "",
      billing: "for tailored solutions",
      billingNote: "",
      buttonText: "Get Consultation",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
      popular: false,
    },
  ]

  const topFeatures = [
    { name: "Dedicated Development Team", startup: "3-5 developers", professional: "8-12 developers", enterprise: "15-25 developers", custom: "Unlimited team" },
    {
      name: "AI-Powered Code Generation",
      startup: "50 hours/month",
      professional: "150 hours/month", 
      enterprise: "300 hours/month",
      custom: "Unlimited",
    },
    {
      name: "Custom Software Development",
      startup: "1 project",
      professional: "3 projects",
      enterprise: "Unlimited projects",
      custom: "Enterprise solutions",
    },
    {
      name: "Digital Transformation",
      startup: "Basic consulting",
      professional: "Advanced strategy",
      enterprise: "Full transformation",
      custom: "End-to-end solutions",
    },
    {
      name: "AI/ML Integration",
      startup: "Basic AI tools",
      professional: "Advanced AI/ML",
      enterprise: "Custom AI models",
      custom: "Proprietary AI systems",
    },
    { name: "Development Speed", startup: "40% faster", professional: "60% faster", enterprise: "80% faster", custom: "Maximum efficiency" },
    {
      name: "Support & Maintenance",
      startup: "Business hours",
      professional: "24/7 support",
      enterprise: "Dedicated support",
      custom: "White-glove service",
    },
  ]

  const productCapabilities = [
    { name: "AI-Driven Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Full-Stack Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Mobile App Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Web Application Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Advanced AI/ML Solutions", startup: false, professional: true, enterprise: true, custom: true },
    { name: "Digital Transformation", startup: false, professional: true, enterprise: true, custom: true },
    { name: "API Development & Integration", startup: false, professional: true, enterprise: true, custom: true },
    { name: "Custom AI Model Development", startup: false, professional: false, enterprise: true, custom: true },
    { name: "Enterprise Architecture", startup: false, professional: false, enterprise: true, custom: true },
    { name: "White-label Solutions", startup: false, professional: false, enterprise: false, custom: true },
    { name: "Dedicated Project Manager", startup: false, professional: false, enterprise: false, custom: true },
  ]

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden" style={{backgroundColor: '#ecf1f2'}}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="text-black">AI-Driven Development</span> Pricing Plans
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From startups to enterprises, choose the perfect AI-powered development solution. Accelerate your digital transformation with our comprehensive full-stack development and AI integration services.
          </p>
        </div>

        {/* Most Popular Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-800 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-blue-500/25 border border-blue-400/30">
            MOST POPULAR
          </div>
        </div>

        {/* Mobile Plans Layout */}
        <div className="block lg:hidden space-y-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-6 border ${plan.popular ? "border-blue-500/50 bg-blue-800/10" : "border-gray-300"} shadow-lg`}
            >
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-4 ${plan.popular ? "text-blue-600" : "text-black"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-700 text-lg">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{plan.billing}</p>
                {plan.billingNote && <p className="text-xs text-gray-600 mb-6">{plan.billingNote}</p>}
                <button
                  className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Pricing Section */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-300">
          <div className="grid grid-cols-5 min-h-[400px]">
            {/* Left Column - Choose your plan */}
            <div className="bg-gray-100 p-8 flex items-center justify-center border-r border-gray-300">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-black leading-tight">
                  Choose
                  <br />
                  <span className="text-black">your plan</span>
                </h2>
              </div>
            </div>

            {/* Pricing Cards */}
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 text-center border-r border-gray-300 last:border-r-0 flex flex-col justify-between ${plan.popular ? "bg-blue-800/10" : "bg-white"}`}
              >
                <div>
                  <h3 className={`text-xl font-bold mb-6 ${plan.popular ? "text-blue-600" : "text-black"}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-700 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{plan.billing}</p>
                  {plan.billingNote && <p className="text-xs text-gray-600 mb-8">{plan.billingNote}</p>}
                </div>
                <button
                  className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">
          {/* Top Features Section */}
          <div className="bg-blue-800/20 px-4 sm:px-8 py-4 border-b border-gray-300">
            <h3 className="text-lg font-bold text-black">Development Features</h3>
          </div>

          {/* Mobile Features Layout */}
          <div className="block lg:hidden">
            {topFeatures.map((feature, index) => (
              <div key={index} className="border-b border-gray-300 last:border-b-0 p-4">
                <div className="flex items-center mb-3">
                  <span className="font-medium text-black">{feature.name}</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <span className="text-xs text-blue-600 font-bold">?</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-700 mb-1">Startup</div>
                    <div className="text-gray-700">{feature.startup}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 mb-1">Professional</div>
                    <div className="text-gray-700">{feature.professional}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 mb-1">Enterprise</div>
                    <div className="text-gray-700">{feature.enterprise}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 mb-1">Custom</div>
                    <div className="text-gray-700">{feature.custom}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Features Layout */}
          <div className="hidden lg:block">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-5 border-b border-gray-300 last:border-b-0 hover:bg-blue-500/10 transition-colors"
              >
                <div className="px-8 py-4 bg-blue-800/10 font-medium text-black border-r border-gray-300 flex items-center">
                  <span>{feature.name}</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <span className="text-xs text-blue-600 font-bold">?</span>
                  </div>
                </div>
                <div className="px-8 py-4 text-center text-gray-700 border-r border-gray-300 flex items-center justify-center">
                  {feature.startup}
                </div>
                <div className="px-8 py-4 text-center text-gray-700 border-r border-gray-300 flex items-center justify-center">
                  {feature.professional}
                </div>
                <div className="px-8 py-4 text-center text-gray-700 border-r border-gray-300 flex items-center justify-center">
                  {feature.enterprise}
                </div>
                <div className="px-8 py-4 text-center text-gray-700 flex items-center justify-center">
                  {feature.custom}
                </div>
              </div>
            ))}
          </div>

          {/* Product Capabilities Section */}
          <div className="bg-blue-800/20 px-4 sm:px-8 py-4 border-b border-gray-300">
            <h3 className="text-lg font-bold text-black">Development Capabilities</h3>
          </div>

          {/* Mobile Capabilities Layout */}
          <div className="block lg:hidden">
            {productCapabilities.map((capability, index) => (
              <div key={index} className="border-b border-gray-300 last:border-b-0 p-4">
                <div className="font-medium text-black mb-3">{capability.name}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Startup</span>
                    {capability.startup ? (
                      <Check className="w-5 h-5 text-blue-600" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Professional</span>
                    {capability.professional ? (
                      <Check className="w-5 h-5 text-blue-600" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Enterprise</span>
                    {capability.enterprise ? (
                      <Check className="w-5 h-5 text-blue-600" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Custom</span>
                    {capability.custom ? (
                      <Check className="w-5 h-5 text-blue-600" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Capabilities Layout */}
          <div className="hidden lg:block">
            {productCapabilities.map((capability, index) => (
              <div
                key={index}
                className="grid grid-cols-5 border-b border-gray-300 last:border-b-0 hover:bg-blue-500/10 transition-colors"
              >
                <div className="px-8 py-4 bg-blue-800/10 font-medium text-black border-r border-gray-300 flex items-center">
                  {capability.name}
                </div>
                <div className="px-8 py-4 text-center border-r border-gray-300 flex items-center justify-center">
                  {capability.startup ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center border-r border-gray-300 flex items-center justify-center">
                  {capability.professional ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center border-r border-gray-300 flex items-center justify-center">
                  {capability.enterprise ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center flex items-center justify-center">
                  {capability.custom ? (
                    <Check className="w-5 h-5 text-blue-600" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
"use client"

import { MessageSquare, X, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Client-side only stars effect component
function StarsEffect() {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Generate stars only on the client side
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      glow: Math.random() * 10 + 5,
      duration: Math.random() * 5 + 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute rounded-full bg-white" 
          style={{
            width: `${star.width}px`,
            height: `${star.height}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            boxShadow: `0 0 ${star.glow}px rgba(255,255,255,0.8)`,
            animation: `twinkle ${star.duration}s infinite ease-in-out`
          }}
        />
      ))}
    </div>
  );
}

// Simple draggable functionality
function useDraggable() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  return { position, handleMouseDown, isDragging };
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to B2W Infotech! I'm your AI assistant ready to help with IT outsourcing, custom software development, digital transformation, and AI implementation. How can we accelerate your business growth today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef(null);
  const { position, handleMouseDown, isDragging } = useDraggable();

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen && isMounted) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMounted]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  // Using a free OpenRouter model - you can get a free API key at openrouter.ai
  const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Format conversation history for OpenRouter
    const conversationHistory = [
      {
        role: "system",
        content: `You are the official AI assistant for B2W Infotech, a leading global IT services company. Respond as a knowledgeable company representative, not as someone analyzing text about the company.

CRITICAL FORMATTING RULES:
- NEVER use asterisks (*), bullet points, or markdown formatting
- Use simple, clean text with natural line breaks
- Use dashes (-) for lists instead of asterisks
- No bold, italic, or special formatting symbols
- Write in professional paragraphs with proper spacing

IMPORTANT: Speak directly as B2W Infotech's representative. Use "we," "our," and "us" when referring to the company. Never say "based on the text" or "according to the information provided." Present information as facts about your company.

B2W Infotech Overview:
We are a dynamic global provider of IT outsourcing, custom software development, and digital transformation solutions. With ISO/IEC 27001:2022 and ISO 9001:2015 certifications, we have built our reputation scaling businesses with future-ready, innovative technology across industries. We support startups, SMEs, and Fortune 500 enterprises as a strategic partner delivering excellence at every engagement.

Our Core Services:

IT Outsourcing and Team as a Service: We provide dedicated software experts, engineers, and agile specialists embedded into client teams for seamless collaboration and rapid results.

Custom Software Development: We deliver tailored solutions to optimize business processes, enhance system performance, and support growth. Our projects include ERP, CRM, and process automation tools solving unique client challenges.

AI Strategy and Implementation: We design and integrate intelligent AI-powered solutions including generative AI, predictive analytics, natural language processing, and computer vision for automation and deeper business insight.

Web and Mobile App Development: We build fast, intuitive web applications and cross-platform mobile apps with robust UX/UI, cloud-native architecture, and seamless third-party integrations.

MVP Development and Rapid Prototyping: We bring ideas to market fast with lean, scalable prototypes and minimum viable products.

IT Staff Augmentation: We supply skilled talent for projects, maintenance, and ongoing technical support.

Legacy Modernization and Cloud Migration: We upgrade monolithic systems, refactor legacy codebases, and migrate infrastructure to AWS, Azure, and other clouds.

DevOps and Automation: We design DevOps pipelines, CI/CD automation, infrastructure-as-code, and security optimization for agile software release cycles.

Our Experience:
- 15+ years in the industry
- 1200+ successful projects delivered
- 400+ skilled developers
- Clients include Walmart, Saudi Airlines, DP World, GoAir, HDFC, and MoneyControl

We serve industries including Retail and E-commerce, Agriculture and Green Finance, Banking and Financial Services, Healthcare, Travel and Logistics, Real Estate, Supply Chain, and Technology Consulting.

Communication Style:
- Be professional, confident, and helpful
- Use clear, business-appropriate language without any formatting symbols
- Speak naturally as a company representative
- Focus on how we can help solve their specific business challenges
- Ask relevant follow-up questions to understand their needs better
- Never use asterisks, bullets, or any markdown formatting

Always end responses by asking how we can specifically help with their IT or business challenges.`
      },
      ...messages,
      userMessage
    ];

    try {
      // Debug API key
      console.log('API Key available:', !!OPENROUTER_API_KEY);
      console.log('API Key starts with:', OPENROUTER_API_KEY?.substring(0, 20));
      
      if (!OPENROUTER_API_KEY) {
        throw new Error('OpenRouter API key is not configured. Please check your .env.local file.');
      }

      // Send request to OpenRouter API with a free model
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Nebula AI Assistant"
        },
        body: JSON.stringify({
          // model: "google/gemma-2-9b-it:free", // Working free model
          model: "openai/gpt-3.5-turbo",
          messages: conversationHistory,
          temperature: 0.7,
          max_tokens: 1024,
          top_p: 0.9
        }),
      });

      if (!response.ok) {
        throw new Error(`API response was not ok: ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.choices[0].message.content;

      // Add assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: generatedText }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error connecting to the AI service. Please try again in a moment. Make sure your OpenRouter API key is configured correctly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      { role: "assistant", content: "Chat cleared. I'm here to help with IT outsourcing, custom software development, AI solutions, and digital transformation. What technology challenge can B2W Infotech solve for you?" },
    ]);
  };

  return (
    <div 
      className={`fixed z-[80]`}
      style={{
        bottom: '96px',
        right: '24px',
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      {/* Collapsed chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          onMouseDown={handleMouseDown}
          className="w-14 h-14 rounded-full bg-black border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 relative backdrop-blur-xl"
          aria-label="Open chat"
        >
          <MessageSquare size={22} />
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-800 rounded-full border-2 border-black"></div>
        </button>
      )}

      {/* Expanded chat window */}
      {isOpen && (
        <div className="flex flex-col w-80 sm:w-96 h-[500px] bg-black/95 backdrop-blur-xl rounded-lg shadow-xl border border-blue-500/30 overflow-hidden relative max-h-[90vh]">
          {/* Stars effect - simplified */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0 bg-blue-800/10"></div>
          </div>
          
          {/* Header */}
          <div 
            className="bg-black/90 border-b border-blue-500/30 p-3 flex justify-between items-center cursor-move relative z-10 flex-shrink-0"
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-800 rounded-full mr-2 shadow-lg shadow-blue-500/50"></div>
              <h3 className="text-blue-400 font-medium text-sm">B2W Infotech AI Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={clearChat}
                className="text-blue-400 hover:text-white p-1 rounded transition-colors"
                aria-label="Clear chat"
              >
                <Trash2 size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-400 hover:text-white p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-3 ml-2">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
                <span className="text-sm text-blue-400">B2W Infotech is processing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-blue-500/30 p-3 bg-black/90">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Ask B2W Infotech anything..."
                className="flex-1 rounded-lg border border-blue-500/30 bg-black/60 px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 transition-all duration-200"
                disabled={isLoading}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="bg-blue-800 text-white rounded-lg w-10 h-10 flex items-center justify-center hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[80%] rounded-lg px-4 py-2.5 shadow-lg
          ${isUser 
            ? "bg-black/80 text-white border border-blue-500/30" 
            : "bg-black/60 text-gray-100 border border-blue-500/20"
          }
        `}
      >
        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}
"use client";
import { Play, Star, Quote } from 'lucide-react';

// --- Reusable Components ---

const VideoCard = ({ image, logo, name, company, tagColor, className = "" }) => (
  <div className={`relative group rounded-2xl overflow-hidden cursor-pointer min-h-[300px] ${className}`}>
    <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
    
    {/* Play Button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
        <Play className="w-7 h-7 text-white fill-white ml-1" />
      </div>
    </div>

    {/* Bottom Label */}
    <div className="absolute bottom-4 left-4 bg-[#1F2937]/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-3">
      {logo && (
        <div className={`w-6 h-6 ${tagColor} rounded-full flex items-center justify-center text-[10px] text-white font-bold`}>
          {logo}
        </div>
      )}
      <span className="text-white text-sm font-medium">{company}</span>
    </div>
  </div>
);

const ReviewCard = ({ avatar, name, role, text, stars, logo }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-fit">
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4">
        {avatar && <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-50" />}
        {logo && <div className="w-10 h-10 bg-[#1e40af] rounded-lg flex items-center justify-center text-white font-bold text-sm">{logo}</div>}
        <div>
          {name && <h4 className="font-bold text-slate-900 text-sm">{name}</h4>}
          {role && <p className="text-slate-500 text-xs font-medium">{role}</p>}
        </div>
      </div>
      {stars && (
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
          ))}
        </div>
      )}
    </div>
    <p className="text-slate-600 text-sm leading-7 font-medium">
      {text}
    </p>
  </div>
);

const QuoteCard = () => (
  <div className="bg-[#1e40af]/5 p-8 rounded-2xl border border-[#1e40af]/10 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[320px]">
    
    <p className="relative z-10 text-[#1e40af] text-lg font-medium leading-relaxed italic">
      "B2W Infotech helped us find order in the midst of chaos. Their transparent ISO processes and AI-driven testing reduced our budget overruns to zero. It's rare to find an outsourcing partner this reliable."
    </p>
   
  </div>
);

// --- Main Component ---

const TestimonialSection = () => {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            1,200+ Companies have <br /> <span className="text-[#1e40af]">Transformed</span> their business
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            See how B2W Infotech leverages AI and global talent to deliver measurable ROI.
          </p>
          <div className="pt-4">
            <button className="bg-[#1e40af] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Read Case Studies
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="space-y-6 flex flex-col">
            <VideoCard 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              company="FinTech Solutions"
              logo="F"
              tagColor="bg-[#1e40af]"
            />
            
            <ReviewCard 
              logo="G2"
              stars={true}
              text="B2W's staff augmentation service is seamless. We needed 5 Senior React Developers within a week, and they delivered. The AI code generation tools they use accelerated our roadmap by 40%."
            />

            <ReviewCard 
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              name="David Chen"
              role="CTO, HealthPlus"
              text="Our legacy system modernization seemed impossible until B2W stepped in. Their cloud migration strategy was flawless, ensuring HIPAA compliance without downtime."
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-6 flex flex-col h-full">
            <ReviewCard 
              avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              name="Sarah Jenkins"
              role="Founder, Retail.io"
              text="We chose B2W Infotech because of their transparent pricing and AI capabilities. The custom chatbot they built handles 80% of our customer queries automatically."
            />

            <QuoteCard />

            {/* Expanded Card to fill height */}
            <VideoCard 
              image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Fixed Image: Corporate Office / Logistics vibe
              company="Logistics Corp"
              logo="L"
              tagColor="bg-orange-500"
              className="flex-1" 
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-6 flex flex-col">
            <ReviewCard 
              logo="C"
              stars={true}
              text="What I really like about B2W is the reliability. Their QA testing team uses automated frameworks that caught bugs our internal team missed. It's a true partnership, not just a vendor relationship."
            />

            <VideoCard 
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              company="EduTech Global"
              logo="E"
              tagColor="bg-green-600"
            />

            <ReviewCard 
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              name="Marcus Johnson"
              role="Director, FutureScale"
              text="B2W Infotech has become a central asset for our digital transformation. They helped us leverage Python and TensorFlow to predict market trends, giving us a massive competitive edge."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
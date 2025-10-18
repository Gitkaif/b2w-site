"use client";

import { LeftCurve, RightCurve } from "@/components/design/Collaboration";
import { collabApps } from "@/constants";

// Inline Button component with the styling matching the image
const InlineButton = ({ href, onClick, className = "", children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 uppercase tracking-wider text-sm font-medium transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

// Check icon component
const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Feature item that matches the image
const FeatureItem = ({ title }) => (
  <li className="flex items-start">
    <CheckIcon />
    <h6 className="ml-3 text-black text-sm sm:text-base font-medium leading-relaxed">{title}</h6>
  </li>
);

// Collaboration features array
const CollaborationFeatures = [
  {
    title: "Web Development Excellence",
  },
  {
    title: "Mobile Application Development",
  },
  {
    title: "UI/UX Design & Prototyping",
  },
  {
    title: "Cloud Computing & DevOps",
  },
  {
    title: "AI & Chatbots Solutions",
  },
];

const Collaboration = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      <div className="container mx-auto px-4 sm:px-5 md:px-7 lg:px-8 xl:px-14 relative z-10 max-w-7xl">
        <div className="lg:flex items-start gap-6 lg:gap-8 xl:gap-16">
          {/* Left Content Section */}
          <div className="max-w-full lg:max-w-[34rem] flex-shrink-0 mb-8 sm:mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight text-black">
              Platform for <span className="text-black">Software Development</span> <span className="text-blue-800">Excellence</span>
            </h2>

            <ul className="mb-6 sm:mb-8 md:mb-12 space-y-3 sm:space-y-4">
              {CollaborationFeatures.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                />
              ))}
            </ul>

            {/* Button with gradient matching the image */}
            <div className="flex justify-center lg:justify-start">
              <InlineButton
                className="
                  w-auto 
                  bg-blue-800
                  text-white
                  hover:bg-blue-900
                  border-none
                  shadow-lg
                  shadow-blue-500/25
                  border
                  border-blue-400/30
                  text-xs sm:text-sm
                  px-4 sm:px-6
                  py-2 sm:py-3
                "
              >
              START DEVELOPMENT PROJECT
              </InlineButton>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="lg:flex-1 text-center lg:text-left">
            <p className="text-gray-700 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 lg:max-w-[34rem] lg:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Empowering businesses with comprehensive software development services including web, mobile, cloud, and AI solutions
            </p>

            {/* Circular Integration Diagram */}
            <div className="relative mx-auto flex w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem] aspect-square border border-gray-300 rounded-full mt-8 lg:mt-0">
              {/* Central Logo */}
              <div className="flex w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 aspect-square m-auto border border-gray-300 rounded-full">
                <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square m-auto bg-blue-800 p-0.5 rounded-full animate-pulse-glow">
                  <div className="flex items-center justify-center w-full h-full bg-white rounded-full overflow-hidden">
                    <img
                      src="/images/logo.jpg"
                      alt="B2W Infotech Logo"
                      className="w-17 h-17 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Rotating App Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <ul className="w-full h-full">
                  {collabApps.map((app, index) => {
                    const angle = (360 / collabApps.length) * index;
                    return (
                      <li
                        key={app.id || index}
                        className="absolute top-0 left-1/2 h-1/2 -ml-[1.2rem] sm:-ml-[1.4rem] md:-ml-[1.6rem] origin-bottom"
                        style={{
                          transform: `rotate(${angle}deg)`
                        }}
                      >
                        <div
                          className="relative -top-[1.2rem] sm:-top-[1.4rem] md:-top-[1.6rem] flex w-[2.4rem] h-[2.4rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3.2rem] md:h-[3.2rem] bg-white border border-gray-300 rounded-xl hover:border-gray-400 transition-colors"
                          style={{
                            transform: `rotate(-${angle}deg)`
                          }}
                        >
                          <img
                            className="m-auto transform hover:scale-110 transition-transform"
                            width={app.width || 16}
                            height={app.height || 16}
                            
                            alt={app.title || `App ${index + 1}`}
                            src={app.icon || `/images/app-icon-${index + 1}.svg`}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Collaboration;
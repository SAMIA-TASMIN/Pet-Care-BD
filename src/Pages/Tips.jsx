import React from 'react';
import { motion } from "framer-motion";
const Tips = () => {
    const tips = [
    {
      icon: "🏠",
      title: "Indoor Comfort",
      description: "Keep pets warm indoors with cozy bedding away from drafts. Limit outdoor time in extreme cold, especially for small or short-haired breeds.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🐾",
      title: "Paw Protection",
      description: "Check paws for ice, salt, and cracks after walks. Use pet-safe ice melt and consider booties. Wipe paws thoroughly when coming inside.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "💧",
      title: "Hydration & Nutrition",
      description: "Ensure fresh, unfrozen water is always available. Pets may need extra calories in winter to maintain body heat and energy levels.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: "⚠️",
      title: "Safety First",
      description: "Never leave pets in cold cars. Keep antifreeze and de-icers away from pets as they're toxic. Check under car hoods for hiding cats.",
      color: "from-orange-500 to-orange-600"
    }
  ];
     return (


    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
       
         <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            ❄️ Winter Pet Care Tips
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Keep your furry friends safe and comfortable during the cold season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${tip.color}`}></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl sm:text-5xl flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      {tip.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            💙 Always consult your veterinarian for specific care advice
          </p>
        </div>
      </div>
       
     
    </div>
  );
};

export default Tips;





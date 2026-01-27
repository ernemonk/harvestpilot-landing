import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Research",
      description: "Browse crops, varieties, and growing techniques optimized for your climate and market.",
    },
    {
      number: "2",
      title: "Execute",
      description: "Create a plan with planting dates, labor needs, and input costs. Execute with confidence.",
    },
    {
      number: "3",
      title: "Track",
      description: "Monitor daily conditions, yields, and expenses in real-time as the season progresses.",
    },
    {
      number: "4",
      title: "Analyze & Sell",
      description: "Review profitability by crop. Manage buyers and orders. Plan next season better.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-harvest-dark mb-4">
            How HarvestPilot Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to a more profitable farm season.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-harvest-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-harvest-dark mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-8 text-3xl text-harvest-light">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

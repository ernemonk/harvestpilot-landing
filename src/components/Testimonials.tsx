import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      farm: "Green Earth Farms, California",
      quote:
        "HarvestPilot increased our tomato yield by 45% while reducing labor by 10 hours per week. It's replaced our entire farm management system.",
      rating: 5,
      metric: "+45% Revenue",
    },
    {
      name: "Michael Thompson",
      farm: "Thompson's Microgreens, Colorado",
      quote:
        "The crop planning features are incredibly accurate. We've eliminated spreadsheet chaos and can scale confidently to new crops.",
      rating: 5,
      metric: "-10 hrs/week",
    },
    {
      name: "Elena Rodriguez",
      farm: "Fresh Valley Lettuce, Oregon",
      quote:
        "The analytics give us exact profitability by crop and buyer. We now make data-driven pricing decisions instead of guessing.",
      rating: 5,
      metric: "+92% Accuracy",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-harvest-dark mb-4">
            Loved by Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from specialty crop farmers who've transformed their operations with HarvestPilot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border-2 border-harvest-light hover:border-harvest-green transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-harvest-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.farm}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-harvest-green text-lg">
                    {testimonial.metric}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

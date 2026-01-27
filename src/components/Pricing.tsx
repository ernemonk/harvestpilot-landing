import React, { useState } from "react";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 49,
      features: [
        "Up to 5 crops",
        "Basic crop research",
        "Simple production planning",
        "Email support",
        "1 farm location",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 149,
      features: [
        "Unlimited crops",
        "Advanced crop research",
        "AI-powered planning",
        "Harvest analytics",
        "Customer CRM",
        "Financial dashboards",
        "Priority support",
        "Up to 5 team members",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 499,
      features: [
        "Everything in Professional",
        "Real-time IoT sensor integration",
        "Custom reports & dashboards",
        "API access",
        "Multi-farm management",
        "Unlimited team members",
        "Phone & email support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const annualSavings = Math.round((plans[1].monthlyPrice * 12 * 0.17 * 100) / 100);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-harvest-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free. Upgrade anytime. No long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-6">
            <span
              className={`font-semibold ${
                !isAnnual ? "text-harvest-dark" : "text-gray-600"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                isAnnual ? "bg-harvest-green" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-semibold ${
                isAnnual ? "text-harvest-dark" : "text-gray-600"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 inline-block bg-harvest-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save ${annualSavings}/year
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition transform hover:scale-105 ${
                plan.popular
                  ? "bg-harvest-dark text-white shadow-2xl ring-2 ring-harvest-green"
                  : "bg-white text-harvest-dark shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="bg-harvest-green text-white py-2 text-center font-bold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    ${isAnnual ? Math.round(plan.monthlyPrice * 12 * 0.83) : plan.monthlyPrice}
                  </span>
                  <span className={plan.popular ? "text-gray-200" : "text-gray-600"}>
                    {isAnnual ? "/year" : "/month"}
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                    plan.popular
                      ? "bg-harvest-green text-white hover:bg-emerald-600"
                      : "border-2 border-harvest-dark text-harvest-dark hover:bg-harvest-light"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg text-center border-2 border-harvest-light">
          <p className="text-gray-700 mb-4">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-600">
            Volume and non-profit discounts available. Contact our sales team for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

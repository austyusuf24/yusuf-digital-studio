export default function Pricing() {
  const plans = [
    {
      title: "Starter Package",
      price: "₹8,000",
      popular: false,
      whatsapp:
        "Hi Yusuf Digital Studio, I am interested in the Starter Package.",
      features: [
        "Logo Design",
        "Landing Page",
        "Contact Form",
        "WhatsApp Integration",
      ],
    },
    {
      title: "Business Package",
      price: "₹15,000",
      popular: true,
      whatsapp:
        "Hi Yusuf Digital Studio, I am interested in the Business Package.",
      features: [
        "Business Website",
        "Basic SEO",
        "5 Social Media Posts",
        "WhatsApp Integration",
      ],
    },
    {
      title: "Premium Package",
      price: "₹30,000+",
      popular: false,
      whatsapp:
        "Hi Yusuf Digital Studio, I am interested in the Premium Package.",
      features: [
        "E-Commerce Website",
        "AI Chatbot",
        "Branding",
        "Product Design",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-28 scroll-mt-24">

      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          Pricing Plans
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          Simple & Transparent
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}Pricing
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Affordable pricing packages designed for startups,
          businesses, and growing brands.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`
              relative
              rounded-3xl
              p-8
              backdrop-blur-xl
              border
              transition-all
              duration-500
              hover:-translate-y-3
              ${
                plan.popular
                  ? `
                    border-purple-500
                    bg-purple-500/10
                    shadow-[0_0_40px_rgba(168,85,247,0.3)]
                  `
                  : `
                    border-white/10
                    bg-white/5
                    hover:border-purple-500
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
                  `
              }
            `}
          >

            {plan.popular && (
              <div
                className="
                absolute
                -top-4
                left-8
                px-4
                py-1
                rounded-full
                text-sm
                font-medium
                bg-gradient-to-r
                from-blue-500
                to-purple-600
                "
              >
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold">
              {plan.title}
            </h3>

            <div className="mt-6">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-gray-300">

              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="text-green-400">
                    ✓
                  </span>

                  {feature}
                </li>
              ))}

            </ul>

            <a
              href={`https://wa.me/918438657768?text=${encodeURIComponent(
                plan.whatsapp
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              text-center
              w-full
              mt-10
              py-4
              rounded-xl
              font-semibold
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
              transition-all
              duration-300
              "
            >
              Get Started
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

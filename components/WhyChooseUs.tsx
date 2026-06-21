export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Affordable Pricing",
      icon: "💰",
    },
    {
      title: "Fast Delivery",
      icon: "⚡",
    },
    {
      title: "Creative Solutions",
      icon: "🎨",
    },
    {
      title: "Modern Technology",
      icon: "🚀",
    },
    {
      title: "Dedicated Support",
      icon: "🤝",
    },
    {
      title: "Client Satisfaction",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          Why Choose Me
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Your Success Is
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}My Priority
          </span>
        </h2>

      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

        {reasons.map((item) => (
          <div
            key={item.title}
            className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-6
            text-center
            backdrop-blur-xl
            hover:-translate-y-3
            hover:border-purple-500
            hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
            transition-all duration-500
            "
          >
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold">
              {item.title}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}
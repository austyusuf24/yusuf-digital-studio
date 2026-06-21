export default function Stats() {
  const stats = [
    {
      number: "10+",
      label: "Projects Completed",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <section className="pb-20">
      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
            group
            relative
            overflow-hidden
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            hover:border-blue-500/50
            hover:-translate-y-2
            transition-all duration-500
            "
          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {stat.label}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

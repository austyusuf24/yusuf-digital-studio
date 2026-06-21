import Image from "next/image";

export default function Services() {
  const services = [
    {
      image: "/services/website.png",
      title: "Website Development",
      features: [
        "Landing Pages",
        "Business Websites",
        "E-Commerce Websites",
        "Website Redesign",
      ],
    },
    {
      image: "/services/ai.png",
      title: "AI Solutions",
      features: [
        "AI Chatbots",
        "AI Assistants",
        "Lead Generation",
        "Custom AI Apps",
      ],
    },
    {
      image: "/services/design.png",
      title: "Graphic Design",
      features: [
        "Logo Design",
        "Brand Identity",
        "Product Labels",
        "Social Media Creatives",
      ],
    },
    {
      image: "/services/video.png",
      title: "Video Editing",
      features: [
        "Wedding Highlights",
        "YouTube Editing",
        "Instagram Reels",
        "Promotional Videos",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-28 scroll-mt-24"
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          What I Do
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          Premium Digital Services
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}For Your Business
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Helping businesses grow through websites,
          AI automation, branding and professional
          video editing.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            hover:-translate-y-4
            hover:border-purple-500
            hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
            transition-all duration-500
            "
          >

            <div className="
              absolute inset-0
              bg-gradient-to-br
              from-blue-500/10
              via-purple-500/10
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-all duration-500
            " />

            <div className="relative z-10">

              <div className="mb-6">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="
                  w-20
                  h-20
                  object-contain
                  group-hover:scale-110
                  transition-all duration-500
                  "
                />

              </div>

              <h3 className="text-2xl font-bold mb-6">
                {service.title}
              </h3>

              <ul className="space-y-3 text-gray-400">

                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                    group-hover:text-white
                    transition-all duration-300
                    "
                  >
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button
                className="
                mt-8
                text-blue-400
                font-semibold
                hover:text-purple-400
                transition-all
                "
              >
                Learn More →
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
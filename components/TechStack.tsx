import Image from "next/image";

export default function TechStack() {
  const techs = [
    {
      image: "/tech/react.png",
      title: "React.js",
      desc: "Building modern, interactive and scalable user interfaces.",
    },
    {
      image: "/tech/nextjs.png",
      title: "Next.js",
      desc: "High-performance, SEO-friendly web applications.",
    },
    {
      image: "/tech/nodejs.png",
      title: "Node.js",
      desc: "Backend development and API integration solutions.",
    },
    {
      image: "/tech/mongodb.png",
      title: "MongoDB",
      desc: "Secure, scalable and optimized database management.",
    },
    {
      image: "/tech/javascript.png",
      title: "JavaScript",
      desc: "Dynamic functionality and modern web interactions.",
    },
    {
      image: "/tech/tailwind.png",
      title: "Tailwind CSS",
      desc: "Fast, responsive and premium UI development.",
    },
    {
      image: "/tech/photoshop.png",
      title: "Adobe Photoshop",
      desc: "Professional photo editing and graphic design.",
    },
    {
      image: "/tech/illustrator.png",
      title: "Adobe Illustrator",
      desc: "Vector graphics, branding and logo design.",
    },
    {
      image: "/tech/premierepro.png",
      title: "Adobe Premiere Pro",
      desc: "Professional video editing and motion content creation.",
    },
    {
      image: "/tech/aitool.png",
      title: "AI Solutions",
      desc: "Chatbots, automation systems and AI-powered tools.",
    },
  ];

  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          Technology Stack
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          Tools &
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}Technologies
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Technologies and creative tools used to build premium digital solutions.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

        {techs.map((tech) => (
          <div
            key={tech.title}
            className="
            group
            bg-white/5
            border border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
            hover:-translate-y-3
            hover:border-purple-500
            hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
            transition-all
            duration-500
            "
          >

            <div className="flex justify-center mb-5">

              <Image
                src={tech.image}
                alt={tech.title}
                width={70}
                height={70}
                className="
                object-contain
                group-hover:scale-110
                transition-all
                duration-500
                "
              />

            </div>

            <h3 className="text-lg font-bold text-center">
              {tech.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

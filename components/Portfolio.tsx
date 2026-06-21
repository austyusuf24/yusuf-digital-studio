import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      image: "/portfolio1.png",
      title: "iBlue FMCG Website",
      category: "E-Commerce Website",
    },
    {
      image: "/portfolio2.png",
      title: "Logo Design Collection",
      category: "Brand Identity",
    },
    {
      image: "/portfolio3.png",
      title: "Product Label Design",
      category: "Packaging Design",
    },
    {
      image: "/portfolio4.png",
      title: "Wedding Video Editing",
      category: "Wedding Highlights",
    },
  ];

  return (
    <section id="portfolio" className="py-24 scroll-mt-24">

      <div className="text-center mb-16">
        <p className="text-blue-400 uppercase">
          Featured Work
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Our Latest
          <span className="text-purple-400">
            {" "}Projects
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {projects.map((project) => (
          <div
            key={project.title}
            className="
            group
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:border-blue-500/50
            transition-all duration-500
            "
          >

            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="
                w-full
                h-52
                object-cover
                group-hover:scale-110
                transition-all
                duration-700
                "
              />
            </div>

            <div className="p-5">

              <h3 className="font-bold text-xl">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.category}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-24">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <div>

          <p className="text-blue-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Crafting Digital Experiences
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}That Drive Results
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            I'm Mohamed Yusuf, a passionate Full Stack Developer,
            Graphic Designer and Video Editor helping businesses
            grow through modern technology, creative design
            and digital innovation.
          </p>

          {/* Stats Cards */}

          <div className="grid grid-cols-3 gap-4 mt-10">

            <div
              className="
              bg-gradient-to-br
              from-blue-500/10
              to-transparent
              border border-blue-500/20
              rounded-2xl
              p-5
              text-center
              backdrop-blur-xl
            "
            >
              <h3 className="text-3xl font-bold text-blue-400">
                15+
              </h3>

              <p className="text-gray-400 text-sm">
                Projects Delivered
              </p>
            </div>

            <div
              className="
              bg-gradient-to-br
              from-purple-500/10
              to-transparent
              border border-purple-500/20
              rounded-2xl
              p-5
              text-center
              backdrop-blur-xl
            "
            >
              <h3 className="text-3xl font-bold text-purple-400">
                100%
              </h3>

              <p className="text-gray-400 text-sm">
                Client Satisfaction
              </p>
            </div>

            <div
              className="
              bg-gradient-to-br
              from-green-500/10
              to-transparent
              border border-green-500/20
              rounded-2xl
              p-5
              text-center
              backdrop-blur-xl
            "
            >
              <h3 className="text-3xl font-bold text-green-400">
                2+
              </h3>

              <p className="text-gray-400 text-sm">
                Years Experience
              </p>
            </div>

          </div>

          {/* Skills */}

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div>
              <p className="mb-2">Frontend Development</p>

              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="w-[95%] h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Backend Development</p>

              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="w-[90%] h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Graphic Design</p>

              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="w-[95%] h-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="mb-2">Video Editing</p>

              <div className="w-full h-2 bg-gray-800 rounded-full">
                <div className="w-[90%] h-2 bg-orange-500 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>
<div></div>
        {/* Founder Card */}

        <div className="flex justify-center">

          <div
            className="
            group
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-6
            w-full
            max-w-lg
            hover:border-purple-500
            hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
            transition-all
            duration-500
          "
          >

            <div className="relative">

              <div
                className="
                absolute
                inset-0
                bg-blue-500/20
                blur-[80px]
                rounded-3xl
              "
              />

              <Image
                src="/founder.png"
                alt="Mohamed Yusuf"
                width={450}
                height={550}
                className="
                  relative
                  rounded-2xl
                  w-full
                  object-cover
                "
              />

            </div>

            <h3 className="text-3xl font-bold mt-6">
              Mohamed Yusuf
            </h3>

            <p className="text-purple-400 mt-2">
              Founder • Full Stack Developer • Designer
            </p>

            <div className="flex items-center gap-3 mt-4">

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <p className="text-green-400 text-sm">
                Available for Projects
              </p>

            </div>

            <div className="flex gap-3 mt-6 flex-wrap">

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                React
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                UI/UX
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                AI Solutions
              </span>

            </div>

          </div>

        </div>
        {/* CEO Card */}

        <div className="flex justify-center">

          <div
            className="
            group
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-6
            w-full
            max-w-lg
            hover:border-purple-500
            hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
            transition-all
            duration-500
          "
          >

            <div className="relative">

              <div
                className="
                absolute
                inset-0
                bg-blue-500/20
                blur-[80px]
                rounded-3xl
              "
              />

              <Image
                src="/ceo.png"
                alt="Mohamed Thoufick"
                width={450}
                height={550}
                className="
                  relative
                  rounded-2xl
                  w-full
                  object-cover
                "
              />

            </div>

            <h3 className="text-3xl font-bold mt-6">
              Mohammed Thoufick
            </h3>

            <p className="text-purple-400 mt-2">
              CEO • Sales And Marketing • Business Development
            </p>

            <div className="flex items-center gap-3 mt-4">

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <p className="text-green-400 text-sm">
                Available for Meetings
              </p>

            </div>
<div className="flex gap-3 mt-6 flex-wrap">

              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                Communication
              </span>

              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                Business Development
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                Marketing
              </span>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

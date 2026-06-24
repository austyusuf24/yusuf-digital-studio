import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
      relative
      z-10
      min-h-[95vh]
      flex
      items-center
      pt-20
      "
    >
      <div className="grid lg:grid-cols-[60%_40%] gap-4 items-center w-full">

        {/* Left Side */}

        <div>

          {/* Welcome Badge */}

          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            text-blue-400
            mb-8
            mt-8
            "
          >
            🚀 Welcome to Yusuf Digital Studio
          </div>

          {/* Heading */}

          <h1
            className="
  text-5xl
  md:text-6xl
  lg:text-7xl
  font-extrabold
  leading-[1]
  tracking-tight
  max-w-[700px]
  "
          >
            Transforming Ideas
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h1>

          {/* Description */}

          <p
            className="
            mt-8
            text-xl
            text-gray-400
            max-w-2xl
            "
          >
            Website Development • AI Solutions • Graphic Design • Video Editing
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#portfolio"
              className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
              transition-all
              duration-300
              "
            >
              View Portfolio →
            </a>

            <a
              href="tel:+918438657768"
              className="
              px-8
              py-4
              rounded-xl
              border border-white/20
              bg-white/[0.02]
              hover:bg-white/5
              hover:border-purple-500/40
              transition-all
              duration-300
              "
            >
              Get Free Consultation
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12">

            <div
              className="
              grid
              grid-cols-3
              max-w-[700px]
              bg-white/5
              border border-white/10
              rounded-3xl
              overflow-hidden
              backdrop-blur-xl
              "
            >

              <div className="py-8 text-center border-r border-white/10">
                <h3 className="text-4xl font-bold text-blue-400">
                  15+
                </h3>
                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="py-8 text-center border-r border-white/10">
                <h3 className="text-4xl font-bold text-blue-400">
                  100%
                </h3>
                <p className="text-gray-400 mt-2">
                  Client Satisfaction
                </p>
              </div>

              <div className="py-8 text-center">
                <h3 className="text-4xl font-bold text-blue-400">
                  24/7
                </h3>
                <p className="text-gray-400 mt-2">
                  Support Available
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center lg:justify-end items-center">

          <div className="relative">

            {/* Floating Orbs */}

            <div className="absolute top-10 right-10 w-4 h-4 bg-purple-500 rounded-full blur-sm animate-pulse"></div>

            <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-pulse"></div>

            {/* Glow Effects */}

            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute inset-0 bg-purple-500/20 blur-[150px] rounded-full"></div>

            {/* Globe */}

            <Image
              src="/globe.png"
              alt="Digital Globe"
              width={600}
              height={600}
              priority
              className="
  hidden lg:block
  w-full
  max-w-[500px]
  lg:max-w-[560px]
  h-auto
  object-contain
  animate-float
  drop-shadow-[0_0_120px_rgba(59,130,246,0.7)]
  "
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute inset-0 bg-indigo-500/20 blur-[150px] rounded-full"></div>

            <div className="absolute inset-0 bg-cyan-500/10 blur-[180px] rounded-full"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

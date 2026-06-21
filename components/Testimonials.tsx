export default function Testimonials() {
const reviews = [
  {
    name: "Suresh",
    role: "Business Owner, Puducherry",
    review:
      "Very good service. My website was completed on time and looks professional. Happy with the work.",
  },
  {
    name: "Karthik",
    role: "Restaurant Owner",
    review:
      "Yusuf understood our requirements clearly and created a clean website for our business. Easy to communicate with.",
  },
  {
    name: "Praveen",
    role: "Startup Founder",
    review:
      "Good design quality and quick support. The website works smoothly on mobile and desktop.",
  },
];

  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          What Clients
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}Say About My Work
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Trusted by businesses and entrepreneurs for delivering
          premium digital experiences.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((review) => (
          <div
            key={review.name}
            className="
            group
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8
            backdrop-blur-xl
            hover:-translate-y-3
            hover:border-purple-500
            hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
            transition-all
            duration-500
            "
          >

            {/* Avatar */}

            <div className="
              w-16
              h-16
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              mb-5
            ">
              {review.name.charAt(0)}
            </div>

            {/* Stars */}

            <div className="text-yellow-400 text-xl mb-4">
              ★★★★★
            </div>

            {/* Review */}

            <p className="text-gray-400 leading-7">
              "{review.review}"
            </p>

            {/* Client Info */}

            <div className="mt-6 border-t border-white/10 pt-4">

              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {review.role}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

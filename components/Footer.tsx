import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">

      <div className="py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}

          <div>

            <Image
              src="/logo.png"
              alt="Yusuf Digital Studio"
              width={120}
              height={120}
              className="mb-4"
            />

            <p className="text-gray-400 leading-7">
              Helping businesses grow through Website Development,
              AI Solutions, Graphic Design and Video Editing.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-400">

              <a href="#about" className="block hover:text-white transition-all">
                About
              </a>

              <a href="#services" className="block hover:text-white transition-all">
                Services
              </a>

              <a href="#portfolio" className="block hover:text-white transition-all">
                Portfolio
              </a>

              <a href="#pricing" className="block hover:text-white transition-all">
                Pricing
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Website Development</p>
              <p>AI Solutions</p>
              <p>Graphic Design</p>
              <p>Video Editing</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>austyusuf24@gmail.com</p>

              <p>+91 8438657768</p>

              <p>+91 90801 62153</p>

              <p>
                164, 2nd Cross,<br />
                New Mettu Street,<br />
                Sulthanpet, Villianur,<br />
                Puducherry - 605110
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10 py-6 text-center text-gray-500">

        © 2026 Yusuf Digital Studio. All Rights Reserved.

      </div>

    </footer>
  );
}

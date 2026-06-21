"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [projectType, setProjectType] = useState("");
  const [customProject, setCustomProject] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const finalProject =
      projectType === "Other"
        ? customProject
        : projectType;

    try {
      await emailjs.send(
        "service_lgt1r6n",
        "template_5mjnvgq",
        {
          name,
          email,
          phone,
          projectType: finalProject,
          message,
        },
        "pcfvMuyrEZEVSYCQ7"
      );

      const whatsappMessage = `
*New Project Enquiry*

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

💼 Project Type:
${finalProject}

📝 Message:
${message}
      `;

      window.open(
        `https://wa.me/918438657768?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      alert(
        "Project enquiry sent successfully!"
      );

      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setCustomProject("");
      setMessage("");

    } catch (error) {
      console.error(error);

      alert(
        "Failed to send enquiry. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-28 scroll-mt-24"
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-widest">
          Contact Us
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4">
          Let's Build Something
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {" "}Amazing
          </span>
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-12">

        <div>

          <h3 className="text-4xl font-bold">
            Mohamed Yusuf
          </h3>

          <p className="text-gray-400 mt-4">
            Founder • Full Stack Developer • Designer
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <p className="text-gray-500">
                Email
              </p>

              <p className="text-lg">
                austyusuf24@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Phone
              </p>

              <p className="text-lg">
                +91 8438657768
              </p>
            </div>

            <div>
              <p className="text-gray-500">
                Studio
              </p>

              <p className="text-lg">
                Yusuf Digital Studio
              </p>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          space-y-5
          "
        >

          <input
            type="text"
            required
            minLength={3}
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Full Name *"
            className="
            w-full
            bg-black/20
            border border-white/10
            p-4
            rounded-xl
            "
          />

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email Address *"
            className="
            w-full
            bg-black/20
            border border-white/10
            p-4
            rounded-xl
            "
          />

          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="Phone Number *"
            className="
            w-full
            bg-black/20
            border border-white/10
            p-4
            rounded-xl
            "
          />

          <select
            required
            value={projectType}
            onChange={(e) =>
              setProjectType(e.target.value)
            }
            className="
            w-full
            bg-[#0f172a]
            text-white
            border border-white/10
            p-4
            rounded-xl
            "
          >
            <option value="">
              Select Project Type *
            </option>

            <option value="Business Website">
              Business Website
            </option>

            <option value="Restaurant Website">
              Restaurant Website
            </option>

            <option value="E-Commerce Website">
              E-Commerce Website
            </option>

            <option value="Landing Page">
              Landing Page
            </option>

            <option value="Portfolio Website">
              Portfolio Website
            </option>

            <option value="AI Solution">
              AI Solution
            </option>

            <option value="Logo Design">
              Logo Design
            </option>

            <option value="Product Label Design">
              Product Label Design
            </option>

            <option value="Video Editing">
              Video Editing
            </option>

            <option value="Other">
              Other
            </option>

          </select>

          {projectType === "Other" && (
            <input
              type="text"
              required
              value={customProject}
              onChange={(e) =>
                setCustomProject(
                  e.target.value
                )
              }
              placeholder="Describe Your Project *"
              className="
              w-full
              bg-black/20
              border border-white/10
              p-4
              rounded-xl
              "
            />
          )}

          <textarea
            required
            minLength={5}
            rows={5}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Tell me about your project *"
            className="
            w-full
            bg-black/20
            border border-white/10
            p-4
            rounded-xl
            "
          />

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            hover:scale-[1.02]
            transition-all
            duration-300
            font-semibold
            "
          >
            Send Project Enquiry
          </button>

        </form>

      </div>
    </section>
  );
}
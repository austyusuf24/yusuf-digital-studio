"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
  className="fixed inset-0 z-[1] pointer-events-none"
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 200,
          },

          color: {
            value: [
              "#ffffff",
              "#60a5fa",
              "#a855f7",
            ],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.2,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
            },
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          move: {
            enable: true,
            speed: 0.8,
            random: true,
          },

          links: {
            enable: true,
            distance: 180,
            color: "#6366f1",
            opacity: 0.15,
            width: 1,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 200,

              links: {
                opacity: 0.6,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
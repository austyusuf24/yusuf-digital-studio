"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-[1] pointer-events-none"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 120,
          },

          color: {
            value: ["#ffffff", "#60a5fa", "#a855f7"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.5,
          },

          links: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.15,
            width: 1,
          },
        },

        detectRetina: true,
      }}
    />
  );
}
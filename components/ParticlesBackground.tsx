"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-[1] pointer-events-none"
      init={particlesInit}
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
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.5,
            random: true,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
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
                opacity: 0.4,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
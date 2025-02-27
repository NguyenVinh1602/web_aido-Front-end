"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesEffect = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative w-[500px] h-[500px] overflow-hidden">
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        init={particlesInit}
        options={{
          fullScreen: false, // Không chiếm toàn màn hình
          background: { color: "transparent" },
          particles: {
            number: { value: 230, density: { enable: true, value_area: 1000 } }, // Tăng value_area để phủ kín vùng
            color: { value: "#60a5fa" }, // Chấm màu đen
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: "bounce", // Chấm bật lại khi chạm viền
            },
            links: {
              enable: true, // Chấm luôn kết nối với nhau
              distance: 150,
              color: "#000000",
              opacity: 0.3,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "connect" }, // Khi chuột vào, chấm sẽ nối với chuột
            },
            modes: {
              connect: {
                distance: 150, // Tăng phạm vi kết nối chuột
                radius: 150,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesEffect;

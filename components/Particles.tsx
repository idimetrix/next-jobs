import { memo } from "react"
import ReactParticles, { ParticlesProps } from "react-particles"
import { loadFull } from "tsparticles"

interface Props extends ParticlesProps {
  events?: boolean
  color?: string
}

export const Particles = memo(function Particles({ events = false, color = "#68D861", ...rest }: Props) {
  return (
    <ReactParticles
      init={loadFull}
      options={{
        fpsLimit: 120,
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: events,
              mode: "repulse",
            },
            onclick: {
              enable: events,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          number: {
            value: 46,
            density: {
              enable: true,
              value_area: 1420.4657549380909,
            },
          },
          color: {
            value: color,
          },
          shape: {
            type: "triangle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.4,
            random: !1,
            anim: {
              enable: !1,
              speed: 1,
              opacity_min: 0.1,
              sync: !1,
            },
          },
          size: {
            value: 11.83721462448409,
            random: true,
            anim: {
              enable: !1,
              speed: 40,
              size_min: 0.1,
              sync: !1,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
              enable: !1,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
      {...rest}
    />
  )
})

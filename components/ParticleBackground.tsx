"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Get color based on theme
    const getColor = () => {
      switch (theme) {
        case "blue":
          return "#3b82f6"
        case "purple":
          return "#8b5cf6"
        case "red":
          return "#ef4444"
        case "orange":
          return "#f97316"
        default: // dark/green
          return "#10b981"
      }
    }

    // Create particles
    const particlesArray: Particle[] = []

    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = Math.random() * 1 - 0.5
      const speedY = Math.random() * 1 - 0.5
      const opacity = Math.random() * 0.5 + 0.1
      const color = getColor()

      particlesArray.push({
        x,
        y,
        size,
        speedX,
        speedY,
        opacity,
        color,
      })
    }

    // Draw and update particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i]

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Connect particles
        connectParticles(particle, particlesArray)
      }

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = (particle: Particle, particles: Particle[]) => {
      const connectionDistance = 150

      for (let i = 0; i < particles.length; i++) {
        const targetParticle = particles[i]

        // Skip self
        if (particle === targetParticle) continue

        const dx = particle.x - targetParticle.x
        const dy = particle.y - targetParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          // Draw line with opacity based on distance
          const opacity = 1 - distance / connectionDistance
          ctx.beginPath()
          ctx.strokeStyle = `${particle.color}${Math.floor(opacity * 100)
            .toString(16)
            .padStart(2, "0")}`
          ctx.lineWidth = 0.5
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(targetParticle.x, targetParticle.y)
          ctx.stroke()
        }
      }
    }

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" />
}



import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
  baseAlpha: number
  ridge: number
  hue: number
}

const PALETTE = [
  '245, 240, 232', // rice
  '138, 135, 128', // ash
  '201, 168, 108', // warm gold accent
]

// 首页的交互背景：缓慢漂移的墨点，随指针位置轻微散开，保持一体氛围。
export function InteractiveBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let width = 0
    let height = 0
    let particles: Particle[] = []
    const pointer = { x: -9999, y: -9999, active: false }

    const seed = () => {
      particles = Array.from({ length: reduce ? 24 : 60 }, () => {
        const hue = Math.random()
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -(0.08 + Math.random() * 0.3),
          r: 0.6 + Math.random() * 1.8,
          alpha: 0,
          baseAlpha: 0.08 + Math.random() * 0.32,
          ridge: Math.random() * Math.PI * 2,
          hue,
        }
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.ridge += 0.01

        // 轻柔的漂浮摆动
        p.vx += Math.sin(p.ridge) * 0.0015
        p.vy = Math.max(-0.35, p.vy + 0.0002)
        p.vy += Math.cos(p.ridge * 0.7) * 0.001

        // 指针附近轻微散开
        if (pointer.active) {
          const dx = p.x - pointer.x
          const dy = p.y - pointer.y
          const dist = Math.hypot(dx, dy)
          const influence = 260
          if (dist < influence && dist > 0.001) {
            const force = (1 - dist / influence) * 0.6
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }
        }

        // 循环回屏
        if (p.y < -30) {
          p.y = height + 20
          p.x = Math.random() * width
        }
        if (p.x < -30) p.x = width + 20
        if (p.x > width + 30) p.x = -30

        // 淡入淡出
        p.alpha += (p.baseAlpha - p.alpha) * 0.02

        // 与指针越近越亮
        const dx0 = p.x - pointer.x
        const dy0 = p.y - pointer.y
        const d0 = Math.hypot(dx0, dy0)
        const proximity = pointer.active ? Math.max(0, 1 - d0 / 420) : 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PALETTE[Math.floor(p.hue * PALETTE.length) % PALETTE.length]}, ${
          p.alpha + proximity * 0.25
        })`
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-70"
    />
  )
}
"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere, MeshDistortMaterial, Text, Html, Float, Torus } from "@react-three/drei"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Code, Cpu, Layers, Zap } from "lucide-react"
import * as THREE from "three"

function FuturisticGrid() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const gridRef = useRef<THREE.Group>(null)
  const gridSize = 20
  const gridDivisions = 20
  const gridColor = isDark ? "#3b82f6" : "#1d4ed8"

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
      gridRef.current.position.y = -2 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[gridSize, gridDivisions, gridColor, gridColor]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <gridHelper
        args={[gridSize, gridDivisions, gridColor, gridColor]}
        position={[0, 0.1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
    </group>
  )
}

// Completely replaced FloatingLines with custom LineObject component
function LineObject({ start, end, color }) {
  const material = useMemo(() => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 }), [color])

  const points = useMemo(() => {
    const points = []
    points.push(new THREE.Vector3(...start))
    points.push(new THREE.Vector3(...end))
    return points
  }, [start, end])

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    return geometry
  }, [points])

  return <primitive object={new THREE.Line(geometry, material)} />
}

function FloatingLines() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const linesRef = useRef<THREE.Group>(null)
  const lineColor = isDark ? "#60a5fa" : "#2563eb"

  // Create simple line segments instead of complex paths
  const lines = useMemo(() => {
    return [
      { start: [-5, 0, 0], end: [5, 0, 0] },
      { start: [0, -5, 0], end: [0, 5, 0] },
      { start: [-3, -3, 0], end: [3, 3, 0] },
      { start: [3, -3, 0], end: [-3, 3, 0] },
      { start: [-4, 2, 0], end: [4, 2, 0] },
      { start: [-4, -2, 0], end: [4, -2, 0] },
      { start: [2, -4, 0], end: [2, 4, 0] },
      { start: [-2, -4, 0], end: [-2, 4, 0] },
    ]
  }, [])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      linesRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <LineObject key={i} start={line.start} end={line.end} color={lineColor} />
      ))}
    </group>
  )
}

function GlowingSphere() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      sphereRef.current.rotation.z = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color={isDark ? "#3b82f6" : "#1d4ed8"}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </Sphere>
  )
}

function FloatingParticles() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const particlesRef = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.025) * 0.1

      // Follow mouse with slight delay
      particlesRef.current.position.x = THREE.MathUtils.lerp(
        particlesRef.current.position.x || 0,
        mouse.x * viewport.width * 0.1,
        0.05,
      )
      particlesRef.current.position.y = THREE.MathUtils.lerp(
        particlesRef.current.position.y || 0,
        mouse.y * viewport.height * 0.1,
        0.05,
      )
    }
  })

  const count = 1000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 10 + 2
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [count])

  const sizes = useMemo(() => {
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 0.5 + 0.1
    }
    return sizes
  }, [count])

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation
        color={isDark ? "#60a5fa" : "#2563eb"}
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingIcons() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const iconColor = isDark ? "#60a5fa" : "#2563eb"

  const icons = [
    { position: [-4, 2, -2], icon: <Code className="h-6 w-6" style={{ color: iconColor }} /> },
    { position: [4, -1, -3], icon: <Cpu className="h-6 w-6" style={{ color: iconColor }} /> },
    { position: [-3, -2, -1], icon: <Layers className="h-6 w-6" style={{ color: iconColor }} /> },
    { position: [3, 3, -2], icon: <Zap className="h-6 w-6" style={{ color: iconColor }} /> },
  ]

  return (
    <>
      {icons.map((item, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
          position={item.position as [number, number, number]}
        >
          <Html transform distanceFactor={10}>
            <div className="bg-background/30 backdrop-blur-md p-2 rounded-full border border-primary/20">
              {item.icon}
            </div>
          </Html>
        </Float>
      ))}
    </>
  )
}

function FloatingRings() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef1.current && ringRef2.current) {
      ringRef1.current.rotation.x = state.clock.getElapsedTime() * 0.2
      ringRef1.current.rotation.y = state.clock.getElapsedTime() * 0.3

      ringRef2.current.rotation.x = -state.clock.getElapsedTime() * 0.3
      ringRef2.current.rotation.z = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <>
      <Torus ref={ringRef1} args={[3, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={isDark ? "#3b82f6" : "#1d4ed8"}
          emissive={isDark ? "#3b82f6" : "#1d4ed8"}
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </Torus>

      <Torus ref={ringRef2} args={[4, 0.03, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color={isDark ? "#3b82f6" : "#1d4ed8"}
          emissive={isDark ? "#3b82f6" : "#1d4ed8"}
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </Torus>
    </>
  )
}

function FuturisticText() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      textRef.current.position.y = 3 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={textRef} position={[0, 3, 0]}>
      <Text
        font="/fonts/Inter-Bold.ttf"
        fontSize={1.5}
        position={[0, 0, 0]}
        color={isDark ? "#60a5fa" : "#2563eb"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor={isDark ? "#0f172a" : "#f8fafc"}
      >
        PORTFOLIO
      </Text>
    </group>
  )
}

function ScrollPrompt() {
  return (
    <Html position={[0, -4, 0]} center>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="flex flex-col items-center"
      >
        <Button variant="ghost" size="sm" className="text-primary">
          <ChevronDown className="h-6 w-6" />
        </Button>
        <span className="text-xs text-primary">Scroll to explore</span>
      </motion.div>
    </Html>
  )
}

export default function ThreeScene() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-[80vh] bg-background" />
  }

  return (
    <div className="w-full h-[80vh] relative">
      <Canvas className="w-full h-full" dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={[resolvedTheme === "dark" ? "#030712" : "#f8fafc"]} />
        <fog attach="fog" args={[resolvedTheme === "dark" ? "#030712" : "#f8fafc", 5, 20]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <FuturisticGrid />
        <GlowingSphere />
        <FloatingParticles />
        <FloatingLines />
        <FloatingIcons />
        <FloatingRings />
        <FuturisticText />
        <ScrollPrompt />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

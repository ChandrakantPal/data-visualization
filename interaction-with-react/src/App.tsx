import React, { MouseEvent, useState, useCallback } from 'react'
import './App.css'

function App() {
  const width = window.innerWidth
  const height = window.innerHeight
  const initialMousePostion = { x: width / 2, y: height / 2 }
  const [mousePostion, setMousePostion] =
    useState<{ x: number; y: number }>(initialMousePostion)
  const circleRadius = 30
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const { clientY, clientX } = event
      setMousePostion({ x: clientX, y: clientY })
    },
    [setMousePostion]
  )
  return (
    <div className="App">
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle r={circleRadius} cx={mousePostion.x} cy={mousePostion.y} />
      </svg>
    </div>
  )
}

export default App

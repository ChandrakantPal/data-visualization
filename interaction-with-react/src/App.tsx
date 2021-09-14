import React, { MouseEvent, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const width = window.innerWidth
  const height = window.innerHeight
  const [centerX, setCenterX] = useState(width / 2)
  const [centerY, setCenterY] = useState(height / 2)
  const circleRadius = 30
  const handleMouseMove = (event: MouseEvent) => {
    const { clientY, clientX } = event
    setCenterX(clientX)
    setCenterY(clientY)
  }
  return (
    <div className="App">
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle r={circleRadius} cx={centerX} cy={centerY} />
      </svg>
    </div>
  )
}

export default App

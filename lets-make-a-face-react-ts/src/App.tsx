import React from 'react'
import './App.css'
import BackgroundCircle from './components/BackgroundCircle'
import Eye from './components/Eye'
import Mouth from './components/Mouth'

const App = () => {
  const width = 960
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const strokeWidth = 10
  const eyeOffsetX = 90
  const eyeOffsetY = 100
  const eyeRadius = 40

  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <BackgroundCircle
            radius={centerY - strokeWidth / 2}
            strokeWidth={strokeWidth}
          />
          <Eye radius={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY} />
          <Eye radius={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY} />
          <Mouth mouthWidth={20} mouthRadius={140} />
        </g>
      </svg>
    </div>
  )
}

export default App

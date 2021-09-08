import React from 'react'
import { arc } from 'd3'
import './App.css'
import BackgroundCircle from './components/BackgroundCircle'
import Eye from './components/Eye'

function App() {
  const width = 960
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const strokeWidth = 10
  const eyeOffsetX = 90
  const eyeOffsetY = 100
  const eyeRadius = 40
  const mouthWidth = 20
  const mouthRadius = 140
  const mouthArc: any = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2)
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
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  )
}

export default App

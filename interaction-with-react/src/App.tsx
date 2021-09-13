import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const width = 960
  const height = 500
  const centerX = width / 2
  const centerY = height / 2
  const circleRadius = 30

  return (
    <div className="App">
      <svg width={width} height={height}>
        <circle r={circleRadius} cx={centerX} cy={centerY} />
      </svg>{' '}
    </div>
  )
}

export default App

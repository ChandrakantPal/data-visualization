import React from 'react'
import './App.css'
import BackgroundCircle from './components/BackgroundCircle'
import Eye from './components/Eye'
import FaceContainer from './components/FaceContainer'
import Mouth from './components/Mouth'

const App = () => {
  const width = 960
  const height = 500

  return (
    <div className="App">
      <FaceContainer
        centerX={width / 2}
        centerY={height / 2}
        height={height}
        width={width}
      >
        <BackgroundCircle radius={height / 2 - 10 / 2} strokeWidth={10} />
        <Eye radius={40} cx={-90} cy={-100} />
        <Eye radius={40} cx={90} cy={-100} />
        <Mouth mouthWidth={20} mouthRadius={140} />
      </FaceContainer>
    </div>
  )
}

export default App

import React from 'react'
import { useData } from './utils/useData'
import { LineChart } from './components/LineChart'

const width = window.innerWidth
const height = window.innerHeight

const App = () => {
  const data = useData()
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading...</div>
  )
}

export default App

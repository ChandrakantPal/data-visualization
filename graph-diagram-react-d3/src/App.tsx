import './App.css'
import { forceCenter, forceLink, forceManyBody, forceSimulation } from 'd3'
import { useRef } from 'react'

function App() {
  const ref = useRef()
  const nodes = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Carol' }]
  const links = [
    { source: 0, target: 1 },
    { source: 1, target: 2 },
  ]
  const simulation = forceSimulation(nodes)
    .force('charge', forceManyBody())
    .force('link', forceLink(links))
    .force('center', forceCenter())
  return <svg width={960} height={500} ref={ref}></svg>
}

export default App

import './App.css'
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  select,
} from 'd3'
import { useEffect, useRef } from 'react'
import { links, nodes } from './utils/data'

function App() {
  const ref = useRef()

  const simulation = forceSimulation(nodes)
    .force('charge', forceManyBody())
    .force('link', forceLink(links))
    .force('center', forceCenter())

  useEffect(() => {
    const svgContainer = select(ref.current)
    const width = +svgContainer.attr('width')
    const height = +svgContainer.attr('height')
    const centerX = width / 2
    const centerY = height / 2
    svgContainer.selectAll('circle').data(nodes).enter().append('circle')
    simulation.on('tick', () => {
      console.log('ticks')
    })
  }, [nodes])

  return <svg width={960} height={500} ref={ref}></svg>
}

export default App

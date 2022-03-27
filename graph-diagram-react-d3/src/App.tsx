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
    const text = svgContainer
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text((node) => node.id)
    simulation.on('tick', () => {
      text.attr('x', (node) => node.x).attr('y', (node) => node.y)
    })
  }, [nodes])

  return <svg width={960} height={500} ref={ref}></svg>
}

export default App

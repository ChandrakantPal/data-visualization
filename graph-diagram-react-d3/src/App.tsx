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

  useEffect(() => {
    const svgContainer = select(ref.current)
    const width = +svgContainer.attr('width')
    const height = +svgContainer.attr('height')
    const centerX = width / 2
    const centerY = height / 2

    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody())
      .force('link', forceLink(links))
      .force('center', forceCenter(centerX, centerY))

    const text = svgContainer
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .text((node) => node.id)

    const lines = svgContainer
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', (link) => link.color || 'black')

    const circles = svgContainer
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('fill', (node) => node.color || 'gray')
      .attr('r', (node) => node.size)
    simulation.on('tick', () => {
      circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y)
      text.attr('x', (node) => node.x).attr('y', (node) => node.y)
      lines
        .attr('x1', (link) => link.source.x)
        .attr('y1', (link) => link.source.y)
        .attr('x2', (link) => link.target.x)
        .attr('y2', (link) => link.target.y)
    })
  }, [nodes])

  return <svg width={960} height={500} ref={ref}></svg>
}

export default App

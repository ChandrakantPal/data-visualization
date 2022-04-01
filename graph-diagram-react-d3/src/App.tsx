import './App.css'
import {
  drag,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  select,
} from 'd3'
import { useEffect, useRef } from 'react'
import { links, MANY_BODY_STRENGTH, nodes } from './utils/data'

const width = window.innerWidth
const height = window.innerHeight

function App() {
  const ref = useRef()

  useEffect(() => {
    const svgContainer = select(ref.current)
    const width = +svgContainer.attr('width')
    const height = +svgContainer.attr('height')
    const centerX = width / 2
    const centerY = height / 2

    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody().strength(MANY_BODY_STRENGTH))
      .force(
        'link',
        forceLink(links).distance((link) => link.distance)
      )
      .force('center', forceCenter(centerX, centerY))

    const dragInteraction = drag().on('drag', (event, node) => {
      node.fx = event.x
      node.fy = event.y
      simulation.alpha(1)
      simulation.restart()
    })

    const circles = svgContainer
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('fill', (node) => node.color)
      .attr('r', (node) => node.size)
      .call(dragInteraction)

    const lines = svgContainer
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', (link) => link.color || 'black')

    const text = svgContainer
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((node) => node.id)

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

  console.log({ links })

  return <svg width={width} height={height} ref={ref}></svg>
}

export default App

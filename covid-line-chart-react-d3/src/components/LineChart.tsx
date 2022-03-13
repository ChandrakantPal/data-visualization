import { FC } from 'react'
import { extent, line, max, scaleLinear, scaleTime } from 'd3'

const xValue = (d: any) => d.date
const yValue = (d: any) => d.deathTotal

const margin = { top: 40, right: 40, bottom: 40, left: 90 }

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth])

  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))

  const markerLineY = yScale(10000)
  const markerLineX1 = 0
  const markerLineX2 = innerWidth

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <line
          className="marker-line"
          x1={markerLineX1}
          y1={markerLineY}
          x2={markerLineX2}
          y2={markerLineY}
        />
        <path d={`${lineGenerator(data)}`} />
        <text
          textAnchor="end"
          alignmentBaseline="middle"
          x={markerLineX1}
          y={markerLineY}
        >
          10,000
        </text>
      </g>
    </svg>
  )
}

export default LineChart

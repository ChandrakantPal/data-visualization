import { FC } from 'react'
import { extent, line, max, scaleLinear, scaleLog, scaleTime } from 'd3'
import YMarkerLine from './YMarkerLine'
import XMarkerLine from './XMarkerLine'
import XAxis from './XAxis'
import YAxis from './YAxis'

const xValue = (d: any) => d.date
const yValue = (d: any) => d.deathTotal

const margin = { top: 40, right: 80, bottom: 80, left: 150 }

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth])

  const yScale = scaleLog()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))

  const mostRecentDate = xScale.domain()[1]

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />
        <path d={`${lineGenerator(data)}`} />
        {/* <YMarkerLine value={10000} yScale={yScale} innerWidth={innerWidth} />
        <XMarkerLine
          value={mostRecentDate}
          xScale={xScale}
          innerHeight={innerHeight}
        /> */}
      </g>
    </svg>
  )
}

export default LineChart

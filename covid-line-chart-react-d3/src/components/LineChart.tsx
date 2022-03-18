import { FC } from 'react'
import { extent, line, max, scaleLinear, scaleLog, scaleTime } from 'd3'
import YMarkerLine from './YMarkerLine'
import XMarkerLine from './XMarkerLine'
import XAxis from './XAxis'
import YAxis from './YAxis'

const xValue = (d: any) => d.date
const yValue = (d: any) => d.deathTotal

const margin = { top: 40, right: 40, bottom: 80, left: 100 }

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const allData = data.reduce(
    (accumulator: any, countryTimeseries: any) =>
      accumulator.concat(countryTimeseries),
    []
  )

  const xScale = scaleTime()
    .domain(extent(allData, xValue))
    .range([0, innerWidth])

  const yScale = scaleLog()
    .domain([1, max(allData, yValue)])
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
        {data.map((countryData: any) => (
          <path d={`${lineGenerator(countryData)}`} />
        ))}
        {/* <YMarkerLine value={10000} yScale={yScale} innerWidth={innerWidth} />
        <XMarkerLine
          value={mostRecentDate}
          xScale={xScale}
          innerHeight={innerHeight}
        /> */}
        <text transform={`translate(${innerHeight / 2},0)`} textAnchor="middle">
          Global Coronavirus Deaths Over Time By Country
        </text>
        <text
          className="axis-label"
          transform={`translate(-40,${innerHeight / 2}) rotate(-90)`}
          textAnchor="middle"
        >
          Cumulative Deaths
        </text>
        <text
          className="axis-label"
          transform={`translate(${innerWidth / 2},${innerHeight + 40})`}
          textAnchor="middle"
          alignmentBaseline="hanging"
        >
          Time
        </text>
      </g>
    </svg>
  )
}

export default LineChart

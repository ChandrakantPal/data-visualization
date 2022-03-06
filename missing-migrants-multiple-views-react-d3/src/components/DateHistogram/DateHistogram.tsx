import {
  bin,
  extent,
  max,
  scaleLinear,
  scaleTime,
  sum,
  timeFormat,
  timeMonths,
} from 'd3'
import { FC, useRef } from 'react'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'

const margin = { top: 0, right: 30, bottom: 20, left: 45 }
const xAxisLabelOffset = 60
const yAxisLabelOffset = 30

const DateHistogram: FC<{ data: any; height: number; width: number }> = ({
  data,
  height,
  width,
}) => {
  const brushRef = useRef(null)
  const xValue = (d: any) => d['Reported Date']
  const xAxisLabel = 'Reported Date'

  const yValue = (d: any) => d['Total Dead and Missing']
  const yAxisLabel = 'Total Dead and Missing'

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const xAxisTickFormat = timeFormat('%m/%d/%Y')

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const [start, stop] = xScale.domain()

  const binnedData = bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(timeMonths(start, stop))(data)
    .map((array) => ({
      y: sum(array, yValue),
      x0: array.x0,
      x1: array.x1,
    }))

  const yScale = scaleLinear()
    .domain([0, max(binnedData, (d) => d.y)])
    .range([innerHeight, 0])
    .nice()

  return (
    <>
      <rect width={width} height={height} fill="white" />
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          })rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          binnedData={binnedData}
          innerHeight={innerHeight}
          xScale={xScale}
          yScale={yScale}
          tooltipFormat={(d: any) => d}
        />
        <g ref={brushRef} />
      </g>
    </>
  )
}

export default DateHistogram

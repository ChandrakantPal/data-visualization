import {
  bin,
  brushX,
  extent,
  max,
  scaleLinear,
  scaleTime,
  select,
  sum,
  timeFormat,
  timeMonths,
} from 'd3'
import { FC, useEffect, useMemo, useRef } from 'react'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'

const margin = { top: 0, right: 30, bottom: 20, left: 45 }
const xAxisLabelOffset = 60
const yAxisLabelOffset = 30
const xAxisTickFormat = timeFormat('%m/%d/%Y')

const DateHistogram: FC<{
  data: any
  height: number
  width: number
  setBrushExtent: any
  xValue: any
}> = ({ data, height, width, setBrushExtent, xValue }) => {
  const brushRef = useRef()

  const xAxisLabel = 'Reported Date'

  const yValue = (d: any) => d['Total Dead and Missing']
  const yAxisLabel = 'Total Dead and Missing'

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const xScale = useMemo(
    () =>
      scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice(),
    [data, xValue, innerWidth]
  )

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

  useEffect(() => {
    const brush = brushX().extent([
      [0, 0],
      [innerWidth, innerHeight],
    ])
    brush(select(brushRef.current))
    brush.on('brush end', (event) => {
      if (event.selection) {
        setBrushExtent(event.selection.map(xScale.invert))
      } else {
        setBrushExtent([])
      }
    })
  }, [innerHeight, innerWidth])

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

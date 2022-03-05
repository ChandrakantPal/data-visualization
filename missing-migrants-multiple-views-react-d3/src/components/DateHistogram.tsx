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
import { FC } from 'react'

const width = 960
const margin = { top: 20, right: 30, bottom: 65, left: 90 }

const DateHistogram: FC<{ data: any; height: number }> = ({ data, height }) => {
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
    <g transform={`translate(${margin.left},${margin.top})`}>
      {binnedData.map((d: any) => (
        <rect
          x={xScale(d.x0)}
          y={yScale(d.y)}
          width={xScale(d.x1) - xScale(d.x0)}
          height={innerHeight - yScale(d.y)}
        >
          {/* <title>{tooltipFormat(d.y)}</title> */}
        </rect>
      ))}
    </g>
  )
}

export default DateHistogram

import { FC } from 'react'
import { extent, line, max, scaleLinear, scaleTime } from 'd3'

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const xValue = (d) => d.date
  const xScale = scaleTime().domain(extent(data, xValue)).range([0, width])

  const yValue = (d) => d.deathTotal
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([height, 0])

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)))

  return (
    <svg width={width} height={height}>
      <path d={`${lineGenerator(data)}`} />
    </svg>
  )
}

export default LineChart
import { FC } from 'react'
import { extent, max, scaleLinear, scaleTime } from 'd3'

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const xValue = (d) => d.date
  const xScale = scaleTime().domain(extent(data, xValue)).range([0, width])

  const yScale = scaleLinear()
    .domain([0, max(data, (d) => d.deathTotal)])
    .range([height, 0])

  return <div>LineChart</div>
}

export default LineChart

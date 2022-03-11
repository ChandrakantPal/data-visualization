import { FC } from 'react'
import { extent, max, min, scaleTime } from 'd3'

const LineChart: FC<{ data: any; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const xScale = scaleTime()
    .domain(extent(data, (d) => d.date))
    .range([0, width])
  return <div>LineChart</div>
}

export default LineChart

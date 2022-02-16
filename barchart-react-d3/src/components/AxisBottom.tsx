import { ScaleLinear } from 'd3'
import { FC } from 'react'

const AxisBottom: FC<{
  xScale: any
  innerHeight: number
}> = ({ xScale, innerHeight }) =>
  xScale.ticks().map((tickValue: any) => (
    <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line y2={innerHeight} stroke="black" />
      <text style={{ textAnchor: 'middle' }} y={innerHeight + 3} dy=".71em">
        {tickValue}
      </text>
    </g>
  ))

export default AxisBottom

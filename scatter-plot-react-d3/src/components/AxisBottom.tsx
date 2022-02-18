import { FC } from 'react'

const AxisBottom: FC<{
  xScale: any
  innerHeight: number
  tickFormat: (n: number) => string
  tickOffset?: number
}> = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
  xScale.ticks().map((tickValue: any) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} />
      <text
        style={{ textAnchor: 'middle' }}
        y={innerHeight + tickOffset}
        dy=".71em"
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ))

export default AxisBottom

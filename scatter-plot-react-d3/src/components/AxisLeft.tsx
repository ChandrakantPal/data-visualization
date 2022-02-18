import { FC } from 'react'

const AxisLeft: FC<{ yScale: any; innerWidth: number }> = ({
  yScale,
  innerWidth,
}) =>
  yScale.ticks().map((tickValue: any) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text style={{ textAnchor: 'end' }} dy=".32em" x={-3}>
        {tickValue}
      </text>
    </g>
  ))

export default AxisLeft

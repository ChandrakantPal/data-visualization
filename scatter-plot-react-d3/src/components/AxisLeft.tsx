import { FC } from 'react'

const AxisLeft: FC<{ yScale: any; innerWidth: number }> = ({
  yScale,
  innerWidth,
}) =>
  yScale.ticks().map((tickValue: any) => (
    <g className="tick" key={tickValue}>
      <line x2={innerWidth} />
      <text
        style={{ textAnchor: 'end' }}
        dy=".32em"
        x={-3}
        y={yScale(tickValue)}
      >
        {tickValue}
      </text>
    </g>
  ))

export default AxisLeft

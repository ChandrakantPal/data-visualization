import { FC } from 'react'

const AxisLeft: FC<{ yScale: any }> = ({ yScale }) =>
  yScale.ticks().map((tickValue: any) => (
    <g className="tick" key={tickValue}>
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

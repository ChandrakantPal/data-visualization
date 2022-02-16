import { FC } from 'react'

const AxisLeft: FC<{ yScale: any }> = ({ yScale }) =>
  yScale.domain().map((tickValue: any) => (
    <text
      key={tickValue}
      style={{ textAnchor: 'end' }}
      dy=".32em"
      x={-3}
      y={yScale(tickValue) + yScale.bandwidth() / 2}
    >
      {tickValue}
    </text>
  ))

export default AxisLeft

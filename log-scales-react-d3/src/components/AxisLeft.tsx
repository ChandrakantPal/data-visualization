import { FC } from 'react'

const AxisLeft: FC<{
  yScale: any
  innerWidth: number
  tickOffset?: number
}> = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue: any) => (
    <g
      className="tick"
      key={tickValue}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      {yScale.tickFormat()(tickValue) ? (
        <text style={{ textAnchor: 'end' }} dy=".32em" x={-tickOffset}>
          {tickValue}
        </text>
      ) : null}
    </g>
  ))

export default AxisLeft

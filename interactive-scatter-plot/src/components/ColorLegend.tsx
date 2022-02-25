import { FC } from 'react'

const ColorLegend: FC<{
  colorScale: any
  tickSpacing?: number
  tickSize?: number
  tickTextOffset?: number
}> = ({ colorScale, tickSpacing = 20, tickSize = 10, tickTextOffset = 20 }) =>
  colorScale.domain().map((domainValue: string, i: number) => (
    <g key={domainValue} transform={`translate(0,${i * tickSpacing})`}>
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text x={tickTextOffset} dy=".32em">
        {domainValue}
      </text>
    </g>
  ))

export default ColorLegend

import { FC } from 'react'

const ColorLegend: FC<{
  colorScale: any
  tickSpacing?: number
  tickSize?: number
}> = ({ colorScale, tickSpacing = 20, tickSize = 10 }) => {
  return colorScale.domain().map((domainValue: string, i: number) => (
    <g key={domainValue} transform={`translate(0,${i * tickSpacing})`}>
      <circle fill={colorScale(domainValue)} r={tickSize} />
      <text>{domainValue}</text>
    </g>
  ))
}

export default ColorLegend

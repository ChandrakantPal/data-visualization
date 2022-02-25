import { FC } from 'react'

const ColorLegend: FC<{ colorScale: any }> = ({ colorScale }) => {
  return colorScale.domain().map((domainValue: string) => {
    return (
      <g key={domainValue}>
        <circle />
        <text>{domainValue}</text>
      </g>
    )
  })
}

export default ColorLegend

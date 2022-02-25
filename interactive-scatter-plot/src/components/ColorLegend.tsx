import { FC } from 'react'

const ColorLegend: FC<{ colorScale: any }> = ({ colorScale }) => {
  return colorScale.domain().map((domainValue: string) => {
    return <g></g>
  })
}

export default ColorLegend

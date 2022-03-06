import { max, scaleSqrt } from 'd3'
import { FC } from 'react'
import Marks from './Marks'

const BubbleMap: FC<{ data: any; worldAtlas: any }> = ({
  data,
  worldAtlas,
}) => {
  const sizeValue = (d: any) => d['Total Dead and Missing']
  const maxRadius = 15

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius])
  return (
    <Marks
      worldAtlas={worldAtlas}
      data={data}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  )
}

export default BubbleMap
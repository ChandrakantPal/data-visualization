import { max, scaleSqrt } from 'd3'
import { FC } from 'react'
import { useWorldAtlas } from '../utils/useWorldAtlas'
import Marks from './Marks'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const BubbleMap: FC<{ data: any }> = ({ data }) => {
  const worldAtlas = useWorldAtlas(jsonUrl)
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

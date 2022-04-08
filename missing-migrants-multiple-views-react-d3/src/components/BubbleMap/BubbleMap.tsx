import { max, scaleSqrt } from 'd3'
import { FC, useMemo } from 'react'
import { DataType } from '../../utils/types'
import Marks from './Marks'

const sizeValue = (d: any) => d['Total Dead and Missing']
const maxRadius = 15

const BubbleMap: FC<{
  data: DataType[]
  filteredData: DataType[]
  worldAtlas: any
}> = ({ data, filteredData, worldAtlas }) => {
  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)])
        .range([0, maxRadius]),
    [data, sizeValue, maxRadius]
  )
  return (
    <Marks
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  )
}

export default BubbleMap

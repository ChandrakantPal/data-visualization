import { csv } from 'd3'
import { useEffect, useState } from 'react'
import { DataType } from './type'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const row = (d: any) => {
      d.sepal_length = +d.sepal_length
      d.sepal_width = +d.sepal_width
      d.petal_length = +d.petal_length
      d.petal_width = +d.petal_width
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

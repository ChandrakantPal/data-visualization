import { csv } from 'd3'
import { useEffect, useState } from 'react'
import { DataType } from './type'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const row = (d: any) => {
      d.temperature = +d.temperature
      d.timestamp = new Date(d.timestamp)
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

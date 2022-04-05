import { csv } from 'd3'
import { useEffect, useState } from 'react'
import { DataType } from './type'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const row = (d: any) => {
      d['Total Dead and Missing'] = +d['Total Dead and Missing']
      d['Reported Date'] = new Date(d['Reported Date'])
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

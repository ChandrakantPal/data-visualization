import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const row = (d: any) => {
      d.Population = +d['2020']
      return d
    }
    csv(csvUrl, row).then((data: any) => {
      setData(data.slice(0, 10))
    })
  }, [])

  return data
}

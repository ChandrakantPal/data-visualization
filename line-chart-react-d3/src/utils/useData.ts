import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const row = (d: any) => {
      d.temperature = +d.temperature
      return d
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

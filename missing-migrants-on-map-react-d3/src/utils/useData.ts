import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  const row = (d: any) => {
    d.coords = d['Location Coordinates']
      .split(',')
      .map((d: any) => +d)
      .reverse()
    d['Total Dead and Missing'] = +d['Total Dead and Missing']
    return d
  }

  useEffect(() => {
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

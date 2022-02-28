import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useCities = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  const row = (d) => {
    d.lat = +d.lat
    d.lng = +d.lng
    d.population = +d.population
    return d
  }

  useEffect(() => {
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

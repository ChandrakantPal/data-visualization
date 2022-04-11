import { csv } from 'd3'
import { useEffect, useState } from 'react'
import { CityDataType } from './type'

export const useCities = (csvUrl: string) => {
  const [data, setData] = useState<CityDataType[]>([])

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

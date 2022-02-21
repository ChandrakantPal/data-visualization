import { json } from 'd3'
import { useEffect, useState } from 'react'
import { feature, mesh } from 'topojson'

export const useData = (jsonUrl: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    json(jsonUrl).then((topology: any) => {
      const { countries, land } = topology.objects
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b),
      })
    })
  }, [])

  return data
}

import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  const row = (d: any) => {
    d.aids =
      +d['Prevalence - HIV/AIDS - Sex: Both - Age: 15-49 years (Percent) (%)']
    return d
  }

  useEffect(() => {
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}

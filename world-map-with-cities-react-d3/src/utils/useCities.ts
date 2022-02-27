import { csv } from 'd3'
import { useEffect, useState } from 'react'

export const useCities = (csvUrl: string) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  return data
}

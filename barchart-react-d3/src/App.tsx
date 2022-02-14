import { useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import './App.css'
import { scaleBand } from 'd3'

const App = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const csvUrl =
      'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'
    csv(csvUrl).then(setData)
  }, [])

  if (!data) {
    return <pre>Loading...</pre>
  }

  const yScale = scaleBand()
    .domain(data?.map((d: any) => d.Country))
    .range([0, height])

  return (
    <div className="App">
      <svg width={width} height={height}>
        {data?.map((d: any) => (
          <rect x={0} y={yScale(d.Countary)} />
        ))}
      </svg>
    </div>
  )
}

export default App

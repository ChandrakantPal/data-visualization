import React, { useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import './App.css'
import { DSVRowArray } from 'd3-dsv'
import { arc } from 'd3'

const App = () => {
  const width = 960
  const height = 500

  const [data, setData] = useState<DSVRowArray<string> | null>(null)

  useEffect(() => {
    const csvUrl =
      'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
    csv(csvUrl).then(setData)
  }, [])

  const pieArc: any = arc()
    .innerRadius(0)
    .outerRadius(width)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2)

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <div className="App">
      <svg width={width} height={height}>
        {data?.map((d) => (
          <path
            key={d['RGB hex value']}
            fill={d['RGB hex value']}
            d={pieArc()}
          />
        ))}
      </svg>
    </div>
  )
}

export default App

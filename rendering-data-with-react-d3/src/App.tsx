import { useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import './App.css'
import { DSVRowArray } from 'd3-dsv'
import { arc, pie } from 'd3'
import { DataType } from './utils/types'

const App = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const centerX = width / 2
  const centerY = height / 2

  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    const csvUrl =
      'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
    csv(csvUrl).then(setData)
  }, [])

  const pieArc: any = arc().innerRadius(0).outerRadius(width)

  if (!data) {
    return <pre>Loading...</pre>
  }

  const colorPie = pie().value(1)

  return (
    <div className="App">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {colorPie(data)?.map((d, i) => (
            <path
              key={`${d.data['RGB hex value']}${i}`}
              fill={d.data['RGB hex value']}
              d={pieArc(d)}
            />
          ))}
          {/* pie chart with arc */}
          {/* {data?.map((d, i) => (
            <path
              key={d['RGB hex value']}
              fill={d['RGB hex value']}
              d={pieArc({
                startAngle: (i / data.length) * 2 * Math.PI,
                endAngle: ((i + 1) / data.length) * 2 * Math.PI,
              })}
            />
          ))} */}
        </g>
      </svg>
    </div>
  )
}

export default App

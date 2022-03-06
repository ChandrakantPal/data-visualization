import './App.css'
import { max, scaleSqrt } from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import { useData } from './utils/useData'
import BubbleMap from './components/BubbleMap/BubbleMap'
import DateHistogram from './components/DateHistogram/DateHistogram'
import { useState } from 'react'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const csvUrl =
  'https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/c22144062566de911ba32509613c84af2a99e8e2/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv'
const width = 960
const height = 500
const dateHistogramSize = 0.2

const App = () => {
  const worldAtlas = useWorldAtlas(jsonUrl)
  const data = useData(csvUrl)
  const [brushExtent, setbrushExtent] = useState<Date[] | []>([])

  const xValue = (d: any) => d['Reported Date']

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>
  }

  const filteredData =
    brushExtent.length > 0
      ? data.filter((d: any) => {
          const date = xValue(d)
          return date > brushExtent[0] && date < brushExtent[1]
        })
      : data

  return (
    <svg width={width} height={height}>
      <BubbleMap worldAtlas={worldAtlas} data={filteredData} />
      <g transform={`translate(0,${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent={setbrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  )
}

export default App

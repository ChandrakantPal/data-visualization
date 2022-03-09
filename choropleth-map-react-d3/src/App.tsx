import './App.css'
import { max, scaleSqrt } from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import Marks from './components/Marks'
import { useData } from './utils/useData'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const csvUrl =
  'https://gist.githubusercontent.com/curran/470752f12c027f8ff4266e7c96f26a56/raw/66908b56e371e7c9f5a1c0911ac3250f570a4c83/share-of-population-infected-with-hiv-ihme.csv'
const width = 960
const height = 500
const selectedYear = '2017'
const App = () => {
  const worldAtlas = useWorldAtlas(jsonUrl)
  const data = useData(csvUrl)

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>
  }

  const filteredData = data.filter((d) => d.Year === selectedYear)

  const sizeValue = (d: any) => d['Total Dead and Missing']
  const maxRadius = 15

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius])

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        data={data}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  )
}

export default App

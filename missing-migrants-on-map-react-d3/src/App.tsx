import './App.css'
import { max, scaleSqrt } from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import Marks from './components/Marks'
import { useData } from './utils/useData'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const csvUrl =
  'https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/c22144062566de911ba32509613c84af2a99e8e2/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv'
const width = window.innerWidth
const height = window.innerHeight

const App = () => {
  const worldAtlas = useWorldAtlas(jsonUrl)
  const data = useData(csvUrl)

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>
  }

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

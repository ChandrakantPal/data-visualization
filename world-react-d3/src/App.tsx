import './App.css'
import {} from 'd3'
import { useData } from './utils/useData'
import Marks from './components/Marks'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const width = 960
const height = 500

const App = () => {
  const data = useData(jsonUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <Marks data={data} />
      </g>
    </svg>
  )
}

export default App

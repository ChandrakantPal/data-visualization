import './App.css'
import {} from 'd3'
import { useData } from './utils/useData'
import Marks from './components/Marks'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const width = window.innerWidth
const height = window.innerWidth

const App = () => {
  const data = useData(jsonUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  console.log({ data })

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  )
}

export default App

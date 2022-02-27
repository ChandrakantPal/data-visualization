import './App.css'
import {} from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import Marks from './components/Marks'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const width = 960
const height = 500

const App = () => {
  const data = useWorldAtlas(jsonUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  )
}

export default App

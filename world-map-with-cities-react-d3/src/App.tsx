import './App.css'
import {} from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import Marks from './components/Marks'
import { useCities } from './utils/useCities'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const csvUrl =
  'https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv'

const width = 960
const height = 500

const App = () => {
  const worldAtlas = useWorldAtlas(jsonUrl)
  const cities = useCities(csvUrl)

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>
  }

  return (
    <svg width={width} height={height}>
      <Marks worldAtlas={worldAtlas} cities={cities} />
    </svg>
  )
}

export default App

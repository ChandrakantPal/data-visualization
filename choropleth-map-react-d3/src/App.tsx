import './App.css'
import { max, scaleSequential, interpolateYlOrRd } from 'd3'
import { useWorldAtlas } from './utils/useWorldAtlas'
import Marks from './components/Marks'
import { useData } from './utils/useData'
import { useCodes } from './utils/useCodes'

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

const csvUrl =
  'https://gist.githubusercontent.com/curran/470752f12c027f8ff4266e7c96f26a56/raw/66908b56e371e7c9f5a1c0911ac3250f570a4c83/share-of-population-infected-with-hiv-ihme.csv'
const width = 960
const height = 500
const selectedYear = '2017'
const App = () => {
  const worldAtlas = useWorldAtlas(jsonUrl)
  const data = useData(csvUrl)
  const codes = useCodes()

  if (!worldAtlas || !data || !codes) {
    return <pre>Loading...</pre>
  }
  const numericCodeByAlphaCode = new Map()
  codes.forEach((code: any) => {
    const alpha3Code = code['alpha-3']
    const numericCode = code['country-code']
    numericCodeByAlphaCode.set(alpha3Code, numericCode)
  })

  const filteredData = data.filter((d: any) => d.Year === selectedYear)

  const rowByNumericCode = new Map()
  filteredData.forEach((d: any) => {
    const alpha3Code = d.Code
    const numericCode = numericCodeByAlphaCode.get(alpha3Code)
    rowByNumericCode.set(numericCode, d)
  })

  const colorValue = (d: any) => d.aids

  const colorScale = scaleSequential(interpolateYlOrRd).domain([
    0,
    max(filteredData, colorValue),
  ])

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        rowByNumericCode={rowByNumericCode}
        colorScale={colorScale}
        colorValue={colorValue}
      />
    </svg>
  )
}

export default App

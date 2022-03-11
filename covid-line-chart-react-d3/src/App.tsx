import './App.css'
import LineChart from './components/LineChart'
import { useData } from './utils/useData'

const width = window.innerWidth
const height = window.innerHeight
const csvUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/02be34e5ec0409835f79f61a547b2b42f2c6dfd7/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv'

//const csvUrl =
//  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv';

const App = () => {
  const data = useData(csvUrl)

  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading...</div>
  )
}

export default App

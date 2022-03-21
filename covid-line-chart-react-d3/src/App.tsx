import './App.css'
import LineChart from './components/LineChart'
import { useData } from './utils/useData'

const width = window.innerWidth
const height = window.innerHeight
//const csvUrl =
//  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/d1ed7ef35690594a918ed5fe1ffb6a75266d2c1f/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';

const csvUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

const App = () => {
  const data = useData(csvUrl)
  return data ? (
    <LineChart data={data} width={width} height={height} />
  ) : (
    <div>Loading...</div>
  )
}

export default App

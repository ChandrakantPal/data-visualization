import './App.css'
import { forceSimulation } from 'd3'

function App() {
  const nodes = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Carol' }]
  const simulation = forceSimulation(nodes)
  return <div className="App"></div>
}

export default App

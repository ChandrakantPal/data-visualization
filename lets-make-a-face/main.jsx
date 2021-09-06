import './style.css'

const width = 960
const height = 500

const App = () => <svg width={width} height={height}>
<circle r="245" cx="480" cy="250" fill="yellow" stroke="black" stroke-width="10"/>
<circle r="50" cx="350" cy="180"></circle>
<circle r="50" cx="600" cy="180"></circle>
</svg>

// document.querySelector('#app').innerHTML = ``
ReactDOM.render(<App />, document.getElementById("root"));
import './style.css'

const width = 960
const height = 500
const centerX = width/2
const centerY = height/2 
const strokeWidth = 10
const eyeOffsetX = 90
const eyeOffsetY = 100
const eyeRadius = 40
 
const App = () => <svg width={width} height={height}>
<circle r={centerY - strokeWidth/2} cx={centerX} cy={centerY} fill="yellow" stroke="black" strokeWidth={strokeWidth}/>
<circle r={eyeRadius} cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY}/>
<circle r={eyeRadius} cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY}/>
</svg>

// document.querySelector('#app').innerHTML = ``
ReactDOM.render(<App />, document.getElementById("root"));
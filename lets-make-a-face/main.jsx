import './style.css'

const width = 960
const height = 500
const centerX = width/2
const centerY = height/2 
const strokeWidth = 10
const eyeOffsetX = 90
const eyeOffsetY = 100
const eyeRadius = 40
const mouthWidth = 20
const mouthRadius = 140
const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius+mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*3/2)

const App = () => <svg width={width} height={height}>
<g transform={`translate(${centerX},${centerY})`}>
<circle r={centerY - strokeWidth/2}  fill="yellow" stroke="black" strokeWidth={strokeWidth}/>
<circle r={eyeRadius} cx={-eyeOffsetX} cy={-eyeOffsetY}/>
<circle r={eyeRadius} cx={eyeOffsetX} cy={-eyeOffsetY}/>
<path d={mouthArc()}/>
</g>
</svg>

// document.querySelector('#app').innerHTML = ``
ReactDOM.render(<App />, document.getElementById("root"));
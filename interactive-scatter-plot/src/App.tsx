import 'react-dropdown/style.css'
import './App.css'
import { scaleLinear, format, extent, scaleOrdinal } from 'd3'
import { useData } from './utils/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'
// import Dropdown from './components/Dropdown'
import { useState } from 'react'
import ReactDropdown from 'react-dropdown'
import ColorLegend from './components/ColorLegend'

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv'

const width = 960
const menuHeight = 75
const height = 500 - menuHeight
const margin = { top: 20, right: 200, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 45

const attributes = [
  { value: 'sepal_length', label: 'Sepal Length' },
  { value: 'sepal_width', label: 'Sepal Width' },
  { value: 'petal_length', label: 'Petal Length' },
  { value: 'petal_width', label: 'Petal Width' },
  { value: 'species', label: 'Species' },
]

// not using array.find() because of browser support issue
const getLabel = (value: string) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label
    }
  }
}

const App = () => {
  const data = useData(csvUrl)
  const initialXAttribute = 'sepal_length'
  const initialYAttribute = 'sepal_width'
  const [xAttribute, setXAttribute] = useState(initialXAttribute)
  const [yAttribute, setYAttribute] = useState(initialYAttribute)
  const [hoveredValue, setHoveredValue] = useState('')

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const xValue = (d: any) => d[xAttribute]
  const xAxisLabel = getLabel(xAttribute)

  const yValue = (d: any) => d[yAttribute]
  const yAxisLabel = getLabel(yAttribute)

  const colorValue = (d: any) => d.species
  const colorLegendLabel = 'Species'

  const filteredData = data.filter((d: any) => hoveredValue === colorValue(d))

  const circleRadius = 7

  const siFormat = format('.2s')
  const xAxisTickFormat = (tickValue: number) =>
    siFormat(tickValue).replace('G', 'B')

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#E6842A', '#137B80', '#8E6C8A'])

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">X</span>
        <ReactDropdown
          options={attributes}
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />
        <span className="dropdown-label">Y</span>
        <ReactDropdown
          options={attributes}
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />
      </div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            })rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <g transform={`translate(${innerWidth + 50},60)`}>
            <text className="axis-label" x={35} y={-25} textAnchor="middle">
              {colorLegendLabel}
            </text>
            <ColorLegend
              colorScale={colorScale}
              tickSpacing={20}
              tickSize={circleRadius}
              tickTextOffset={20}
              onHover={setHoveredValue}
            />
          </g>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={circleRadius}
          />
        </g>
      </svg>
    </>
  )
}

export default App

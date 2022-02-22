import './App.css'
import { scaleLinear, format, extent } from 'd3'
import { useData } from './utils/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'
import Dropdown from './components/Dropdown'
import { useState } from 'react'

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv'

const width = 960
const menuHeight = 75
const height = 500 - menuHeight
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 45

const attributes = [
  { value: 'sepal_length', label: 'Sepal Length' },
  { value: 'sepal_width', label: 'Sepal Width' },
  { value: 'petal_length', label: 'Petal Length' },
  { value: 'petal_width', label: 'Petal Width' },
  { value: 'species', label: 'Species' },
]

const App = () => {
  const data = useData(csvUrl)
  const initialXAttribute = 'sepal_length'
  const initialYAttribute = 'sepal_width'
  const [xAttribute, setXAttribute] = useState(initialXAttribute)
  const [yAttribute, setYAttribute] = useState(initialYAttribute)

  const xValue = (d: any) => d[xAttribute]
  const xAxisLabel = 'Sepal Length'

  const yValue = (d: any) => d[yAttribute]
  const yAxisLabel = 'Sepal Width'

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

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

  return (
    <>
      <label htmlFor="x-select">X:</label>
      <Dropdown
        id="x-select"
        options={attributes}
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      />
      <label htmlFor="y-select">Y:</label>
      <Dropdown
        id="y-select"
        options={attributes}
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      />
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
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </>
  )
}

export default App

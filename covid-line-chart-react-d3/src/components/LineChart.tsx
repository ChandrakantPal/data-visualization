import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import {
  extent,
  format,
  line,
  max,
  scaleLinear,
  scaleLog,
  scaleTime,
  timeFormat,
} from 'd3'
import YMarkerLine from './YMarkerLine'
import XMarkerLine from './XMarkerLine'
import XAxis from './XAxis'
import YAxis from './YAxis'
import VoronoiOverlay from './VoronoiOverlay'
import { CovidData } from '../utils/types'
import Tooltip from './Tooltip'

const xValue = (d: CovidData) => d.date
const yValue = (d: CovidData) => d.deathTotal

const margin = { top: 50, right: 40, bottom: 80, left: 100 }

const formatDate = timeFormat('%b %d, %Y')
const formatComa = format(',')
const LineChart: FC<{ data: CovidData[][]; width: number; height: number }> = ({
  data,
  width,
  height,
}) => {
  const [activeRow, setActiveRow] = useState<CovidData | null>(null)

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const allData: CovidData[] = useMemo(
    () =>
      data.reduce(
        (accumulator: any, countryTimeseries: any) =>
          accumulator.concat(countryTimeseries),
        []
      ),
    [data]
  )

  const epsilon = 1

  const xScale = useMemo(
    () => scaleTime().domain(extent(allData, xValue)).range([0, innerWidth]),
    [allData, xValue]
  )

  const yScale = useMemo(
    () =>
      scaleLog()
        .domain([epsilon, max(allData, yValue)])
        .range([innerHeight, 0]),
    [epsilon, allData, yValue]
  )

  const lineGenerator = useMemo(
    () =>
      line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(epsilon + yValue(d))),
    [xScale, xValue, yScale, yValue, epsilon]
  )

  const mostRecentDate = xScale.domain()[1]

  const handleVoronoiHover = useCallback(setActiveRow, [])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />
        {data.map((countryTimeseries, i) => (
          <path
            key={i}
            className="marker-line"
            d={`${lineGenerator(countryTimeseries)}`}
          />
        ))}

        <text className="title">
          Global Coronavirus Deaths Over Time by Country
        </text>
        <text
          className="axis-label"
          transform={`translate(-40,${innerHeight / 2}) rotate(-90)`}
          textAnchor="middle"
        >
          Cumulative Deaths
        </text>
        <text
          className="axis-label"
          textAnchor="middle"
          alignmentBaseline="hanging"
          transform={`translate(${innerWidth / 2},${innerHeight + 40})`}
        >
          Time
        </text>
        {allData.length > 0 && (
          <VoronoiOverlay
            onHover={handleVoronoiHover}
            innerHeight={innerHeight}
            innerWidth={innerWidth}
            allData={allData}
            lineGenerator={lineGenerator}
          />
        )}
        {activeRow ? (
          <>
            <path
              className="marker-line active"
              d={`${lineGenerator(
                data?.find(
                  (countryTimeseries) =>
                    countryTimeseries.countryName === activeRow.countryName
                )
              )}`}
            />
            <g
              transform={`translate(${lineGenerator.x()(
                activeRow
              )},${lineGenerator.y()(activeRow)})`}
            >
              <circle r={10} />
              <Tooltip className="tooltip-stroke" activeRow={activeRow} />
              <Tooltip className="tooltip" activeRow={activeRow} />
            </g>
          </>
        ) : null}
      </g>
    </svg>
  )
}

export default LineChart

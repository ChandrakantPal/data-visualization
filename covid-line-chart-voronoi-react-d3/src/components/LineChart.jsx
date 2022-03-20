import React, { useCallback, useState, useMemo } from 'react'
import { scaleTime, extent, scaleLog, max, line, timeFormat } from 'd3'
import { XAxis } from './XAxis'
import { YAxis } from './YAxis'
import { VoronoiOverlay } from './VoronoiOverlay'

const xValue = (d) => d.date
const yValue = (d) => d.deathTotal

const margin = { top: 50, right: 40, bottom: 80, left: 100 }

const formatDate = timeFormat('%b %d')

export const LineChart = ({ data, width, height }) => {
  const [activeCountryName, setActiveCountryName] = useState()

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const allData = useMemo(
    () =>
      data.reduce(
        (accumulator, countryTimeseries) =>
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

  console.log(activeCountryName)

  const handleVoronoiHover = useCallback((d) => {
    setActiveCountryName(d.countryName)
  }, [])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />
        {data.map((countryTimeseries) => {
          return (
            <path
              className="marker-line"
              d={lineGenerator(countryTimeseries)}
            />
          )
        })}

        <text transform={`translate(${innerWidth / 2},0)`} text-anchor="middle">
          Global Coronavirus Deaths Over Time by Country
        </text>
        <text
          className="axis-label"
          transform={`translate(-40,${innerHeight / 2}) rotate(-90)`}
          text-anchor="middle"
        >
          Cumulative Deaths
        </text>
        <text
          className="axis-label"
          text-anchor="middle"
          alignment-baseline="hanging"
          transform={`translate(${innerWidth / 2},${innerHeight + 40})`}
        >
          Time
        </text>
        <VoronoiOverlay
          onHover={handleVoronoiHover}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          allData={allData}
          lineGenerator={lineGenerator}
        />
        {activeCountryName ? (
          <path
            className="marker-line active"
            d={lineGenerator(
              data.find(
                (countryTimeseries) =>
                  countryTimeseries.countryName === activeCountryName
              )
            )}
          />
        ) : null}
      </g>
    </svg>
  )
}

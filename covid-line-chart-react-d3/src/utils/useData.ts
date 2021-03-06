import { useState, useEffect } from 'react'
import { csv, timeParse } from 'd3'
import { CovidData } from './types'

const sum = (accumulator: number, currentValue: number) =>
  accumulator + currentValue

const parseDay = timeParse('%m/%d/%y')

const transform = (rawData: any) => {
  // Filter out rows that represent provinces or state
  const countriesData = rawData.filter((d: any) => !d['Province/State'])
  // Get timeseries data for each country
  const days = rawData.columns.slice(4)
  return countriesData.map((d: any) => {
    const countryName = d['Country/Region']
    const countryTimeseries = days.map((day: any) => ({
      date: parseDay(day),
      deathTotal: +d[day],
      countryName,
    }))

    countryTimeseries.countryName = countryName
    return countryTimeseries
  })
}

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<CovidData[][]>([])

  useEffect(() => {
    csv(csvUrl).then((rawData) => {
      setData(transform(rawData))
    })
  }, [])

  return data
}

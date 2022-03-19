import { useState, useEffect } from 'react'
import { csv, timeParse } from 'd3'

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
    return days.map((day: any) => ({
      date: parseDay(day),
      deathTotal: +d[day],
      countryName,
    }))
  })
}

export const useData = (csvUrl: string) => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    csv(csvUrl).then((rawData) => {
      setData(transform(rawData))
    })
  }, [])

  return data
}

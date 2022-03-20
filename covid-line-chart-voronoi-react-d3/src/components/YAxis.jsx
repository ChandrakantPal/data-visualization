import { useRef, useEffect } from 'react'
import { select, axisLeft } from 'd3'

export const YAxis = ({ yScale, innerWidth }) => {
  const ref = useRef()
  useEffect(() => {
    const yAxisG = select(ref.current)
    const yAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(3)
      .ticks(10, '~s')
    //.tickFormat((tickValue) => tickValue);
    yAxisG.call(yAxis)
  }, [])
  return <g ref={ref} />
}

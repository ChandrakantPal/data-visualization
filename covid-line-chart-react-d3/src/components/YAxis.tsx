import { axisLeft, select } from 'd3'
import { FC, useEffect, useRef } from 'react'

const YAxis: FC<{ yScale: any; innerWidth: number }> = ({
  yScale,
  innerWidth,
}) => {
  const ref = useRef()
  useEffect(() => {
    const yAxisG = select(ref.current)
    const yAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(18)
      .ticks(10, '~s')
    yAxisG.call(yAxis)
  }, [])

  return <g ref={ref} />
}

export default YAxis

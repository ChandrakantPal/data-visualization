import { axisBottom, select } from 'd3'
import { FC, useEffect, useRef } from 'react'

const XAxis: FC<{ xScale: any }> = ({ xScale }) => {
  const ref = useRef(null)
  useEffect(() => {
    const xAxisG = select(ref.current)
    const xAxis = axisBottom(xScale)
    xAxisG.call(xAxis)
  }, [])

  return <g ref={ref} />
}

export default XAxis

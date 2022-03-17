import { axisBottom, select } from 'd3'
import { FC, useEffect, useRef } from 'react'

const XAxis: FC<{ xScale: any; innerHeight: number }> = ({
  xScale,
  innerHeight,
}) => {
  const ref = useRef()
  useEffect(() => {
    const xAxisG = select(ref.current)
    const xAxis = axisBottom(xScale).tickSize(-innerHeight).tickPadding(18)
    xAxisG.call(xAxis)
  }, [xScale, innerHeight])

  return <g transform={`translate(0,${innerHeight})`} ref={ref} />
}

export default XAxis

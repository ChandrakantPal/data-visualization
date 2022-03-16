import { select } from 'd3'
import { FC, useRef } from 'react'

const YAxis: FC<{ yScale: any }> = ({ yScale }) => {
  const ref = useRef()
  const yAxisG = select(ref.current)
  return <g ref={ref} />
}

export default YAxis

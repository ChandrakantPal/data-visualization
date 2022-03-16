import { FC, useRef } from 'react'

const YAxis: FC<{ yScale: any }> = ({ yScale }) => {
  const ref = useRef()
  return <g ref={ref} />
}

export default YAxis

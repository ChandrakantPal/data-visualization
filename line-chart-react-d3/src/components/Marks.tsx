import { line, curveNatural } from 'd3'
import { FC } from 'react'
import { DataType } from '../utils/type'

const Marks: FC<{
  data: DataType[]
  yScale: any
  xScale: any
  xValue: any
  yValue: any
  tooltipFormat: any
  circleRadius?: number
}> = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius = 10,
}) => (
  <g className="marks">
    <path
      fill="none"
      stroke="black"
      d={`${line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveNatural)(data)}`}
    />
    {data.map((d) => (
      <circle
        key={`${d.timestamp}`}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>
)

export default Marks

import { FC } from 'react'
import { DataType } from '../utils/type'

const Marks: FC<{
  data: DataType[]
  yScale: any
  xScale: any
  tooltipFormat: any
  circleRadius: number
  xValue: any
  yValue: any
}> = ({ data, xScale, yScale, tooltipFormat, circleRadius, xValue, yValue }) =>
  data.map((d: any) => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ))

export default Marks

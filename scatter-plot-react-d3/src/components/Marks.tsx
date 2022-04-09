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
  <>
    {data.map((d: any) => (
      <circle
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </>
)

export default Marks

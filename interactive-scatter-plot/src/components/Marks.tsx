import { FC } from 'react'
import { Flower } from '../utils/types'

const Marks: FC<{
  data: Flower[]
  yScale: any
  xScale: any
  colorScale: any
  xValue: any
  yValue: any
  colorValue: any
  tooltipFormat: any
  circleRadius?: number
}> = ({
  data,
  xScale,
  colorScale,
  yScale,
  xValue,
  yValue,
  colorValue,
  tooltipFormat,
  circleRadius = 10,
}) => (
  <>
    {data.map((d, i) => (
      <circle
        key={`${d.petal_length * d.petal_width}${i}`}
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        fill={colorScale(colorValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </>
)

export default Marks

import { line } from 'd3'
import { FC } from 'react'

const Marks: FC<{
  data: any
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
}) =>
  data.map((d: any) => (
    <>
      <path
        fill="none"
        stroke="black"
        d={`${line()
          .x((d) => xScale(xValue(d)))
          .y((d) => yScale(yValue(d)))(data)}`}
      />
      <circle
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    </>
  ))

export default Marks

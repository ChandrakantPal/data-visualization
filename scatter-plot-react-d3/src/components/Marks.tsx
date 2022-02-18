import { FC } from 'react'

const Marks: FC<{
  data: any
  yScale: any
  xScale: any
  xValue: any
  yValue: any
  tooltipFormat: any
}> = ({ data, xScale, yScale, xValue, yValue, tooltipFormat }) =>
  data.map((d: any) => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ))

export default Marks

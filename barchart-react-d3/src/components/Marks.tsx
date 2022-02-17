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
    <rect
      className="mark"
      key={yValue(d)}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ))

export default Marks

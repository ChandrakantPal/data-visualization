import { FC } from 'react'

const Marks: FC<{
  binnedData: any
  yScale: any
  xScale: any
  tooltipFormat: any
  innerHeight: number
}> = ({ binnedData, xScale, yScale, tooltipFormat, innerHeight }) => {
  return binnedData.map((d: any) => (
    <rect
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      width={xScale(d.x1) - xScale(d.x0)}
      height={innerHeight - yScale(d.y)}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ))
}

export default Marks

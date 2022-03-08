import { FC } from 'react'

const Marks: FC<{
  binnedData: any
  yScale: any
  xScale: any
  tooltipFormat: any
  innerHeight: number
}> = ({ binnedData, xScale, yScale, tooltipFormat, innerHeight }) => (
  <g className="marks">
    {/* <path
      fill="none"
      stroke="black"
      d={`${line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))
        .curve(curveNatural)(binnedData)}`}
    /> */}
    {binnedData.map((d: any) => (
      <rect
        x={xScale(d.x0)}
        y={yScale(d.y)}
        width={xScale(d.x1) - xScale(d.x0)}
        height={innerHeight - yScale(d.y)}
      >
        <title>{tooltipFormat(d.y)}</title>
      </rect>
    ))}
  </g>
)

export default Marks

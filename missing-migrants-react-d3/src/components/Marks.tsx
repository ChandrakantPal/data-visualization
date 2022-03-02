import { line, curveNatural } from 'd3'
import { FC } from 'react'

const Marks: FC<{
  binnedData: any
  yScale: any
  xScale: any
  tooltipFormat: any
  circleRadius?: number
}> = ({ binnedData, xScale, yScale, tooltipFormat, circleRadius = 10 }) => (
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
      <circle cx={xScale(d.x0)} cy={yScale(d.y)} r={circleRadius}>
        <title>{tooltipFormat(d.y)}</title>
      </circle>
    ))}
  </g>
)

export default Marks

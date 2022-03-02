import { line, curveNatural } from 'd3'
import { FC } from 'react'

const Marks: FC<{
  binnedData: any
  yScale: any
  xScale: any
  xValue: any
  yValue: any
  tooltipFormat: any
  circleRadius?: number
}> = ({
  binnedData,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius = 10,
}) => (
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
      <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>
)

export default Marks

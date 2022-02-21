import { FC } from 'react'

const Marks: FC<{
  data: any
}> = ({ data }) =>
  data.map((d: any) => (
    <g className="marks">
      <path d={``} />
      {/* <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
        <title>{tooltipFormat(xValue(d))}</title>
      </circle> */}
    </g>
  ))

export default Marks

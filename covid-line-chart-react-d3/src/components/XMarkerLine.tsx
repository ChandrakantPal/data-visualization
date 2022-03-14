import { FC } from 'react'

const XMarkerLine: FC<{ value: Date; xScale: any; innerHeight: number }> = ({
  value,
  xScale,
  innerHeight,
}) => {
  const markerLineX = xScale(value)
  const markerLineY1 = 0
  const markerLineY2 = innerHeight
  return (
    <>
      <line
        className="marker-line"
        x1={markerLineX}
        y1={markerLineY1}
        x2={markerLineX}
        y2={markerLineY2}
      />
      <text
        textAnchor="end"
        alignmentBaseline="middle"
        x={markerLineX - 8}
        y={markerLineY1}
      >
        10,000
      </text>
    </>
  )
}

export default XMarkerLine

import { FC } from 'react'

const YMarkerLine: FC<{ value: number; yScale: any }> = ({ value, yScale }) => {
  const markerLineY = yScale(value)
  const markerLineX1 = 0
  const markerLineX2 = innerWidth
  return (
    <>
      <line
        className="marker-line"
        x1={markerLineX1}
        y1={markerLineY}
        x2={markerLineX2}
        y2={markerLineY}
      />
      <text
        textAnchor="end"
        alignmentBaseline="middle"
        x={markerLineX1 - 8}
        y={markerLineY}
      >
        10,000
      </text>
    </>
  )
}

export default YMarkerLine

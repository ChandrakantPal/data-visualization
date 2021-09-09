import React, { FC } from 'react'

const FaceContainer: FC<{
  width: number
  height: number
  centerX: number
  centerY: number
}> = ({ width, height, centerX, centerY, children }) => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  )
}

export default FaceContainer

import React, { FC } from 'react'

const BackgroundCircle: FC<{ radius: number; strokeWidth: number }> = ({
  radius,
  strokeWidth,
}) => {
  return (
    <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
  )
}

export default BackgroundCircle

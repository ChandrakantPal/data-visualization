import React, { FC } from 'react'

const Eye: FC<{ radius: number; cx: number; cy: number }> = ({
  radius,
  cx,
  cy,
}) => {
  return <circle r={radius} cx={cx} cy={cy} />
}

export default Eye

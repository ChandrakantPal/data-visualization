import { arc } from 'd3-shape'
import React, { FC } from 'react'

const Mouth: FC<{ mouthRadius: number; mouthWidth: number }> = ({
  mouthRadius,
  mouthWidth,
}) => {
  const mouthArc: any = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2)
  return <path d={mouthArc()} />
}

export default Mouth

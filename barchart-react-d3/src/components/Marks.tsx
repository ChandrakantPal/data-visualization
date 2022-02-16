import { FC } from 'react'

const Marks: FC<{ data: any; yScale: any; xScale: any }> = ({
  data,
  xScale,
  yScale,
}) =>
  data.map((d: any) => (
    <rect
      key={d.Country}
      y={yScale(d.Country)}
      width={xScale(d.Population)}
      height={yScale.bandwidth()}
    />
  ))

export default Marks

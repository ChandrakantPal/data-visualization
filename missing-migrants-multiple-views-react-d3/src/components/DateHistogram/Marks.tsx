import { FC } from 'react'
import { BinnedDataType } from '../../utils/types'

const Marks: FC<{
  binnedData: BinnedDataType[]
  yScale: any
  xScale: any
  tooltipFormat: any
  innerHeight: number
}> = ({ binnedData, xScale, yScale, tooltipFormat, innerHeight }) => {
  return (
    <>
      {binnedData.map((d, i) => (
        <rect
          key={`${d.x0}${i}`}
          className="mark"
          x={xScale(d.x0)}
          y={yScale(d.y)}
          width={xScale(d.x1) - xScale(d.x0)}
          height={innerHeight - yScale(d.y)}
        >
          <title>{tooltipFormat(d.y)}</title>
        </rect>
      ))}
    </>
  )
}

export default Marks

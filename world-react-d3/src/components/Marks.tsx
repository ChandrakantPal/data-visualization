import { geoEqualEarth, geoPath } from 'd3'
import { FC } from 'react'

const projection = geoEqualEarth()
const path = geoPath(projection)

const Marks: FC<{
  data: any
}> = ({ data: { land, interiors } }) => {
  console.log({ land, interiors })

  return (
    <g className="marks">
      {land?.features?.map((d: any) => (
        <path d={`${path(d)}`} />
      ))}
    </g>
  )
}

export default Marks

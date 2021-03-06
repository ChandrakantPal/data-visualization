import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { FC } from 'react'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks: FC<{
  data: any
}> = ({ data: { land, interiors } }) => {
  console.log({ land, interiors })

  return (
    <g className="marks">
      <path className="sphere" d={`${path({ type: 'Sphere' })}`} />
      <path className="graticules" d={`${path(graticule())}`} />
      {land.features.map((feature: any) => (
        <path className="land" d={`${path(feature)}`} />
      ))}
      {/* <path className="interiors" d={`${path(interiors)}`} /> */}
    </g>
  )
}

export default Marks

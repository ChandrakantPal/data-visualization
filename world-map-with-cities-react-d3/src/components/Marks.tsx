import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { FC } from 'react'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks: FC<{
  worldAtlas: any
  cities: any
}> = ({ worldAtlas: { land, interiors }, cities }) => {
  console.log({ land, interiors })

  return (
    <g className="marks">
      <path className="sphere" d={`${path({ type: 'Sphere' })}`} />
      <path className="graticules" d={`${path(graticule())}`} />
      {land.features.map((feature: any) => (
        <path className="land" d={`${path(feature)}`} />
      ))}
      {/* <path className="interiors" d={`${path(interiors)}`} /> */}
      {cities.map((d: any) => {
        const [x, y] = projection([d.lng, d.lat])
        return <circle cx={x} cy={y} r={1.5} />
      })}
    </g>
  )
}

export default Marks

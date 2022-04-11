import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { FC } from 'react'
import { CityDataType } from '../utils/type'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks: FC<{
  worldAtlas: any
  cities: CityDataType[]
  sizeScale: any
  sizeValue: any
}> = ({ worldAtlas: { land, interiors }, cities, sizeScale, sizeValue }) => {
  return (
    <g className="marks">
      <path className="sphere" d={`${path({ type: 'Sphere' })}`} />
      <path className="graticules" d={`${path(graticule())}`} />
      {land.features.map((feature: any) => (
        <path className="land" d={`${path(feature)}`} />
      ))}
      {/* <path className="interiors" d={`${path(interiors)}`} /> */}
      {cities.map((d, i) => {
        const [x, y] = projection([d.lng, d.lat])
        return (
          <circle
            key={`${d.city}${i}`}
            cx={x}
            cy={y}
            r={sizeScale(sizeValue(d))}
          />
        )
      })}
    </g>
  )
}

export default Marks

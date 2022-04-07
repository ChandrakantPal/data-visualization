import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { FC } from 'react'
import { DataType } from '../utils/types'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks: FC<{
  worldAtlas: any
  data: DataType[]
  sizeScale: any
  sizeValue: any
}> = ({ worldAtlas: { land, interiors }, data, sizeScale, sizeValue }) => {
  return (
    <g className="marks">
      <path className="sphere" d={`${path({ type: 'Sphere' })}`} />
      <path className="graticules" d={`${path(graticule())}`} />
      {land.features.map((feature: any) => (
        <path className="land" d={`${path(feature)}`} />
      ))}
      {/* <path className="interiors" d={`${path(interiors)}`} /> */}
      {data.map((d, i) => {
        const [x, y] = projection(d.coords)
        return (
          <circle
            key={`${d['Reported Date']}${i}`}
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

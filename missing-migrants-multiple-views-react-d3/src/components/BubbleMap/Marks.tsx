import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'
import { FC, useMemo } from 'react'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks: FC<{
  worldAtlas: any
  data: any
  sizeScale: any
  sizeValue: any
}> = ({ worldAtlas: { land, interiors }, data, sizeScale, sizeValue }) => {
  return (
    <g className="marks">
      {useMemo(
        () => (
          <>
            <path className="sphere" d={`${path({ type: 'Sphere' })}`} />
            <path className="graticules" d={`${path(graticule())}`} />
            {land.features.map((feature: any) => (
              <path className="land" d={`${path(feature)}`} />
            ))}
            {/* <path className="interiors" d={`${path(interiors)}`} /> */}
          </>
        ),
        [path, graticule, land]
      )}
      {data.map((d: any) => {
        const [x, y] = projection(d.coords)
        return <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} />
      })}
    </g>
  )
}

export default Marks

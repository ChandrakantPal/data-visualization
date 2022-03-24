import { FC, useMemo } from 'react'
import { CovidData } from '../utils/types'
import { Delaunay, Line } from 'd3'

const VoronoiOverlay: FC<{
  innerWidth: number
  innerHeight: number
  allData: CovidData[]
  lineGenerator: Line<[number, number]>
  margin: { top: number; right: number; left: number; bottom: number }
  onHover: (hoverId: CovidData) => void
}> = ({
  innerHeight = 500,
  innerWidth = 960,
  allData,
  lineGenerator,
  onHover,
  margin,
}) => {
  return useMemo(() => {
    console.log('memoizing')
    const points = allData?.map((d) => [
      lineGenerator.x()(d),
      lineGenerator.y()(d),
    ])
    const delaunay = Delaunay.from(points)
    const voronoi = delaunay.voronoi([
      0,
      0,
      innerWidth + margin.right,
      innerHeight,
    ])
    console.log({ points, delaunay, voronoi })

    return (
      <g className="voronoi">
        {points?.map((point, i) => (
          <path
            className="voronoi-cell"
            key={i}
            onMouseEnter={() => onHover(allData[i])}
            // fill="none"
            // stroke="pink"
            d={voronoi.renderCell(i)}
          />
        ))}
      </g>
    )
  }, [allData, lineGenerator, innerWidth, innerHeight, onHover])
}

export default VoronoiOverlay

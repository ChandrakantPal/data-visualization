import { FC, useMemo } from 'react'
import * as d3 from 'd3'

const VoronoiOverlay: FC<{
  innerWidth: number
  innerHeight: number
  allData: any
  lineGenerator: any
  onHover: (hoverId: any) => void
}> = ({ innerHeight, innerWidth, allData, lineGenerator, onHover }) => {
  return useMemo(() => {
    console.log('memoizing')
    const points = allData.map((d: any) => [
      lineGenerator.x()(d),
      lineGenerator.y()(d),
    ])
    const delaunay = d3.Delaunay.from(points)
    const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight])
    console.log({ points, delaunay, voronoi })

    return (
      <g className="voronoi">
        {points.map((point: any, i: number) => (
          <path
            onMouseEnter={() => onHover(allData[i])}
            fill="none"
            stroke="pink"
            d={voronoi.renderCell(i)}
          />
        ))}
      </g>
    )
  }, [allData, lineGenerator, innerWidth, innerHeight, onHover])
}

export default VoronoiOverlay

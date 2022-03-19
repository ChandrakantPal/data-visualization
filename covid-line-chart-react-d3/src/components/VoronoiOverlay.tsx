import { FC } from 'react'
import { Delaunay } from 'd3'

const VoronoiOverlay: FC<{
  innerWidth: number
  innerHeight: number
  points: any
}> = ({ innerHeight, innerWidth, points }) => {
  const delaunay = Delaunay.from(points)
  const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight])
  return (
    <g className="voronoi">
      {points.map((point: any, i: number) => (
        <path fill="none" stroke="black" d={`${voronoi.renderCell(i)}`} />
      ))}
    </g>
  )
}

export default VoronoiOverlay

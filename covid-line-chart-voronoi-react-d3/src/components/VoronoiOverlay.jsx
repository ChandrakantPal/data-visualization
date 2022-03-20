import { Delaunay } from 'd3'
import { useMemo } from 'react'
export const VoronoiOverlay = ({
  innerWidth,
  innerHeight,
  allData,
  lineGenerator,
  onHover,
}) => {
  return useMemo(() => {
    console.log('memoizing')
    const points = allData.map((d) => [
      lineGenerator.x()(d),
      lineGenerator.y()(d),
    ])
    const delaunay = Delaunay.from(points)
    const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight])
    return (
      <g className="voronoi">
        {points.map((point, i) => (
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

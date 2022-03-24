import { format, timeFormat } from 'd3'
import { FC } from 'react'
import { CovidData } from '../utils/types'

const formatDate = timeFormat('%b %d, %Y')
const formatComa = format(',')

const Tooltip: FC<{ className: string; activeRow: CovidData }> = ({
  className,
  activeRow,
}) => {
  return (
    <text className={className} x={-10} y={-10} textAnchor="end">
      {activeRow.countryName}: {formatComa(activeRow.deathTotal)}{' '}
      {activeRow.deathTotal > 1 ? 'deaths' : 'death'} as of{' '}
      {formatDate(activeRow.date)}
    </text>
  )
}

export default Tooltip

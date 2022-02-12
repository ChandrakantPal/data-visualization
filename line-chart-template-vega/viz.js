import vl from 'vega-lite-api'
export const viz = vl
  .markLine({ size: 5, opacity: 0.5 })
  .encode(
    vl.x().fieldT('timestamp'),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature')
  )

export interface DataType {
  'Location Coordinates': string
  'Reported Date': string
  'Total Dead and Missing': number
  coords: [number, number]
}

export interface BinnedDataType {
  x0: Date
  x1: Date
  y: number
}

export interface DataType {
  'Location Coordinates': string
  'Reported Date': Date
  'Total Dead and Missing': number
}

export interface BinnedDataType {
  x0: Date
  x1: Date
  y: number
}

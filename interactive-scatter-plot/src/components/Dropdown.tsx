import { FC } from 'react'

const Dropdown: FC<{
  options: [{ value: string; label: string }]
  id: string
  selectedValue: string
  onSelectedValueChange: (value: string) => void
}> = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <select
    id={id}
    value={selectedValue}
    onChange={(event) => onSelectedValueChange(event.target.value)}
  >
    {options.map(({ value, label }) => (
      <option value={value}>{label}</option>
    ))}
  </select>
)

export default Dropdown

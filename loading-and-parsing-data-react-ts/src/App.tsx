import React, { useEffect, useState } from 'react'
import { csv } from 'd3-fetch'
import './App.css'
import { DSVRowArray } from 'd3-dsv'

const App = () => {
  const [data, setData] = useState<DSVRowArray<string> | null>(null)

  useEffect(() => {
    const csvUrl =
      'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
    csv(csvUrl).then(setData)
  }, [])

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <div className="App">
      {data?.map((d) => (
        <div
          key={d['RGB hex value']}
          style={{
            backgroundColor: d['RGB hex value'],
            width: '100vw',
            height: 4,
          }}
        />
      ))}
    </div>
  )
}

export default App

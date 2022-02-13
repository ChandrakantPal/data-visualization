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

  const message = (messageData: DSVRowArray<string>) => `
    ${Math.round(messageData.length / 1024)}  kb \n${
    messageData.length
  } rows\n${messageData.columns.length} columns`

  if (!data) {
    return <pre>Loading...</pre>
  }

  return <div className="App"></div>
}

export default App

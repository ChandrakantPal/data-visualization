import './style.css'

const fetchText = async (url) => {
  const response = await fetch(url)
  return await response.text()
}
const csvUrl =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

fetchText(csvUrl).then((text) => {
  const data = d3.csvParse(text)
  const message = `${Math.round(text.length / 1024)}  kb \n${
    data.length
  } rows\n${data.columns.length} columns`
  document.getElementById('text-container').textContent = message
})

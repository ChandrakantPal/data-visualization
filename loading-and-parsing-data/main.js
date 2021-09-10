import './style.css'

const url =
  'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

const fetchText = async () => {
  const response = await fetch(url)
  const text = await response.text()
  console.log(text)
}
fetchText()

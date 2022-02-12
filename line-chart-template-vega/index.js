// import './style.css'
import vega from 'vega'
import vegaLite from 'vega-lite'
import { register } from 'vega-lite-api'
import { Handler } from 'vega-tooltip'
import { config } from './config'
import { getData } from './getData'
import { viz } from './viz'

register(vega, vegaLite, {
  view: { renderer: 'svg' },
  init: (view) => {
    view.tooltip(new Handler().call)
  },
})

const run = async () => {
  const marks = viz
    .data(await getData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: 'fit', contains: 'padding' })
    .config(config)

  document.body.appendChild(await marks.render())
}
run()
// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

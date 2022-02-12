;(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict'

  vega = vega && vega.hasOwnProperty('default') ? vega['default'] : vega
  vegaLite =
    vegaLite && vegaLite.hasOwnProperty('default')
      ? vegaLite['default']
      : vegaLite
  vl = vl && vl.hasOwnProperty('default') ? vl['default'] : vl

  // Appearance customization to improve readability.
  // See https://vega.github.io/vega-lite/docs/
  const dark = '#3e3c38'
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray',
    },
    style: {
      'guide-label': {
        fontSize: 20,
        fill: dark,
      },
      'guide-title': {
        fontSize: 30,
        fill: dark,
      },
    },
  }

  const csvUrl =
    'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv  '

  const getData = async () => {
    const data = await d3.csv(csvUrl)

    // Have a look at the attributes available in the console!
    console.log(data[0])

    return data
  }

  const viz = vl
    .markLine({ size: 5, opacity: 0.5 })
    .encode(
      vl.x().fieldT('timestamp'),
      vl.y().fieldQ('temperature'),
      vl.tooltip().fieldN('temperature')
    )

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: (view) => {
      view.tooltip(new vegaTooltip.Handler().call)
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
})(vega, vegaLite, vl, vegaTooltip, d3)

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImdldERhdGEuanMiLCJ2aXouanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlYXJhbmNlIGN1c3RvbWl6YXRpb24gdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbi8vIFNlZSBodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL1xuY29uc3QgZGFyayA9ICcjM2UzYzM4JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGF4aXM6IHtcbiAgICBkb21haW46IGZhbHNlLFxuICAgIHRpY2tDb2xvcjogJ2xpZ2h0R3JheSdcbiAgfSxcbiAgc3R5bGU6IHtcbiAgICBcImd1aWRlLWxhYmVsXCI6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZpbGw6IGRhcmtcbiAgICB9LFxuICAgIFwiZ3VpZGUtdGl0bGVcIjoge1xuICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgZmlsbDogZGFya1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2N1cnJhbi84YzEzMWE3NGI4NWQwYmIwMjQ2MjMzZGUyY2ZmM2Y1Mi9yYXcvMTk0YzJmYzE0Mzc5MGI5MzdjNDJiZjA4NmE1YTQ0Y2IzYzU1MzQwZS9hdXRvLW1wZy5jc3YnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNzdihjc3ZVcmwpO1xuICBcbiAgLy8gSGF2ZSBhIGxvb2sgYXQgdGhlIGF0dHJpYnV0ZXMgYXZhaWxhYmxlIGluIHRoZSBjb25zb2xlIVxuICBjb25zb2xlLmxvZyhkYXRhWzBdKTtcblxuICByZXR1cm4gZGF0YTtcbn07IiwiaW1wb3J0IHZsIGZyb20gJ3ZlZ2EtbGl0ZS1hcGknO1xuZXhwb3J0IGNvbnN0IHZpeiA9IHZsXG4gIC5tYXJrQ2lyY2xlKHsgc2l6ZTogMzAwLCBvcGFjaXR5OiAwLjUgfSlcbiAgLmVuY29kZShcbiAgICB2bC54KCkuZmllbGRRKCdtcGcnKS5zY2FsZSh7IHplcm86IGZhbHNlIH0pLFxuICAgIHZsLnkoKS5maWVsZFEoJ2hvcnNlcG93ZXInKS5zY2FsZSh7IHplcm86IGZhbHNlIH0pLFxuICAgIHZsLmNvbG9yKCkuZmllbGROKCdvcmlnaW4nKSxcbiAgICB2bC5zaXplKCkuZmllbGRRKCd3ZWlnaHQnKSxcbiAgICB2bC50b29sdGlwKCkuZmllbGROKCduYW1lJylcbiAgKTsiLCJpbXBvcnQgdmVnYSBmcm9tICd2ZWdhJztcbmltcG9ydCB2ZWdhTGl0ZSBmcm9tICd2ZWdhLWxpdGUnO1xuaW1wb3J0IHZsIGZyb20gJ3ZlZ2EtbGl0ZS1hcGknO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ3ZlZ2EtdG9vbHRpcCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCB7IHZpeiB9IGZyb20gJy4vdml6JztcblxudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHtcbiAgdmlldzogeyByZW5kZXJlcjogJ3N2ZycgfSxcbiAgaW5pdDogdmlldyA9PiB7IHZpZXcudG9vbHRpcChuZXcgSGFuZGxlcigpLmNhbGwpOyB9XG59KTtcblxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IHZpelxuICAgIC5kYXRhKGF3YWl0IGdldERhdGEoKSlcbiAgICAud2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgLmF1dG9zaXplKHsgdHlwZTogJ2ZpdCcsIGNvbnRhaW5zOiAncGFkZGluZycgfSlcbiAgICAuY29uZmlnKGNvbmZpZyk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF3YWl0IG1h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

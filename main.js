// build, then change vite to =2.7.7 and build

// ~100KB
import('markdown-it').then(({ default: markdownIt }) => {
  const md = markdownIt()
  console.log(md.render('# test'))
})

// ~1MB
import('echarts').then(({ default: echarts }) => {
  const chart = echarts.init(document.getElementById('chart'))
  chart.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  })
})

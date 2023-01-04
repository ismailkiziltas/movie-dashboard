const watchOption = {
    series: [{
        name: 'Net Profit',
        data: [120444, 150444, 220444, 180444, 190444, 240444]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 5
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['#5AD6B0']
        },
        xaxis: {
            categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        },

        fill: {
            opacity: 1,
            colors: ['#5AD6B0'],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    var val = Math.abs(value)
                    if (val >= 1000) {
                        val = (val / 1000).toFixed(0) + 'K'
                    }
                    return val
                }
            }
        },
    },
}
export default watchOption
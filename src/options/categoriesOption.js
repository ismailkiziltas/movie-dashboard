const categoriesOption = {
    series: [50, 70, 50, 60],
    options: {
        chart: {
            height: 350,
            type: 'pie',
        },
        legend: {
            position: "bottom"
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            offsetY: 0,
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: '16px',
                            label: "Movies",
                            color: '#0065bd',
                        }
                    }
                },
            }
        },
        labels: ['Action', "Comedy", "Romantic", "Drama"],
    },
}

export default categoriesOption
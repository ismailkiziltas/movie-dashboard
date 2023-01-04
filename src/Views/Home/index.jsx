import React, { useState } from 'react'
import { GridWrapper, GridSection, HomeTitle } from './Home.styled'
import { Card, Select, TopMovies, Movies, Activity } from '../../components/index'
import ReactApexChart from 'react-apexcharts'
import TopMoviesData from '../../__mocks__/topMovies'

const Home = () => {
    const selectDateWatch = [
        { title: "This Year", value: "Year" },
        { title: "This Month", value: "Month" },
        { title: "This Weeks", value: "Weeks" }
    ]

    const selectLastWatchDate = [
        { title: "Last 6 Months", value: "LastHalfYear" },
        { title: "Last Week", value: "LastWeek" }
    ]

    const [categoriesData, setCategoriesData] = useState({
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
    )
    const [watchData, setWatchData] = useState({

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


    })



    return (
        <>
            <HomeTitle>Dashboard</HomeTitle>
            <GridWrapper>
                <GridSection>
                    <Card title="Categories" content={
                        <ReactApexChart options={categoriesData.options}
                            series={categoriesData.series} type="donut" width={400} />
                    } header={
                        <Select options={selectDateWatch} />
                    } />
                    <Card title="Watch Time" content={
                        <ReactApexChart options={watchData.options} series={watchData.series} type="bar" width={550} />}
                        header={
                            <Select options={selectLastWatchDate} />
                        }
                    />
                    <Card title="Top Movies" content={<TopMovies TopMoviesData={TopMoviesData} />} />
                    <Card title="Movies" content={<Movies />} />
                </GridSection>
                <GridSection>
                    <Card title="Activity" content={<Activity />} />
                </GridSection>
            </GridWrapper >
        </>
    )
}

export default Home
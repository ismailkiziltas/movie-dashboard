import React, { useEffect } from 'react'
import { GridWrapper, GridSection, HomeTitle } from './Home.styled'
import { Card, Select, TopMovies, Movies, Activity, MoviesHeader } from '../../components/index'
import ReactApexChart from 'react-apexcharts'
import TopMoviesData from '../../__mocks__/topMovies'
import categoriesOption from '../../options/categoriesOption'
import watchOption from '../../options/watchOption'


const dateValues = {
    "Year": [120, 150, 220, 180],
    "Month": [70, 70, 80, 90],
    "Weeks": [40, 65, 55, 68]
}

const selectDateWatch = [
    { title: "This Year", value: "Year" },
    { title: "This Month", value: "Month" },
    { title: "This Weeks", value: "Weeks" }
]

const selectLastWatchDate = [
    { title: "Last 6 Months", value: "LastHalfYear" },
    { title: "Last Week", value: "LastWeek" }
]

const Home = () => {

    const handleChangeCategories = (event) => {
        categoriesOption.series = dateValues[event.target.value];
    }

    const handleChangeWatch = (event) => {
        // categoriesOption.series = dateValues[event.target.value];
    }

    useEffect(() => {

    }, [categoriesOption.series])

    return (
        <>
            <HomeTitle>Dashboard</HomeTitle>
            <GridWrapper>
                <GridSection>
                    <Card title="Categories" content={
                        <ReactApexChart options={categoriesOption.options}
                            series={categoriesOption.series} type="donut" width={350} />
                    } header={
                        <Select value={"Month"} options={selectDateWatch} onChange={handleChangeCategories} />
                    } />
                    <Card title="Watch Time" content={
                        <ReactApexChart options={watchOption.options} series={watchOption.series} type="bar" width={410} />}
                        header={
                            <Select value="LastWeek" options={selectLastWatchDate} onChange={handleChangeWatch} />
                        }
                    />
                    <Card title="Top Movies" content={<TopMovies TopMoviesData={TopMoviesData} />} />
                    <Card title="Movies" header={<MoviesHeader />} content={<Movies />} />
                </GridSection>
                <GridSection>
                    <Card title="Activity" content={<Activity />} />
                </GridSection>
            </GridWrapper >
        </>
    )
}

export default Home
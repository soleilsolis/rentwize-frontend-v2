import React from 'react'
import dynamic from 'next/dynamic'

// @material-tailwind/react
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from '@/components/MaterialTailwind'

// charts import
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

import ApexAxisChartSeries from 'react-apexcharts'

// deepmerge
import merge from 'deepmerge'

// line chart
interface ChartsPropsType {
    height: number
    series: object[]
    options: object
}

function AreaChart({
    height = 350,
    series,
    colors,
    options,
}: Partial<ChartsPropsType> & { colors: string | string[] }) {
    const chartOptions = React.useMemo(
        () => ({
            colors,
            ...merge(
                {
                    chart: {
                        height: height,
                        type: 'area',
                        zoom: {
                            enabled: false,
                        },
                        toolbar: {
                            show: false,
                        },
                    },
                    title: {
                        show: '',
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    legend: {
                        show: false,
                    },
                    markers: {
                        size: 0,
                        strokeWidth: 0,
                        strokeColors: 'transparent',
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 2,
                    },
                    grid: {
                        show: true,
                        borderColor: '#EEEEEE',
                        strokeDashArray: 5,
                        xaxis: {
                            lines: {
                                show: true,
                            },
                        },
                        padding: {
                            top: 5,
                            right: 20,
                        },
                    },
                    tooltip: {
                        theme: 'light',
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#757575',
                                fontSize: '12px',
                                fontFamily: 'inherit',
                                fontWeight: 300,
                            },
                        },
                    },
                    xaxis: {
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: '#757575',
                                fontSize: '12px',
                                fontFamily: 'inherit',
                                fontWeight: 300,
                            },
                        },
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0,
                            opacityTo: 0,
                            stops: [0, 100],
                        },
                    },
                },
                options ? options : {},
            ),
        }),
        [height, colors, options],
    )

    return (
        <Chart
            type="area"
            height={height}
            series={series as ApexAxisChartSeries}
            options={chartOptions as any}
        />
    )
}

const ChartsExample5 = () => {
    return (
        <section>
            <Card>
                <CardBody className="!p-2">
                    <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4 ">
                        <Typography variant="h3" color="blue-gray">
                            $127,092.22
                        </Typography>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600">
                                    2022
                                </Typography>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600">
                                    2023
                                </Typography>
                            </div>
                        </div>
                    </div>
                    {/** chart */}
                    <AreaChart
                        colors={['#4CAF50', '#2196F3']}
                        options={{
                            xaxis: {
                                categories: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ],
                            },
                        }}
                        series={[
                            {
                                name: '2022 Sales',
                                data: [
                                    0, 200, 180, 350, 500, 680, 800, 800, 880,
                                    900, 680, 900,
                                ],
                            },
                            {
                                name: '2023 Sales',
                                data: [
                                    200, 160, 150, 260, 600, 790, 900, 660, 720,
                                    800, 500, 800,
                                ],
                            },
                        ]}
                    />
                </CardBody>
                <CardFooter className="flex gap-6 flex-wrap items-center justify-between">
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Annual Sales Performance
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal text-gray-600 mt-1">
                            Year-to-Date sales comparison
                        </Typography>
                    </div>
                    <Button variant="outlined">View report</Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default ChartsExample5

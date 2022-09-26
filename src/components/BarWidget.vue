<template>
<v-container>
    <apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            series: [{
                name: 'Inflation',
                data: [350,247,288,450,467,364,489,512,241]
            }],
            chartOptions: {
                chart: {
                    height: 250,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '10px',
                        colors: ["#304758"]
                    }
                },

                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
                title: {
                    text: 'Monthty Leads in Year 2022',
                    floating: true,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            },

            // },
        }
    }
}
</script>

<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale, registerables } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12], backgroundColor: "#676781" } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>

  
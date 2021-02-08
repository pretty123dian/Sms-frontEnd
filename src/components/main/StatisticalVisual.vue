<template>
<div>
        <div class="chart-one lg:ml-4 sm:ml-4">
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
        </div>
        
        <div class="chart-two lg:ml-4 sm:ml-4">
             <line-chart :chart-data="datacollection"></line-chart>
        </div>
    </div>
</template>

<script>
// export default {
// name:"StatisticalVisual"
// }
 import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
        //   labels: [this.getRandomInt(), this.getRandomInt()],
        //   datasets: [
        //     {
        //       label: 'Data One',
        //       backgroundColor: '#574ae2',
        //       data: [this.getRandomInt(), this.getRandomInt()]
        //     }, {
        //       label: 'Data One',
        //       backgroundColor: '#4caf50',
        //       data: [this.getRandomInt(), this.getRandomInt()]
        //     }
            
        //   ]
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October', 'November','December'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#574ae2',
          data: [10, 39, 10, 20, 39, 80, 40,52,22,34,79,2]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false}
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    
  }
</script>

<style>


.chart-one{
    padding: 10px;
    /* border:1px solid black; */
    min-height: 550px;
    background-color: #fff;
    /* border:1px solid rgb(172, 169, 169); */
    border-radius: 5px;
    position: relative;
}
#line-chart{
    height: 450px !important;
    width:90% !important;
    margin: 5%;
    position: relative !important;
}
.chart-two{
    margin-top: 5%;
    margin-bottom: 10%;
      padding: 10px;
    /* border:1px solid black; */
    min-height: 550px;
    background-color: #fff;
    /* border:1px solid rgb(172, 169, 169); */
    border-radius: 5px;
    position: relative;
}

</style>
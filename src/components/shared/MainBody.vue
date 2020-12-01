<template>
  <div class=" col-start-3 col-end-10 ">

    <div class="grid grid-cols-1 sm:mr-5">
      <navbar/>
        <statistical-visual/>
    </div>
    </div>
</template>

<script>
import StatisticalVisual from '../main/StatisticalVisual.vue'
import Navbar from './Navbar.vue'
export default {
  components: { StatisticalVisual, Navbar },
name:"MainBody"
}
</script>

<style>
.chart-one{
    /* border:1px solid black; */
    height: 50vh;
    background-color: #fff;
    border:1px solid rgb(172, 169, 169);
    border-radius: 5px;
}
.chart-two{
    margin-top: 5%;
    border:1px solid rgb(172, 169, 169);
    height: 50vh;
    border-radius: 5px;
    margin-bottom: 10%;
    background-color: #fff;
}

</style>
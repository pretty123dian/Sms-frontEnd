<template>
  <div class="col-start-3 col-end-10">
    <div class="grid grid-cols-1 sm:mr-5">
      <search-bar />
      <!-- <statistical-visual/> -->
        <router-view />
    </div>
  </div>
</template>

<script>
// import StatisticalVisual from "../main/StatisticalVisual.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    // StatisticalVisual,
    SearchBar,
  },
  name: "MainBody",
};
</script>

<style>
.chart-one {
  /* border:1px solid black; */
  height: 50vh;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
.chart-two {
  margin-top: 5%;
  border: 1px solid #e4e4e4;
  height: 50vh;
  border-radius: 5px;
  margin-bottom: 10%;
  background-color: #fff;
}
</style>
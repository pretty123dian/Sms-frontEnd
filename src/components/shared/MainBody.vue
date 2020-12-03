<template>
  <div class="col-start-3 col-end-10 mt-3">
    <div class="grid grid-cols-2">
         <search-bar />
         <profile-header v-if="this.$route.name != 'Dashboard'"/>
    </div>
    <div class="grid grid-cols-1 sm:mr-5">
      <!-- <statistical-visual/> -->
        <router-view />
    </div>
  </div>
</template>

<script>
// import StatisticalVisual from "../main/StatisticalVisual.vue";
import SearchBar from "./SearchBar.vue";
import ProfileHeader from "./ProfileHeader";
export default {
  components: {
    // StatisticalVisual,
    SearchBar,
    ProfileHeader
  },
  name: "MainBody",
};
</script>

<style>
.chart-one {
  /* border:1px solid black; */
  height: 50vh;
  background-color: #fff;
  /* border: 1px solid #e4e4e4; */
  border-radius: 5px;
}
.chart-two {
  margin-top: 5%;
  /* border: 1px solid #e4e4e4; */
  height: 50vh;
  border-radius: 5px;
  margin-bottom: 10%;
  background-color: #fff;
}
</style>
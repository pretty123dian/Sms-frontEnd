<template>
  <div class="grid grid-cols-12 gap-2 dashboard">
      <Sidebar/>
      <!-- <search-bar/> -->
      <!-- <statistical-visual/> -->

      <main-body/>
      <right-sidebar/>
  </div>
</template>

<script>
import Sidebar from '../components/shared/Sidebar';
import RightSidebar from '../components/shared/RightSidebar';
import MainBody from '../components/shared/MainBody.vue';
// import StatisticalVisual from '../components/main/StatisticalVisual.vue';
// import SearchBar from '../components/shared/SearchBar.vue';
export default {
name: "Dashboard",
components:{
Sidebar,
RightSidebar,
MainBody
// StatisticalVisual,
// SearchBar
    
}
}
</script>

<style>
.dashboard{
   background-color: #fafaff !important;
   font-family: "Poppins",sans-serif;
   font-size: 13px;
}
</style>
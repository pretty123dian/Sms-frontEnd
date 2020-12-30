<template>
  <div class="grid grid-cols-12 gap-2 dashboard">
      <Sidebar/>
      <!-- <search-bar/> -->
      <!-- <statistical-visual/> -->
   <!-- <router-view/> -->
   
      <template v-if="this.$route.name!='Dashboard'">
        
    <main-body class="col-end-13"/>
        <!-- <profile-header class="top-0 sticky col-start-10 col-end-12"/> -->
      </template>
      <template v-else>
  <main-body/>
<right-sidebar/>
      </template>
      
  </div>
</template>

<script>
import Sidebar from '../components/shared/Sidebar';
import RightSidebar from '../components/shared/RightSidebar';
import MainBody from '../components/shared/MainBody.vue';
// import ProfileHeader from '../components/shared/ProfileHeader';
// import StatisticalVisual from '../components/main/StatisticalVisual.vue';
// import SearchBar from '../components/shared/SearchBar.vue';
export default {
name: "Dashboard",
components:{
Sidebar,
// ProfileHeader,
RightSidebar,
MainBody
    
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
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
.text-purple{
  color: #574ae2;
}
/* input[type=text]:focus,input[type=email]:focus, input[type=date]:focus, input[type=number]:focus, select:focus{
  border: 2px solid #574ae2;
  border-radius: 4px !important;
} */
tr td{
  padding: 1% 0%;
}
</style>
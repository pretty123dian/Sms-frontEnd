<template>
  <div class="grid grid-cols-12 gap-2">
      <Sidebar/>
      <statistical-visual/>
      <right-sidebar/>
  </div>
</template>

<script>
import Sidebar from '../components/shared/Sidebar';
import RightSidebar from '../components/shared/RightSidebar';
import StatisticalVisual from '../components/main/StatisticalVisual.vue';
export default {
name: "Dashboard",
components:{
Sidebar,
RightSidebar,
StatisticalVisual
    
}
}
</script>

<style>

</style>
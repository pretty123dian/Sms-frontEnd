<template>
  <div class="left-sidebar col-start-10 col-end-13">
    <profile-header/>
    <div class="right-side-container-1 h-100 w-50 p-5 mt-1 rounded-md mr-6">
      <span class="text-right font-bold">November</span> <br>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic non ipsum a impedit maiores fugiat dolor laboriosam? Magnam tempora possimus, illum vitae alias incidunt ipsa animi doloribus facilis assumenda eum?
    </div>
  </div>
</template>

<script>
import ProfileHeader from './ProfileHeader.vue'
export default {
  components: { ProfileHeader },
name:"RightSidebar"
}
</script>

<style>
.left-sidebar{
    /* border: 1px solid black; */
}
.right-side-container-1{
  background-color: #fff;
}
</style>
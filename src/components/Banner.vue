<template>
  <div class="main h-screen">
      <h1 class="mt-8 text-center font-12 text-lg">With Sms, all your school elements are in one place</h1>
    <div class="in ml-8 text-center">

      <div class="myImage w-3/4 mt-16">
        <img src="../assets/teacher.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Baner",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
.main {
  width: 50%;
  background-color: #fafaff;
  font-family: "Poppins", sans-serif;
}
h1 {
  /* font-size: 25px; */
  color: #574ae2;
}
</style>

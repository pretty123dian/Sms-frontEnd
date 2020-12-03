<template>
  <div class="text-center ">
    <footer class="">
      <h1 class="mt-5">Copyright @ 2020</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: #574ae2;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4em;
}
h1 {
  color: #fafaff;
}
</style>

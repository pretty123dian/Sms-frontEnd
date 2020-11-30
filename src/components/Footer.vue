<template>
  <div class="hello">
    <footer>
      <h1>Copyright @ 2020</h1>
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
  text-align: center;
}
h1 {
  margin-left: 100px;
  margin-top: 20px;
  color: #fafaff;
}
</style>

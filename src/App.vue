<template>
  <div id="app">
    <div class="flex">
      <Banner />
      <Login />
    </div>

    <Footer />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: {
    Banner,
    Footer,
    Login,
  },
};
</script>

<style src="./assets/tailwind.css">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
</style>

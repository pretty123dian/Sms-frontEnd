<template>
  <div class="home">
    <div class="flex">
      <Banner />
      <div v-if="this.$route.name === 'ForgotPassword'">
        <ForgotPassword />
      </div>
      <div v-else>
        <Login />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Login from "../components/Login";
import Banner from "../components/Banner";
import ForgotPassword from "../components/ForgotPassword";

export default {
  name: "Home",
  components: {
    Footer,
    Banner,
    Login,
    ForgotPassword,
  },
};
</script>

<style scoped>
.home {
  /* background-color: #fafaff !important; */
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}

</style>
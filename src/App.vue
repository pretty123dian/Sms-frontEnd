<template>
  <div id="app">
    <!-- <Home/> -->
  <!-- <Sidebar/> -->
  <Dashboard/>
  </div>
</template>

<script>
// import Home from './pages/Home';
// import Sidebar from './components/shared/Sidebar';
import Dashboard from './pages/Dashboard';
export default {
  name: "App",
  components: {
    // Home,
    Dashboard
}
}
</script>

<style src="./assets/tailwind.css">
*{
    /* font-family: 'Poppins',sans-serif; */
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

</style>

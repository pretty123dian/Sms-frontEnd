<template>
<div>
    <div class="flex">
      <Banner />
      <Login />
    </div>
    <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer';
import Login from '../components/Login';
import Banner from '../components/Banner';

export default {
name:"Home",
components:{
    Footer,
    Banner,
    Login
}
}
</script>

<style>

</style>
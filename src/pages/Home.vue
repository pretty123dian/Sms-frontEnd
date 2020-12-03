<template>
<div class="home">
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
.home{
   background-color: #fafaff !important;
   font-family: "Poppins",sans-serif;
   font-size: 14px;
}
</style>
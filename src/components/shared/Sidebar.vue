<template>

  <div class="sidebar col-start-1 col-end-3 ">
  <div class="col-start-1 col-end-2 sms-logo sm:m-2">
    IMG / LOGO AREA
  </div>
    <div class="home-links md:ml-3 md:mt-4 md:mr-3">
      
     <router-link class="active" to="/dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"/></svg>
        Dashboard </router-link>
     <router-link to="/view/lessons">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
        Lessons   </router-link>
      <router-link to ="/view/students">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"/></svg>
        Students </router-link>
      <router-link to="/view/instructors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"/></svg>
        Instructors </router-link>
         <router-link to="/">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"/></svg>   
        Logout </router-link>
        

    </div>
  </div>

</template>

<script>
// import Links from './SidebarLinks';
export default {
name: "Sidebar"
}
</script>
<style>
.sidebar{
  /* border:1px solid black; */
  height: 100vh;
  top: 0;
  position: sticky;
  background-color: #fff;
  /* width: 17%; */
  /* position: fixed; */
}
.svg{
  fill:#000000;
}
.sms-logo{
  border: 1px solid rgb(172, 172, 172);
  height: 20vh;
  text-align: center;
  padding-top: 25%;
}
.home-links a{
display: flex;
margin-top: 5%;
 padding: 5% 5%;
 border-radius: 20px;
}
.home-links a>.svg{
  margin-right: 5%;
  margin-top: 1%;
  margin-left:3%;
}
.home-links>.active{
  padding: 5% 5%;
    background-color: #E9E8FF;
    color: #574AE2;
  /* border:1px solid black; */
  border-radius: 20px;
}
.home-links>.active .svg{
    fill:#574AE2;
    font-weight: bold;
}
.home-links a:hover{
  background-color: #E9E8FF;
  color: #574AE2;
}
.home-links>a:hover .svg{
    fill:#574AE2;
    font-weight: bold;
}
</style>
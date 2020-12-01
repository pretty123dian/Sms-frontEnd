<template>

  <div class="sidebar col-start-1 col-end-3 ">
  <div class="col-start-1 col-end-2 sms-logo sm:m-2">
    LOGO AREA
  </div>
    <div class="home-links md:ml-3 md:mt-4 md:mr-3">
      <a href="" class="active">Dashboard</a>
      <a href="">Lessons</a>
      <a href="">Students</a>
      <a href="">Instructors</a>
      <a href="">Parents</a>
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
  border:1px solid black;
  height: 100vh;
  top: 0;
  position: sticky;
  /* width: 17%; */
  /* position: fixed; */
}

.sms-logo{
  border: 1px solid black;
  height: 20vh;
  text-align: center;
  padding-top: 25%;
}
.home-links a{
display: block;
margin-top: 5%;
 padding: 5% 5%;
 border-radius: 10px;
}
.home-links>.active{
  padding: 5% 5%;
    background-color: rgba(122, 20, 218, 0.712);
    color: #fff;
  /* border:1px solid black; */
  border-radius: 10px;
}
.home-links a:hover{
  /* font-weight: bold; */
  background-color: rgba(122, 20, 218, 0.712);
  color: #fff;
}
</style>
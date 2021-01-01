<template>
  <div class="sidebar col-start-1 col-end-3">
    <div class="col-start-1 col-end-2 sms-logo sm:m-2 flex">
      <img class="lg:w-20" src="../../assets/rca_logo.png" alt="" />
    </div>
    <div class="home-links md:ml-3 md:mr-3">
      <router-link
        :class="[this.$route.name == 'Dashboard' ? 'active' : '']"
        to="/dashboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"
          />
        </svg>
        Dashboard
      </router-link>
      <router-link
        to="/view/lessons"
        :class="[this.$route.name == 'Lessons' ? 'active' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
          />
        </svg>
        Lessons
      </router-link>
      <router-link
        to="/view/students"
        :class="[this.$route.name == 'Students' ? 'active' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"
          />
        </svg>
        Students
      </router-link>
      <router-link
        to="/view/instructors"
        :class="[this.$route.name == 'Instructors' ? 'active' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
          />
        </svg>
        Instructors
      </router-link>
      <router-link to="/view/assignments"
      :class="[this.$route.name==='Assignments'?'active':'']"
      >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      class="svg"
          width="18"
          height="18"
     ><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>


        Assignments
      </router-link>
      <router-link to="/view/notes" :class="[this.$route.name==='Notes'?'active':'']">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     class="svg"
          width="18"
          height="18"
><path fill="none" d="M0 0h24v24H0z"/><path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"/></svg>
  Notes
      </router-link>

      <router-link to="/view/categories" :class="[this.$route.name==='Categories'?'active':'']">

<svg width="18" height="18" class="svg" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M16.7069 -6.73096e-06H9.70691C9.50747 -6.73096e-06 9.31617 0.0792113 9.17514 0.220239C9.03411 0.361266 8.9549 0.552534 8.9549 0.751977V7.75198C8.9549 7.85073 8.97435 7.94852 9.01215 8.03976C9.04994 8.13099 9.10531 8.21389 9.17514 8.28372C9.24497 8.35355 9.32789 8.40895 9.41913 8.44674C9.51037 8.48453 9.60816 8.50399 9.70691 8.50399H12.4699L12.5079 13.291H8.5079V10.54C8.5079 10.3405 8.42866 10.1493 8.28763 10.0082C8.1466 9.86721 7.95533 9.78799 7.75589 9.78799H0.75589C0.556447 9.78799 0.365179 9.86721 0.224152 10.0082C0.0831243 10.1493 0.00390625 10.3405 0.00390625 10.54V17.54C0.00390625 17.7394 0.0831243 17.9307 0.224152 18.0717C0.365179 18.2128 0.556447 18.292 0.75589 18.292H7.75589C7.95533 18.292 8.1466 18.2128 8.28763 18.0717C8.42866 17.9307 8.5079 17.7394 8.5079 17.54V14.79H12.5239L12.5939 23.671H8.5079V20.921C8.5079 20.7215 8.42866 20.5303 8.28763 20.3892C8.1466 20.2482 7.95533 20.169 7.75589 20.169H0.75589C0.556447 20.169 0.365179 20.2482 0.224152 20.3892C0.0831243 20.5303 0.00390625 20.7215 0.00390625 20.921V27.921C0.00390625 28.0197 0.0233352 28.1175 0.0611267 28.2088C0.0989182 28.3 0.154322 28.3829 0.224152 28.4527C0.293981 28.5226 0.376872 28.578 0.468109 28.6157C0.559346 28.6535 0.657136 28.673 0.75589 28.673H7.75589C7.85464 28.673 7.95243 28.6535 8.04367 28.6157C8.13491 28.578 8.2178 28.5226 8.28763 28.4527C8.35746 28.3829 8.41286 28.3 8.45065 28.2088C8.48844 28.1175 8.5079 28.0197 8.5079 27.921V25.171H13.3549C13.5534 25.1694 13.7431 25.0891 13.8824 24.9477C14.0217 24.8063 14.0992 24.6155 14.0979 24.417L14.0219 20.517H17.6109V23.264C17.6109 23.4634 17.6901 23.6547 17.8311 23.7957C17.9722 23.9368 18.1634 24.016 18.3629 24.016H25.3629C25.5623 24.016 25.7536 23.9368 25.8947 23.7957C26.0357 23.6547 26.1149 23.4634 26.1149 23.264V16.264C26.1149 16.0646 26.0357 15.8733 25.8947 15.7322C25.7536 15.5912 25.5623 15.512 25.3629 15.512H18.3629C18.1634 15.512 17.9722 15.5912 17.8311 15.7322C17.6901 15.8733 17.6109 16.0646 17.6109 16.264V19.011H14.0109L13.9729 8.49697H16.7159C16.9154 8.49697 17.1066 8.41775 17.2477 8.27673C17.3887 8.1357 17.4679 7.94443 17.4679 7.74499V0.744988C17.467 0.646063 17.4466 0.548287 17.4078 0.457269C17.369 0.36625 17.3127 0.283769 17.242 0.214562C17.1713 0.145356 17.0876 0.0907703 16.9958 0.0539483C16.904 0.0171264 16.8058 -0.00119495 16.7069 -6.73096e-06ZM19.1069 17.019H24.6009V22.513H19.1069V17.019ZM1.5069 21.673H7.00089V27.167H1.5069V21.673ZM1.5069 11.291H7.00089V16.785H1.5069V11.291ZM10.4649 1.50198H15.9589V6.996H10.4649V1.50198Z" fill="none" class="svg"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="26.103" height="28.671" fill="white"/>
</clipPath>
</defs>
</svg>


User categories
      </router-link>



      
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"
          />
        </svg>
        Logout
      </router-link>
    </div>
  </div>
</template>

<script>
// import Links from './SidebarLinks';
export default {
  name: "Sidebar",
  mounted() {},
};
</script>
<style>
.sidebar {
  /* border:1px solid black; */
  height: 100vh;
  top: 0;
  position: sticky;
  background-color: #fff;
  /* width: 17%; */
  /* position: fixed; */
}
.svg {
  fill: #000000;
}
.path {
  fill: #000000;
}
.sms-logo {
  /* border: 1px solid rgb(172, 172, 172); */
  height: 15vh;
  justify-content: center;
}
.sms-logo img {
  position: relative;
  top: 0;
  height: 15vh;
}
.home-links a {
  display: flex;
  margin-top: 5%;
  padding: 5% 5%;
  border-radius: 20px;
}
.home-links a > .svg {
  margin-right: 5%;
  margin-top: 1%;
  margin-left: 3%;
}
.home-links > .active {
  padding: 5% 5%;
  background-color: #e9e8ff;
  color: #574ae2;
  /* border:1px solid black; */
  border-radius: 20px;
}
.home-links > .active .svg  {
  fill: #574ae2;
  font-weight: bold;
}
.home-links a:hover {
  background-color: #e9e8ff;
  color: #574ae2;
}
.home-links > a:hover .svg {
  fill: #574ae2;
  font-weight: bold;
}
</style>
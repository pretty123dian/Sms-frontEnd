<template>
  <div class="sidebar col-start-1 col-end-3">
    <div class="col-start-1 col-end-2 sms-logo sm:m-2 flex">
      <img class="lg:w-15" src="../../assets/rca_logo.png" alt="" />
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
      <router-link
        to="/view/assignments"
        :class="[this.$route.name === 'Assignments' ? 'active' : '']"
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
            d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
          />
        </svg>

        Assignments
      </router-link>
      <router-link
        to="/view/notes"
        :class="[this.$route.name === 'Notes' ? 'active' : '']"
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
            d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"
          />
        </svg>
        Notes
      </router-link>

      <router-link
        to="/view/categories"
        :class="[this.$route.name === 'Categories' ? 'active' : '']"
      >
        <svg
          width="18"
          height="18"
          class="svg"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M16.7069 -6.73096e-06H9.70691C9.50747 -6.73096e-06 9.31617 0.0792113 9.17514 0.220239C9.03411 0.361266 8.9549 0.552534 8.9549 0.751977V7.75198C8.9549 7.85073 8.97435 7.94852 9.01215 8.03976C9.04994 8.13099 9.10531 8.21389 9.17514 8.28372C9.24497 8.35355 9.32789 8.40895 9.41913 8.44674C9.51037 8.48453 9.60816 8.50399 9.70691 8.50399H12.4699L12.5079 13.291H8.5079V10.54C8.5079 10.3405 8.42866 10.1493 8.28763 10.0082C8.1466 9.86721 7.95533 9.78799 7.75589 9.78799H0.75589C0.556447 9.78799 0.365179 9.86721 0.224152 10.0082C0.0831243 10.1493 0.00390625 10.3405 0.00390625 10.54V17.54C0.00390625 17.7394 0.0831243 17.9307 0.224152 18.0717C0.365179 18.2128 0.556447 18.292 0.75589 18.292H7.75589C7.95533 18.292 8.1466 18.2128 8.28763 18.0717C8.42866 17.9307 8.5079 17.7394 8.5079 17.54V14.79H12.5239L12.5939 23.671H8.5079V20.921C8.5079 20.7215 8.42866 20.5303 8.28763 20.3892C8.1466 20.2482 7.95533 20.169 7.75589 20.169H0.75589C0.556447 20.169 0.365179 20.2482 0.224152 20.3892C0.0831243 20.5303 0.00390625 20.7215 0.00390625 20.921V27.921C0.00390625 28.0197 0.0233352 28.1175 0.0611267 28.2088C0.0989182 28.3 0.154322 28.3829 0.224152 28.4527C0.293981 28.5226 0.376872 28.578 0.468109 28.6157C0.559346 28.6535 0.657136 28.673 0.75589 28.673H7.75589C7.85464 28.673 7.95243 28.6535 8.04367 28.6157C8.13491 28.578 8.2178 28.5226 8.28763 28.4527C8.35746 28.3829 8.41286 28.3 8.45065 28.2088C8.48844 28.1175 8.5079 28.0197 8.5079 27.921V25.171H13.3549C13.5534 25.1694 13.7431 25.0891 13.8824 24.9477C14.0217 24.8063 14.0992 24.6155 14.0979 24.417L14.0219 20.517H17.6109V23.264C17.6109 23.4634 17.6901 23.6547 17.8311 23.7957C17.9722 23.9368 18.1634 24.016 18.3629 24.016H25.3629C25.5623 24.016 25.7536 23.9368 25.8947 23.7957C26.0357 23.6547 26.1149 23.4634 26.1149 23.264V16.264C26.1149 16.0646 26.0357 15.8733 25.8947 15.7322C25.7536 15.5912 25.5623 15.512 25.3629 15.512H18.3629C18.1634 15.512 17.9722 15.5912 17.8311 15.7322C17.6901 15.8733 17.6109 16.0646 17.6109 16.264V19.011H14.0109L13.9729 8.49697H16.7159C16.9154 8.49697 17.1066 8.41775 17.2477 8.27673C17.3887 8.1357 17.4679 7.94443 17.4679 7.74499V0.744988C17.467 0.646063 17.4466 0.548287 17.4078 0.457269C17.369 0.36625 17.3127 0.283769 17.242 0.214562C17.1713 0.145356 17.0876 0.0907703 16.9958 0.0539483C16.904 0.0171264 16.8058 -0.00119495 16.7069 -6.73096e-06ZM19.1069 17.019H24.6009V22.513H19.1069V17.019ZM1.5069 21.673H7.00089V27.167H1.5069V21.673ZM1.5069 11.291H7.00089V16.785H1.5069V11.291ZM10.4649 1.50198H15.9589V6.996H10.4649V1.50198Z"
              fill="none"
              class="svg"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="26.103" height="28.671" fill="white" />
            </clipPath>
          </defs>
        </svg>

        User categories
      </router-link>

      <router-link
        to="/view/classes"
        :class="[this.$route.name === 'Classes' ? 'active' : '']"
      >
        <svg
          width="18"
          height="18"
          class="svg"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              class="svg"
              d="M22.0806 0H2.27161C1.71075 0.00348498 1.17094 0.214033 0.755828 0.591218C0.340721 0.968403 0.0795779 1.48564 0.0225411 2.04361C-0.0344958 2.60158 0.116594 3.16095 0.4468 3.61432C0.777006 4.06769 1.26305 4.38311 1.81161 4.5V16.434C1.81214 16.9526 2.01839 17.4498 2.3851 17.8165C2.7518 18.1832 3.24901 18.3895 3.76761 18.39H11.4996V20.566C11.0687 20.7247 10.7073 21.03 10.4789 21.4283C10.2504 21.8267 10.1694 22.2927 10.25 22.7448C10.3306 23.1969 10.5677 23.6062 10.9197 23.9011C11.2718 24.1959 11.7164 24.3575 12.1756 24.3575C12.6348 24.3575 13.0794 24.1959 13.4315 23.9011C13.7835 23.6062 14.0206 23.1969 14.1012 22.7448C14.1819 22.2927 14.1008 21.8267 13.8723 21.4283C13.6439 21.03 13.2825 20.7247 12.8516 20.566V18.385H20.5846C21.1032 18.3845 21.6004 18.1782 21.9671 17.8115C22.3338 17.4448 22.5401 16.9476 22.5406 16.429V4.5C23.0892 4.38311 23.5752 4.06769 23.9054 3.61432C24.2356 3.16095 24.3867 2.60158 24.3297 2.04361C24.2726 1.48564 24.0115 0.968403 23.5964 0.591218C23.1813 0.214033 22.6415 0.00348498 22.0806 0ZM12.1806 23C12.0619 23 11.9459 22.9648 11.8473 22.8989C11.7486 22.833 11.6717 22.7392 11.6263 22.6296C11.5809 22.52 11.569 22.3993 11.5921 22.2829C11.6153 22.1666 11.6724 22.0596 11.7563 21.9757C11.8403 21.8918 11.9472 21.8347 12.0636 21.8115C12.1799 21.7884 12.3006 21.8003 12.4102 21.8457C12.5199 21.8911 12.6136 21.968 12.6795 22.0667C12.7454 22.1653 12.7806 22.2813 12.7806 22.4C12.7806 22.4791 12.765 22.5575 12.7346 22.6305C12.7042 22.7036 12.6596 22.7699 12.6035 22.8257C12.5473 22.8815 12.4807 22.9256 12.4075 22.9555C12.3342 22.9854 12.2557 23.0005 12.1766 23H12.1806ZM21.1886 16.432C21.1886 16.5911 21.1254 16.7437 21.0129 16.8563C20.9004 16.9688 20.7477 17.032 20.5886 17.032H3.76761C3.60848 17.032 3.45587 16.9688 3.34335 16.8563C3.23083 16.7437 3.16761 16.5911 3.16761 16.432V4.55H21.1896V16.434L21.1886 16.432ZM22.0886 3.191H2.27161C2.02748 3.191 1.79335 3.09402 1.62072 2.92139C1.44809 2.74876 1.35111 2.51463 1.35111 2.2705C1.35111 2.02637 1.44809 1.79224 1.62072 1.61961C1.79335 1.44698 2.02748 1.35 2.27161 1.35H22.0716C22.3157 1.35 22.5499 1.44698 22.7225 1.61961C22.8951 1.79224 22.9921 2.02637 22.9921 2.2705C22.9921 2.51463 22.8951 2.74876 22.7225 2.92139C22.5499 3.09402 22.3157 3.191 22.0716 3.191H22.0886Z"
              fill="black"
            />
            <path
              class="svg"
              d="M5.04729 15.83H19.3093C19.4886 15.83 19.6605 15.7588 19.7873 15.632C19.9141 15.5052 19.9853 15.3333 19.9853 15.154C19.9853 14.9747 19.9141 14.8028 19.7873 14.676C19.6605 14.5492 19.4886 14.478 19.3093 14.478H6.67229L10.1523 10.998L12.0123 12.858C12.0751 12.9212 12.1498 12.9714 12.2321 13.0056C12.3144 13.0399 12.4027 13.0575 12.4918 13.0575C12.5809 13.0575 12.6692 13.0399 12.7515 13.0056C12.8338 12.9714 12.9085 12.9212 12.9713 12.858L18.1713 7.658C18.2985 7.53083 18.3699 7.35834 18.3699 7.1785C18.3699 6.99865 18.2985 6.82617 18.1713 6.699C18.0441 6.57183 17.8716 6.50038 17.6918 6.50038C17.5119 6.50038 17.3395 6.57183 17.2123 6.699L12.4903 11.421L10.6303 9.561C10.5024 9.43525 10.3302 9.36478 10.1508 9.36478C9.97142 9.36478 9.79922 9.43525 9.67129 9.561L5.71629 13.521V6.421C5.71629 6.24171 5.64507 6.06977 5.51829 5.94299C5.39152 5.81622 5.21958 5.745 5.04029 5.745C4.861 5.745 4.68907 5.81622 4.56229 5.94299C4.43552 6.06977 4.3643 6.24171 4.3643 6.421V15.151C4.36335 15.2408 4.3804 15.3298 4.41444 15.4129C4.44847 15.496 4.49881 15.5714 4.56248 15.6347C4.62614 15.698 4.70185 15.7478 4.78512 15.7814C4.86839 15.8149 4.95753 15.8315 5.04729 15.83Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24.354" height="24.354" fill="white" />
            </clipPath>
          </defs>
        </svg>

        Classes
      </router-link>


      <router-link to='/view/classpromotions'
         :class="[this.$route.name === 'Promotions' ? 'active' : '']"
      >
        
<svg width="18" height="18" class="svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="svg" d="M23.1429 13.7319H22.2857V2.57474C22.2857 2.34712 22.1954 2.12882 22.0347 1.96787C21.8739 1.80691 21.6559 1.71649 21.4286 1.71649H12.8571V0.858246C12.8571 0.630625 12.7668 0.412327 12.6061 0.251374C12.4453 0.0904221 12.2273 0 12 0C11.7727 0 11.5547 0.0904221 11.3939 0.251374C11.2332 0.412327 11.1429 0.630625 11.1429 0.858246V1.71649H2.57143C2.3441 1.71649 2.12608 1.80691 1.96534 1.96787C1.80459 2.12882 1.71429 2.34712 1.71429 2.57474V13.7319H0.857143C0.629814 13.7319 0.411797 13.8224 0.251051 13.9833C0.0903058 14.1443 0 14.3626 0 14.5902V17.1649C0 17.3925 0.0903058 17.6108 0.251051 17.7718C0.411797 17.9328 0.629814 18.0232 0.857143 18.0232H6.29143L3.54857 22.7435C3.4461 22.9397 3.42327 23.1679 3.48487 23.3805C3.54647 23.5931 3.68772 23.7736 3.87912 23.8844C4.07052 23.9952 4.29727 24.0276 4.512 23.9749C4.72672 23.9223 4.91283 23.7886 5.03143 23.6018L8.27143 18.0232H15.72L18.9686 23.6018C19.0872 23.7886 19.2733 23.9223 19.488 23.9749C19.7027 24.0276 19.9295 23.9952 20.1209 23.8844C20.3123 23.7736 20.4535 23.5931 20.5151 23.3805C20.5767 23.1679 20.5539 22.9397 20.4514 22.7435L17.7086 18.0232H23.1429C23.3702 18.0232 23.5882 17.9328 23.7489 17.7718C23.9097 17.6108 24 17.3925 24 17.1649V14.5902C24 14.3626 23.9097 14.1443 23.7489 13.9833C23.5882 13.8224 23.3702 13.7319 23.1429 13.7319ZM3.42857 3.43299H20.5714V13.7319H3.42857V3.43299ZM22.2857 16.3067H1.71429V15.4484H22.2857V16.3067Z" fill="black"/>
</svg>
    Class promotion
      </router-link>

<router-link to="/view/semesters"
    :class="[this.$route.name === 'Semesters' ? 'active' : '']"
>

<svg class="svg__timetable" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="svg__path" d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="svg__path" d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="svg__path" d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="svg__path" d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



  Semesters
</router-link>


      <router-link to="/view/timetable"
          :class="[this.$route.name === 'Timetable' ? 'active' : '']"
      >
        
<svg width="18" height="18"   class="svg__timetable"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="svg__path"  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path class="svg__path" d="M12 6V12L16 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Timetables
      </router-link>

<router-link to="/profile-settings"
 :class="[this.$route.name === 'ProfileSettings' ? 'active' : '']"
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"   class="svg" ><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>

Profile settings

</router-link>

      <span class="flex lg:gap-2 md:gap-1 cursor-pointer" @click="logout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="svg ml-1"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"
          />
        </svg>
        Logout
      </span>
    </div>
  </div>
</template>

<script>
// import Links from './SidebarLinks';
export default {
  name: "Sidebar",
  mounted() {},
  methods:{
    logout(){
      this.$session.destroy();
      this.$router.push('/');
    }
  }
};
</script>
<style>
.sidebar::-webkit-scrollbar{
  width: 7px;
}
.sidebar::-webkit-scrollbar-track        { 
   background-color: #e3e1e9c2; 
   width: 1%;
 }
.sidebar::-webkit-scrollbar-thumb        {
  background-color: #b9b9bb63;
     
     border-radius: 40px;
   }
.sidebar {
  /* border:1px solid black; */
  height: 98vh;
  overflow-y: auto;
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
.home-links a,.home-links span {
  display: flex;
  margin-top: 5%;
  padding: 5% 5%;
  border-radius: 20px;
}
.home-links a > .svg, .svg__timetable {
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
.home-links > .active .svg {
  fill: #574ae2;
  font-weight: bold;
}

.home-links > .active .svg__path {
  stroke: #574ae2;
  font-weight: bold;
}

.svg__timetable{
  stroke: #574ae2;
}
.home-links a:hover, .home-links span:hover {
  background-color: #e9e8ff;
  color: #574ae2;
}
.home-links > a:hover .svg, .home-links > span:hover .svg{
  fill: #574ae2;
  font-weight: bold;
}
 .home-links > a:hover .svg__path{
stroke: #574ae2;
 }
</style>
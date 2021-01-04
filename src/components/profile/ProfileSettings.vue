<template>
  <div class="flex gap-1">
    <div class="w-1/6 p-5">
      <div class="title">
        <span class="font-bold text-sm">Profile settings</span>
      </div>
      <div class="w-full mt-5 profile_links">
        
       <router-link to="/" class="active">Account</router-link>
      </div>
    </div>
    <div class="w-1/2 mt-12 bg-white  float-left p-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempora? Porro consectetur voluptas explicabo! Nam, quas sapiente molestiae pariatur cumque animi repudiandae perferendis, dolores libero quasi, et harum quos cum.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSettings",
  data: () => ({
    
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
    },
    academicYears: ["2020", "2021"],
  }),
};
</script>

<style scoped>
.profile_links{
      align-items: center;
      text-align: center;
}
.profile_links a:hover {
  background-color: #e9e8ff;
  color: #574ae2;
}
.profile_links a {
  display: flex;

  margin-top: 5%;
  padding: 5% 5% 5% 15%;
  border-radius: 20px;
}
.profile_links > .active {
  padding: 5% 5% 5% 15%;
  background-color: #e9e8ff;
  color: #574ae2;
  /* border:1px solid black; */
  border-radius: 20px;
}

input:focus,
select:focus,
textarea:focus
 {
  border: 2px solid #574ae2;
  border-radius: 4px !important;
}
.notes__upload_file:hover{
     border: 2px solid #574ae2;
     border-style: dashed;
     cursor: pointer;
     border-radius: 3%;
     background-color: #574ae21c;
}
.label-focus {
  color: #574ae2 !important;
}
.notes__upload_file{
    height: 25vh;
    width: 100%;
}
</style>
<template>
  <div class="flex gap-1">
    <div class="w-1/6 p-5">
      <div class="title">
        <span class="font-bold text-sm">Profile settings</span>
      </div>
      <div class="w-full mt-5 profile_links">
        
       <router-link to="/profile-settings" class="active">Account</router-link>
       <router-link to="udpate/password">Change password</router-link>
      </div>
    </div>
    <div class="w-1/2 mt-12 bg-white  float-left p-4">
    <form action="">
    <div class="title font-bold text-lg mb-5">Account</div>
     <div class="row">
       <div class="title mb-2 font-bold">Profile picture</div>
       <div class="row border">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi dolorem nam quia. Ipsa assumenda, quia ipsum nihil velit necessitatibus. Magni, animi nemo? Doloribus possimus dignissimos, cum ullam cupiditate reprehenderit.
       </div>
       <hr>
       <div class="title my-2 font-bold">Personal info</div>
        <div class="row border">

         <div class="col-span-5 lg:col-span-1 md:col-span-5">
            <label
              for="name"
                  class="mr-4 name"
              :class="[labels_focus.label1 ? 'label-focus' : '']"
              >Username</label
            >
            <br />
            <input
              @focus="labels_focus.label1 = !labels_focus.label1"
              @blur="labels_focus.label1 = !labels_focus.label1"
              id="name"
              class="form-input p-3 mt-2 mr-4 border lg:w-3/4 md:w-full border-#E1E1E1-600 rounded"
            />
          </div>
        
            </div>
     </div>
     </form>
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
  padding: 5% 0% 5% 10%;
  border-radius: 20px;
}
.profile_links > .active {
  padding: 5% 0% 5% 10%;
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
<template>
  <div class="flex gap-1">
    <div class="w-1/6 p-5">
      <div class="title">
        <span class="font-bold text-sm">Profile settings</span>
      </div>
      <div class="w-full mt-5 profile_links">
        <router-link to="/profile-settings" class="active"
          >Personal Info</router-link
        >
        <router-link to="/profile-settings/updatepassword"
          >Change password</router-link
        >
      </div>
    </div>
    <div class="w-1/2 mt-12 bg-white float-left p-10 mb-5">
      <form action="">
        <div class="title font-bold text-lg mb-5">Account</div>
        <div class="row">
          <div class="title mb-2 font-bold">Profile picture</div>
          <div class="row grid flex grid-cols-3 mb-5 gap-1 items-center">
            <div class="w-1/6 md:w-full profile__img">
              <img
                class="rounded-full border border-gray-100 shadow-sm w-full profile__img"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
                @click="setDropdown"
              />
            </div>
            <div class="w-full lg:ml-10 profile__img_change">
              <div class="w-full flex gap-4">
                <button
                  class="profile__btn focus:outline-none w-full lg:px-4 md:px-1 py-2 rounded"
                >
                  Change
                </button>

                <button
                  class="profile_remove_btn focus:outline-none w-full lg:px-4 md:px-1 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div class="title my-5 font-bold">Personal info</div>
          <div class="row">
            <div class="col-span-5 lg:col-span-1 md:col-span-5">
              <label
                for="name"
                class="mr-4 name"
                :class="[labels_focus.label1 ? 'label-focus' : '']"
                >Username</label
              >
              <br />
              <input
                :value="this.$store.state.user.username"
                @focus="labels_focus.label1 = !labels_focus.label1"
                @blur="labels_focus.label1 = !labels_focus.label1"
                id="name"
                class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
              />
            </div>
            <div class="col-span-5 mt-5 lg:col-span-1 md:col-span-5">
              <label
                for="name"
                class="mr-4 name"
                :class="[labels_focus.label2 ? 'label-focus' : '']"
                >Email</label
              >
              <br />
              <input
                @focus="labels_focus.label2 = !labels_focus.label2"
                @blur="labels_focus.label2 = !labels_focus.label2"
                :value="this.$store.state.user.email"
                id="name"
                class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
              />
            </div>
            <div class="row lg:grid lg:grid-cols-2 gap-4">
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label2 ? 'label-focus' : '']"
                  >Firstname</label
                >
                <br />
                <input
                  @focus="labels_focus.label2 = !labels_focus.label2"
                  @blur="labels_focus.label2 = !labels_focus.label2"
                  :value="this.$store.state.user.surname"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                />
              </div>
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label2 ? 'label-focus' : '']"
                  >Lastname</label
                >
                <br />
                <input
                  @focus="labels_focus.label2 = !labels_focus.label2"
                  @blur="labels_focus.label2 = !labels_focus.label2"
                  :value="this.$store.state.user.othernames"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                />
              </div>
            </div>
             <div class="row lg:grid lg:grid-cols-2 gap-4">
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label2 ? 'label-focus' : '']"
                  >Phone number</label
                >
                <br />
                <input
                  @focus="labels_focus.label2 = !labels_focus.label2"
                  @blur="labels_focus.label2 = !labels_focus.label2"
                  :value="this.$store.state.user.phone"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                />
              </div>

              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label2 ? 'label-focus' : '']"
                  >National ID</label
                >
                <br />
                <input
                  @focus="labels_focus.label2 = !labels_focus.label2"
                  @blur="labels_focus.label2 = !labels_focus.label2"
                  :value="this.$store.state.user.national_id"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                />
              </div>
            </div>
            <br />
            <vs-button
              color="#574AE2"
              class="focus:outline-none lg:w-2/4 mt-5 sm:w-full"
              >Save changes</vs-button
            >
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
  beforeMount(){
      this.display();
  },
  methods:{
    display(){
      console.log('National ID: ',this.$store.state.user.national_id);
    }
  }
};
</script>

<style scoped>
.profile__img {
  border: 1px solid rgb(224, 224, 224);
  height: 23vh;
  border-radius: 50%;
}
.profile_links {
  align-items: center;
  text-align: center;
}
.profile__btn {
  background-color: #ffffff;
  color: #574ae2;
  border: 1px solid #574ae2;
  font-size: 12px;
}
.profile_remove_btn {
  background-color: #ffffff;
  color: #ee0004;
  border: 1px solid #ee0004;
  font-size: 12px;
}
.profile_remove_btn:hover {
  background-color: #ee0004;
  color: #ffffff;
}
.profile__btn:hover {
  background-color: #574ae2;
  color: #ffffff;
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
input {
  background-color: #eae8ff;
  /* color:#ffffff; */
}
input:focus,
select:focus,
textarea:focus {
  border: 2px solid #574ae2;
  border-radius: 4px !important;
}
.notes__upload_file:hover {
  border: 2px solid #574ae2;
  border-style: dashed;
  cursor: pointer;
  border-radius: 3%;
  background-color: #574ae21c;
}
.label-focus {
  color: #574ae2 !important;
}
.notes__upload_file {
  height: 25vh;
  width: 100%;
}
</style>
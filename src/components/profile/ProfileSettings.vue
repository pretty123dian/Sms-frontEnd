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
          >Password</router-link
        >
      </div>
    </div>
    <div class="w-1/2 mt-12 bg-white float-left p-10 mb-5">
      <form ref="form" @submit.prevent="updateThisUser()">
        <div class="title font-bold text-lg mb-5">Account</div>
        <div class="row">
          <div class="title mb-2 font-bold">Profile picture</div>
          <div class="row grid flex grid-cols-3 mb-5 gap-1 items-center">
            <div class="w-1/6 md:w-full profile__img">
              <img
                class="rounded-full border border-gray-100 shadow-sm w-full profile__img"
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
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
                v-model="userAll.username"
                @focus="labels_focus.label1 = !labels_focus.label1"
                @blur="labels_focus.label1 = !labels_focus.label1"
                @input="change('username', userAll.username)"
                type="text"
                id="name"
                class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                required
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
                v-model="userAll.email"
                type="email"
                @input="change('email', userAll.email)"
                id="name"
                class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                required
              />
            </div>
            <div class="row lg:grid lg:grid-cols-2 gap-4">
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label3 ? 'label-focus' : '']"
                  >Firstname</label
                >
                <br />
                <input
                  @focus="labels_focus.label3 = !labels_focus.label3"
                  @blur="labels_focus.label3 = !labels_focus.label3"
                  v-model="userAll.surname"
                  @input="change('surname', userAll.surname)"
                  type="text"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                  required
                />
              </div>
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label4 ? 'label-focus' : '']"
                  >Lastname</label
                >
                <br />
                <input
                  @focus="labels_focus.label4 = !labels_focus.label4"
                  @blur="labels_focus.label4 = !labels_focus.label4"
                  v-model="userAll.othernames"
                  @input="change('othernames', userAll.othernames)"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                  required
                />
              </div>
            </div>
            <div class="row lg:grid lg:grid-cols-2 gap-4">
              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label5 ? 'label-focus' : '']"
                  >Phone number</label
                >
                <br />
                <input
                  @focus="labels_focus.label5 = !labels_focus.label5"
                  @blur="labels_focus.label5 = !labels_focus.label5"
                  v-model="userAll.phone"
                  type="number"
                  @input="change('phone', userAll.phone)"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                  required
                />
              </div>

              <div class="lg:w-50 md:w-full mt-5">
                <label
                  for="name"
                  class="mr-4 name"
                  :class="[labels_focus.label6 ? 'label-focus' : '']"
                  >National ID</label
                >
                <br />
                <input
                  @focus="labels_focus.label6 = !labels_focus.label6"
                  @blur="labels_focus.label6 = !labels_focus.label6"
                  v-model="userAll.national_id"
                  @input="change('national_id', userAll.national_id)"
                  type="number"
                  id="name"
                  class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
                  required
                />
              </div>
            </div>
            <br />

                <div
            v-if="response_status_block == true"
             :class="[
              response_status == false
                ? 'mt-5 status_success w-full flex'
                : 'mt-5 status_error w-full flex',
            ]"
          >
            <span class="m-auto"> {{ res_status_title }} </span>
          </div>
            <button
              :class="[
                request_click === true
                  ? 'button_on_loading border rounded-md py-3 px-6 mt-4 text-white add__btn flex'
                  : 'border rounded-md py-3 px-6 mt-4 text-white add__btn flex w-full',
              ]"
            >
              <template v-if="request_click == false">
                {{ button_status }}
              </template>
              <template v-else>
                <!-- <img src="@/assets/gif2.gif" /> -->
                <ClipLoader   size="27px" color="white" />
              </template>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ClipLoader  from "vue-spinner/src/ClipLoader";
// accesing the API store
import Services from "@/services/AllServices";
export default {
  name: "ProfileSettings",
  components:{
    ClipLoader
  },
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
      label5: false,
      label6: false,
    },
    academicYears: ["2020", "2021"],
    button_status: "Save changes",
     response_status_block: true,
     response_status:false,
    res_status_title:"",
    request_click: false,
    username: "",
    surname: "",
    othernames: "",
    email: "",
    phone: "",
    national_id: "",
  }),
  beforeMount() {},
  computed: {
    ...mapState({
      user: (state) => state.user,
      userAll: (state) => state.userAll,
    }),
  },
  methods: {
    ...mapMutations(["setUserAllData,setUser"]),
    change(event, ...el) {
      console.log("Clicked event: ", event);
      console.log(el[0]);
      const currentField = event;
      console.log(currentField);
      switch (currentField) {
        case "username":
          this.username = el[0];
          break;
        case "email":
          this.email = el[0];
          break;
        case "phone":
          this.phone = el[0];
          break;
        case "national_id":
          this.national_id = el[0];
          break;
        case "surname":
          this.surname = el[0];
          break;
        case "othernames":
          this.othernames = el[0];
          break;

        default:
          console.log("Error");
          break;
      }
    },

    async updateThisUser() {
      this.request_click = true;
      // checking if the fields are assigned twith certain new values
      this.username = this.username == "" ? this.user.username : this.username;
      this.surname = this.surname == "" ? this.user.surname : this.surname;
      this.othernames =
        this.othernames == "" ? this.user.othernames : this.othernames;
      this.email = this.email == "" ? this.user.email : this.email;
      this.phone = this.phone == "" ? this.user.phone : this.phone;
      this.national_id =
        this.national_id == "" ? this.user.national_id : this.national_id;
 
      const response = await Services.updateUser(this.user.id, {
        username: this.username,
        surname: this.surname,
        othernames: this.othernames,
        email: this.email,
        phone: this.phone,
        national_id: this.national_id,
        gender: this.user.gender,
        category: this.userAll.category._id,
      });

      if(response.data.status == 400){
         this.response_status = true;
           this.res_status_title = response.data.message;
            this.request_click = false;
      this.button_status = "Save changes"
     
        }

else{
      // console.log(response);
      // console.log(this.userAll.category._id);
        this.res_status_title = "";
      this.request_click = false;
      this.button_status = "PROFILE UPDATED"
      setTimeout(()=>{
      
          this.button_status = "Save changes"
        },1500)
      await this.setUserAllData(response.data.data);
        await this.setUser(response.data.data);

        
      // console.log(this.userAll);
     
}
  
    },
  },
};
</script>
<style src="../shared/styles.css" scoped>
</style>
<style scoped>

input {
  background-color: #eae8ff;
  }
</style>

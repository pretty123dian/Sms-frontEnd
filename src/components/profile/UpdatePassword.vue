<template>
  <div class="flex gap-1">
    <div class="w-1/6 p-5">
      <div class="title">
        <span class="font-bold text-sm">Profile settings</span>
      </div>
      <div class="w-full mt-5 profile_links">
        <router-link to="/profile-settings">Personal Info</router-link>
        <router-link to="/profile-settings/updatepassword" class="active"
          >Password</router-link
        >
      </div>
    </div>
    <div class="w-1/2 mt-12 bg-white float-left p-10 mb-5">
      <form @submit.prevent="updatePassword()" class="">
        <div class="title font-bold text-lg mb-5">Password</div>
        <div>
          <div>
            <label
              for="name"
              class="mr-4 name"
              :class="[labels_focus.label1 ? 'label-focus' : '']"
              >Former password</label
            >
            <br />
            <input
              @focus="labels_focus.label1 = !labels_focus.label1"
              @blur="labels_focus.label1 = !labels_focus.label1"
              v-model="former_password"
              type="password"
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
              >New password</label
            >
            <br />
            <input
              @focus="labels_focus.label2 = !labels_focus.label2"
              @blur="labels_focus.label2 = !labels_focus.label2"
              id="name"
              type="password"
              v-model="new_password"
              class="form-input p-3 mt-2 mr-4 border md:w-full border-#E1E1E1-600 rounded"
              required
            />
          </div>
          <div class="col-span-5 mt-5 lg:col-span-1 md:col-span-5">
            <label
              for="name"
              class="mr-4 name"
              :class="[labels_focus.label3 ? 'label-focus' : '']"
              >Confirm password</label
            >
            <br />
            <input
              @focus="labels_focus.label3 = !labels_focus.label3"
              @blur="labels_focus.label3 = !labels_focus.label3"
              v-model="confirm_password"
              type="password"
              id="name"
              class="form-input p-3 mt-2 mr-4 border md:w-full border-#E1E1E1-600 rounded"
              required
            />
          </div>
          <div
            v-if="response_status_block == true"
            :class="[
              response_status == true
                ? 'mt-5 status_success w-full flex'
                : 'mt-5 status_error w-full flex',
            ]"
          >
            <span class="m-auto"> {{ res_status_title }} </span>
          </div>
          <br />
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
               <ClipLoader color="white" size="27px"/>
            </template>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
import Services from "@/services/AllServices";
import ClipLoader from "vue-spinner/src/ClipLoader"
export default {
  name: "UpdatePassword",
  components:{
ClipLoader
  },
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
    },
    former_password: "",
    new_password: "",
    confirm_password: "",
    response_status: false,
    response_status_block: false,
    res_status_title: "",
    request_click: false,
    button_status: "Update",
  }),
  computed: {
    ...mapState({
      userAll:(state) =>state.userAll
    })
  },

  methods: {
  ...mapMutations(["setUserAllData"]),
    async updatePassword() {
      if (this.new_password === this.confirm_password) {
      
        // this.res_status_title = "Updating...";
        this.request_click = true;
        // console.log("The user",this.userAll._id)
        try{
        const response = await Services.updatePassword(this.userAll._id, {
          current_password: this.former_password,
          new_password: this.new_password,
        });
        console.log("Password>>>: ", response);
        
      
      //   setTimeout(()=>{
      //  this.response_status_block = false;
      //   },4000);
        if(response.data.status == 201){
          setTimeout(() => {
            this.button_status = "Update";
          }, 2000);
               this.res_status_title ="";
               this.button_status = "PASSWORD "+(response.data.message).toUpperCase();
        }
        else if(response.data.status == 400){
          
        this.response_status_block = true;
            this.response_status = false; 
             this.res_status_title = response.data.message;
        }
        else {
          
        this.response_status_block = true;
          this.response_status = false;
        //  this.res_status_title = response.data; 
        /*
"new_password" with value "123" fails to match the required pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        */
       this.res_status_title = "Capital letter/ Special character/ Digital / Small letter missing ... "
        }
          this.request_click = false;
        }catch(e){
        alert(e.response.data.data);
           this.res_status_title = e.response.data.data;
            this.request_click = false;
        }
        
      } else {
        this.response_status_block = true;
        this.response_status = false;
         this.request_click = false;
        this.res_status_title = "Password doesn't match";
      }
    },
  },
};
</script>
<style src="../shared/styles.css" scoped></style>

<style scoped>

input {
  background-color: #eae8ff;
  }
</style>

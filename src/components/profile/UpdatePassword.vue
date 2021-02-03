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
                ? 'button_on_loaging border rounded-md py-3 px-6 mt-4 text-white add__btn flex'
                : 'border rounded-md py-3 px-6 mt-4 text-white add__btn flex w-full',
            ]"
          >
            <template v-if="request_click == false">
              {{ button_status }}
            </template>
            <template v-else>
              <img src="@/assets/gif2.gif" />
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
export default {
  name: "UpdatePassword",
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
    button_status: "Update password",
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
        this.response_status = true;
        this.response_status_block = true;
        this.res_status_title = "Updating...";
        this.request_click = true;
        // console.log("The user",this.userAll._id)
        try{
        const response = await Services.updatePassword(this.userAll._id, {
          current_password: this.former_password,
          new_password: this.new_password,
        });
        console.log("Password>>>: ", response);
        this.response_status = false;
        }catch(e){
          console.log(e.response.data.data);
           this.res_status_title = e.response.data.data;
        }
      } else {
        this.response_status_block = true;
        this.response_status = false;
        this.res_status_title = "Password doesn't match";
      }
    },
  },
};
</script>

<style scoped>
.add__btn {
  justify-content: center;
  border: none;
  height: 7vh;
  width: 100%;
}
.add__btn:hover {
  box-shadow: 6px 5px 6px #574ae257;
}
.add__btn:focus {
  outline: none;
}
.add__btn img {
  width: 5%;
  text-align: center;
}
button {
  background-color: #574ae2;
}
.button_on_loaging {
  background-color: #1400f3a8;
}

.profile__img {
  border: 1px solid rgb(224, 224, 224);
  height: 25vh;
  border-radius: 50%;
}
.profile_links {
  align-items: center;
  text-align: center;
}
.profile__btn {
  background-color: #ffffff;
  color: #574ae2;
  border: 2px solid #574ae2;
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

/* display errors or status ok  */

.status_error {
  color: #ca0909;
}
.status_success {
  color: #2aa804;
}
</style>
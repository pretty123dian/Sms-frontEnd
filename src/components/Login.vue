<template>
  <div class="main mt-20">
    <h1>Login to SMS</h1>
    <form ref="form" @submit.prevent="validate()">
      <div v-if="isIncorrect === true" class="mt-5 error_log py-2 px-2 gap-5  rounded flex">
        {{ login_error }} <svg class="cursor-pointer" @click="isIncorrect=false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" fill="rgba(255,156,148,1)"/></svg>
      </div>
      <div :class="[!isEmptyPassword && !isEmpty ? 'mt-5' : 'mt-10']">
      <div class="flex">
        <label :class="[isEmpty == true ? 'mb-4' : 'mb-4 label_error',
        labels_focus.label1?'label-focus':''
        ]">
          {{ username_title }}
        </label>
        </div>

        <input
          type="text"
          v-model="username"
          placeholder=""
          :class="[
            isEmpty == true
              ? 'border rounded-sm py-3 px-6'
              : 'error rounded-sm py-3 px-6',
          ]"
             @focus="labels_focus.label1 = !labels_focus.label1"
          @blur="labels_focus.label1 = !labels_focus.label1"
        
        />
      </div>

      <div class="mt-10">
        <div class="flex">
          <label :class="[isEmptyPassword == true ? '' : 'label_error', labels_focus.label2?'label-focus':'']">
            {{ password_title }}
          </label>
        </div>

        <br />
        <input
          type="password"
          v-model="password"
          @focus="labels_focus.label2 = !labels_focus.label2"
          @blur="labels_focus.label2 = !labels_focus.label2"
          :class="[
            isEmptyPassword == true
              ? 'border rounded-sm py-3 px-6'
              : 'error rounded-sm py-3 px-6',
          ]"
          placeholder=""
        />
        <div class="w-full">
          <router-link to="/forgotpassword">
            <span href="#" class="mt-5 fog float-right">Forgot password?</span>
          </router-link>
        </div>
      </div>

      <!-- <router-link to="/dashboard"> -->
      <button
        @click="validateAllfields()"
        :class="[request_click===true?'button_on_loaging border rounded-md py-3 px-6 mt-8 text-white mt-16 login__button flex':'border rounded-md py-3 px-6 mt-8 text-white  mt-16 login__button flex',username===''||password===''?'bt__disabled':'']"
      
       
     
      >

      
        <template v-if="request_click==false">
        {{login_status}}
        </template>
        <template v-else >
            <img src="../assets/gif2.gif">
        </template>
           
      </button>
      <!-- </router-link> -->
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
import Services from "@/services/AllServices";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false
    },
    login_status:'Login',
    request_click:false,
    login_error: "Incorrect username or password",
    username_title: "Username",
    password_title: "Password",
    isEmptyPassword: true,
    isIncorrect: false,
    error: "",
    isEmpty: true,
    username: "",
    password: "",
  }),
  methods: {
    validateAllfields() {
      if (this.username == "" && this.password == "") {
        this.isEmpty = false;
        this.username_title = "Fill in username";
        this.isEmptyPassword = false;
        this.password_title = "Fill in password";
      } else if (this.username == "") {
        // alert('no username')
        this.isEmpty = false;
        this.username_title = "Fill in username";
         this.isIncorrect = false;
      } else if (this.password == "") {
        this.isEmptyPassword = false;
        this.password_title = "Fill in password";
         this.isIncorrect = false;
      } else if (this.username != "" && this.password != "") {
        this.isEmpty = true;
        this.username_title = "Username";
        this.isEmptyPassword = true;
        this.password_title = "Password";
      } else if (this.username != "") {
        // alert('no username')
        this.isEmpty = true;
        this.username_title = "Username";
      } else if (this.password != "") {
        this.isEmptyPassword = true;
        this.password_title = "Password";
      } else alert("ok");
    },

    async validate() {
      this.request_click = true
      // if(this.$refs.form.validate()){
      let response = await Services.login({
        username: this.username,
        password: this.password,
      });
      // if(true){
      console.log("Token: ", response.data.data);
      // if(response.data){
      if (response.data.data) {
        
        this.isIncorrect = false;
         this.$session.start();
         this.$session.set('jwt',response.data.data);
         this.$router.push({ name: "Dashboard" });
      } else {
        this.isIncorrect = true;
        this.request_click = false
      }
      // }
      console.log(this.$session.get("jwt"));
      // }
      // }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login__button {
  
  justify-content: center;
  border: none;
  height: 7vh;
}
.login__button:hover{
  box-shadow:6px 5px 6px #574ae257;
}
.login__button img{
  width: 7%;
  text-align: center;

}
.label-focus {
  color: #574ae2 !important;
}
.bt__disabled{
  cursor: not-allowed;
  pointer-events: none;
}
.error_log {
  background-color: #ee0004;
  color: #ffffff;
  text-align: center;
  justify-content: center;
}
.error {
  border: 2px solid #ee0004;
}
.label_error {
  color: #ee0004;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
input,
button {
  width: 350px;
  outline: none;
}
button {
  background-color: #574ae2;
}
.button_on_loaging{
  background-color: #1400f3a8
}
*:focus {
  outline: 0 !important;
}
input {
  color: #25282b;
  font-weight: 100;
}
input:focus {
  background-color: #f8f8f8;
}
.main {
  margin-left: 150px;
  font-family: "Poppins", sans-serif;
}
.fog {
  color: #574ae2;
}
.fog:hover {
  text-decoration: underline;
}
h1 {
  font-size: 20px;
}
</style>

<template>
  <div class="main mt-20">
    <h1>Login to SMS</h1>
<!-- <form action=""> -->
  <div class="mt-5 error_log p-2 rounded">{{login_error}}</div>
    <div class="mt-5">
      <p :class="[isEmpty==true?'mb-4':'mb-4 label_error']">{{passcode_title}}</p>

      <input
        type="text"
        v-model="passcode"
        placeholder="RCA016702I"
        :class="[isEmpty==true?'border rounded-full py-2 px-6':'error rounded-full py-2 px-6']"
      />
    </div>

    <div class="mt-10">
      <div class="flex">
       <p :class="[isEmptyPassword==true?'':'label_error']">{{password_title}}</p>
        
      </div>

      <br />
      <input
        type="password"
        v-model="password"
           :class="[isEmptyPassword==true?'border rounded-full py-2 px-6':'error rounded-full py-2 px-6']"
        placeholder="*********"
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
        class="border rounded-full py-3 px-6 mt-8 text-white hover:bg-blue-600 mt-16"
      >
        Login
      </button>
    <!-- </router-link> -->

    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data:()=>({
    login_error:'Incorrect passcode or password',
    passcode_title:'Passcode',
    password_title:'Password',
    isEmptyPassword:true,
    error:'',
    isEmpty: true,
  passcode:'',
      password: '',
     
  }),
  methods:{
    validateAllfields(){
        if(this.passcode=='' && this.password==''){
           this.isEmpty = false
        this.passcode_title='Fill in passcode'
        this.isEmptyPassword = false
          this.password_title='Fill in password'
      }
     else if(this.passcode==''){
        // alert('no passcode')
        this.isEmpty = false
        this.passcode_title='Fill in passcode'
      }
      else if(this.password==''){
         this.isEmptyPassword = false
          this.password_title='Fill in password'
      }
      else if(this.passcode!='' && this.password!=''){
           this.isEmpty = true
        this.passcode_title='Passcode'
        this.isEmptyPassword = true
          this.password_title='Password'
      }
     else if(this.passcode!=''){
        // alert('no passcode')
           this.isEmpty = true
       this.passcode_title='Passcode'
      }
      else if(this.password!=''){
       this.isEmptyPassword = true
          this.password_title='Password'
      }
     
      else
        alert('ok')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error_log{
  background-color: #EE0004;
  color: #ffffff;
  text-align: center;
}
.error{
 border: 2px solid #EE0004;
}
.label_error{
  color: #EE0004;
  animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
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
.fog:hover{
  text-decoration: underline;
}
h1 {
  font-size: 20px;
}
</style>

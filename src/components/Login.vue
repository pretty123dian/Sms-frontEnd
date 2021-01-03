<template>
  <div class="main mt-20">
    <h1>Login to SMS</h1>
<form action="">
    <div class="mt-10">
      <p :class="[isEmpty==true?'mb-4':'mb-4 label_error']">{passcode}</p>

      <input
        type="text"
        v-model="passcode"
        placeholder="RCA016702I"
        :class="[isEmpty==true?'border rounded-full py-2 px-6':'error rounded-full py-2 px-6']"
      />
    </div>

    <div class="mt-10">
      <div class="flex">
        <p>Password</p>
        
      </div>

      <br />
      <input
        type="password"
        v-model="password"
        class="border rounded-full py-3 px-6"
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

    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data:()=>({
    passcode:'Passcode',
    error:'',
    isEmpty: true,
  passcode:'',
      password: '',
     
  }),
  methods:{
    validateAllfields(){
      if(this.passcode==''){
        // alert('no passcode')
        this.isEmpty = false
      }
      else if(this.password==''){
        alert('no password')
      }
      else
        alert('ok')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
 border: 2px solid #EE0004;
}
.label_error{
  color: #EE0004;
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

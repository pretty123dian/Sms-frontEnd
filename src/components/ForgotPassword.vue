<template>
  <div class="main mt-20">
    <h1>Recover password</h1>
    <div class="mt-10">
      <div class="flex">
  <p :class="[isEmpty==true?'mb-4':'mb-4 label_error']">{{email_title}}</p>
      </div>

      <br />
      <input
        type="email"
        v-model="email"
       :class="[isEmpty==true?'border rounded-full py-2 px-6':'error rounded-full py-2 px-6']"
        placeholder=""
      />
      <div class="w-full">
          <router-link
          to="/"
          >
    <span class="mt-5 fog float-right">Login to SMS here</span>
          </router-link>
   
       </div>
    </div>
   
    <!-- <router-link to="/dashboard">
      <button
        class="border rounded-full py-3 px-6 mt-8 text-white hover:bg-blue-600 mt-16"
      >
       Recover password
      </button>
    </router-link> -->
     <button
      @click="validateAllfields()"
        class="border rounded-full py-3 px-6 mt-8 text-white hover:bg-blue-600 mt-16"
      >
        Recover password
      </button>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  props: {
    msg: String,
  },
  data:()=>({
    email_title:'Email address',
     isEmpty: true,
     email:''
  }),
  methods:{
    validateAllfields(){
       if(this.email==''){
        // alert('no passcode')
        this.isEmpty = false
        this.passcode_title='Fill in email address'
      }
     
      else{
        this.isEmpty = true
        this.email_title='Email address'
    
      }
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
h1 {
  font-size: 20px;
}
.fog:hover{
  text-decoration: underline;
}
</style>

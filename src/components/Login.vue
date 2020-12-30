<template>
  <div class="main mt-20">
    <h1>Login to SMS</h1>

    <div class="mt-10">
      <p class="mb-4">Enter passcode</p>

      <input
        type="text"
        placeholder="RCA016702I"
        class="border rounded-full py-2 px-6"
      />
    </div>

    <div class="mt-10">
      <div class="flex">
        <p>Enter password</p>
        
      </div>

      <br />
      <input
        type="password"
        class="border rounded-full py-3 px-6"
        placeholder="*********"
      />
      <div class="w-full">
       <a href="#" class="mt-5 fog float-right">Forgot password?</a>
       </div>
    </div>
   
    <router-link to="/dashboard">
      <button
        class="border rounded-full py-3 px-6 mt-8 text-white hover:bg-blue-600 mt-16"
      >
        Login
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

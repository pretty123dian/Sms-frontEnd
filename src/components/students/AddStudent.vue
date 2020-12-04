<template>
  <div class="mb-10">
    <div class="mb-10">
      <div v-for="(input, i) in inputs" :key="i">
        <div class="lg:ml-4 ml-4">
          <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
            <div class="col-start-1 col-end-6 lg:col-start-1 lg:col-end-2">
              <div class="block">
                <label class="block">
                  <span class="text-dark-700 font-bold" v-if="i == 0"
                    >Register students</span
                  >
                  <select
                    class="form-select mt-1 p-2 block rounded-sm focus:outline-none border border-#E1E1E1-700 bg-white"
                  >
                    <option value="" selected>Select year</option>
                    <option value="">Year 1</option>
                    <option value="">Year 2</option>
                    <option value="">Year 3</option>
                  </select>
                </label>
              </div>
            </div>

            <div class="col-start-4 col-end-10" v-if="i == 0">
              <router-link to="/view/students">
                <vs-button color="#574AE2" class="rounded-full add-stud-btn">
                  View students
                </vs-button>
              </router-link>
            </div>
          </div>
          <div class="center">
            <div class="size-example grid grid-cols-5 gap-5">
              <div class="col-span-5 lg:col-span-1 md:col-span-5">
                <label for="" class="mr-4" v-if="i == 0">Firstname</label>
                <input
                  class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                />
              </div>
              <div class="col-span-5 lg:col-span-1 md:col-span-5">
                <label for="" class="mr-4" v-if="i == 0">Lastname</label>
                <input
                  class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                />
              </div>
              <div class="col-span-5 lg:col-span-1 md:col-span-5">
                <label for="" class="mr-4" v-if="i == 0">Gender</label> <br />
                <!-- <label for="year_one" class="inline-flex items-center years mr-2 mt-5"> -->
                <div :class="i == 0 ? 'mt-5' : ''">
                  <input
                    type="radio"
                    class="form-checkbox text-indigo-900"
                    v-model="input[0].gender"
                    id="year_one"
                    checked
                  />
                  <span class="ml-1 mr-5">Male</span>
                  <!-- </label> -->

                  <input
                    type="radio"
                    class="form-checkbox text-indigo-900"
                    v-model="input[0].gender"
                    id="year_one"
                    checked
                  />
                  <span class="ml-1">Female</span>
                </div>
              </div>

              <div class="col-span-6 lg:col-span-1 md:col-span-6">
                <label for="" class="mr-4" v-if="i == 0">Date of birth</label>
                <input
                  type="date"
                  class="p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm bg-white"
                />
              </div>
              <div :class="i==0?'col-span-6 lg:col-span-1 md:col-span-6 mt-5':'col-span-6 lg:col-span-1 md:col-span-6 mt-1'">
                <router-link to="">
                  <vs-button
                    color="#574AE2"
                    :class="i==0?'rounded-full py-3 px-6 add-stud-btn rounded-full':'rounded-full py-1 px-6 add-stud-btn rounded-full'"

                    @click="inputs[i] == '+' ? expand(i) : remove(i)"
                  >
                    {{ inputs[i] }}
                  </vs-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vs-button
      color="#574AE2"
      class="rounded-full  py-3 px-10 save-stud-btn rounded-full 
      focus:outline-none
      "
    >
      Save
    </vs-button>
  </div>
</template>

<script>
export default {
  name: "AddStudent",
  data: () => ({
    inputs: ["+"],
    userData: [],
  }),
  watch: {
    route() {
      // this.userData =[]
      this.inputs = ["+"];
      // this.userData.push(this.getUserdata());
    },
  },
  methods: {
    getUserdata() {
      const fields = {
        firstname: "",
        lastname: "",
        gender: "",
        password: "RcaSms@2020",
        birthDate: "",
        year: "",
      };
      return fields;
    },
    expand(index) {
      this.inputs.push("+");
      console.log("expanding");
      if (index > -1) {
        this.inputs[index] = "-";
      }
    },
    remove(index) {
      console.log("Removing");
      this.inputs.splice(index, 1);
    },
  },
};
</script>

<style>
.form-select {
  width: 30%;
}
option {
  padding: 5% !important;
}
.save-stud-btn{
  width: 15%;
  margin-left: 40% !important;
}
</style>
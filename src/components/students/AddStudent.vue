<template>
  <div class="mb-10 bg-white mt-5">
    <form @submit.prevent="postStudent()">
      <div class="mb-10">
        <div v-for="(input, i) in inputs" :key="i">
          <div class="lg:ml-4 ml-4">
            <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
              <div class="col-start-1 col-end-6 lg:col-start-1 lg:col-end-2">
                <div class="block">
                  <label class="block">
                    <div class="my-5">
                    <span class="text-dark-700 font-bold" v-if="i == 0"
                      >REGISTER STUDENTS</span
                    >
                    </div>

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
                  <label for="" class="mr-4" v-if="i == 0">Username</label>
                  <input
                    type="text"
                    v-model="stuData[i].username"
                    :placeholder="i != 0 ? 'Username' : ''"
                    :key="i"
                    class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                    required
                  />
                </div>
                <div class="col-span-5 lg:col-span-1 md:col-span-5">
                  <label for="" class="mr-4" v-if="i == 0">Firstname</label>
                  <input
                    type="text"
                    v-model="stuData[i].surname"
                    :placeholder="i != 0 ? 'Firstname' : ''"
                    :key="i"
                    class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                     required
                  />
                </div>

                <div class="col-span-5 lg:col-span-1 md:col-span-5">
                  <label for="" class="mr-4" v-if="i == 0">Lastname</label>
                  <input
                    type="text"
                    v-model="stuData[i].othernames"
                    :placeholder="i != 0 ? 'Lastname' : ''"
                    :key="i"
                    class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                     required
                  />
                </div>
                <div class="col-span-5 lg:col-span-1 md:col-span-5">
                  <label for="" class="mr-4" v-if="i == 0">Gender</label> <br />
                  <!-- <label for="year_one" class="inline-flex items-center years mr-2 mt-5"> -->
                  <div :class="i == 0 ? 'mt-5' : ''">
                    <span v-for="(sex, index) in gender" :key="index">
                      <input
                        type="radio"
                        class="form-checkbox text-indigo-900"
                        :name="genderN + i"
                        :key="index"
                        :id="sex + index + i"
                        @click="setGender(i, sex)"
                         required
                      />
                      <label
                        :for="sex + index + i"
                        class="ml-1 mr-5 cursor-pointer"
                        >{{ sex }}</label
                      >
                    </span>
                  </div>
                </div>
                <div class="col-span-5 lg:col-span-1 md:col-span-5">
                  <label for="" class="mr-4" v-if="i == 0">Email</label>
                  <input
                    type="email"
                    v-model="stuData[i].email"
                    :placeholder="i != 0 ? 'Email' : ''"
                    :key="i"
                    class="form-input p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm"
                     required
                  />
                </div>
                <div class="col-span-6 lg:col-span-1 md:col-span-6">
                  <label for="" class="mr-4" v-if="i == 0">Date of birth</label>
                  <input
                    type="date"
                    v-model="stuData[i].birth_date"
                    :placeholder="i != 0 ? 'Dob' : ''"
                    :key="i"
                    class="p-2 mt-2 mr-4 border border-#E1E1E1-600 rounded-sm bg-white"
                       required
                  />
                </div>

                <div
                  :class="
                    i == 0
                      ? 'col-span-6 lg:col-span-1 md:col-span-6 mt-5'
                      : 'col-span-6 lg:col-span-1 md:col-span-6 mt-1'
                  "
                >
                  <vs-button
                    color="#574AE2"
                    :class="
                      i == 0
                        ? 'rounded-sm p-3 add-stud-btn rounded-full w-1/5'
                        : 'rounded-sm p-3 add-stud-btn rounded-full w-1/5'
                    "
                    @click="inputs[i] == '+' ? expand(i) : remove(i)"
                  >
                    {{ inputs[i] }}
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
        </div>
      </div>

      <div class="lg:w-1/2 mb-5 pl-4 flex gap-5 items-center">
      <div class="w-1/3">
        <button
          :class="[
            request_click === true
              ? 'button_on_loaging border rounded-md py-3 px-5 text-white add__btn flex  lg:w-6/6 sm:w-1/4'
              : 'border rounded-md py-3 px-5  text-white  add__btn flex  lg:w-full sm:w-1/4',
          ]"
        >
          <template v-if="request_click == false">
            {{ add_status }}
          </template>
          <template v-else >
            <!-- <img src="@/assets/gif2.gif" width="40" /> -->
            <!-- Registering  -->
            <PulseLoader
             color="white"/>
          </template>
        </button>
        </div>
        <div class="text-red w-2/3">
          {{error_response}}
        </div> 
      </div>
    </form>
  </div>
</template>

<script>
import Services from "@/services/AllServices";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: "AddStudent",
  components:{
PulseLoader
  },
  data: () => ({
    filter:"",
    stuData: [],
    add_status: "Save",
    request_click: false,
    response_status: "",

    genderN: "gender",
    gender: ["MALE", "FEMALE"],
    inputs: ["+"],
    error_response:""
  }),
  watch: {
    route() {
      // this.userData =[]
      this.inputs = ["+"];
      // this.userData.push(this.getUserdata());
    },
  },
  beforeMount() {
    this.stuData.push(this.getUserdata());
  },
  methods: {
    setGender(index, gender) {
      this.stuData[index].gender = gender;
    },

    getUserdata() {
      const fields = {
        category: "5ff6a85631267c00177e5ef2"
      };
      return fields;
    },

    expand(index) {
      this.inputs.push("+");
      console.log("expanding");
      if (index > -1) {
        this.inputs[index] = "-";

        this.stuData.push(this.getUserdata());
      }
    },
    remove(index) {
      console.log("Removing");
      this.inputs.splice(index, 1);
      this.stuData.splice(index,1)
    },

    // post the student

    async postStudent() {
       this.request_click = true,
      console.log(this.stuData);
      const response = await Services.addUser({ users: this.stuData });

      console.log("New student: ", response);
      this.request_click = false;

      
      if(response.data.status == 403 || response.data.status == 400){
        this.add_status="Save"
        this.error_response= response.data.message
      }
      else{
        this.error_response=""
        setTimeout(()=>{
        this.add_status = "Save"
      },2000);

      this.add_status = "Registration done";
        this.stuData.map((data)=>{
        data.username="";
        data.othernames="";
        data.email = "";
        data.surname="";
        data.gender="";
        data.birth_date="";
      });
      }

    },
  },
};
</script>

<style src="../shared/styles.css" scoped></style>

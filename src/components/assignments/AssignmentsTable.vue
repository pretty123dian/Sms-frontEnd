<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">View assignments</h3>
            <!-- select the year here -->
            <label class="block">
              <select
                class="form-select mt-1 p-2 block rounded-sm focus:outline-none border border-#E1E1E1-700 bg-white"
              >
                <option value="" selected>Select year</option>
                <template v-for="(year, index) in years">
                  <option :value="year" :key="index">{{ year }}</option>
                </template>
              </select>
            </label>
            <!-- select the year box ends here -->
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/assignment">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add assignment
            </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="students" class="w-full">
           <template>
            <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search assignment" />
            </template>
          <template class="bg-white">
            <tr>
              <th>#</th>
              <th>Lesson</th>
              <th>Semester</th>
              <th>Assignment type</th>
              <th>Maximum marks</th>
              <th>Actions</th>
            </tr>
          </template>

          <template>
            <tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <td class="w-1/6">
                {{ tr.id }}
              </td>
              <td>
                {{ tr.lesson }}
              </td>
              <td>
                {{ tr.semester }}
              </td>
              <td>
                {{ tr.assignmentType }}
              </td>
              <td>{{ tr.maximumMarks }} %</td>
              <td>
                <span
                  class="text-purple cursor-pointer"
                  @click="popupActivo2 = true"
                >
                  {{ tr.action }}
                </span>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>

    <!-- view the assignment here -->
    <div class="centerx">
      <!-- <vs-button @click="popupActivo2 = true" color="primary" type="filled"
        >Open Popup</vs-button
      > -->
      <vs-popup
        classContent="popup-example"
        title="Assignment"
        button-close-hidden="false"
        :active.sync="popupActivo2"
        class="assignment__popup"
        style="font-family: 'Poppins'"
      >
        <div class="grid w-full">
          <div class="col-12">
            <ul>
              <li>Lesson</li>
              <li class="font-bold">Mathematics</li>
            </ul>
          </div>
          <div class="col-12">
            <ul>
              <li>Semester</li>
              <li class="font-bold">Term 1</li>
            </ul>
          </div>
          <div class="col-12">
            <ul>
              <li>Assignment type</li>
              <li class="font-bold">Exam</li>
            </ul>
          </div>
          <div class="col-12">
            <ul>
              <li>Maximum marks</li>
              <li class="font-bold">100%</li>
            </ul>
          </div>
          <div class="col-12">
            <ul>
              <li>Assignment file</li>
              <li class="font-bold flex text-purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="svg file"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                  />
                </svg>

                mathematics_cat.pdf
              </li>
            </ul>
          </div>
        </div>
      </vs-popup>
    </div>

    <!-- assignment popup ends here -->
  </div>
</template>

<script>
export default {
  name: "AssignmentsTable",
  data: () => ({
    search:'',
    assignments: [],
    years: [2018, 2019, 2020, 2021],
  
    popupActivo2: false,
    popupActivo3: false,
  }),
     computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.assignments.filter(el=>el.lesson.match(filter))
          return foundText;    
    }
  },
beforeMount(){
  this.assignments = [];
  this.getRows();
},

methods: {
  async getRows(){

  }
}

};
</script>

<style scoped>
label > input[type="checkbox"]:checked + *::before {
  background-color: #574ae2;
}
label > input[type="checkbox"]:checked + * {
  color: #574ae2;
}

.vs-popup--title h3 {
  -webkit-transition: all 0.23s ease 0.1s;
  transition: all 0.23s ease 0.1s;
  padding: 8px;
  padding-left: 12px;
  font-size: 1.2rem;
  font-family: "Poppins" !important;
}
ul li {
  font-family: "Poppins", sans-serif;
}

.add-stud-btn:focus {
  outline: none;
}
.table__thead .table__th {
  background: #fff !important;
}

tr {
  border-bottom: 1px solid #dfdfdf !important;
}
input:focus {
  border: 1px solid #574ae2;
}
ul li {
  padding: 1.5%;
}
.file {
  fill: #574ae2;
  margin-right: 1%;
}
</style>






















<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">VIEW STUDENTS</h3>
            <label for="year_one" class="inline-flex items-center years">
              <input
                type="checkbox"
                class="form-checkbox text-indigo-900"
                name="year"
                id="year_one"
                checked
              />
              <span class="ml-1">Year one</span>
            </label>
            <label for="year_two" class="inline-flex items-center ml-5">
              <input
                type="checkbox"
                class="form-checkbox text-indigo"
                name="year"
                id="year_two"
              />
              <span class="ml-1">Year two</span>
            </label>
            <label for="year_three" class="inline-flex items-center ml-5">
              <input
                type="checkbox"
                class="form-checkbox"
                color="#574AE2"
                name="year"
                id="year_three"
              />
              <span class="ml-1">Year three</span>
            </label>
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/student">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add student
            </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        
         
              <div class="row flex gap-4">
               <select
            class="form-input p-2 border rounded"
            @change="getRows(filter)"
            v-model="filter"
           
            border
          >
            <option value="10">Showing {{ filter }} rows</option>
            <option v-if="filter != 10" value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
            <input
              class="form-input p-2 border rounded"
              v-model="search"
              border
              placeholder="Search student"
            />
              </div> 
               <div class="flex my-5">
          <span><b>Total: </b>{{ rowCounter }}</span>
        </div>
              <table stripe :data="students" class="w-full">
        

          <template>
            <tr>
              <th>#</th>
              <th>Names</th>
              <th>Gender</th>
              <th>Email</th>

              <th>Status</th>
              <th colspan="3">Action</th>
            </tr>
          </template>

          <template>
            <tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <td class="w-1/6">
                {{ i + 1 }}
              </td>
              <td>
                {{ tr.full_names }}
              </td>
              <td>
                {{ tr.gender }}
              </td>
              <td>
                {{ tr.email }}
              </td>
    
              <td>
                {{ tr.status }}
              </td>

              <td v-html="tr.action[0]"></td>
              <td v-html="tr.action[1]"></td>
              <td v-html="tr.action[2]"></td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "@/services/AllServices";
export default {
  name: "studentsTable",
  data: () => ({
    filter:10,
    rowCounter:0,
    search: "",
    students: [],
    action: [
      `<svg  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 26.998 27">
          <path id="Icon_material-update" data-name="Icon material-update" d="M31.5,15.18H21.33l4.11-4.23a10.558,10.558,0,0,0-14.82-.15,10.313,10.313,0,0,0,0,14.685,10.529,10.529,0,0,0,14.82,0A9.77,9.77,0,0,0,28.5,18.15h3a14.011,14.011,0,0,1-3.96,9.435,13.581,13.581,0,0,1-19.08,0,13.26,13.26,0,0,1-.03-18.87,13.481,13.481,0,0,1,18.975,0L31.5,4.5ZM18.75,12v6.375L24,21.495,22.92,23.31,16.5,19.5V12Z" transform="translate(-4.502 -4.5)" fill="#574ae2"/>
          </svg>`,
      `<svg class="delete-bin-line" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 27 27">
            <path id="Path_473" data-name="Path 473" d="M0,0H27V27H0Z" fill="none"/>
            <path id="Path_474" data-name="Path 474" d="M19,6.533h5.667V8.8H22.4V23.533a1.133,1.133,0,0,1-1.133,1.133H5.4a1.133,1.133,0,0,1-1.133-1.133V8.8H2V6.533H7.667v-3.4A1.133,1.133,0,0,1,8.8,2h9.067A1.133,1.133,0,0,1,19,3.133ZM20.133,8.8H6.533V22.4h13.6Zm-10.2,3.4H12.2V19H9.933Zm4.533,0h2.267V19H14.467ZM9.933,4.267V6.533h6.8V4.267Z" transform="translate(0.167 0.167)" fill="#db222a"/>
          </svg>`,
      `
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 27">
            <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0 -4.5)">
              <path id="Path_475" data-name="Path 475" d="M1.5,18S7.5,6,18,6,34.5,18,34.5,18,28.5,30,18,30,1.5,18,1.5,18Z" fill="none" stroke="#2bde73" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_476" data-name="Path 476" d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z" fill="none" stroke="#2bde73" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
          </svg>
          `,
    ],
  }),
  computed: {
    searchSimilar() {
      let filter = new RegExp(this.search, "i");
      let foundText = this.students.filter((el) => el.full_names.match(filter));
      return foundText;
    },
  },

  beforeMount() {
    this.students = [];
    this.getRows();
  },

  methods: {
    async getRows() {
       this.rowCounter = 0;
        this.students = [];
        let studCatId = "5ff6a85631267c00177e5ef2";
      
      const response = await Services.getUsersByCat(studCatId,this.filter);
      console.log("Users: ", response);
      response.data.data.docs.forEach((user) => {
        if (user.category) {
          // category 1 -- students
         
            //  if (this.filter > this.rowCounter){
                 this.rowCounter++;
                      const userObj = {};
          userObj.lastname = user.othernames;
          userObj.firstname = user.surname;
          userObj.full_names = userObj.lastname + " " + userObj.firstname;
          userObj.email = user.email;
          userObj.gender = user.gender;
          userObj.phone = user.phone;
          userObj.status = user.status;
          userObj.national_id = user.national_id;
          userObj.action = this.action;
          this.students.push(userObj);
            //  }
          
          
        }
      });
    },
  },
};
</script>

<style scoped>
label > input[type="checkbox"]:checked + *::before {
  background-color: #574ae2;
}
label > input[type="checkbox"]:checked + * {
  color: #574ae2;
}

.add-stud-btn:focus {
  outline: none;
}
.table__thead .table__th {
  background: #fff !important;
}

.table__tr:hover {
  /* background-color: #E9E8FF;
  border: 1px solid black; */
}
input:focus {
  border: 1px solid #574ae2;
}
tr {
  border-bottom: 1px solid #dfdfdf !important;
}
</style>






















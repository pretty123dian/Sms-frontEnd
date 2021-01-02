<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
              <h3 class="text-sm font-bold mb-5">View instructors</h3>
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
          <router-link to="/register/instructor">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add instructor
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
               <table stripe :data="instructors" class="w-full">
                  <template>
            <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search instructor" />
            </template>
               <template>
                 <tr>
                   <th>#</th>
                   <th>Names</th>
                   <th>Promotion</th>
                   <th>Age</th>
                   <th>Action</th>
                 </tr>
               </template>

               <template>
                  <tr
                  :key="i"
                  v-for="(tr,i) in searchSimilar"
                  :data ="tr"
                  >
                    <td>
                      {{tr.id}}
                    </td>
                    <td>
                      {{tr.names}}
                    </td>
                    <td>
                      {{tr.promotion}}
                    </td>
                    <td>
                      {{tr.age}}
                    </td>
                    <td>
                      {{tr.action}}
                    </td>
                  </tr>
               </template>
             </table>
           </div>
        </div>
  </div>
</template>

<script>
export default {
name:"InstructorsTable",
data:()=>({
  search:'',
  instructors:[
        {
        "id":1,
        "names":"Bosco abc",
        "promotion":"This is the course of mathematics which deals with analysis,...",
        "age":12,
        "action":"ok"
        },
      {
      "id":2,
      "names":"Lento Prof",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    },
      {
      "id":3,
      "names":"Gabriel Xyz",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    },
      {
      "id":4,
      "names":"Thomas Tim",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    }
  ]
  }),
      computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.instructors.filter(el=>el.names.match(filter))
          return foundText;    
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
input:focus{
  border: 1px solid #574ae2;
}
tr {
  border-bottom: 1px solid #dfdfdf !important;
}
</style>






















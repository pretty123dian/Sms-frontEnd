<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
                <h3 class="text-sm font-bold mb-5">View lessons</h3>
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
          <router-link
          to="/register/lesson"
          >

          
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add lesson
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="lessons" class="w-full">
            <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search lesson" />
        
          <template class="bg-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th colspan="3">Action</th>
            </tr>
          </template>

          <template >
            <tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <td class="w-1/6">
                {{ tr.id }}
              </td>
              <td>
                {{ tr.title }}
              </td>
              <td>
                {{ tr.description }}
              </td>
              <td v-html="tr.action[0]"> </td>
              <td v-html="tr.action[1]"> </td>
              <td v-html="tr.action[2]"> </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '@/services/AllServices'
export default {
  name: "LessonsTable",
  data: () => ({
    search:'',
    lessons: [],
  }),
    computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.lessons.filter(el=>el.title.match(filter))
          return foundText;    
    }
  },

  beforeMount(){
this.lessons = [];
this.getRows();
  },
 
  methods:{
    async getRows(){
        const response = await Services.getLessons();
        console.log("Response: ", response);
        response.data.data.docs.forEach(lesson=>{
          alert(lesson)
        })
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
tr {
  border-bottom: 1px solid #dfdfdf !important;
}
input:focus{
  border: 1px solid #574ae2;
}
svg:hover{
  cursor:pointer;
  fill:indigo
}
</style>






















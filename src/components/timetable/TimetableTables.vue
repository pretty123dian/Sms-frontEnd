<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
              <h3 class="text-sm font-bold mb-5">View timetables</h3>
           
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/timetable">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add new timetable
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
               <table stripe :data="timetables" class="w-full" >
                  <template>
          <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search timetable" />
        </template>
               <template>
                 <vs-tr>
                   <vs-th sort>Title</vs-th>
                   <vs-th>Filename</vs-th>
                   <vs-th>Promotion</vs-th>
                   <vs-th>Academic year</vs-th>
                   <vs-th >Action</vs-th>
                 </vs-tr>
               </template>

               <template>
                  <vs-tr
                  :key="i"
                  v-for="(tr,i) in searchSimilar"
                  :data ="tr"
                 
                  > 
                    <vs-td>
                      {{tr.title}}
                    </vs-td>
                    <vs-td>
                      {{tr.filename}}
                    </vs-td>
                    <vs-td>
                        {{tr.promotion}}
                    </vs-td>
                    <vs-td>
                        {{tr.link}}
                    </vs-td>
                    <vs-td>
                      {{tr.action}}
                    </vs-td>
                   
                  </vs-tr>
               </template>
               
             </table>
           </div>
        </div>
  </div>
</template>

<script>
import Services from '@/services/AllServices';
export default {

name:"Timetable",
data:()=>({
  search:'',
  status:'afds',
  timetables:[
    //     {
    //     title:"Time table for year 1",
    //     promotion:'Year 1',
    //     filename:"time_table_year1.pdf",
    //     academic_year:2020,
    //     action:"ok"
    //     },
    //   {
    //   title:"Time table for year 1",
    //   promotion:'Year 1',
    //   filename:"  time_table_year1.pdf",
    //   academic_year:2020,
    //   action:"ok"
    // },
    //   {
    //   title:"Time table for year 2",
    //   promotion:'Year 1',
    //   filename:"  time_table_year1.pdf",
    //   academic_year:2020,
    //   action:"ok"
    // }
  ]
  }),

  computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.timetables.filter(el=>el.title.match(filter))
          return foundText;    
    }
  },
  
  methods:{
    // fetch all timetables 

    async getRows(){
      const responses = await Services.getTimeTable();
      if(responses.status===200){
          responses.map(timetable=>{
            const timetableStore = {};
            timetableStore.title = timetable.title
            timetableStore.promotion = timetable.promotion
            timetableStore.filename = timetable.file_name
            timetableStore.link = timetable.link
            timetableStore.action = 'ok'
            this.timetables.push(timetableStore)
          })
      }
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






















<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
              <h3 class="text-sm font-bold mb-5">View classes</h3>
           
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/class">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add new class
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
               <table stripe :data="categories" class="w-full" >
                  <template>
          <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search class" />
        </template>
               <template>
                 <vs-tr>
                   <vs-th sort>Class name</vs-th>
                   <vs-th  sort-key=description>Status</vs-th>
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
                      {{tr.name}}
                    </vs-td>
                    <vs-td>
                      {{tr.status}}
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
name:"ClassesTable",
data:()=>({
  search:'',
  status:'',
  action:'Delete',
  classes:[]
  }),

  computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.classes.filter(el=>el.name.match(filter))
          return foundText;    
    }
  },
  beforeMount(){
    this.classes = [];
    this.getRows();
  },
  methods:{
    async getRows(){
      const response = await Services.getClasses();
      console.log(response)
      response.data.data.docs.forEach(cls=>{
        const classObj ={};
        classObj.name = cls.name;
        classObj.status = cls.status;
        classObj.created_at = cls.createdAt;
        classObj.action = this.action;
        this.classes.push(classObj);
      
      });
      console.log("Classes: ", this.classes);
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






















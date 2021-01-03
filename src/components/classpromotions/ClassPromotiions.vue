<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
              <h3 class="text-sm font-bold mb-5">View promotion classes</h3>
           
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/classpromotion">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add new promotion
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
               <table stripe :data="categories" class="w-full" >
                  <template>
          <input class="form-input p-2 border rounded" v-model="search" border placeholder="Search promotion" />
        </template>
               <template>
                 <vs-tr>
                   <vs-th sort>Name</vs-th>
                   <vs-th  sort-key=description>Class</vs-th>
                <vs-th> Academic year</vs-th>
                <vs-th>Status</vs-th>
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
                      {{tr.class}}
                    </vs-td>
                    <vs-td>
                      {{tr.academic_year}}
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
name:"ClassesPromotionTable",
data:()=>({
  search:'',
  status:'',
  classPromotions:[]
  }),

  computed:{
    searchSimilar(){
       let filter = new RegExp(this.search,'i');
       let foundText = this.classPromotions.filter(el=>el.name.match(filter))
          return foundText;    
    }
  },

  beforeMount(){
    this.classPromotions=[];
    this.getRows();
  },

  methods:{
    // fetch all class promotions
    async getRows(){

      const response = await Services.getClassPromotion();
  console.log(response)
      response.data.data.docs.forEach(promo=>{
        const promoObj = {};
        promoObj.name = promo.promotion;
        promoObj.class = promo.class;
        promoObj.academic_year = promo.academic_year;
        promoObj.status = promo.status;
        promoObj.action = 'ok'
        this.classPromotions.push(promoObj);
      })
      // console.log('Class promotions: ', this.classPromotions);
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






















<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
              <h3 class="text-sm font-bold mb-5">View user categories</h3>
           
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/category">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add category
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
               <table stripe :data="categories" class="w-full">
               <template>
                 <tr>
                   <th>Category name</th>
                   <th>Description</th>
                   <th>Action</th>
                 </tr>
               </template>

               <template>
                  <tr
                  :key="i"
                  v-for="(tr,i) in categories"
                  :data ="tr"
                  >
                    <td>
                      {{tr.names}}
                    </td>
                    <td>
                      {{tr.description}}
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
name:"CategoriesTable",
data:()=>({
  categories:[
        {
        "names":"Student",
        "description":"This is the course of mathematics which deals with analysis,...",

        "action":"ok"
        },
      {
      "names":"Instructor",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    },
      {
      "names":"Admin",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    }
  ]
  }),
};
</script>

<style>
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
</style>






















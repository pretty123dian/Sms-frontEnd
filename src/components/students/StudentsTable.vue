<template>
  <div>
         <div class="chart-one lg:ml-4 sm:ml-4 ">
           <div class="center">
             <vs-table>
               <template #thead>
                 <vs-tr>
                   <vs-th>#</vs-th>
                   <vs-th>Names</vs-th>
                   <vs-th>Promotion</vs-th>
                   <vs-th>Age</vs-th>
                   <vs-th>Action</vs-th>
                 </vs-tr>
               </template>

               <template #tbody>
                  <vs-tr
                  :key="i"
                  v-for="(tr,i) in students"
                  :data ="tr"
                  >
                    <vs-td>
                      {{tr.id}}
                    </vs-td>
                    <vs-td>
                      {{tr.names}}
                    </vs-td>
                    <vs-td>
                      {{tr.promotion}}
                    </vs-td>
                    <vs-td>
                      {{tr.age}}
                    </vs-td>
                    <vs-td>
                      {{tr.action}}
                    </vs-td>
                  </vs-tr>
               </template>
             </vs-table>
           </div>
        </div>
  </div>
</template>

<script>
export default {
name:"StudentsTable",
data:()=>({
  students:[
        {
        "id":1,
        "names":"Gersh lento",
        "promotion":"This is the course of mathematics which deals with analysis,...",
        "age":12,
        "action":"ok"
        },
      {
      "id":2,
      "names":"Lento lento",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    },
      {
      "id":3,
      "names":"Gervais Ishimwe",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    },
      {
      "id":4,
      "names":"Mathematics",
      "promotion":"This is the course of mathematics which deals with analysis,...",
      "age":12,
      "action":"ok"
    }
  ]
})
}
</script>

<style>

</style>






















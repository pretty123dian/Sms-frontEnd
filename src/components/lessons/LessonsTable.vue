<template>
  <div>
         <div class="lg:ml-4 sm:ml-4 ">
           <div class="center bg-white">
             <vs-table>
               <template #thead>
                 <vs-tr>
                   <vs-th>#</vs-th>
                   <vs-th>Title</vs-th>
                   <vs-th>Description</vs-th>
                   <vs-th>Action</vs-th>
                 </vs-tr>
               </template>

               <template #tbody>
                  <vs-tr
                  :key="i"
                  v-for="(tr,i) in lessons"
                  :data ="tr"
                  >
                    <vs-td>
                      {{tr.id}}
                    </vs-td>
                    <vs-td>
                      {{tr.title}}
                    </vs-td>
                    <vs-td>
                      {{tr.description}}
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
name:"LessonsTable",
data:()=>({
  lessons:[
    {
      "id":1,
      "title":"Mathematics",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    },
      {
      "id":2,
      "title":"Mathematics",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    },
      {
      "id":3,
      "title":"Mathematics",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    },
      {
      "id":4,
      "title":"Mathematics",
      "description":"This is the course of mathematics which deals with analysis,...",
      "action":"ok"
    }
  ]
})
}
</script>

<style>

</style>






















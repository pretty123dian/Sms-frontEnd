<template>
  <div class="flex grid grid-cols-2 gap-4">
    <div class="w-4/5 p-5">
      <div class="title">
        <span class="font-bold text-sm">Add new assignment</span>
      </div>
      <div class="w-full mt-5">
          <form action="">
        <div class="col-span-5 lg:col-span-1 md:col-span-5">
          <label for="" class="mr-4">Lesson name</label> <br />
          <input
            class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
          />
        </div>
        <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
          <label for="" class="mr-4">Semester</label> <br />
          <select
            name=""
            id=""
            class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
          >
             <option value="">Select semester</option>
          <template v-for="(semester,index) in semesters">
           
            <option :value="semester" :key="index">{{semester}}</option>
            </template>
          </select>
        </div>
        <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
          <label for="" class="mr-4">Assignment type</label> <br />
          <select
            name=""
            id=""
            class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
          >

            <option value="">Select type</option>
            <template v-for="(type, index) in assignmentTypes">
                <option value="" :key="index">{{type}}</option>
            </template>
          </select>
        </div>
         <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
          <label for="" class="mr-4">Maximum marks (in percentage)</label> <br />
          <input
            class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
          />
        </div>
        <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-12">
         <vs-button color="#574AE2" class="focus:outline-none">Create assignment</vs-button>
        </div>

        </form>
      </div>
    </div>
    <div class="w-2/3">
      <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempora? Porro consectetur voluptas explicabo! Nam, quas sapiente molestiae pariatur cumque animi repudiandae perferendis, dolores libero quasi, et harum quos cum. -->
    </div>
  </div>
</template>

<script>
export default {
    name:"AddAssignment",
    data: ()=>({
        semesters:['Term 1', 'Term 2','Term 3'],
        assignmentTypes:['Exam','CAT']
    })
};
</script>

<style scoped>
input:focus, select:focus{
  border: 2px solid #574ae2;
  border-radius: 4px !important;
  
}
</style>
<template>
  <div class="flex grid grid-cols-2 gap-4">
    <div class="w-4/5 p-5">
      <div class="title">
        <span class="font-bold text-sm">Add notes</span>
      </div>
      <div class="w-full mt-5">
        <form action="">
          <div class="col-span-5 lg:col-span-1 md:col-span-5 lesson_name">
            <label
              for="name"
              class="mr-4 name"
              :class="[labels_focus.label1 ? 'label-focus' : '']"
              >Lesson name</label
            >
            <br />
            <input
              @focus="labels_focus.label1 = !labels_focus.label1"
              @blur="labels_focus.label1 = !labels_focus.label1"
              id="name"
              class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
            />
          </div>
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
            <label
              for=""
              class="mr-4"
              :class="[labels_focus.label2 ? 'label-focus' : '']"
              >Description</label
            >
            <br />
            <textarea
              @focus="labels_focus.label2 = !labels_focus.label2"
              @blur="labels_focus.label2 = !labels_focus.label2"
              name=""
              id=""
              rows="5"
              class="form-input p-3 mt-2 mr-4 border w-3/4 border-#E1E1E1-600 rounded"
            >
              
            </textarea>
          </div>
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
              
            <label
              for=""
              class="mr-4"
              :class="[labels_focus.label3 ? 'label-focus' : '']"
              >Notes file</label
            >
            <br />
             <div class="card border bg-white flex items-center m-auto notes__upload_file">
                Lorem ipsum dolor, sit amet consectetur
            </div>
          
          </div>
         
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-12">
            <vs-button color="#574AE2" class="focus:outline-none"
              >Add notes</vs-button
            >
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
  name: "AddAssignment",
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
    },
    semesters: ["Term 1", "Term 2", "Term 3"],
    assignmentTypes: ["Exam", "CAT"],
  }),
};
</script>

<style scoped>
input:focus,
select:focus,
textarea:focus
 {
  border: 2px solid #574ae2;
  border-radius: 4px !important;
}
.label-focus {
  color: #574ae2 !important;
}
.notes__upload_file{
    height: 25vh;
    width: 100%;
}
</style>
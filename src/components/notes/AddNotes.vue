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
              class="form-input p-3 mt-2 mr-4 border lg:w-3/4 md:w-full border-#E1E1E1-600 rounded"
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
              class="form-input p-3 mt-2 mr-4 border lg:w-3/4 sm:w-full border-#E1E1E1-600 rounded"
            >
              
            </textarea>
          </div>
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4  lg:w-3/4  sm:w-full ">
              
            <label
              for=""
              class="mr-4"
              :class="[labels_focus.label3 ? 'label-focus' : '']"
              >Notes file</label
            >
            <label for="notes__file">
             <div class="lg:w-3/4  sm:w-full  border-dashed border-2 bg-white flex items-center notes__upload_file mt-3 text-center">
               <span class="m-auto">Drop file here or <a href="#" class="text-purple hover:underline">browse </a> to upload </span>
           </div>
            </label>
                <input type="file" name="notes__file" id="notes__file" hidden>
          </div>
         
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-12">
            <vs-button color="#574AE2" class="focus:outline-none lg:w-2/4 sm:w-full"
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
.notes__upload_file:hover{
     border: 2px solid #574ae2;
     border-style: dashed;
     cursor: pointer;
     border-radius: 3%;
     background-color: #574ae21c;
}
.label-focus {
  color: #574ae2 !important;
}
.notes__upload_file{
    height: 25vh;
    width: 100%;
}
</style>
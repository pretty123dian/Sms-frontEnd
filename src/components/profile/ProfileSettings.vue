<template>
  <div class="flex gap-1">
    <div class="w-2/6 p-5">
      <div class="title">
        <span class="font-bold text-sm">Profile settings</span>
      </div>
      <div class="w-full mt-5">
       
      </div>
    </div>
    <div class="w-1/2 mt-4 bg-white  float-left">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, tempora? Porro consectetur voluptas explicabo! Nam, quas sapiente molestiae pariatur cumque animi repudiandae perferendis, dolores libero quasi, et harum quos cum.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSettings",
  data: () => ({
    
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
    },
    academicYears: ["2020", "2021"],
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
<template>
  <div class="flex grid grid-cols-2 gap-4">
    <div class="w-4/5 p-5">
      <div class="title">
        <span class="font-bold text-sm">Add new semester</span>
      </div>
      <div class="w-full mt-5">
        <form ref="form" @submit.prevent="createSemester()">
          <div class="col-span-5 lg:col-span-1 md:col-span-5">
            <label
              for="name"
              class="mr-4 name"
              :class="[labels_focus.label1 ? 'label-focus' : '']"
              >Semester name</label
            >
            <br />
            <input
              @focus="labels_focus.label1 = !labels_focus.label1"
              @blur="labels_focus.label1 = !labels_focus.label1"
              v-model="name"
              id="name"
              class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
            />
          </div>
          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-3">
            <label
              for="name"
              class="mr-4 name"
              :class="[labels_focus.label2 ? 'label-focus' : '']"
              >Academic year</label
            >
            <br />
            <select
              @focus="labels_focus.label2 = !labels_focus.label2"
              @blur="labels_focus.label2 = !labels_focus.label2"
              v-model="year"
              id="name"
              class="form-input p-3 mt-2 mr-4 border lg:w-4/4 md:w-full border-#E1E1E1-600 rounded"
            >
              <option value="">Select academic year</option>
              <template v-for="(year, index) in academicYears">
                <option :value="year" :key="index">{{ year }}</option>
              </template>
            </select>
          </div>

          <div class="col-span-5 lg:col-span-1 md:col-span-5 mt-4">
            <div class="flex w-full">
              <p class="text-green float-right m-auto">
                {{ response_status }}
              </p>
            </div>
            <button
              @click="validateAllfields()"
              :class="[
                request_click === true
                  ? 'button_on_loaging border rounded-md py-3 px-5 mt-8 text-white mt-16 add__btn flex  lg:w-1/4 sm:w-full'
                  : 'border rounded-md py-3 px-5 mt-8 text-white  mt-16 add__btn flex  lg:w-1/4 sm:w-full',
                username === '' || password === '' ? 'bt__disabled' : '',
              ]"
            >
              <template v-if="request_click == false">
                {{ add_status }}
              </template>
              <template v-else>
                <img src="@/assets/gif2.gif" />
              </template>
            </button>
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
import Services from "@/services/AllServices";
export default {
  name: "AddSemester",
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false,
      label3: false,
      label4: false,
    },
    name: "",
    year: "",
    academicYears: ["2020", "2021"],
    add_status: "Add semester",
    request_click: false,
    response_status: "",
  }),

  methods: {
    async createSemester() {
      this.request_click = true;
      const response = await Services.addSemester({
        semester: this.name,
        academic_year: this.year,
      });
      console.log(response);
      this.request_click = false;
      this.response_status = "Semester " + this.name + " is added successfully";
      this.name = "";
      this.year = "";
    },
  },
};
</script>

<style src="../shared/styles.css" scoped>
</style>
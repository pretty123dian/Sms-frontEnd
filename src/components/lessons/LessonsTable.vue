<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">VIEW LESSONS</h3>
            <label for="year_one" class="inline-flex items-center years">
              <input
                type="checkbox"
                class="form-checkbox text-indigo-900"
                name="year"
                id="year_one"
                checked
              />
              <span class="ml-1">Year one</span>
            </label>
            <label for="year_two" class="inline-flex items-center ml-5">
              <input
                type="checkbox"
                class="form-checkbox text-indigo"
                name="year"
                id="year_two"
              />
              <span class="ml-1">Year two</span>
            </label>
            <label for="year_three" class="inline-flex items-center ml-5">
              <input
                type="checkbox"
                class="form-checkbox"
                color="#574AE2"
                name="year"
                id="year_three"
              />
              <span class="ml-1">Year three</span>
            </label>
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <vs-button
            color="#574AE2"
            class="rounded-full add-stud-btn"
            @click="[(popupActivo2 = true), (response_status = '')]"
          >
            Add lesson
          </vs-button>
        </div>
      </div>
      <div class="center bg-white p-5">
        <!-- filter and search here -->
        <div class="row flex gap-4">
          <select
            class="form-input p-2 border rounded"
            @change="getRows(filter)"
            v-model="filter"
           
            border
          >
            <option value="10">Showing {{ filter }} rows</option>
            <option v-if="filter != 10" value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <input
            class="form-input p-2 border rounded"
            v-model="search"
            border
            placeholder="Search lesson"
          />
        </div>
        <!-- filter and search end here -->
        <!-- row counter here -->
        <div class="flex mt-5">
          <span><b>Total: </b>{{ rowCounter }}</span>
        </div>
        <!-- row counter ends here -->
        <table stripe :data="lessons" class="w-full">
          <br />
          <template class="bg-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th colspan="3">Action</th>
            </tr>
          </template>

          <template>
            <tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <td class="w-1/6">
                {{ i + 1 }}
              </td>
              <td>
                {{ tr.name }}
              </td>
              <td>
                {{ tr.description }}
              </td>
              <td v-html="tr.action[0]"></td>
              <td v-html="tr.action[1]"></td>
              <td v-html="tr.action[2]"></td>
            </tr>
          </template>
        </table>
      </div>
    </div>

    <div class="centerx">
      <!-- add lesson popup here -->
      <vs-popup
        classContent="popup-example"
        title="Register new lesson"
        button-close-hidden="false"
        :active.sync="popupActivo2"
        class="assignment__popup"
        style="font-family: 'Poppins'"
      >
        <div class="grid w-full px-10">
          <div class="mt-1">
            <br />
            <form
              class="lesson__form"
              ref="form"
              @submit.prevent="insertLesson()"
            >
              <div class="w-full mb-5">
                <label
                  :class="[labels_focus.label1 === true ? 'label-focus' : '']"
                  >Lesson Name</label
                >

                <input
                  type="text"
                  @focus="labels_focus.label1 = !labels_focus.label1"
                  @blur="labels_focus.label1 = !labels_focus.label1"
                  class="outline-none border my-3 px-5 py-6 w-full h-10 rounded"
                  v-model="lesson__name"
                   required
                />
              </div>

              <div class="w-full">
                <label
                  :class="[labels_focus.label2 === true ? 'label-focus' : '']"
                  >Lesson Description</label
                >

                <textarea
                  @focus="labels_focus.label2 = !labels_focus.label2"
                  @blur="labels_focus.label2 = !labels_focus.label2"
                  class="w-full my-3 h-32 p-5 border resize-none outline-none rounded leading-loose"
                  v-model="lesson__description"
                   required
                ></textarea>
              </div>

              <div class="my-2 w-full row">
                <div class="flex w-full">
                  <p class="status_success float-right m-auto">
                    {{ response_status }}
                  </p>
                </div>
                <button
                  :class="[
                    request_click === true
                      ? 'button_on_loading border rounded-md py-3 px-6 mt-4 text-white add__btn flex'
                      : 'border rounded-md py-3 px-6 mt-4 text-white add__btn flex w-full',
                  ]"
                >
                  <template v-if="request_click == false">
                    {{ button_status }}
                  </template>
                  <template v-else>
                    <!-- <img src="@/assets/gif2.gif" /> -->
                    <ClipLoader   size="27px" color="white" />
                  </template>
                </button>
              </div>
            </form>
          </div>
        </div>
      </vs-popup>

      <!-- add lesson popup ends here -->
    </div>
  </div>
</template>

<script>
import Services from "@/services/AllServices";
import ClipLoader from 'vue-spinner/src/ClipLoader'

export default {
  name: "LessonsTable",

  components: {
    ClipLoader
  },
  data: () => ({
    labels_focus: {
      label1: false,
      label2: false,
    },
    lesson__name: "",
    lesson__description: "",
    popupActivo2: false,
    request_click: false,
    button_status: "Register lesson",
    response_status: "",
    rowCounter: 0,
    filter: 10,
    // showModal: false,

    lessons: [],
    action: [
      `<svg  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 26.998 27">
          <path id="Icon_material-update" data-name="Icon material-update" d="M31.5,15.18H21.33l4.11-4.23a10.558,10.558,0,0,0-14.82-.15,10.313,10.313,0,0,0,0,14.685,10.529,10.529,0,0,0,14.82,0A9.77,9.77,0,0,0,28.5,18.15h3a14.011,14.011,0,0,1-3.96,9.435,13.581,13.581,0,0,1-19.08,0,13.26,13.26,0,0,1-.03-18.87,13.481,13.481,0,0,1,18.975,0L31.5,4.5ZM18.75,12v6.375L24,21.495,22.92,23.31,16.5,19.5V12Z" transform="translate(-4.502 -4.5)" fill="#574ae2"/>
          </svg>`,
      `<svg class="delete-bin-line" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 27 27">
            <path id="Path_473" data-name="Path 473" d="M0,0H27V27H0Z" fill="none"/>
            <path id="Path_474" data-name="Path 474" d="M19,6.533h5.667V8.8H22.4V23.533a1.133,1.133,0,0,1-1.133,1.133H5.4a1.133,1.133,0,0,1-1.133-1.133V8.8H2V6.533H7.667v-3.4A1.133,1.133,0,0,1,8.8,2h9.067A1.133,1.133,0,0,1,19,3.133ZM20.133,8.8H6.533V22.4h13.6Zm-10.2,3.4H12.2V19H9.933Zm4.533,0h2.267V19H14.467ZM9.933,4.267V6.533h6.8V4.267Z" transform="translate(0.167 0.167)" fill="#db222a"/>
          </svg>`,
      `
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 27">
            <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(0 -4.5)">
              <path id="Path_475" data-name="Path 475" d="M1.5,18S7.5,6,18,6,34.5,18,34.5,18,28.5,30,18,30,1.5,18,1.5,18Z" fill="none" stroke="#2bde73" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_476" data-name="Path 476" d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z" fill="none" stroke="#2bde73" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
          </svg>
          `,
    ],
    search: "",
  }),
  computed: {
    searchSimilar() {
      let filter = new RegExp(this.search, "i");
      let foundText = this.lessons.filter((el) => el.name.match(filter));
      return foundText;
    },
  },

  beforeMount() {
    this.lessons = [];
    this.getRows();
  },

  methods: {
    async getRows() {
      this.lessons = [];
      this.rowCounter = 0;
      const response = await Services.getLessons(1, this.filter);
      console.log("Response: ", response);
      response.data.data.docs.forEach((lesson) => {
        const lessonObj = {};
        lessonObj._id = lesson._id;
        lessonObj.name = lesson.name;
        lessonObj.description = lesson.description;
        lessonObj.status = lesson.status;
        lessonObj.action = this.action;

        this.lessons.push(lessonObj);
        this.rowCounter++;
      });
      console.log("Lessons: ", this.lessons);
    },
    async insertLesson() {
      this.request_click = true;
      let response = await Services.addLesson({
        name: this.lesson__name,
        description: this.lesson__description,
      });
      // console.log("lesson added: ", response);

      this.response_status = '" ' + response.data.data.name + ' "';
      const newLesson = {};
      newLesson._id = response.data.data._id;
      newLesson.name = response.data.data.name;
      newLesson.description = response.data.data.description;
      newLesson.status = response.data.data.status;
      newLesson.action = this.action;

      this.lessons.push(newLesson);
      (this.lesson__name = ""), (this.lesson__description = "");
      this.response_status += " added successfully";

      this.request_click = false;
      // function to empty the response status after a certain amount of the period
    },
  },
};
</script>
<style src="../shared/styles.css" scoped></style>





















<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">View notes</h3>
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/notes">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add notes
            </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="students" class="w-full">
          <template>
            <!-- filter and search here -->
            <div class="row flex gap-4">
              <select
                class="form-select mt-1 p-2 block rounded border border-#E1E1E1-700 bg-white"
                v-model="filter"
              >
                <option value="">All lessons</option>
                <template v-for="(lesson, index) in lessons">
                  <option :value="lesson._id" :key="index">
                    {{ lesson.name }}
                  </option>
                </template>
              </select>
              <input
                class="form-input p-2 border rounded"
                v-model="search"
                border
                placeholder="Search notes"
              />
            </div>
            <!-- filter and search end here -->
            <!-- row counter here -->
            <div class="flex mt-5">
              <span><b>Total: </b>{{ rowCounter }}</span>
            </div>
            <!-- row counter ends here -->
          </template>
          <template class="bg-white">
            <tr>
              <!-- <th>#</th> -->
              <th>Notes</th>
              <th>Description</th>
              <th>Lesson</th>
              <th>Published at</th>

              <th colspan="3">Action</th>
            </tr>
          </template>

          <template>
            <tr :key="i" v-for="(tr, i) in filterSimilar" :data="tr">
              <!-- <td>{{ i + 1 }}</td> -->
              <td class="flex items-center">
                <img src="../../assets/pdf.png" class="icon" alt="pdf logo" />
                <span class="file"> {{ tr.name }}</span>
              </td>

              <td class="w-1/6">
                {{ tr.description }}
              </td>
              <td class="w-1/6">
                {{ tr.lesson_promo }}
              </td>
              <td class="w-1/6">
                {{ tr.publishedAt }}
              </td>
              <td>
                <span
                  class="text-purple cursor-pointer"
                  @click="popupActivo2 = true"
                >
                  {{ tr.action }}
                </span>
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>

    <!-- view notes info popup here -->

    <div class="centerx">
      <!-- <vs-button @click="popupActivo2 = true" color="primary" type="filled"
        >Open Popup</vs-button
      > -->
      <vs-popup
        classContent="popup-example"
        title="Notes overview"
        button-close-hidden="false"
        :active.sync="popupActivo2"
        class="assignment__popup"
        style="font-family: 'Poppins'"
      >
        <div class="grid w-full">
          <div class="col-12">
            <ul>
              <li>Lesson</li>
              <li class="font-bold">Mathematics</li>
            </ul>
          </div>
          <div class="col-12">
            <ul>
              <li>Description</li>
              <li class="font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing e
              </li>
            </ul>
          </div>

          <div class="col-12">
            <ul>
              <li>Notes file</li>
              <li class="font-bold flex text-purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="svg file"
                  width="18"
                  height="18"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                  />
                </svg>

                mathematics_cat.pdf
              </li>
            </ul>
          </div>
        </div>
      </vs-popup>
    </div>

    <!-- view notes info popup here -->
  </div>
</template>

<script>
import Services from "@/services/AllServices";
export default {
  name: "Notestable",
  data: () => ({
    search: "",
    notes: [],
    popupActivo2: false,
    lessons: [],
    filter: "",
    rowCounter: 0,
    // popupActivo3: false,
  }),
  computed: {
    // searchSimilar() {
    //   let filter = new RegExp(this.search, "i");
    //   let foundText = this.notes.filter((el) => el.name.match(filter));
    //   return foundText;
    // },
    filterSimilar() {
      let foundText;
      if (this.filter != "") {
        foundText = this.notes.filter((el) => el.lesson_id == this.filter);
      } else {
        foundText = this.notes;
      }

      // console.log(this.filter);
      return foundText;
    },
  },

  beforeMount() {
    this.notes = [];
    this.getRows();
  },

  methods: {
    async getRows() {
      const response = await Services.getNotes();
      response.data.data.docs.forEach(async (note) => {
        this.rowCounter++;
        const notesObj = {};
        notesObj.name = note.file_name;
        notesObj.description = note.file_description;
        notesObj.link = note.link;
        notesObj.publishedAt = note.registered_at.split("T");
        notesObj.publishedAt = notesObj.publishedAt[0];

        const lessonId = await Services.getLessonById(
          note.lesson_promotion.lesson
        );
        console.log(note.lesson_promotion);
        notesObj.lesson_id = note.lesson_promotion.lesson;
        notesObj.lesson_promo = note.lesson_promotion;
        notesObj.lesson_promo = lessonId.data.data.name;

        notesObj.action = "view";
        this.notes.push(notesObj);
      });
      // console.log("Notes: ", this.notes);

      const lessons = await Services.getLessons(1, 100);
      console.log("lessons: ", lessons);
      lessons.data.data.docs.forEach((lesson) => {
        const lessonObj = {};
        lessonObj._id = lesson._id;
        lessonObj.name = lesson.name;

        this.lessons.push(lessonObj);
      });
    },
  },
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
ul li {
  padding: 1.5%;
}
tr {
  border-bottom: 1px solid #dfdfdf !important;
}
input:focus,
select:focus {
  border: 1px solid #574ae2;
}
.file {
  fill: #574ae2;
  margin-right: 1%;
}

td .icon {
  width: 10%;
}

td .file:hover {
  cursor: pointer;
  color: #574ae2;
}
</style>






















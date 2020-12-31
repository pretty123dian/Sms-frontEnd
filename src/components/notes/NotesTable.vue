<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
                <h3 class="text-sm font-bold mb-5">View notes</h3>
               <!-- select the year here -->
            <label class="block">
              <select
                class="form-select mt-1 p-2 block rounded-sm focus:outline-none border border-#E1E1E1-700 bg-white"
              >
                <option value="" selected>Select course</option>
                <template v-for="(course, index) in courses">
                  <option :value="course" :key="index">{{ course }}</option>
                </template>
              </select>
            </label>
            <!-- select the year box ends here -->
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link
          to="/register/notes"
          >

          
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add notes
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="students" class="w-full">
          <template class="bg-white">
            <tr>
              <th>#</th>
              <th>Notes</th>
              <th>Description</th>
              <th colspan="3">Action</th>
            </tr>
          </template>

          <template >
            <tr :key="i" v-for="(tr, i) in notes" :data="tr">
              <td>
                {{ tr.id }}
              </td>
              <td>
                {{ tr.notes }}
              </td>
              <td>
                {{ tr.description }}
              </td>
              <td>
                  <span class="text-purple">
                      {{tr.action}}
                  </span>
                   </td>
            </tr>
          </template>
        </table>
      </div>
    </div>

<!-- view notes info popup here -->



<!-- view notes info popup here -->

  </div>
</template>

<script>
export default {
  name: "LessonsTable",
  data: () => ({
    courses:['Mathematics','Java','DSA','SAD'],
    notes: [
      {
        id: 1,
        notes: "mathematics_notes.pdf",
        description:
          "This is the course of mathematics which deals with analysis,...",
        action:"View file"
      },
      {
        id: 2,
        notes: "mathematics_notes.pdf",
        description:
          "This is the course of mathematics which deals with analysis,...",
        action:"View file"
      },
      {
        id: 3,
        notes: "mathematics_notes.pdf",
        description:
          "This is the course of mathematics which deals with analysis,...",
        action:"View file"
      },
      {
        id: 4,
        notes: "mathematics_notes.pdf",
        description:
          "This is the course of mathematics which deals with analysis,...",
        action:"View file"
      },
    ],
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
svg:hover{
  cursor:pointer;
  fill:indigo
}
</style>






















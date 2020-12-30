<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">View assignments</h3>
            <!-- select the year here -->
            <label class="block">
              <select
                class="form-select mt-1 p-2 block rounded-sm focus:outline-none border border-#E1E1E1-700 bg-white"
              >
                <option value="" selected>Select year</option>
                <template v-for="(year, index) in years">
                  <option :value="year" :key="index">{{ year }}</option>
                </template>
              </select>
            </label>
            <!-- select the year box ends here -->
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/student">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add assignment
            </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white">
        <vs-table stripe :data="students" class="p-4">
          <template #thead class="bg-white">
            <vs-tr>
              <vs-th>#</vs-th>
              <vs-th>Lesson</vs-th>
              <vs-th>Semester</vs-th>
              <vs-th>Assignment type</vs-th>
              <vs-th>Maximum marks</vs-th>
              <vs-th>Actions</vs-th>
            </vs-tr>
          </template>

          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in students" :data="tr">
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
                {{ tr.lesson }}
              </vs-td>
              <vs-td>
                {{ tr.semester }}
              </vs-td>
              <vs-td>
                {{ tr.assignmentType }}
              </vs-td>
              <vs-td> {{ tr.maximumMarks }} % </vs-td>
              <vs-td>
                <span class="text-purple cursor-pointer">
                  {{ tr.action }}
                </span>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </div>
    <div class="centerx">
      <vs-button @click="popupActivo2 = true" color="primary" type="filled"
        >Open Popup</vs-button
      >
      <vs-popup
        classContent="popup-example"
        title="Lorem ipsum dolor sit amet"
        :active.sync="popupActivo2"
      >
        <vs-input class="inputx" placeholder="Placeholder" v-model="value1" />
        <vs-input
          disabled
          class="inputx"
          placeholder="Disabled"
          v-model="value2"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <vs-select label="Figuras" v-model="select1">
          <vs-select-item
            :key="index"
            :value="item.value"
            :text="item.text"
            v-for="(item, index) in options1"
          />
        </vs-select>
      </vs-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssignmentsTable",
  data: () => ({
    students: [
      {
        id: 1,
        lesson: "Mathematics",
        semester: "Term 1",
        assignmentType: "Exam",
        maximumMarks: 100,
        action: "View",
      },
      {
        id: 2,
        lesson: "Java",
        semester: "Term 1",
        assignmentType: "Exam",
        maximumMarks: 100,
        action: "View",
      },
      {
        id: 3,
        lesson: "DSA",
        semester: "Term 1",
        assignmentType: "Exam",
        maximumMarks: 100,
        action: "View",
      },
    ],
    years: [2018, 2019, 2020, 2021],
    select1: 3,
    options1: [
      { text: "IT", value: 0 },
      { text: "Blade Runner", value: 2 },
      { text: "Thor Ragnarok", value: 3 },
    ],
    value1: "",
    value2: "",
    popupActivo2: false,
    popupActivo3: false, 
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
.vs-table__thead .vs-table__th {
  background: #fff !important;
}

tr {
  border-bottom: 1px solid #dfdfdf !important;
}
</style>






















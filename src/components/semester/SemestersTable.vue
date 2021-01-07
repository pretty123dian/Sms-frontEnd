<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">View semesters</h3>
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/semester">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add new semester
            </vs-button>
          </router-link>
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
        <table stripe :data="categories" class="w-full">
          <template>
            <input
              class="form-input p-2 border rounded"
              v-model="search"
              border
              placeholder="Search semester"
            />
          </template>
          <template>
            <vs-tr>
              <vs-th sort>Semester</vs-th>
              <vs-th sort-key="description">Academic year</vs-th>
              <vs-th>Status</vs-th>
              <vs-th>Action</vs-th>
            </vs-tr>
          </template>

          <template>
            <vs-tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <vs-td class="w-1/6">
                {{ tr.name }}
              </vs-td>
              <vs-td>
                {{ tr.year }}
              </vs-td>
              <vs-td>
                {{ tr.status }}
              </vs-td>
              <vs-td>
                {{ tr.action }}
              </vs-td>
            </vs-tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Services from "@/services/AllServices";
export default {
  name: "SemestersTable",
  data: () => ({
    search: "",
    status: "",
    semesters: [],
  }),

  computed: {
    searchSimilar() {
      let filter = new RegExp(this.search, "i");
      let foundText = this.semesters.filter((el) => el.status.match(filter));
      return foundText;
    },
  },

  beforeMount() {
    this.semesters = [];
    this.getRows();
  },
  methods: {
    async getRows() {
      const response = await Services.getSemesters(1, 10);
      response.data.data.docs.forEach((semester) => {
        const semesterObj = {};
        semesterObj.name = semester.semester;
        semesterObj.year = semester.academic_year;
        semesterObj.status = semester.status;
        semesterObj.action = "ok";
        this.semesters.push(semesterObj);
      });
      console.log("Semester:", this.semesters);
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

.table__tr:hover {
  /* background-color: #E9E8FF;
  border: 1px solid black; */
}
input:focus {
  border: 1px solid #574ae2;
}
tr {
  border-bottom: 1px solid #dfdfdf !important;
}
</style>






















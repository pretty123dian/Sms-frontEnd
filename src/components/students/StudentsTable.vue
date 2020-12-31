<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
                <h3 class="text-sm font-bold mb-5">View students</h3>
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
          <router-link to="/register/student">
          <vs-button color="#574AE2" class="rounded-full add-stud-btn">
            Add student
          </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="students" class="w-full">
          <template class="bg-white">
            <tr>
              <th>#</th>
              <th>Names</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Discipline</th>
              <th>CTP</th>
              <th>LTP</th>
            </tr>
          </template>

          <template >
            <tr :key="i" v-for="(tr, i) in students" :data="tr">
              <td>
                {{ tr.id }}
              </td>
              <td>
                {{ tr.names }}
              </td>
              <td>
                {{ tr.gender }}
              </td>
              <td>
                {{ tr.age }}
              </td>
              <td>
                {{ tr.discipline }}
              </td>
              <td>
                {{ tr.ltp }}
              </td>
              <td>
                {{ tr.ctp }}
              </td>
            </tr>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentsTable",
  data: () => ({
    students: [
      {
        id: 1,
        names: "Gersh lento",
        gender: "Male",
        age: 12,
        discipline: "35",
        ltp: "",
        ctp: "",
      },
      {
        id: 2,
        names: "Lento lento",
        gender: "Male",
        age: 12,
        discipline: "35",
        ltp: "",
        ctp: "",
      },
      {
        id: 3,
        names: "Gervais Ishimwe",
        gender: "Male",
        age: 12,
        discipline: "35",
        ltp: "",
        ctp: "",
      },
      {
        id: 4,
        names: "Jolie Mirembe",
        gender: "Male",
        age: 12,
        discipline: "35",
        ltp: "",
        ctp: "",
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
</style>






















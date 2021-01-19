<template>
  <div>
    <div class="lg:ml-4 sm:ml-4">
      <div class="grid grid-cols-2 gap-4 pt-4 mb-4">
        <div class="col-start-1 col-end-4">
          <div class="block mt-3">
            <h3 class="text-sm font-bold mb-5">View timetables</h3>
          </div>
        </div>
        <div class="col-start-4 col-end-10">
          <router-link to="/register/timetable">
            <vs-button color="#574AE2" class="rounded-full add-stud-btn">
              Add new timetable
            </vs-button>
          </router-link>
        </div>
      </div>
      <div class="center bg-white p-5">
        <table stripe :data="timetables" class="w-full">
          <template>
            <input
              class="form-input p-2 border rounded"
              v-model="search"
              border
              placeholder="Search timetable"
            />
          </template>
          <template>
            <vs-tr>
              <vs-th sort>Title</vs-th>
              <vs-th>File</vs-th>
              <vs-th>Promotion</vs-th>
              <vs-th>Status</vs-th>
              <vs-th>Action</vs-th>
            </vs-tr>
          </template>

          <template>
            <vs-tr :key="i" v-for="(tr, i) in searchSimilar" :data="tr">
              <vs-td>
                {{ tr.title }}
              </vs-td>
              <vs-td>
                {{ tr.filename }}
              </vs-td>
              <vs-td>
                {{ tr.promotion }}
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
  name: "Timetable",
  data: () => ({
    search: "",
    status: "",
    timetables: [],
  }),

  computed: {
    searchSimilar() {
      let filter = new RegExp(this.search, "i");
      let foundText = this.timetables.filter((el) => el.title.match(filter));
      return foundText;
    },
  },
  beforeMount() {
    this.timetables=[]
    this.getRows();
  },
  methods: {
    // fetch all timetables

    async getRows() {
      const response = await Services.getTimeTable();
      // if(responses.status===200){
      response.data.data.docs.forEach(async(timetable) => {
        const timetableStore = {};
        const schoolPromotion = await Services.getPromotion(timetable.promotion);
        timetableStore.title = timetable.title;
        if(schoolPromotion.data.data.name){
          timetableStore.promotion =schoolPromotion.data.data.name;
        }
       else
          timetableStore.promotion = 'No promotion'
       
        timetableStore.filename = timetable.file_name;
        timetableStore.status = timetable.status;
        timetableStore.action = "ok";
        this.timetables.push(timetableStore);
      });
    
      console.log("timetable:", this.timetables);
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





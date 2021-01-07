<template>
  <div class="grid grid-cols-12 gap-2 dashboard">
    <Sidebar />
    <!-- <search-bar/> -->
    <!-- <statistical-visual/> -->
    <!-- <router-view/> -->

    <template v-if="this.$route.name != 'Dashboard'">
      <main-body class="col-end-13" />
      <!-- <profile-header class="top-0 sticky col-start-10 col-end-12"/> -->
    </template>
    <template v-else>
      <main-body />
      <right-sidebar />
    </template>
  </div>
</template>

<script>
import Sidebar from "../components/shared/Sidebar";
import RightSidebar from "../components/shared/RightSidebar";
import MainBody from "../components/shared/MainBody.vue";
import { decode } from "@/services/TokenDecoder";
import Services from "@/services/AllServices";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    // ProfileHeader,
    RightSidebar,
    MainBody,
  },
  beforeCreate: function () {},
  beforeMount() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    } else {
      //  console.log('Code',this.$session.get('jwt'));
      this.setUser(decode(this.$session.get("jwt")));
    }
    this.authorise();
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      userAll: (state) => state.userAll,
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  methods: {
    ...mapMutations(["setUser", "setUserAllData"]),
    authorise() {
      if (this.$store.state.isLoggedIn) {
        // this.$router.go(-1)
      }
    },
  },
  async mounted() {
    // console.log("USER >>>", this.user);
    const response = await Services.getUserData(this.user.id);
    this.setUserAllData(response.data.data);
    console.log("USER>>>: ", this.userAll);
  },
};
</script>

<style>
.dashboard {
  background-color: #fafaff !important;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}
.text-purple {
  color: #574ae2;
}
/* input[type=text]:focus,input[type=email]:focus, input[type=date]:focus, input[type=number]:focus, select:focus{
  border: 2px solid #574ae2;
  border-radius: 4px !important;
} */
tr td,
tr th {
  padding: 1% 1%;
}
</style>
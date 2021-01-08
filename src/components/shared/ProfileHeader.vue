<template>
  <div
    :class="[
      this.$route.name == 'Dashboard'
        ? 'grid grid-cols-2 gap-2 mt-3'
        : 'grid grid-cols-2 gap-2',
    ]"
  >
    <div class="md:col-start-8 md:col-end-10">
      <div class="relative w-10 h-10 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          class="bell-notify"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"
          />
        </svg>
        <div
          class="absolute top-0 right-0 h-3 w-3 mr-4 border-2 border-white rounded-full bg-red-400 z-2"
        ></div>
      </div>
    </div>

    <div class="col-start-10 col-end-13 grid grid-cols-2 gap-2 md:pr-10">
      <div class="col-start-1 col-end-3 flex">
        <div class="col-start-1 col-end-3 px-2 cursor-pointer">
          <img
            class="rounded-full border border-gray-100 shadow-sm w-10 h-10"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user image"
            @click="setDropdown"
          />
        </div>
        <div class="col-start-3 col-end-13 cursor-pointer" @click="setDropdown">
          <b>{{ userAll.surname }}{{ " " }}{{ userAll.othernames }}</b> <br />
          <span class="text-xs">Admin</span>
        </div>
      </div>
      <div
        v-if="addDropdown === true"
        class="card bg-white p-2 lg:w-1/6 md:w-full rounded user__preview_more shadow"
      >
        <ul class="lg:px-1 lg:py-2">
          <li>
            <router-link to="/profile-settings">Profile settings</router-link>
          </li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProfileHeader",
  data: () => ({
    addDropdown: false,
    drop_icon: "+",
  }),
  computed: {
    ...mapState({
      user: (state) => state.user,
      userAll: (state) => state.userAll,
    }),
  },
  methods: {
    setDropdown() {
      if (this.drop_icon != "-") {
        this.drop_icon = "-";
      } else this.drop_icon = "+";

      return (this.addDropdown = !this.addDropdown);
    },
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.user__preview_more {
  position: absolute;
  margin-top: 3%;
  align-items: center;
  z-index: 500;
  width: 12%;
}
ul li {
  padding: 3%;
  font-size: 13px;
}
ul li:hover {
  color: #574ae2;
  cursor: pointer;
}
.bell-notify {
  fill: #000;
}
.bell-notify:hover {
  fill: #574ae2;
  cursor: pointer;
}
</style>
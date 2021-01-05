<template>
  <div class="holder h-screen w-full">
    <div class="popup rounded-lg ml-64 mt-12 bg-white">
      <button @click="changeVal()" class="close mt-4 font-bold">x</button>

      <br />
      <div class="ml-12 mt-2">
        <h1 class="text-xl">New Lesson</h1>
      </div>

      <div class="inner ml-12 mt-1">
        <br />
        <form action="">
          <div class="first mb-10">
            <p class="mb-2">Lesson Name</p>

            <input
              type="text px-1 py-1"
              placeholder="Cyber Security Basics"
              class="outline-none w-5/6 h-10 rounded"
              v-model="lesson"
            />
          </div>

          <div class="sec">
            <p class="mb-2">Lesson Descriptions</p>

            <textarea
              class="w-5/6 h-32 resize-none outline-none rounded px-1 py-1 leading-loose"
              placeholder="Cyber Security is the practice of defending computers, severs,mobile devices,electronic systems ,networks and data from malicious attacks"
              v-model="description"
            ></textarea>
          </div>

          <div class="mt-4 ml-0">
            <vs-button
              color="#574AE2"
              class="add rounded-full w-5/6"
              @click="addLesson(), changeVal()"
            >
              Add Lesson
            </vs-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddLesson",
  methods: {
    changeVal: function () {
      this.$emit("close");
      console.log("Hello");
    },
    addLesson: function () {
      var mylesson = this.lesson;
      var describe = this.description;
      this.$emit("newLesson", mylesson, describe);
    },
  },
  data() {
    return {
      lesson: "",
      description: "",
    };
  },
};
</script>

<style src="../../assets/styles/addLesson.css" scoped>
@import "compass/css3";
</style>

<template>
  <div>
    <FadeTransition :extended="!onExtend">
      <TheProjectsComponent v-show="!onExtend" />
    </FadeTransition>
    <TheHeader @clicked="onExtending" />
  </div>
</template>

<script>
import FadeTransition from "./components/transitions/FadeTransition.vue";
import TheHeader from "./components/TheHeader.vue";
import TheProjectsComponent from "./components/TheProjectsComponent.vue";

export default {
  components: {
    FadeTransition,
    TheHeader,
    TheProjectsComponent
  },
  data() {
    return {
      onExtend: false
    };
  },

  methods: {
    onExtending(value) {
      this.onExtend = value;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: "Roboto", sans-serif;
  list-style-type: none;
  font-weight: 300;
}

body {
  background-color: rgb(245, 245, 245);
  height: 100%;
  overflow-x: hidden;
}
</style>

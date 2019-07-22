<template>
  <div>
    <FadeTransition  :extended="!onExtend">
      <TheProjectsComponent v-show="!onExtend" />
    </FadeTransition>
    <AboutMeComponent @clicked="onExtending" />
  </div>
</template>

<script>
import FadeTransition from "./components/transitions/FadeTransition.vue"
import AboutMeComponent from "./components/AboutMeComponent.vue";
import TheProjectsComponent from "./components/TheProjectsComponent.vue";

export default {
  components: {
    FadeTransition,
    AboutMeComponent,
    TheProjectsComponent
  },
  data() {
    return {
      onExtend: false
    }
  },
  
  methods: {
    onExtending(value) {
      this.onExtend = value;
    }
  }
};
</script>

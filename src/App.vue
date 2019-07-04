<template>
  <div>
    <AboutMeComponent />
    <TheProjectsComponent />
  </div>
</template>

<script>
import AboutMeComponent from "./components/AboutMeComponent.vue";
import TheProjectsComponent from "./components/TheProjectsComponent.vue";

export default {
  components: {
    AboutMeComponent,
    TheProjectsComponent
  }
};
</script>

<template>
  <div class="container">
    <AppIconLoading :loading="loading" />
    <AppCard
      v-for="(project, index) in projects"
      :key="index"
      :url="project.homepage"
      :name="project.name"
      :description="project.description"
      card-size="medium"
    >
    </AppCard>
  </div>
</template>

<script>
import AppCard from "../ui/AppCard.vue";
import AppIconLoading from "../ui/IconLoading.vue";

export default {
  components: {
    AppCard,
    AppIconLoading,
  },
  props: {
    projects: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    loading: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 4rem;
  text-align: center;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
}
</style>

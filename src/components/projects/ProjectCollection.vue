<template>
  <div class="projects">
    <h2 class="">Projects</h2>
    <div class="project__cards">
      <AppIconLoading :loading="loading" />
      
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import AppIconLoading from "../ui/IconLoading.vue";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    AppIconLoading,
    ProjectCard,
  },
  props: {
    projects: {
      required: true,
      type: Object,
    },
    loading: {
      required: false,
      type: Boolean,
    }
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

.projects {
  width: 75vw;
  height: auto;
  margin: 4rem;
  margin: 0 auto;
}

.projects h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  @include font-size(4rem);
  font-weight: 900;
  line-height: 1;
  margin: 0 0 10px 0;
  color: #eff2ed;
}

.project__cards {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 1;
  gap: 4rem;
  margin: 4rem 0 10rem 0; 
}

@media (max-width: 668px) {
  .projects {
    width: 95vw;
    margin: 5rem 1rem 5rem 1rem;
  }
}

</style>

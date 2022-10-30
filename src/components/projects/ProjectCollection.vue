<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="project__cards">
      <AppIconLoading :loading="loading" />
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
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

section {
  width: 75vw;
  margin: 0 auto;

  h2 {
    @include font-size(4rem);
    line-height: 1;
    color: $title-color;
  }
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
  section {
    width: 95vw;
    margin: 5rem 1rem 5rem 1rem;
  }
}

</style>

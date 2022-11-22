<template>
  <section id="projects" class="container">
    <div class="project__cards card">
    <h2>Projects</h2>
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
  width: auto;

  h2 {
    @include font-size(4rem);
    line-height: 1;
    flex-basis:100%;
  }
}

.project__cards {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  gap: 4rem;
  margin: 2rem 0 0 0;
  padding: 2rem;
}

@media (min-width: 1168px) {
  .project__cards {
    justify-content: flex-start;

    h2 {
      text-align:left;
    }
  }
}

</style>

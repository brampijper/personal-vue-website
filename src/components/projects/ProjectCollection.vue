<template>
  <section id="projects">
    <div class="project__cards">
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
  margin: 5rem 1rem 0 1rem;

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
  margin: 4rem 0 0 0; 
}

@media (min-width: 1168px) {
  section {
    margin: 10rem;
  }

  .project__cards {
    justify-content: flex-start;

    h2 {
      text-align:left;
    }
  }
}

</style>

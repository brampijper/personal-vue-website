<template>
  <div class="projects">
    <!-- <AppIconLoading :isLoading="state.isLoading" size="big" /> -->  
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id"
        :project="project"
        :isLoading="false"
      />
  </div>
</template>

<script>
// import AppIconLoading from "../ui/IconLoading.vue";
import ProjectCard from "./ProjectCard.vue";
import fetchAndCacheData from '../../hooks/useFetchAndCacheData';

export default {
  components: {
    // AppIconLoading,
    ProjectCard,
  },
  async setup() {    
    const data = await fetchAndCacheData('/api/repos', '?username=brampijper') // returns an array of objects
    const projects = await data.reverse() // reverse the array -> latest projects first.

    return {
      projects
    }
  }
};
</script>

<style scoped lang="scss">

.projects {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  gap: 4rem;
  margin: 2rem 0 0 0;
  padding: 1rem;
  width: auto;
}

@media (min-width: 1350px) {
  .projects {
    justify-content: flex-start;
    padding: 2rem;
  }
}

</style>

<template>
  <div class="projects">
    <AppIconLoading :isLoading="state.isLoading" size="big" />
    <ProjectCard 
      v-for="project in state.projects" 
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import AppIconLoading from "../ui/IconLoading.vue";
import ProjectCard from "./ProjectCard.vue";
import fetchAndCacheData from '../../hooks/useFetchAndCacheData';

export default {
  components: {
    AppIconLoading,
    ProjectCard,
  },
  setup() {
    const state = ref({ projects: [], isLoading: true });

    onMounted(async () => {
      try {
        const data = await fetchAndCacheData('/api/repos', '?username=brampijper') // returns an array of objects
        const reversedArr = data.reverse() // reverse the array -> latest projects first.

        state.value = {
          projects: reversedArr,
          isLoading: false
        }

      } catch (error) {
        console.log('Fetched data does not exist: ', error);
      }
    });

    return {
      state
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

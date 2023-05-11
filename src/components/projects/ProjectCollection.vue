<template>    
  <ProjectCard :projects="projects">
    
    <template #link="{ homepage }">
      <a class="card__link" :href="homepage" target="_blank" />
    </template>

    <template #image="{ image_url }">
      <img class="card__image" :src="image_url" alt="/" />
    </template>

    <template #name="{ name, created_at }">
      <h3 class="card__title">
        {{ `${name} ${created_at}` }} <!-- year -->
      </h3>
    </template>

    <template #description="{ description }">
      <p class="card__content-description"> 
        {{ description }}
      </p>
    </template>

    <template #topics="{ topics }">
      <ProjectCardList :topics="topics" />
    </template>

    <template #button>
      <PrimaryButton 
        class="content__button" 
        button-size="tiny" 
      >
        view Website
      </PrimaryButton>
    </template>

  </ProjectCard>
</template>

<script async setup>
  import { ref, onMounted } from 'vue';
  import { store } from '../../store.js';
  import fetchAndCacheData from '../../hooks/useFetchAndCacheData';
  
  import ProjectCardList from "./ProjectCardList.vue";
  import ProjectCard from "./ProjectCard.vue";
  import PrimaryButton from "../ui/AppButton.vue";

  const projects = ref([]);

  try {
    const data = await fetchAndCacheData('/api/repos', 'username=brampijper') // returns an array of objects
    const modifiedProjects = data
      .reverse() // Display most recent projects first.
      .map( project => { 
        const image_url = `${process.env.SERVER_BASE_URL}/${project.image_url}` // add correct path to the image, that's stored on the server.
        const created_at = project.created_at.slice(0,4) // remove the time notation
        return { ...project, image_url, created_at }
      });
      
      projects.value = modifiedProjects
  } catch(err) {
    console.log('Error while fetching from server: ', err);
  }

</script>

<style scoped lang="scss">

</style>

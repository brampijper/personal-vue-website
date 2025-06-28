<template>    
  <ProjectCard :projects="projects">

    <template #button="{ clickable }">
      <span v-if="clickable" class="card__header-button"> 
        <!-- View live website -->
        <external-link-icon position="static" />
      </span>
      <span v-else class="card__header-button"> You're on this website &#128064; </span>
    </template>
    
    <template #link="{ homepage, name, clickable }">
      <a 
        v-if="clickable"
        class="card__link" 
        :href="homepage" 
        target="_blank"
        :title="'Visit ' + name"
      />
      <div v-else 
        class="card__link">
      </div>
    </template>

    <template #image="{ image_url }">
      <img class="card__image" :src="image_url" alt="/" />
    </template>

    <template #name="{ name, pushed_at }">
      <h3 class="card__title">
        {{ `${name} ${pushed_at}` }} <!-- year -->
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

  </ProjectCard>
</template>

<script async setup>
  import { ref } from 'vue';
  import fetchAndCacheData from '../../utils/useFetchAndCacheData';
  
  import ProjectCardList from "./ProjectCardList.vue";
  import ProjectCard from "./ProjectCard.vue";
  import ExternalLinkIcon from '../ui/ExternalLinkIcon.vue'

  const projects = ref([]);

  try {
    const data = await fetchAndCacheData('/api/repos', 'username=brampijper') // returns an array of objects
    const modifiedProjects = data
      .map( (project) => { 
        const image_url = `${process.env.SERVER_BASE_URL}/${project.image_name}` // add correct path to the image, that's stored on the server.
        const pushed_at = project.pushed_at.slice(0,4) // remove the time notation
        const clickable = project.homepage !== 'https://www.brampijper.com'
        return { ...project, image_url, pushed_at, clickable }
      });
      
      projects.value = modifiedProjects
  } catch(err) {
    console.log('Error while fetching from server: ', err);
  }

</script>

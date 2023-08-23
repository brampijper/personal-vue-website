<template>
  <a 
    class="card" 
    href="https://github.com/brampijper" 
    target="_blank"
    title="See my Github profile"
  >
    <ExternalLinkIcon />
    <h4>
        Github Contributions: {{ state }}
    </h4>
  </a> 
</template>

<script async setup>
  import { ref, onMounted } from 'vue';
  import fetchAndCacheData from "../../../utils/useFetchAndCacheData";
  import ExternalLinkIcon from "../ExternalLinkIcon.vue";
  
  const state = ref('')
  
  try {
    const totalContributions = await fetchAndCacheData("/api/stats", "username=brampijper") // returns a string
    state.value = totalContributions;
  } catch (err) {
    console.log('Error while fetching data: ', err)
  }
  

</script>

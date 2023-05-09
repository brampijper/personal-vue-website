<template>
  <a class="card" href="https://github.com/brampijper" target="_blank">
    <h4>
        Github Contributions: {{ state }}
    </h4>
  </a> 
</template>

<script async setup>
  import { ref, onMounted } from 'vue';
  import AppIconLoading from "./IconLoading.vue";
  import fetchAndCacheData from "../../hooks/useFetchAndCacheData";
  
  const state = ref('')
  
  try {
    const totalContributions = await fetchAndCacheData("/api/stats", "?username=brampijper") // returns a string
    state.value = totalContributions;
    
  } catch (err) {
    console.log('Error while fetching data: ', err)
  }
  

</script>

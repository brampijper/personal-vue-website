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

<style scoped>

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  padding: 1.5rem 2rem;
}

.card:hover {
  background-color: var(--card-hover-bg);
  color: var(--link-color);
}

.card h4 {
  font-family: var(--heading-font-family);
  font-weight: var(--heading-weight);
  color: var(--heading-color);
  margin: 0;
}

</style>

<template>
  <a 
    class="card" 
    href="https://github.com/brampijper" 
    target="_blank"
    title="See my Github profile"
  >
    <ExternalLinkIcon />
    <h3>
        Yearly Github contributions:
    </h3>
    <span>{{ state }}</span>
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

.card h3 {
  font-family: var(--heading-font-family);
  color: var(--heading-color);
  margin: 0 0 1.5rem 0;
  font-size: clamp(1rem, 2.5vw, 1.15rem);
}

.card span {
  font-size: clamp(5rem, 2.5vw, 7rem);
  width: 100%;
  text-align:center;
  font-weight:bolder;
}

@media (max-width: 990px) {
  .card h3 {
    margin: 0;
  }
}



</style>

<template>
  <ul class="small__cards">
    <Suspense>
      <BlogCard />
      <template #fallback> 
        <div class="card">
          <span class="skeleton skeleton__text"></span>
        </div>
      </template>
    </Suspense>

    <Suspense>
      <GithubCard />
      <template #fallback> 
        <div class="card">
          <span class="skeleton skeleton__text"></span> <!-- uses skeleton classes (which are non scoped) -->
        </div>      
      </template>
    </Suspense>

    <!-- <LinkedInCard /> -->
  </ul>
</template>

<script setup>
  import { store } from "../../store.js"
  import BlogCard from "./cards/BlogCard.vue"
  import GithubCard from "./cards/GithubCard.vue"
  // import ContactCard from "./cards/ContactCard.vue"
  import LinkedInCard from "./cards/LinkedInCard.vue"
</script>

<style>

.small__cards {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;
  list-style: none;
  height: 100%;
  padding:0;
  margin:0;
}

.small__cards .card {
  padding: 1rem;
  align-items:flex-start;
  flex-basis: 45%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.8rem;
  cursor: pointer;
  font-weight: 700;
  font-family: var(--heading-font-family);
  min-height: 150px;
  position: relative;
  background-color: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
  margin:0;
}

.small__cards .card:hover,
.small__cards a:hover {
  background-color: var(--hover-bg);
  /* color: var(--link-color); */
}

@media (min-width: 660px) {
  .small__cards {
    justify-content: space-between;
    flex-direction: row; 
  }
}

@media (min-width: 990px) {
  .small__cards {
    flex-flow: column;
  }
  .small__cards .card {
    min-width: 250px;
  }
}

</style>

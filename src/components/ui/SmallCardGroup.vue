<template>
  <ul class="small__cards" :class="{'dark': store.isDarkMode}">
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

    <LinkedInCard />
  </ul>
</template>

<script setup>
  import { store } from "../../store.js"
  import BlogCard from "./cards/BlogCard.vue"
  import GithubCard from "./cards/GithubCard.vue"
  // import ContactCard from "./cards/ContactCard.vue"
  import LinkedInCard from "./cards/LinkedInCard.vue"
</script>

<style lang="scss">

.small__cards {
  display: flex;
  flex-direction:column;
  gap: 2.3rem;
  box-sizing: border-box;
  list-style: none;
  height: 100%;

  .card {
    padding: 2rem;
    align-items:center;
    flex-basis: 29%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    cursor: pointer;
    font-weight: 700;
    font-family: $title-font-family;
    min-height: 100px;
    position:relative;
  }
    
  a:hover {
    background-color:rgb(220, 220, 220);
  }
}

.small__cards.dark {
  a:hover {
    background-color:rgb(243, 243, 243);
    color:rgb(56, 56, 56);
  }

  a:hover > svg { // it's scoped so it will not work.
    color:rgb(56, 56, 56);
  }
}

@media (min-width: 660px) {
  .small__cards {
    gap: unset;
    justify-content: space-between;
    flex-flow:wrap;
  }
}

@media (min-width: 990px) {
  .small__cards {
    flex-flow:column;
    
    .card {
      min-width: 250px;
    }
  }
}
  
</style>

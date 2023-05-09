<template>
  <ul class="small__cards">
    <Suspense>
      <SmallCardBlog />
      <template #fallback> 
        <div class="card">
          <span class="skeleton skeleton__text"></span>
        </div>
      </template>
    </Suspense>

    <Suspense>
      <SmallCardContributions />
      <template #fallback> 
        <div class="card">
          <span class="skeleton skeleton__text"></span> <!-- uses skeleton classes (which are non scoped) -->
        </div>      
      </template>
    </Suspense>

    <SmallCardContact />
  </ul>
</template>

<script setup>
  import SmallCardBlog from "../ui/SmallCardBlog.vue"
  import SmallCardContributions from "../ui/SmallCardContributions.vue"
  import SmallCardContact from "../ui/SmallCardContact.vue"
</script>

<style lang="scss" scoped>

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
  }
    
  a:hover {
    background-color:white;
    color:black;
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

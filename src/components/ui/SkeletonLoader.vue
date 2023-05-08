<template>
  <ProjectCard skeleton='skeleton-loader'> <!-- Gives a custom class, to set the card width and height.  -->

    <template #link>
      <div class="card__link skeleton__link">
      </div>
    </template>

    <template #image>
      <div class="card__image skeleton skeleton__image" /> <!-- add skeleton class to give an animated loading effect   -->
    </template>

    <template #name>
      <div class="card__title skeleton skeleton__header">
      </div>
    </template>

    <template #description>
      <div class="card__content-description skeleton skeleton__text"> 
      </div>
    </template>

    <template #topics>
      <div class="card__content-description skeleton skeleton__text"> 
      </div>
    </template>

    <template #button>
      <div class="skeleton skeleton__button">
      </div>
    </template>

  </ProjectCard>
</template>

<script setup>
import ProjectCard from "../projects/ProjectCard.vue";
import ProjectCardList from "../projects/ProjectCardList.vue";
</script>

<style scoped lang="scss">

.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
    display: inherit;

    &__link {
      width: 360px;
    }

    &__image {
      height: 180px;
      width: 360px;
    }

    &__header {
      width: 75%;
      height: 0.5rem;
    }

    &__text {
      width: 100%;
      height: 0.7rem;
      margin-bottom: 0.5rem;
      border-radius: 0.25rem;
    }

    &__button {
      border-radius: 5px;
      width: 130px;
      height: 43px;
    }
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 5%, 50%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

</style>

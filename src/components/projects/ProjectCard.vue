<template>
  <div class="projects" id="projects">
    <div 
      v-for="project in projects"
      :key="project.id"
      :class="`project__card ${skeleton}`"
    >

      <div class="card" :class="{'card--dark': store.isDarkMode}">
        
        <slot name="link" v-bind="project" />

        <div class="card__image-container">
          <slot name="image" v-bind="project" />
        </div>

        <div class="card__header">
          <slot name="name" v-bind="project" />
          <external-link-icon />
        </div>

        <div class="card__content">
          <article>
            <slot name="description" v-bind="project" />
          </article>

          <slot name="topics" v-bind="project" />

          <slot name="button" />

        </div>

      </div>
    </div>
  </div>
  
</template>
    

<script setup>
  import { store } from '../../store.js';
  import ExternalLinkIcon from '../ui/ExternalLinkIcon.vue';
    
  const props = defineProps({
    projects: {
      type: Array,
      default(rawPprops) { // default props for loading 6 skeleton cards.
        return [ { id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6} ]
      }
    },
    skeleton: { // not required, sets custom css to set width and height of cards.
      type: String,
      default: ""
    }
  })
</script>

<style lang="scss">
@import "~rfs/scss";

.projects {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  gap: 4rem;
  margin: 2rem 0 0 0;
  padding: 1rem;
  width: auto;
}

.project__card { // width is required, Oterwise card will fallback to 300px (min-width of .card styling)
 &.skeleton-loader {
  width: 360px;
  }
}

.project__card {

  .card {
    position: relative;
    color: $card-text;
    background-color: $card-bg;
    border-radius: 15px;
    letter-spacing: 1.5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1.7rem;
    min-width: 300px;
    max-width: 360px;
    overflow:hidden;
    height: 100%;
  
    &__link {
      position:absolute;
      width: 100%;
      height: 100%;
      z-index:3;
    }
  
    &__image-container {
      position: relative;
      overflow: hidden;
      max-width: 100%;
      width: auto;
      max-height:200px;
      padding-top: 50%; /* set the aspect ratio of the image container */
      margin-top: 45px;
  
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 180px;
        background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 109%);
        z-index: 1;
      }
    }
  
    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180px;
      object-fit: cover; /* preserve the aspect ratio of the image */
      object-position: top;
      z-index: 0;
    }
  
    &__header {
      position:absolute;
      left:0;
      top:0;
      width: 100%;
      height: 45px;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-between;
      padding-left: 2rem;
      padding-right: 1rem;
    }  
  
    &__title {
      font-family: $title-font-family;
      margin-bottom: .6rem;
      font-weight:700;
      font-size: .9rem;
      margin: 0;
    }
  
    &__content {
      padding: 0rem 2rem 2rem 2rem;
      text-align:left;
      display: flex;
      flex-direction:column;
      row-gap: 1.2rem;
      height: 100%;
      justify-content: space-between;
    }
  
    &__content-description {
      line-height: 1.4rem;
    }
  
    &:hover {
      cursor: pointer;
      background-color: rgb(255, 255, 255);
  
      .card__image-container::before {
        background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255, 0) 0%);
      }
    }
  
    &.card--dark {
      background-color: $card-bg-dark;
      color: $card-text-dark;

      .card__image-container::before {
          background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(30, 30, 30, 100) 109%);
      }
  
      &:hover {
        background-color: rgb(11, 15, 15);
  
        .card__image-container::before {
          background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(30, 30, 30, 0) 0%);
        }
      }
    }
  }

}

@media (max-width: 668px) {
  .project__card {
    .card {
      max-width: 91vw;
  
      &__header {
        &__title {
          font-size: .9rem;
        }
      }
    }
  }
}

@media (min-width: 1350px) {
  .projects {
    justify-content: flex-start;
    padding: 2rem;
  }
}

</style>

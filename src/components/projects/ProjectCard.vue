<template>
    <a 
      class="card" 
      :class="{'card--dark': store.isDarkMode}"
      :href="project.homepage" 
      target="_blank" 
      :style="cardStyle"
    >
      <div class="card__image-container">
        <img class="card__image" :src="imageURL" alt="" />
      </div>
      <div class="card__header">
        <div>
          <h3 class="card__title">{{ `${project.name} ${year}` }}</h3>
        </div>
        <a target="_blank" href="#">
          <font-awesome-icon size="1x" :icon="['fa-solid', 'fa-expand-alt']" />
        </a>
      </div>
        <div class="card__content">
          <article>
            <p class="card__content-description"> {{ project.description }}</p>
          </article>
          <ProjectCardList 
            :technologies="project.topics"
            :borderStyle="borderStyle" 
          />
          <PrimaryButton 
              class="content__button" 
              button-size="tiny" 
              :style="bgColorStyle" 
          >
              Visit Website
          </PrimaryButton>
        </div>
    </a>
</template>

<script>
import PrimaryButton from "../ui/AppButton.vue";
import ProjectCardList from "./ProjectCardList.vue";
import { store } from '../../store.js';

export default {
  components: {
    PrimaryButton,
    ProjectCardList
  },
  props: {
    project: {
      required: true,
      type: Object,
    }
  },
  setup({project}) {
    const { color } = project;
    const borderStyle = { borderColor: color}
    const bgColorStyle = { backgroundColor: color, borderColor: color }
    const cardStyle = { 
      boxShadow: `0 4px 12px ${color}, -4px 8px 20px ${color}`,
      borderColor: color
    }

    const year = project.created_at.slice(0,4)
    const imageURL = `${process.env.SERVER_BASE_URL}/${project.image_url}`

    return {
      borderStyle,
      bgColorStyle,
      cardStyle,
      store,
      year,
      imageURL
    }
  }
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

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
      height: 100%;
      background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 109%);
      z-index: 1;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

    &__header {
      > a {
        transform: scale(1.2);
      }
    }

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

@media (max-width: 668px) {
  .card {
    max-width: 91vw;

    &__header {
      &__title {
        font-size: .9rem;
      }
    }
  }
}

</style>

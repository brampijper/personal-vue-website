<template>
    <a 
      class="card" 
      :class="store.isDarkMode ? 'dark' : '' "
      :href="project.homepage" 
      target="_blank" 
      :style="cardStyle"
    >
    <span class="card__overlay" :style="bgColorStyle"> </span>
      <img :alt="project.image.alt" :src="require(`../../images/${project.image.name}`)" />
        <div class="card__content">
          <article>
            <h3>{{ `${project.name} ${project.date}` }}</h3>
            <p> {{ project.description }}</p>
          </article>
          <ProjectCardList 
            :technologies="project.technologies"
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
      boxShadow: `0 1px 3px ${color}, -1px 2px 5px ${color}`,
      borderColor: color
    }
    return {
      borderStyle,
      bgColorStyle,
      cardStyle,
      store
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
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.7rem;
  min-width: 300px;
  max-width: 450px;

  img {
    border-radius: 8px 8px 0px 0px;
    max-width: 100%;
    width: auto;
    max-height: 250px;
    filter: blur(8px);
    transition: .25s;
  }
}

.card.dark {
  background-color: $card-bg-dark;
  color: $card-text-dark;

  .content__button {
    color:black;
  }
}

.card__content {
  padding: 0 2rem .5rem 2rem;
  text-align:left;
  display: flex;
  flex-direction:column;
  row-gap: 1.8rem;

  h3 {
    margin-bottom: .6rem;
  }

  article {
    line-height: 1.4rem;
  }
}

.content__button {
  margin-bottom:1.5rem;
}

.card__overlay {
  width: 100%;
  display: block;
  height: 0px;
  transition: all 1.1s;
  position: absolute;
  border-radius: 15px;
  z-index: 2;
  opacity: .75;
  top: 3px;
}

.card:hover {
    cursor: pointer;
  > img {
    transition: .25s;
    filter: blur(0px);
  }

  > .card__overlay {
    height: 100%;
    width: 100%; 
    opacity: 0.05;
  }
}

@media (max-width: 668px) {
  .card {
    max-width: 91vw;

    img {
      filter: none;
    }
  }
}

</style>

<template>
    <a 
      class="card" 
      :class="store.isDarkMode ? 'dark' : '' "
      :href="project.homepage" 
      target="_blank" 
      :style="cardStyle"
    >
      <!-- <img :alt="project.image.alt" :src="require(`../../images/${project.image.name}`)" /> -->
        <div class="card__content">
          <div class="card__toolbar">
            <div>
              <h3>{{ `${project.name} ${year}` }}</h3>
            </div>
            <a target="_blank" href="#">
              <font-awesome-icon size="1x" :icon="['fa-solid', 'fa-expand-alt']" />
            </a>
          </div>
          <article>
            <p> {{ project.description }}</p>
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

    return {
      borderStyle,
      bgColorStyle,
      cardStyle,
      store,
      year
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

  img {
    border-radius: 8px 8px 0px 0px;
    max-width: 100%;
    width: auto;
    max-height: 250px;
    filter: blur(1px);
    transition: .25s;
  }

  .card__toolbar {
    background-color: rgb(0 0 0 / 3%);
 }
}

.card.dark {
  background-color: $card-bg-dark;
  color: $card-text-dark;

  .card__toolbar {
    background-color: rgb(100 100 100 / 30%);
  }
}

.card__content {
  padding: 2rem 2rem 2rem 2rem;
  text-align:left;
  display: flex;
  flex-direction:column;
  row-gap: 1.2rem;
  height: 100%;
  justify-content: space-between;
  margin-top: 2.3rem;

  h3 {
    margin-bottom: .6rem;
  }

  article {
    line-height: 1.4rem;
  }
}

.card:hover {
    cursor: pointer;
  > img {
    transition: .2s;
    filter: blur(0px);
  }

  .card__toolbar {
    > a {
      transform: scale(1.2);
    }
  }
}

@media (max-width: 668px) {
  .card {
    max-width: 91vw;

    img {
      filter: none;
    }

    .card__toolbar h3 {
      font-size: .9rem;
    }
  }
}

.card__toolbar {
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

  h3 {
    margin: 0;
  }
}

</style>

<template>
    <a 
      class="card" 
      :href="project.homepage" 
      target="_blank" 
      :style="borderStyle"
    >
    <span class="card-topbar" :style="bgColorStyle"> </span>
      <div class="card-content">
        <img :alt="project.image.alt" :src="require(`../../images/${project.image.name}`)" />
        <div class="card-wrap">
          <p class="card-title">
            {{ `${project.name} ${project.date}` }}
          </p>
          <p>
            {{ project.description }}
          </p>
        </div>
        <div class="technologies">
          <ul>
            <li 
              v-for="technology in project.technologies" 
              :key="technology" 
              :style="borderStyle"
            >
              {{technology}}
            </li>
          </ul>
          <PrimaryButton 
            class="content__button" 
            button-size="tiny" 
            :style="bgColorStyle" 
          >
            Visit Website
          </PrimaryButton>
        </div>
      </div>
    </a>
</template>

<script>
import PrimaryButton from "../ui/AppButton.vue";

export default {
  components: {
    PrimaryButton
  },
  props: {
    project: {
      required: true,
      type: Object,
    }
  },
  setup({project}) {
    const { color } = project;
    const borderStyle = { borderColor: color }
    const bgColorStyle = { backgroundColor: color }
    return {
      borderStyle,
      bgColorStyle
    }
  }
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

.card {
  position: relative;
  box-shadow: 0 1px 3px rgba(231, 231, 231, 0.1), -4px 10px 7px rgba(199, 199, 199, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: snow;
  background-color: black;
  border-radius: 15px;
  letter-spacing: 1.5px;
  max-width: 85vw;
  display: flex;
  flex-wrap:wrap;
  flex-direction:row;
  border: 3px solid; 
}

.card-content {
  display: flex;
  flex-direction: column;
  row-gap: 1.7rem;
  height: 100%;
  justify-content: space-between;
  min-width: 300px;
  max-width: 450px;

  img {
    border-radius: 8px 8px 0px 0px;
    max-width: 100%;
    filter: blur(8px);
    transition: .25s;
  }


.card-wrap {
  padding: 0 40px 10px 40px;
  text-align:left;
  display: flex;
  flex-direction:column;
  row-gap: 0.8rem;
  color:white;
  
  .card-title {
    font-weight: 600;
  }

  > p {
    z-index: 3;
  }
}

 .technologies {
    background-color:black;
    border-radius: 0px 0px 15px 15px;
    padding:1rem;
    padding: 30px 40px 30px 40px;
    text-align:left;

    li {
        display: inline-block;
        margin: 0 .8rem .8rem 0;
        border: 1px solid;
        border-radius: 5px;
        padding: 0.5rem;
        font-size:.75rem;
        color:white;
      }
  }

  .content__button {
    background-color: white;
    color: black;
    margin-top:.4rem;
  }
}

.card > span {
  z-index: 1;
}

.card > a {
  z-index: 15;
  text-decoration: none;
}

.card-topbar {
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

.card:hover > .card-content {
  box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card:hover > .card-topbar {
  height: 100%;
  width: 100%; 
  opacity: 0.05;
}

.card:hover > .card-content img {
  transition: .25s;
  filter: blur(0px);
}

@media (max-width: 668px) {
  .card {
    max-width: 91vw;
  }

  .card-content img {
    filter: none;
  }
}

</style>

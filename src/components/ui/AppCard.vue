<template>
  <div class="cards__wrapper">
    <h2 class="cards__wrapper--title">Projects</h2>
    <div class="cards-container">
      <AppIconLoading :loading="loading" />
      <div v-for="card in cards" :key="card.id" class="card" :style="{borderColor: card.color}">
        <a class="card-link" :href="card.homepage" target="_blank">
        <span class="card-topbar" :style="{backgroundColor: card.color}"> </span>
          <div :class="cardSize + ' card-content'">
            <img :alt="card.image.alt" :src="require(`../../images/${card.image.name}`)" />
            <div class="card-wrap">
              <p class="card-title">
                {{ card.name }} {{ card.date }}
              </p>
              <p>
                {{ card.description }}
              </p>
            </div>
            <div class="technologies">
              <ul>
                <li v-for="technology in card.technologies" :key="technology" :style="{borderColor: card.color}">
                  {{`${technology}`}}
                </li>
              </ul>
              <PrimaryButton class="content__button" button-size="tiny" :style="{backgroundColor: card.color}" >
                Visit Website
              </PrimaryButton>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AppIconLoading from "../ui/IconLoading.vue";
import PrimaryButton from "../ui/AppButton.vue";

export default {
  components: {
    AppIconLoading,
    PrimaryButton
  },
  props: {
    cards: {
      required: true,
      type: Object,
    },
    loading: {
      required: false,
      type: Boolean,
    },
    cardSize: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

.cards__wrapper {
  width: 75vw;
  height: auto;
  margin: 4rem;
  margin: 0 auto;
}

.cards__wrapper--title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  @include font-size(4rem);
  font-weight: 900;
  line-height: 1;
  margin: 0 0 10px 0;
  color: #eff2ed;
}

.cards-container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  z-index: 1;
  gap: 4rem;
  margin: 4rem 0 10rem 0; 
}

.card {
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

.big {
  min-width: 300px;
  max-width: 450px;
}

.card-content {
  display: flex;
  flex-direction: column;
  row-gap: 1.7rem;
  height: 100%;
  justify-content: space-between;

  img {
    border-radius: 8px 8px 0px 0px;
    max-width: 100%;
    filter: blur(8px);
    transition: .25s;
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

.card > span {
  z-index: 1;
}

.card > a {
  z-index: 15;
  text-decoration: none;
}

.card, .card-link {
  position: relative;
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

.card-link:hover > .card-topbar {
  height: 100%;
  width: 100%; 
  opacity: 0.05;
}

.card-link:hover > .card-content {
  img {
    transition: .25s;
    filter: blur(0px);
  }
}

@media (max-width: 668px) {
  .cards__wrapper {
    width: 95vw;
    margin: 5rem 1rem 5rem 1rem;
  }

  .card {
    max-width: 91vw;
  }

  .card-content img {
    filter: none;
  }
}

</style>

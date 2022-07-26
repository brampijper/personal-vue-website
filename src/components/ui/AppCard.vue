<template>
  <div>
    <!-- <h2>{{ title }}</h2> -->
    <div class="card-container">
      <AppIconLoading :loading="loading" />
      <div v-for="card in cards" :key="card.id" class="card">
        <a class="card-link" :href="card.homepage" target="_blank">
        <span class="card-topbar"> </span>
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
              <ul>
                <li v-for="technology in card.technologies" :key="technology">
                  {{`${technology}`}}
                </li>
                <br/>
              <PrimaryButton class="content__button" button-size="tiny" >
                Visit Website
              </PrimaryButton>
              </ul>
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
.projects {
  text-align: center;
  align-self: center;
  gap: 5rem;
  h2 {
    @include font-size(3rem);
    font-weight: bold;
    letter-spacing: 5px;
    margin-top: 5rem;
  }
}

.card-container {
  text-align: center;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  gap: 4rem;
  margin-bottom: 10rem;
}

.big {
  width: 400px;
  min-width: 300px;
  max-height: 600px;
  min-height: 500px;
}

.medium {
  width: 250px;
  min-width: 200px;
  max-height: 300px;
  min-height: 250px;
}

.card-content {
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: black;
  background-color: rgba($color: #ffffff, $alpha: 0.4);
  border-radius: 15px;
  letter-spacing: 1.5px;
  row-gap: 1.7rem;
  max-width: 85vw;
  border: 1px solid black;

  img {
    border-radius: 15px 15px 0px 0px;
    max-width: 100%;
  }

 ul {
    background-color:black;
    border-radius: 0px 0px 15px 15px;
    padding:1rem;
    align-self: flex-end;
    padding: 30px 40px 30px 40px;
    text-align:left;
  }

  ul li {
    display: inline-block;
    margin: 0 .8rem .8rem 0;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    font-size:.75rem;
    color:white;
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
  width: 400px;
  display: block;
  background-color: #FF6B46;
  height: 0px;
  transition: all 1.1s;
  position: absolute;
  border-radius: 15px;
  z-index: 2;
  opacity: .75;
}

.card:hover > .card-content {
  box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card-link:hover > .card-topbar {
  height: 100%;
  opacity: 0.05;
}

</style>

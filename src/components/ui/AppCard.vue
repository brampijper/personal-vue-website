<template>
  <div>
    <!-- <h2>{{ title }}</h2> -->
    <div class="card-container">
      <AppIconLoading :loading="loading" />
      <div v-for="card in cards" :key="card.id" class="card">
        <a class="card-link" :href="card.homepage" target="_blank">
        <span class="card-topbar"> </span>
          <!-- <span class="link-spanner"> </span> -->
          <div :class="cardSize + ' card-content'">
            <img alt="card.alt" src="../../images/coaching_header.jpg" />
            <!-- <img :alt="card.alt" :src="card.image" /> -->
            <div class="card-wrap">
              <p class="card-title">
                {{ card.name }} {{ card.date }}
              </p>
              <p>
                {{ card.description }}
              </p>
              <ul>
                <li v-for="technology in card.technologies" :key="technology">
                  {{`${technology}`}}
                </li>
                <br/>
              <PrimaryButton class="content__button" button-size="tiny">
                Visit Website
              </PrimaryButton>
              </ul>
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
}

.big {
  width: 400px;
  min-width: 300px;
  max-height: 600px;
  min-height: 450px;
}

.medium {
  width: 250px;
  min-width: 200px;
  max-height: 300px;
  min-height: 250px;
}

// .small {
//   height: 15vh;
//   width: 25vmin;
//   display: inline-grid;
//   place-items: center;
//   justify-self: center;
// }

.card-content {
  display: grid;
  grid-template-rows: 0.75fr 1fr;
  align-items: start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: black;
  background-color: rgba($color: #ffffff, $alpha: 0.4);
  border-radius: 15px;
  letter-spacing: 1.5px;
  row-gap: 0.7rem;

  img {
    border-radius: 15px 15px 0px 0px;
    max-width: 100%;
    // filter: blur(2px);
  }
}

.card-wrap {
  margin: 0px 10px 25px 10px;
  padding: 0 30px 10px 30px;
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

  ul {
    background-color:black;
    border-radius: 5px;
    padding:1rem;
    margin-top:.5rem;
  }

  ul > li {
    display: inline-block;
    margin-right: .8rem;
    margin-bottom:.4rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    font-size:.75rem;
    color:white;
  }

  .content__button {
    background-color: white;
    color: black;
    margin-top:.8rem;
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

// .link-spanner {
//   position: absolute;
//   width: 94%;
//   margin: 0 auto;
//   height: 92%;
//   top: 0;
//   left: 10px;
//   z-index: 1;
// }

.card-topbar {
  width: 400px;
  display: block;
  background-color: aquamarine;
  height: 1px;
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
  opacity: 0.2;
}

.card-link:hover > .card-content img {
  // filter: blur(0px);
  // transition: .4s;
}

</style>

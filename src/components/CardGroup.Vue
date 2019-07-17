<template>
  <div class="center-container">
    <FadeTransition :extended="extended" group>
      <div class="grid-container">
        <div
          v-for="(square, index) in amountOfSquares"
          :key="square"
          class="grid-item"
        >
          <h5>
            {{ content[index] }}
          </h5>
        </div>
      </div>
    </FadeTransition>
  </div>
</template>

<script>
import FadeTransition from "./transitions/FadeTransition.vue";
export default {
  data() {
    return {
      content: [
        "I like the outdoor",
        "I like technology",
        "I like sailing",
        "I like coffee",
        "I want to become the best version of myself",
        "Traveling is important",
        "Need to do more collabiration",
        "Norway is the coolest country",
        "Don't underestimate your own feelings",
        "I like ice-cream",
        "I lived in Amsterdam for 2 years",
        "Learning front-end development",
        "Experience in display advertising",
        "making animations with Greensock.js",
        "Often found hiking",
        "Flat white > cappuccino",
        "Also a tea lover",
        "Running for motivaiton",
        "Public Transport > cars"
      ],
      amountOfSquares: 9,
      numberArr: []
    };
  },
  components: {
    FadeTransition
  },
  props: {
    extended: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    randomTagline: function() {
      // let i = this.content.length,
      //   array = this.content,
      //   j = 0,
      //   temp;
      // while (i--) {
      //   j = Math.floor(Math.random() * (i + 1));
      //   temp = array[i];
      //   array[i] = array[j];
      //   array[j] = temp;
      // }
      // return array[0];
    }
  }
};
</script>

<style lang="scss">
.center-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}

.grid-container {
  display: grid;
  grid-gap: 1px;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(3, auto [col-start]);
  grid-template-rows: repeat(3, auto [col-start]);

  .grid-item {
    text-align: center;
    width: 100%;
    height: 100%;
    display: inline-grid;
    place-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: black;
    background-color: rgba($color: #ffffff, $alpha: 0.4);
    border-radius: 2px;

    h5 {
      margin: 5%;
    }
  }

  .grid-item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>

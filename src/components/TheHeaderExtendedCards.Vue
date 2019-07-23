<template>
  <div class="grid-container">
    <div v-for="(tagLine, index) in tagLines" :key="index" class="grid-item">
      <h5>
        {{ tagLine }}
      </h5>
    </div>
  </div>
</template>

<script>
import FadeTransition from "./transitions/FadeTransition.vue";
export default {
  props: {
    tagLines: {
      type: Array
    }
  },
  components: {
    FadeTransition
  }
};
</script>

<style lang="scss">
.grid-container {
  margin: 0 auto;
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(3, 1fr [col-start]);
  grid-template-rows: repeat(3, 1fr [col-start]);

  .grid-item {
    height: 15vh;
    width: 25vmin;
    display: inline-grid;
    place-items: center;
    justify-self: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: black;
    background-color: rgba($color: #ffffff, $alpha: 1);
    border-radius: 2px;

    h5 {
      text-align: center;
      margin: 5%;
    }
  }

  .grid-item:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>

<template>
  <div class="center-container">
    <FadeTransition :extended="extended" group appear mode="in-out">
      <div key="0" class="grid-container">
        <div key="1" class="grid-item">item 1</div>
        <div key="2" class="grid-item">item 2</div>
        <div key="3" class="grid-item">item 3</div>
        <div key="4" class="grid-item">item 4</div>
        <div key="5" class="grid-item">item 5</div>
        <div key="6" class="grid-item">item 6</div>
      </div>
    </FadeTransition>
  </div>
</template>

<script>
import FadeTransition from "./transitions/FadeTransition.vue";
export default {
  components: {
    FadeTransition
  },
  props: {
    extended: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.center-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 75%;
  height: 85vh;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;
  height: 55vh;
  width: 70vw;
}

.grid-container div {
  display: inline-grid;
  place-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: black;
  background-color: rgba($color: #ffffff, $alpha: 0.4);
  border-radius: 2px;
}

.grid-container div:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>

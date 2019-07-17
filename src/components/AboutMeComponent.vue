<template>
  <div>
    <div
      v-show="!extended"
      class="small-container"
      @click="extended = !extended"
    >
      <h4>
        <a href="#">ABOUT BRAM</a>
      </h4>
    </div>
    <ExtendTransition :extended="extended" mode="out-in" appear>
      <div class="main-container">
        <FadeTransition :extended="extended" :style="{ zIndex: '2' }" appear>
          <div class="icon-container">
            <a v-show="extended" href="#" @click="extended = !extended">
              <font-awesome-icon icon="times" />
            </a>
          </div>
        </FadeTransition>
        <CardGroup :extended="extended"> </CardGroup>
      </div>
    </ExtendTransition>
  </div>
</template>

<script>
import ExtendTransition from "./transitions/ExtendTransition.vue";
import FadeTransition from "./transitions/FadeTransition.vue";
import CardGroup from "./CardGroup.vue";
export default {
  components: {
    ExtendTransition,
    FadeTransition,
    CardGroup
  },
  data() {
    return {
      extended: false
    };
  }
};
</script>

<style lang="scss">
.small-container {
  position: absolute;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  width: 100%;
  height: calc(20px + 1vw);
  transition: 1s;
  cursor: pointer;
  h4 {
    letter-spacing: 5px;
    font-size: 13px;
    transition: 1s;
  }
}
.small-container:hover {
  height: calc(40px + 3vw);
  transition: 0.7s;
  transition-timing-function: ease-out;
}

.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  .icon-container {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    right: 0;
    overflow: hidden;
    z-index: 2;
    svg {
      padding: 35px 50px 0px 0px;
      font-size: 55px;
      color: black;
      transition: all 0.6s;
      transform: rotate(0deg);
      transform-origin: 25% 75%;
    }
    svg:hover {
      color: white;
      transform: rotate(90deg);
    }
  }
}
</style>

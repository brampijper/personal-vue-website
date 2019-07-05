<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="!extended"
        key="3"
        class="small-container"
        @click="extended = !extended"
      >
        <h4>
          <a href="#">ABOUT BRAM</a>
        </h4>
      </div>

      <div v-if="extended" key="1" class="main-container">
        <div class="icon-container">
          <a v-if="extended" key="2" href="#" @click="extended = !extended">
            <font-awesome-icon icon="times" />
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
  height: 100vh;
  background-color: aquamarine;

  .icon-container {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    text-align: right;
    overflow: hidden;
    svg {
      padding: 35px 50px 0px 0px;
      font-size: 55px;
      color: black;
      transition: all 1s;
      transform: rotate(0deg);
      transform-origin: 25% 75%;
    }

    svg:hover {
      color: white;
      transform: rotate(90deg);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: height 1s;
}

.fade-enter,
.fade-leave-to {
  height: calc(40px + 3vw);
}
</style>

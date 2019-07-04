<template>
  <div>
    <a href="#" @click="notExtended = !notExtended">
      <transition name="extend">
        <div v-if="notExtended" class="small-container">
          <h4><a href="#">ABOUT BRAM</a></h4>
        </div>
        <div v-else class="main-container"></div>
      </transition>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notExtended: true
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
  transition: 2s;
}
</style>

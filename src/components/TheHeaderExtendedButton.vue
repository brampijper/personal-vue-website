<template>
  <div class="icon-container">
    <a href="#">
      <font-awesome-icon icon="times" />
    </a>
  </div>
</template>

<style lang="scss">
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
</style>

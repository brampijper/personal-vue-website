<template>
  <div class="icon-container">
    <a href="#">
      <font-awesome-icon icon="times" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.icon-container {
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  z-index: 2;
  text-align: right;
  right: 0;
  margin: 50px 70px 60px 60px;
  top: 0;

  svg {
    font-size: 100px;
    color: black;
    transition: all 0.6s;
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }

  svg:hover {
    color: white;
    transform: rotate(90deg);
  }
}

@media (max-width: 720px) {
  .icon-container {
    margin: 0px 10px 10px 10px;

    svg {
      font-size: 50px;
    }
  }
}
</style>

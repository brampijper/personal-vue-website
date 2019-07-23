<template>
  <div class="small-container">
    <h4>
      <a href="#">ABOUT BRAM</a>
    </h4>
  </div>
</template>

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
</style>

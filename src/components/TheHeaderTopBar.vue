<template>
  <div class="small-container">
    <h4>
      <a href="#">ABOUT BRAM</a>
    </h4>
  </div>
</template>

<style lang="scss">
.small-container {
  top: 0;
  position: absolute;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  width: 100%;
  height: calc(15px + 4vh);
  transition: 1s;
  cursor: pointer;
  h4 {
    letter-spacing: 5px;
    font-size: 13px;
    transition: 1s;
  }
}
.small-container:hover {
  height: calc(40px + 4vh);
  transition: 0.7s;
  transition-timing-function: ease-out;
}
</style>

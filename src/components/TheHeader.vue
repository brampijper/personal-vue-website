<template>
  <div class="header-container">
    <h1>HELLO</h1>
  </div>
</template>

<style lang="scss">
.header-container {
  background-color: $base-color;
  height: 82.9vh;
  text-align: center;
}
div > h1 {
  margin-top: -9.2vw;
  position: absolute;
  font-size: 16vw;
  color: #1f2726;
  letter-spacing: 0.3em;
  left: 0;
  right: 0;
}

@media screen and (min-width: 1200px) {
  div > h1 {
    font-size: 250px;
    margin-top: -148px;
  }
}
</style>

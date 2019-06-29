<template>
  <div class="header-container">
    <h1>HELLO</h1>
  </div>
</template>

<style lang="scss">
.header-container {
  background-color: $base-color;
  height: 71.8vh;
  text-align: center;

  h1 {
    margin-top: -9.2vw;
    position: absolute;
    font-size: 16vw;
    color: #1f2726;
    letter-spacing: 0.3em;
    left: 0;
    right: 0;
  }
}

@media screen and (max-width: 700px) {
  .header-container {
    height: 77.4vh;
  }
}
@media screen and (min-width: 1200px) {
  .header-container > h1 {
    font-size: 200px;
    margin-top: -117px;
  }
}
</style>

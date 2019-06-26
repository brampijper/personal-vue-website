<template>
  <div class="navbar-container">
    <ul class="menu-container">
      <li><a href="#">HOME </a></li>
      <li>-</li>
      <li><a href="#">BLOG </a></li>
    </ul>
    <div id="borderDiv"></div>
  </div>
</template>

<style lang="scss">
.menu-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 17vh;

  li {
    margin: 20px;
    display: inline;
  }
}

#borderDiv {
  margin: 0 auto;
  width: 90%;
  border-bottom: 1px solid rgb(107, 107, 107);
  opacity: 0.5;
}
</style>

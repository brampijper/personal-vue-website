<template>
  <div class="navbar-container">
    <ul class="menu-container">
      <li><a href="#">HOME </a></li>
      <li>| L\O\G\O |</li>
      <li><a href="#">BLOG </a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.navbar-container {
  .menu-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100px + 5vw);
    max-height: 175px;
    margin-top: 40px;

    li {
      margin: 20px;
      display: inline;
    }
  }
}
</style>

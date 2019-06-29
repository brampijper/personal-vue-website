<template>
  <div class="navbar-container">
    <ul class="menu-container">
      <li><a href="#">HOME </a></li>
      <li>| L\O\G\O |</li>
      <li><a href="#">BLOG </a></li>
    </ul>
    <div id="borderDiv"></div>
  </div>
</template>

<style lang="scss">
.navbar-container {
  .menu-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;
    margin-top: 50px;

    li {
      margin: 20px;
      display: inline;
    }
  }

  #borderDiv {
    margin: 0 auto;
    width: 80%;
    border-bottom: 1px solid rgb(107, 107, 107);
    opacity: 0.5;
    margin-top: -101px;
    margin-bottom: 150px;
  }
}

@media screen and (max-width: 700px) {
  .navbar-container > #borderDiv {
    margin-top: -120px;
    margin-bottom: 100px;
  }
}
</style>

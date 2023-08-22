<template>
    <article class="heading__title">
      <h1>Hello, I'm Bram</h1>
      <span>A creative being &amp; web developer.

      <button :onClick="scrollTo">
        View projects
      </button>
      </span>
    </article>
</template>

<script setup>

  const scrollTo = () => {
    const element = document.getElementById("projects");
    const yOffset = -50; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
</script>

<style lang="scss" scoped>
@import "~rfs/scss";

  .heading__title h1 {
    @include font-size(4rem);
    font-family: $title-font-family;
    font-weight: $title-weight;
    line-height: 1;
    margin: 0 0 10px 0;
  }

  .heading__title span {
    @include font-size(2rem);
  }

  .heading__title button {
    height: 26px;
    @include font-size(.8rem);
    padding: 0 1rem;
    border-radius: 8px;
    background-color: rgb(89, 89, 89);
    color: rgb(242, 242, 242);
    margin:0 0 0 5px;
    vertical-align: middle;
  }

  .heading__title button:hover {
    background-color: rgb(70, 70, 70);
    color: rgb(255, 255, 255);
    cursor:pointer;
  }

@media (min-width: 660px) {
  .heading__title button {
    display:none;
  }
}

</style>

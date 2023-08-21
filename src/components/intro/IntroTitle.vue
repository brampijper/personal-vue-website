<template>
    <article class="heading__title">
      <h1>Hello, I'm Bram</h1>
      <span>A creative being &amp; web developer.</span>
    </article>
</template>

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

</style>

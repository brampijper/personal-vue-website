<template>
  <div class="content__heading">
    <article class="heading__title">
      <h1>Hello, I'm Bram</h1>
      <span>Creative being &amp; web developer.</span>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import "~rfs/scss";
.content__heading {
  display: flex;
  flex-direction: row;
  gap: 5rem;

  .heading__title h1 {
    @include font-size(4rem);
    font-family: $title-font-family;
    font-weight: $title-weight;
    line-height: 1;
    margin: 0 0 10px 0;
    // color: $title-color;
  }

  .heading__title span {
    @include font-size(2rem);
    grid-column-start: 1;
    grid-row-start: 2;
    // color: $title-color;
  }
}

@media (max-width: 1150px) {
  .content__heading {
    gap: 0rem;
    flex-direction: column;
  }
}

</style>

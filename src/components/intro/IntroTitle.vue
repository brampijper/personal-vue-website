<template>
  <div class="content__heading">
    <article class="heading__title blurText">
      <h1>Hello, I'm Bram</h1>
      <h2>Creative being &amp; web developer.</h2>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@import "~rfs/scss";
.content__heading {
  display: flex;
  flex-direction: row;
  align-self: end;
  gap: 5rem;

  .heading__title h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    @include font-size(4rem);
    font-weight: 900;
    line-height: 1;
    margin: 0 0 10px 0;
    color: #eff2ed;
  }

  .heading__title h2 {
    @include font-size(2rem);
    grid-column-start: 1;
    grid-row-start: 2;
    color: white;
  }
}

@media (max-width: 1150px) {
  .content__heading {
    gap: 0rem;
    flex-direction: column;
  }
}

.blurText {
  text-shadow:
    1px 1px 40px white,
    1px 1px 91px white;
}
</style>

<template>
  <article class="content__intro">
    <p class="intro__first">
      Currently building my idea's online, while keeping up with my interests:
      <br />
      <i> being outdoors, cooking, reading and mindfulness. </i>
    </p>
    <p class="intro__second">
      I worked as a junior developer at
      <a href="https://www.schuttelaar-partners.com/" target="_blank"
        >Schuttelaar &amp; Partners.</a
      >
      Before that I was part of the
      <a href="https://www.dasbanner.com" target="_blank">Das Banner</a>
      team. A creative advertising agency.
    </p>
  </article>
</template>

<style lang="scss" scoped>
@import "~rfs/scss";
.content__intro {
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;

  p {
    @include font-size(1.4rem);
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    max-width: 45ch;
  }

  a {
    text-decoration: underline;
  }
}

@media (max-width: 668px) {
  .content__intro {
    p {
      font-size: 1.1rem;
    }
  }
}

@media (max-width: 1150px) {
  .content__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

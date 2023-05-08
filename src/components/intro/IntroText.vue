<template>
  <article class="content__intro">
    <p>
      Based in Oslo. Seeking new opportunities to expand my skillset, 
      while connecting IT with people and nature. 
    </p>
    <p>
      Last year I developed my skills through freelancing, personal projects and travel.
    </p>
    <p>
      Previously, I worked as a junior developer at 
      <a href="https://www.schuttelaar-partners.com/" target="_blank"
        >Schuttelaar &amp; Partners</a>
        gaining experience in developing user-friendly web applications. 
    </p>
    <p>   
      When I'm not coding, you can find me reading books, practicing mindfulness
      or exploring the mountains - with a Kvikk Lunsj in hand <span>&#x1F609</span>
    </p>
  </article>
</template>

<style lang="scss" scoped>
@import "~rfs/scss";
.content__intro {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    @include font-size(1.2rem);
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    line-height: 1.35;
    max-width: 53ch;
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

</style>

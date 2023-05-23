<template>
  <article class="content__intro">
    <p>
      Seeking new opportunities in Oslo to expand my skillset by 
      connecting people, IT and health. 
    </p>
    <p>
      I developed my skills last year through freelancing, personal projects and travel.
      Currently broadening my tech stack, while improving my blog and mental health platform.
    </p>
    <p>   
      When I'm not coding, I enjoy reading books, practicing mindfulness
      and exploring the mountains with a Kvikk Lunsj in hand <span>&#x1F609</span>
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
    @include font-size(1.25rem);
    font-family: "Roboto Mono", monospace;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
    max-width: 53ch;
  }

  a {
    text-decoration: underline;
  }
}

@media (max-width: 660px) {
  .content__intro {
    p {
      font-size: 1.1rem;
      line-height:1.5;
    }
  }
}

</style>

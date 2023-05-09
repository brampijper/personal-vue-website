<template>
  <article class="content__intro">
    <p>
      Now based in Oslo, where I'm seeking new opportunities to expand my skillset and 
      connect people with IT and nature. 
    </p>
    <p>
      Last year I have developed my skills through freelancing, personal projects and travel.
      Before that I developed user-friendly web applications at
      <a href="https://www.schuttelaar-partners.com/" target="_blank"
        >Schuttelaar &amp; Partners.</a>
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

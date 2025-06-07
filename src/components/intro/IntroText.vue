<template>
  <article class="content__intro">
    <p>
      Work and travel, while keeping an open mind made me who I am today. 🌏 I care for human connection and to live fully aware.
    </p>
    <p>
      I'm looking for that combination of work where technology and human connection intersect. 💪🏼 
    </p>
    <p>   
      I love to spend my time outdoors and explore the world's nature. <span>⛰️</span> Into reading, cooking and working on the mind and body. 
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

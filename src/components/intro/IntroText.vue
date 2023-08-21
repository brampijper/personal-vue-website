<template>
  <article class="content__intro">
    <p>
      Freelancing and traveling 🌏 enforced my passion for human connections, web development and nature.
      This drives my work to connect the digital and physical world to help people.
    </p>
    <p>
      I look for new opportunities where lifelong learning, collaborating 
      and doing hard work are highly valued. 💪🏼 
    </p>
    <p>   
      When I'm not coding, I enjoy ✏️ my blog, reading books, 
      train my physical health and exploring Norway's awesome nature. <span>&#x1F609</span>
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

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

<style scoped>
.content__intro {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content__intro p {
  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
  font-family: var(--font-family, "Roboto Mono", monospace);
  color: var(--text-color);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
  max-width: 53ch;
}

.content__intro a {
  text-decoration: underline;
  color: var(--link-color);
}

@media (max-width: 660px) {
  .content__intro p {
    font-size: 1.1rem;
    line-height: 1.5;
  }
}

</style>

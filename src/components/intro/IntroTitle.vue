<template>
    <article class="heading__title">
      <h1>Hello, I'm Bram</h1>
      <span>A creative being &amp; web developer.

      <button :onClick="scrollTo">
        View projects
      </button>
      </span>
    </article>
</template>

<script setup>

  const scrollTo = () => {
    const element = document.getElementById("projects");
    const yOffset = -50; 
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
</script>

<style scoped>
.heading__title h1 {
  font-family: var(--heading-font-family);
  font-weight: var(--heading-weight);
  color: var(--heading-color);
  line-height: 1;
  margin: 0 0 10px 0;
  font-size: clamp(2.5rem, 6vw, 4rem);
}

.heading__title span {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--text-color);
}

.heading__title button {
  height: 26px;
  padding: 0 1rem;
  border-radius: 8px;
  background-color: var(--button-bg);
  color: var(--button-color);
  border: var(--button-border);
  margin: 0 0 0 5px;
  vertical-align: middle;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  transition: background-color 0.2s, color 0.2s;
}

.heading__title button:hover {
  background-color: var(--hover-bg);
  color: var(--link-color);
  cursor: pointer;
}

@media (min-width: 660px) {
  .heading__title button {
    display: none;
  }
}

</style>

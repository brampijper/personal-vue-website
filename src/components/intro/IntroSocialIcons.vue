<template>
  <section class="icon__container">
    <a href="https://github.com/brampijper" target="_blank">
      <font-awesome-icon size="2x" :icon="['fab', 'github']" />
      <span> Github </span>
    </a>
    <a
      href="https://focused-galileo-c3ee18.netlify.app/"
      target="_blank"
    >
      <font-awesome-icon size="2x" :icon="['fa-solid', 'fa-book']" />
      <span> Blog </span>
    </a>
    <a href="mailto:brampijper@protonmail.com" target="_blank">
      <font-awesome-icon size="2x" icon="at" />
      <span> Email </span>
    </a>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.icon__container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 6rem;
}

.icon__container a {
  text-align: center;
  color: var(--link-color);
  transition: color 0.2s;
}

.icon__container a svg {
  transition: transform 0.2s ease-out, color 0.2s;
  max-width: 55px;
  color: var(--text-color);
}

.icon__container a span {
  display: block;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
  font-family: var(--font-family, "Roboto Mono", monospace);
  text-decoration: none;
  color: var(--text-color);
}

.icon__container a:hover > svg {
  transform: translate(0, -7px);
  color: var(--link-color);
}

.icon__container a:hover > span {
  text-decoration: underline;
  color: var(--link-color);
  transition: transform 0.3s, color
}

</style>

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

<style lang="scss" scoped>
.icon__container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  a {
    text-align: center;
    color: inherit;

    svg {
      transition: transform 0.2s ease-out;
      max-width: 55px;
    }

    span {
      display: block;
      font-size: 1.2rem;
      text-align: center;
      margin-top: 10px;
      font-family: "Roboto Mono", monospace;
      text-decoration: none;
    }
  }

  a:hover > svg {
    transform: translate(0, -7px);
  }

  a:hover > span {
    text-decoration: underline;
    transition: transform 0.3s;
  }
}

@media (max-width: 668px) {
  .icon__container {
    gap: 4rem;
    a {
      font-size: 1.7vw;
    }
  }
}
</style>

<template>
  <div class="icon-container">
    <a href="mailto:brampijper@gmail.com" target="_blank">
      <font-awesome-icon size="4x" icon="at" />
      <span> Email </span>
    </a>
    <a
      href="https://www.linkedin.com/in/bram-pijper-6a9306129/"
      target="_blank"
    >
      <font-awesome-icon size="4x" :icon="['fab', 'linkedin']" />
      <span> LinkedIn </span>
    </a>
    <a href="https://github.com/brampijper" target="_blank">
      <font-awesome-icon size="4x" :icon="['fab', 'github']" />
      <span> Github </span>
    </a>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.icon-container {
  justify-self: flex-start;
  display: flex;
  align-items: flex-start;
  gap: 8rem;
  margin-top: 2.5rem;

  a {
    text-align: center;
    text-decoration: none;
    color: $font-color;

    svg {
      transition: transform 0.2s ease-out;
      color: $font-color;
      max-width: 55px;
    }

    span {
      display: block;
      font-size: 1.2rem;
      text-align: center;
      margin-top: 15px;
      font-family: "Roboto Mono", monospace;
      text-decoration: none;
    }
  }

  a:hover > svg {
    transform: translate(0, -15px);
    color: $body-color;
  }

  a:hover > span {
    color: $body-color;
    transition: color 0.3s;
  }
}

@media (max-width: 1150px) {
  .icon-container {
    gap: 0rem;
    width: 100%;
    justify-self: unset;
    align-items: unset;
    justify-content: space-between;
    margin-top:0;

    a {
      font-size: 1.7vw;
    }
  }
}
</style>

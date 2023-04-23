<template>
    <a 
    class="card"
    href="mailto:brampijper@proton.me"
    target="_blank">
        <article class="card-content">
          <h4>Opportunities | Feedback | Random ? </h4>
          <p> Happy to connect & chat, drop a line at </p>
        </article>
        <span class="card__content-email">
          brampijper@proton.me
        </span>
    </a>
</template>

<script>

export default {
  setup() {
    return {}
  }
};
</script>
<style lang="scss" scoped>

  .card-content {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    text-align: left;
  }
  
  .card__content-email {
    display: flex;
    align-items:center;
    font-weight: 700;
  }
  
</style>

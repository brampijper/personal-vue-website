<template>
  <div class="card">
    <a class="card-content" :href="url" target="_blank">
      <article class="card-title">
        <h3>{{ name }}</h3>
        <p>
          {{ description }}
        </p>
      </article>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cardSize: {
      required: true,
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "~rfs/scss";

.card {
  width: 95vw;
}

.card > a {
  text-decoration: none;
}

.card:hover > .card-content {
  box-shadow: 0 14px 28px rgba(148, 106, 106, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.card-content {
  display: grid;
  grid-template-rows: auto auto 30% auto;
  justify-items: start;
  padding: 0.8rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: black;
  background-color: rgba($color: #ffffff, $alpha: 0.4);
  border-radius: 2px;
  text-align: left;
  min-height: 250px;

  .card-title {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    h3 {
      @include font-size(1.2rem);
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    }

    p {
      @include font-size(1.3rem);
    }
  }
}

@media (min-width: 668px) {
  .card {
    max-width: 300px;
    .card-content {
      max-width: 300px;
    }
  }
}
</style>

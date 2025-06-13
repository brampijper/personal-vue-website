<template>
  <div class="projects" id="projects">
    <div 
      v-for="project in projects"
      :key="project.id"
      :class="`project__card ${skeleton}`"
    >
      <div class="card">
        <div class="card__header">
          <slot name="button" v-bind="project" />
        </div>
        <slot name="link" v-bind="project" />
        <div class="card__image-container">
          <slot name="image" v-bind="project" />
        </div>
        <article class="card__content">
          <slot name="name" v-bind="project" />
          <slot name="description" v-bind="project" />
        </article>
        <slot name="topics" v-bind="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    projects: {
      type: Array,
      default(rawPprops) {
        return [ { id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6} ]
      }
    },
    skeleton: {
      type: String,
      default: ""
    }
  })
</script>

<style scoped>
.projects {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
  gap: 2rem;
  margin: 2rem 0 0 0;
  padding: 1rem;
  width: auto;
}

.project__card.skeleton-loader {
  width: 360px;
}

.project__card .card {
  position: relative;
  color: var(--card-text);
  background-color: var(--card-bg);
  border-radius: 16px;
  letter-spacing: 1.2px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 360px;
  max-height: 480px; /* Added */
  overflow: hidden;
  height: 100%;
  border: var(--card-border);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 2.5rem 2rem;
  transition: box-shadow 0.2s, border 0.2s, background 0.2s;
}

.card ::v-deep .card__link {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4; /* Increased */
  top: 0;
  left: 0;
}

.card .card__image-container {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-height: 200px;
  max-width: 100%;
  overflow: hidden;
  padding-top: 50%;
  position: relative;
  width: auto;
}

.card .card__image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: var(--image-overlay);
  z-index: 1;
}

.card .card__image-container ::v-deep .card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px; /* Fixed height */
  object-fit: cover;
  object-position: top;
  z-index: 0;
}

.card .card__header {
  width: 100%;
  height: auto;
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  padding-block: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
}

.card .card__header-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card .card__title {
  font-family: var(--heading-font-family);
  color: var(--heading-color);
  margin-bottom: 0.6rem;
  font-weight: var(--heading-weight);
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  margin: 0;
}

.card .card__content {
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  padding: 1.5rem 2rem 1rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 100%;
  color: var(--text-color);
}

.card .card__content-description {
  line-height: 1.4rem;
}

.card:hover {
  background-color: var(--card-hover-bg);
  box-shadow: 0 4px 24px rgba(0,0,0,0.16);
  border-color: var(--link-color);
}

.card:hover > a .card_link {
  cursor: pointer;
}

.card:hover .card__image-container::before {
  background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%);
}

.card:hover > ul {
  background-color: var(--hover-bg);
}

/* Responsive styles */
@media (max-width: 668px) {
  .projects {
    padding: 1rem 0;
  }
  .project__card .card {
    max-width: 91vw;
  }
  .card .card__header-title {
    font-size: 0.9rem;
  }
  .card .card__image-container {
    background: none;
  }
  .card .card__image-container::before {
    background: none;
  }
}

@media (min-width: 1350px) {
  .projects {
    justify-content: flex-start;
    padding: 2rem;
  }
}

@media (min-width: 1200px) {
  .project__card .card {
    min-width: 340px;
    max-width: 420px;
  }
}
</style>

<template>
  <header>
    <div className="header-wrap">
      <h2 className="">
        <font-awesome-icon size="1x" :icon="['fa-solid', 'fa-home']" />
        <a href="#" title="Home">Home 👋</a>
      </h2>
      <AppToggler />
    </div>
  </header>
</template>

<script>
import AppToggler from "../ui/AppToggler.vue";

export default {
  components: {
    AppToggler
  },
  setup() {
    return {}
  },
};
</script>

<style scoped>

header {
  background-color: var(--card-bg);
  color: var(--text-color);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 45px;
  top: 0;
  position: sticky;
  width: 100%;
  height: calc(15px + 3vh);
  z-index: 4;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 38%);
}

header .header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}

header h2 {
  color: var(--text-color);
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-family: var(--heading-font-family);
  font-weight: var(--heading-weight);
  padding: 0.5rem;
  border-radius: 8px;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  transition: background-color 0.2s;
}

header h2 a {
  text-decoration: none;
  color: var(--text-color);
}

header h2:hover {
  background-color: var(--hover-bg);
}

</style>

<template>
  <ul>
    <li 
      v-for="topic in topics" 
      :key="topic" 
    >
      {{topic}}
    </li>
  </ul>
</template>

<script setup>
  defineProps({
    topics: {
      required: true,
      type: Object,
    }
  })
</script>

<style scoped>

ul {
  border-radius: 8px;
  padding: 1rem 1rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--card-bg);
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  margin-top: 1rem;
}

ul li {
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
  border: 1px solid var(--link-color);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: var(--card-hover-bg);
  color: var(--text-color);
  transition: background 0.2s, color 0.2s;
}

</style>

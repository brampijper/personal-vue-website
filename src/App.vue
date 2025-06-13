<template>
  <AppHeader  />
    <main >
      <div class="page-wrap">
        <MainContent />

        <Suspense> <!-- experimental feature, might change. -->
          <ProjectCollection /> <!-- Loads fallback component, until async fetching is complete -->

          <template #fallback> 
            <SkeletonLoader />
          </template>
        </Suspense>
        
      </div>
    </main>
    <AppFooter  />
</template>

<script setup>
  import ProjectCollection from "./components/projects/ProjectCollection.vue";
  import AppHeader from "./components/layout/AppHeader.vue";
  import AppFooter from "./components/layout/AppFooter.vue";
  import MainContent from "./components/layout/MainContent.vue";
  import SkeletonLoader from './components/ui/SkeletonLoader.vue';
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap");

body {
  height: 100%;
  font-family: var(--font-family);
  background: var(--app-bg);
  color: var(--text-color);
}

main {
  background-color: var(--app-bg);
  color: var(--text-color);
  min-height: 100vh;
  padding: 2rem 0;
}

main .card {
  background-color: var(--card-bg);
  color: var(--card-text);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  border: var(--card-border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: box-shadow 0.2s, border 0.2s, background 0.2s;
}

main .card:hover, main .card:focus-within {
  box-shadow: 0 4px 24px rgba(0,0,0,0.16);
  background: var(--card-hover-bg);
  border-color: var(--link-color);
}

.page-wrap {
  margin: auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 2rem;
}

span, p, ul, li {
  font-family: var(--font-family);
  font-weight: 300;
  color: var(--text-color);
  font-size: 1.1rem;
}

h2 {
  font-family: var(--heading-font-family);
  font-weight: var(--heading-weight);
  color: var(--heading-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

a {
  transition: color 0.3s;
  text-decoration: underline;
  color: var(--link-color);
}

a:visited {
  color: var(--link-color);
}

@media (max-width: 900px) {
  .page-wrap {
    flex-direction: column;
    gap: 1.5rem;
  }
}

</style>
<template>
<div>
     <a 
      class="card" 
      target="_blank" 
    >
      <div class="card__image-container">
        <img class="card__image skeleton" />
      </div>
      <div class="card__header">
        <div>
          <h3 class="card__title skeleton"></h3>
        </div>
        <a target="_blank" href="#">
          <font-awesome-icon size="1x" :icon="['fa-solid', 'fa-expand-alt']" />
        </a>
      </div>
        <div class="card__content">
          <article>
            <p class="card__content-description skeleton"></p>
          </article>
          <button 
              class="content__button" 
              button-size="tiny" 
          >
          </button>
        </div>
    </a>
</div>    
</template>

<script>

export default ({
    props: {
    },
    setup() {
        return {
        }
    },
})
</script>

<style scoped lang="scss">

.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
    display: inherit;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 5%, 50%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}


.card {
  position: relative;
  color: $card-text;
  background-color: $card-bg;
  border-radius: 15px;
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.7rem;
  min-width: 300px;
  max-width: 360px;
  overflow:hidden;

  &__image-container {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    width: auto;
    max-height:200px;
    padding-top: 50%; /* set the aspect ratio of the image container */
    margin-top: 45px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    //   background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 109%);
      z-index: 1;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* preserve the aspect ratio of the image */
    object-position: top;
    z-index: 0;
  }

  &__header {
    position:absolute;
    left:0;
    top:0;
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 1rem;
  }  

  &__title {
    font-family: $title-font-family;
    margin-bottom: .6rem;
    font-weight:700;
    font-size: .9rem;
    margin: 0;
  }

  &__content {
    padding: 0rem 2rem 2rem 2rem;
    text-align:left;
    display: flex;
    flex-direction:column;
    row-gap: 1.2rem;
    height: 100%;
    justify-content: space-between;
  }

  &__content-description {
    line-height: 1.4rem;
  }


  &.card--dark {
    background-color: $card-bg-dark;
    color: $card-text-dark;
  }
}

@media (max-width: 668px) {
  .card {
    max-width: 91vw;

    &__header {
      &__title {
        font-size: .9rem;
      }
    }
  }
}

</style>

<template>
    <a 
    class="card button" 
    :class="{ active: isActive }" 
    href="mailto:brampijper@proton.me"
    target="_blank"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
    >

    <!-- <div class="text-box">
      <span class="left">send love</span>
    </div> -->
    <font-awesome-icon size="4x" :icon="['fass', 'fa-envelope']"/>
    </a>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isActive = ref(false)

    return {
      isActive
    }
  }
}
</script>
<style lang="scss" scoped>

.button {
  position:relative;
}

// .text-box {
//   position:absolute;
//   width: 100%;
//   height: 100%;
  
//   .left {
//     position: absolute;
//     top: 50%;
//     -webkit-transform: translateY(-50%);
//     transform: translateY(-50%);
//     left: -5px;
//     opacity:0;
//     transition: all 0.3s ease;
//   }

//   span {
//     opacity:0;
//   }
// }

.button.active {
  svg {
    color: black;
    transition: .3s ease-out;
  }
  // .left {
  //   opacity: 1;
  //   animation: slide-in 0.5s forwards;
  //   left:20px;
  // }

}

// @keyframes slide-in {
//   0% {
//     left: -5px;
//   }
//   100% {
//     left: 15px;
//   }
// }
  
</style>

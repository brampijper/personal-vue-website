<template>
    <nav :class="store.darkMode ? 'dark' : '' ">
        <div class="toggler">
            <p class="toggler__light">Light</p>
            <div class="toggler__slider">
                <div class="toggler__slider--circle" @click="store.toggleDarkMode()"></div>
            </div>
            <p class="toggler__dark">Dark</p>
        </div>
    </nav>
</template>

<script>
import { store } from '../../store.js';

export default {
    setup() {

        return {
            store
        }   
    }
}
</script>

<style scoped lang="scss">
nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    position:absolute;
}

.toggler {
    display: flex;
    align-items: center;
}

.toggler p {
    font-size: 0.825rem;
    font-weight: 600;
}

.toggler__slider {
    width: 25px;
    height: 13px;
    background-color: #2B283A;
    border-radius: 2rem;
    margin-inline: 7px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    box-sizing: content-box;
}

nav.dark .toggler__slider {
    border-color: white;
    background-color: #F5F5F5;
}

.toggler__slider--circle {
    height: 13px;
    width: 13px;
    background-color: white;
    border-radius: 50%;
}

nav.dark .toggler__slider--circle {
    background-color: black;
}

.toggler__light {
    color: #2B283A;
}

nav.dark .toggler__light {
    color: #918E9B;
}

.toggler__dark {
    color: #918E9B;
}

nav.dark .toggler__dark {
    color: #FFFFFF;
}

nav.dark .toggler__slider {
    justify-content: flex-end;
}

</style>
<template>
    <figure>
        <img src="../assets/images/rick-and-morty.png" alt="">
        <RouterLink to="/characters">
            <h1>- Show all characters -</h1>
        </RouterLink>
        <audio src="../assets/sounds/rickandmorty-theme.mp3" autoplay loop></audio>
    </figure>
    <div class="background"></div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://wallpaperaccess.com/full/476134.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: background-move 80s linear infinite;
    z-index: -1;
    overflow: hidden;
    filter: brightness(0.3);
}

figure {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 4rem;
    font-family: RickAndMorty, sans-serif;
    color: rgba(0, 0, 0, 0.815);
    text-shadow: 0 0 0.75rem var(--lime-color);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
}

h1:hover {
    color: #ffffff91;
    transform: scale(1.04);
}

@keyframes background-move {
    0% {
        background-position: center;

    }

    50% {
        background-position: center 100%;
    }

    100% {
        background-position: center;
    }
}

img {
    width: 600px;
    height: 600px;
    filter: drop-shadow(0 0 0.75rem var(--lime-color));
    animation: rotate 15s linear infinite;
    transform: rotate(-2deg);
}

@keyframes rotate {
    0% {
        transform: rotate(-2deg);
    }

    25% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(2deg);
    }

    75% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-2deg);
    }


}
</style>
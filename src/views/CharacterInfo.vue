<template>
    <div class="container">
        <RouterLink to="/characters">
            <div class="go-back">
                <i class="fa-regular fa-hand-point-left"></i>
                <span>Go back</span>
            </div>
        </RouterLink>
        <section>
            <figure>
                <div class="image-container">
                    <img :src="character.image" :alt="character.name">
                </div>
                <figcaption>
                    <h2>{{ character.name }}</h2>

                    <p><strong>Specie:</strong> {{ character.species }}</p>
                    <p><strong>Origen:</strong> {{ origin.name }}</p>
                    <p><strong>Dimension:</strong> {{ origin.dimension }}</p>
                    <p><strong>Type of dimesion:</strong> {{ origin.type }}</p>
                </figcaption>
            </figure>
            <div class="chapters">
                <h2>Appears in chapters:</h2>
                <span v-for="episode in episodes" :key="episode">{{ episode }}</span>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from '@vue/runtime-core';
import { getById, get } from '../services/http.service';
import { RouterLink } from 'vue-router';

const character = ref({});
const origin = ref({});
const episodes = ref([]);

const props = defineProps({
    id: { type: String, required: true },
});

onMounted(async () => {
    const response = await getById(`character`, props.id);
    character.value = response;
    const originUrl = response.origin.url.split('/')[5];
    console.log(originUrl);
    if (!originUrl) {
        origin.value = {
            name: 'Unknown',
            dimension: 'Unknown',
            type: 'Unknown',
        };
        return;
    } else {
        const originResponse = await get(`location/${originUrl}`);
        origin.value = originResponse;
    }

    episodes.value = response.episode;
    episodes.value = episodes.value.map((url) => getOnlyEpisodies(url));

});

const getOnlyEpisodies = (url) => {
    const episode = url.split('/')[5];
    return episode;
};
</script>

<style scoped>
.container {
    height: 100vh;
    background-color: var(--black-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.go-back {
    position: absolute;
    top: 5%;
    left: 5%;
    font-size: 2rem;
    color: var(--lime-color);
    cursor: pointer;
    font-family: Lato, sans-serif;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease-in-out;
}

.go-back:hover {
    color: var(--white-color);
}

.go-back span {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1rem;
}

section {
    max-width: 1280px;
    width: 100%;
    margin: 1rem auto;
    color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem var(--lime-color);
    font-family: Lato, sans-serif;
}

strong {
    font-weight: 700;
    color: var(--lime-color);
}

figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

figure h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

figure p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.chapters {
    margin-top: 2rem;
    overflow: auto;
}

.chapters h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.chapters span {
    width: 100px;
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;
    background: var(--lime-color);
    color: var(--white-color);
    border-radius: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.315);
}

.image-container {
    height: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.685);
}

.image-container img {
    width: 100%;
    object-fit: cover;
}
</style>
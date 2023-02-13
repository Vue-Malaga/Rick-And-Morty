<template>
    <Header />
    <section class="search">
        <i class="fa-brands fa-searchengin"></i>
        <input type="text" placeholder="Busca un personaje.." v-model="search" @input="filterByName">
    </section>
    <section class="characters">
        <RouterLink v-for="character in characters" :key="character.id"
            :to="{ name: 'characterInfo', params: { id: character.id } }">
            <Character :name="character.name" :image="character.image" :specie="character.species" />
        </RouterLink>
    </section>
    <section class="pagination" v-if="search === ''">
        <i class="fa-solid fa-arrow-left" @click="store.previousPage();"></i>
        <i class="fa-solid fa-arrow-right" @click="store.nextPage()"></i>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';
import { useCharactersStore } from '../stores/characters.store';
import Header from '../components/Header.vue';
import Character from '../components/Character.vue';
const store = useCharactersStore();
const search = ref('');

const characters = computed(() => {
    return store.getCharacters;
})

onMounted(() => {
    store.fetchCharacters();
});

const filterByName = computed(() => {
    store.filterByName(search.value);
});
</script>

<style scoped>
section {
    max-width: 1280px;
    margin: 1rem auto;
}

section.search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
}

section.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

section.pagination i {
    border-radius: 1rem;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    outline: none;
    border-bottom: 3px solid var(--lime-color);
    background-color: var(--lime-color);
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

section.pagination i:hover {
    background-color: var(--white-color);
    color: var(--lime-color);
}

section.search input {
    border: none;
    border-radius: 1rem;
    padding: 0.3rem 1rem;
    margin-left: 1rem;
    font-size: 1.5rem;
    outline: none;
    border-bottom: 3px solid var(--lime-color);
}

section.search i {
    font-size: 2rem;
    color: var(--lime-color);
}

section.characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;

}
</style>
<template>
    <Header />
    <section class="search">
        <i class="fa-brands fa-searchengin"></i>
        <input type="text" placeholder="Busca un personaje.." v-model="search">
    </section>
    <section class="characters">
        <Character v-for="character in characterByName" :key="character.id" :name="character.name"
            :image="character.image" :specie="character.species" />
    </section>
    <section class="pagination">
        <button @click="previous">Anterior</button>
        <button @click="next">Siguiente</button>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from '@vue/runtime-core';
import { charactersStorage } from '../stores/characters.storage';
import Header from './Header.vue';
import Character from './Character.vue';
const store = charactersStorage();
const search = ref('');

const getCharacters = computed(() => {
    return store.getCharacters;
});

const characters = computed(() => {
    return store.characters;
})

onMounted(() => {
    store.fetchCharacters();
});
const next = computed(() => {
    store.nextPage();
});

const previous = computed(() => {
    store.previousPage();
});

const characterByName = computed(() => {
    return characters.value.filter(character => character.name.toLowerCase().includes(search.value.toLowerCase()));
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
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

section.pagination button {
    border: none;
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

section.pagination button:hover {
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}
</style>
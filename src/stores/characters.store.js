import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { get } from "../services/http.service";

export const useCharactersStore = defineStore("characters", () => {
    const characters = ref([]);
    const page = ref(1);

    const fetchCharacters = async () => {
        const response = await get(`character/?page=${page.value}`);
        const results = await response.results;
        characters.value = results;
    };

    const nextPage = () => {
        page.value++;
        fetchCharacters();
    };

    const previousPage = () => {
        if (page.value > 1) {
            page.value--;
            fetchCharacters();
        }
    };

    const filterByName = async (name) => {
        const response = await get(`character/?name=${name}`);
        const results = await response.results;
        characters.value = results;
    };

    const getCharacters = computed(() => characters.value);

    const getPage = computed(() => page.value);

    // Only for testing purposes
    const setPage = (newPage) => {
        page.value = newPage;
    };

    return {
        fetchCharacters,
        nextPage,
        previousPage,
        filterByName,
        getCharacters,
        getPage,
        setPage,
    };
});

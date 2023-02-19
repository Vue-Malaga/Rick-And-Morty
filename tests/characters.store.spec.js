import { setActivePinia, createPinia } from "pinia";
import { useCharactersStore } from "../src/stores/characters.store";

describe("useCharactersStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("fetches characters on mount", async () => {
        const store = useCharactersStore();
        await store.fetchCharacters();
        expect(store.getCharacters).not.toEqual([]);
    });

    test("updates characters on filter by name", async () => {
        const store = useCharactersStore();
        const name = "Rick";
        await store.filterByName(name);
        expect(store.getCharacters).not.toEqual([]);
    });

    test("updates page on next page", async () => {
        const store = useCharactersStore();
        const initialPage = store.getPage;
        await store.nextPage();
        expect(store.getPage).toEqual(initialPage + 1);
    });

    test("does not update page below 1 on previous page", async () => {
        const store = useCharactersStore();
        store.setPage(1);
        const initialPage = store.getPage;
        await store.previousPage();
        expect(store.getPage).toEqual(initialPage);
    });

    test("updates page above 1 on previous page", async () => {
        const store = useCharactersStore();
        store.setPage(2);
        const initialPage = store.getPage;
        await store.previousPage();
        expect(store.getPage).toEqual(initialPage - 1);
    });
});

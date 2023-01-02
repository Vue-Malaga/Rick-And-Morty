import { defineStore } from "pinia";
import { get } from "../services/http.service";

export const charactersStorage = defineStore('characters',{
    state: ()=>({
        characters: [],
        page:1,
    }),
    actions: {
        async fetchCharacters(){
            const response = await get(`character/?page=${this.page}`);
            const results = await response.results;
            this.characters=results;
        },
        nextPage(){
            this.page++;
            this.fetchCharacters();
        },
        previousPage(){
            if(this.page>1){
                this.page--;
                this.fetchCharacters();
            }
        },
        async filterByName(name){
            const response = await get(`character/?name=${name}`);
            const results = await response.results;
            this.characters=results;
        }
    },
    getters:{
        getCharacters(state){
            return state.characters;
        },
    }

})
import { setActivePinia, createPinia } from "pinia";
import Characters from "../src/views/Characters.vue";
import Character from "../src/components/Character.vue";
import { describe, expect, vi } from "vitest";
import { flushPromises, mount, shallowMount } from "@vue/test-utils";
import { nextTick } from "vue";
import router from "../src/router";
describe("Characters.vue", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("exists", () => {
        const wrapper = mount(Characters);
        expect(wrapper.exists()).toBe(true);
    });

    test("check if v-model works", async () => {
        const wrapper = shallowMount(Characters, {
            global: {
                plugins: [router],
            },
        });

        await wrapper.find("input").setValue("rick");

        await flushPromises();

        expect(wrapper.find("input").element.value).toBe("rick");
    });
});

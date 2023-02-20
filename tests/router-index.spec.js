import { setActivePinia, createPinia } from "pinia";
import { flushPromises, mount } from "@vue/test-utils";
import router from "../src/router";
import App from "../src/App.vue";

describe("Router", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should render Home component when visiting "/" route', async () => {
        router.push("/");
        await router.isReady();
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).toContain("Show all characters");
    });

    it('should render Characters component when visiting "/characters" route', async () => {
        router.push("/characters");
        await router.isReady();
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).toContain("Wubba Lubba Dub Dub");
    });

    it('should render CharacterInfo component when visiting "/characters/:id" route', async () => {
        router.push("/characters/1");
        await router.isReady();
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).toContain("Go back");
    });

    it("should redirect to Home component when visiting a non-existent route", async () => {
        router.push("/non-existent");
        await router.isReady();
        const wrapper = mount(App, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).toContain(" Show all characters");
    });
});

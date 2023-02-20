import Home from "./src/views/Home.vue";
import { mount, shallowMount, RouterLinkStub } from "@vue/test-utils";

vi.mock("vue-router");

describe("Home.vue", () => {
    test("exists", () => {
        const wrapper = mount(Home);
        expect(wrapper.exists()).toBe(true);
    });

    test("has a title", () => {
        const wrapper = shallowMount(Home, {
            global: {
                stubs: {
                    RouterLink: RouterLinkStub,
                },
            },
        });

        expect(wrapper.find("h1").text()).toBe("Show all characters");
    });

    test("RouterLink points to correct route", () => {
        const wrapper = shallowMount(Home, {
            global: {
                stubs: {
                    RouterLink: RouterLinkStub,
                },
            },
        });

        expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(
            "/characters"
        );
    });
});

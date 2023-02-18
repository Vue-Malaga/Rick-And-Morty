import Home from "@/views/Home.vue";
import { describe, expect, it, test } from "vitest";
import { mount } from "@vue/test-utils";

vi.mock("vue-router");

test("Home.vue exists", () => {
    expect(Home).toBeTruthy();
});

test("Home.vue has a title", () => {
    const wrapper = mount(Home, {
        global: {
            stubs: ["router-link", "router-view"],
        },
    });
    expect(wrapper.find("h1").text()).toBe("Hello World");
});

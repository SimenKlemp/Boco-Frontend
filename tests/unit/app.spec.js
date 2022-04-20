import App from "@/App";
import { shallowMount } from "@vue/test-utils";
import router from "@/router";

test("Test for rendering app", () => {
  const wrapper = shallowMount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.exists()).toBeTruthy();
});

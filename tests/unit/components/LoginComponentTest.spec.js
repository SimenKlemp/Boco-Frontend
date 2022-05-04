import LoginComponent from "@/components/LoginComponent";
import { mount } from "@vue/test-utils";

describe("LoginComponent", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        userInfo: "",
      },
    };
  });
  test("If the page renders", () => {
    const wrapper = mount(LoginComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    expect(wrapper.login).toMatchSnapshot();
  });
  test("When login button is clicked", () => {});
});

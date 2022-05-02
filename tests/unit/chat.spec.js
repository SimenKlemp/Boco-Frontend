import { mount } from "@vue/test-utils";
import AllChatsView from "@/views/AllChatsView";

describe("Tests for AllChatsView.vue", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myRentals: [
          {
            id: 1,
            item: {
              imageId: 3,
              description: "This is an item",
              user: {
                name: "Navn Navnesen",
              },
            },
          },
        ],
      },
    };
  });
  test("A chat renders correctly, when there is one", () => {
    const wrapper = mount(AllChatsView, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let chatCard = wrapper.find("#chatCard");

    expect(chatCard.exists()).toBeTruthy;
  });

  test("No chat renders, when there is none", () => {
    const $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myRentals: [],
      },
    };
    const wrapper = mount(AllChatsView, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let chatCard = wrapper.find("#chatCard");

    expect(chatCard.exists()).toBeFalsy;
  });
});

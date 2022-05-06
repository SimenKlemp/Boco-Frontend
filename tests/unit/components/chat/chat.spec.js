import { mount } from "@vue/test-utils";
import RentalsActive from "@/views/Rentals/RentalsActive";

describe("Tests for active chat rendering", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myRentalsActive: [
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
  test("Successfully renders existing chat", () => {
    const wrapper = mount(RentalsActive, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let chatCard = wrapper.find("#chatCard");

    expect(chatCard.exists()).toBeTruthy;
  });

  test("Unsuccessfully renders non-existing chat", () => {
    const $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myRentals: [],
      },
    };
    const wrapper = mount(RentalsActive, {
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

describe("Tests for archived chat rendering", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        myRentalsFinished: [
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

  test("Successfully renders existing chat", () => {
    const wrapper = mount(RentalsActive, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let chatCard = wrapper.find("#chatCard");

    expect(chatCard.exists()).toBeTruthy;
  });
});

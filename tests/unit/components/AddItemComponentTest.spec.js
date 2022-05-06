import AddItemComponent from "@/components/AddItemComponent";
import { shallowMount} from "@vue/test-utils";

describe("AddItemComponent", () => {
  let $store;
  beforeEach(() => {
    $store = {
      commit: () => {},
      dispatch: () => {},
      state: {
        currentItem: [
          {
            title: "noe",
            category: "greier",
            description: "noe",
            address: "Mellomveien",
            postalCode: "7018",
            city: "Trondheim",
            price: "500",
            message: "HEI",
          },
        ],
      },
      getters: {
        currentItem: (state) => state.currentItem,
      },
    };
  });
  test("Check if the site renders", () => {
    const $store = {
      state: {
        currentItem: [],
      },
    };
    const wrapper = shallowMount(AddItemComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let addItem = wrapper.find("#AddItemComponent");

    expect(addItem.exists()).toBeTruthy;
  });
  test("test if the output are correct", () => {
    const wrapper = shallowMount(AddItemComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });

    expect(wrapper.attributes("address")).toBe(undefined);
  });
  test("test if the output are correct2", () => {
    const $store = {
      state: {
        currentItem: [],
      },
    };
    const wrapper = shallowMount(AddItemComponent, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let addItem = wrapper.find("#AddItemComponent");

    expect(addItem.vm.title).toBe("noe");
  });
});


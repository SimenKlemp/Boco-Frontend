import { shallowMount } from "@vue/test-utils";
import RequestSystemMessage from "@/components/systemMessages/RequestSystemMessage";

describe("Tests", () => {
  test("Successfully renders component", () => {
    const wrapper = shallowMount(RequestSystemMessage, {
      slice: jest.fn(),
      props: {
        rental: {
          rentalId: -1,
          item: {
            title: "Item",
          },
          user: {
            name: "Navn Navnesen",
          },
        },
      },
    });

    const expectedTitle = "Item";
    const title = wrapper.find("strong");
    const component = wrapper.find(".systemMessageContainer");

    expect(component.exists()).toBeTruthy;
    expect(title.text()).toEqual(expectedTitle);
  });
});

import { mount } from "@vue/test-utils";
import BaseNotification from "@/components/baseTools/BaseNotification";

describe("BaseNotifications", () => {
  let $store;
  beforeEach(() => {
    $store = {
      state: {
        props: {
          notification: {
            rental: {
              rentalId: 74,
              status: null,
              startDate: "startDate",
              endDate: "endDate",
              item: {
                category: "Sportsutstyr",
                description: "gruppesett.",
                imageId: 192,
                isDeliverable: true,
                isPickupable: true,
                itemId: 120,
                lat: 63.4373,
                lng: 10.4354,
                postOffice: "TRONDHEIM",
                postalCode: "7067",
                price: 400,
                publicityDate: "2022-05-06T07:41:13.000+00:00",
                streetAddress: "Thomas Von Westens Gate 2",
                title: "Landeveissykkel",
              },
            },
          },
          status: "ACCEPTED",
        },
      },
    };
  });

  test("If it renders", () => {
    const wrapper = mount(BaseNotification, {
      props: {
        notification: {
          type: Object,
          required: true,
          rental: {
            $store,
            item: $store,
          },
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toBeTruthy;
  });
});

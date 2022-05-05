import { shallowMount } from "@vue/test-utils";
import CustomerCard from "@/components/CustomerCard";

let mockRouter;

beforeEach(() => {
  mockRouter = {
    push: jest.fn(),
  };
});

test("Method goToChat", () => {
  let wrapper = shallowMount(CustomerCard, {
    props: {
      user: {
        email: "magnus@mail.no",
        imageId: null,
        isPerson: true,
        name: "Magnus Farstad",
        postOffice: "Trondheim",
        postalCode: "7031",
        role: "USER",
        streetAddress: "Holtermanns veg 31B",
        userId: 15,
      },
      rental: {
        rentalId: 74,
        status: null,
        startDate: "startDate",
        endDate: "endDate",
        user: {
          email: "test16@test.no",
          imageId: 111,
          isPerson: true,
          name: "Andreas Dahle",
          postOffice: "OSLO",
          postalCode: "1237",
          role: "USER",
          streetAddress: "Address 1",
          userId: 2,
        },
      },
    },
    global: {
      mocks: {
        $router: mockRouter,

      },
    },
  });

  wrapper.vm.goToChat();

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  /*
  expect(mockRouter.push).toHaveBeenCalledWith({
    name: "AddItemComponent",
  });

   */
});

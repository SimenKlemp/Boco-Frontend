import { shallowMount } from "@vue/test-utils";
import CustomerCard from "@/components/CustomerCard";
import axios from "axios";
import { getMeanRating } from "@/service/apiService";

let mockRouter;
let mockRoute;
let $store;

jest.mock("axios");

beforeEach(() => {
  $store = {
    commit: () => {},
    dispatch: () => {},
    state: {
      token: "token",
      userInfo: {
        email: "marius@email.no",
        imageId: 118,
        isPerson: true,
        name: "Marius Klemp Petersen",
        postOffice: "OSLO",
        postalCode: "7030",
        role: "USER",
        streetAddress: "Magnus den Godes gate 8",
        userId: 12,
      },
    },
  };
  mockRouter = {
    push: jest.fn(),
  };
});

test("Method goToChat", async () => {
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
        $store,
        $router: mockRouter,
      },
    },
  });
  const expectedMeanRatingStatus = { status: "Success" };
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: expectedMeanRatingStatus })
  );

  const getMeanRatingRequest = {};
  try {
    const getMeanRatingesponse = await getMeanRating(getMeanRatingRequest);
    expect(expectedMeanRatingStatus).toEqual(getMeanRatingesponse);
  } catch (err) {
    (err.toString());
  }

  await wrapper.vm.goToChat();

  expect(mockRouter.push).toHaveBeenCalledTimes(1);

  expect(mockRouter.push).toHaveBeenCalledWith({
    name: "MessageView",
  });
});

describe("Successfully renders outcome of switch", () => {
  test("Successfully returns 'Akseptert'", () => {
    let wrapper = shallowMount(CustomerCard, {
      props: {
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
        status: "ACCEPTED",
      },
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    let expectedStatus = "ACCEPTED";
    let statusReceived = wrapper.vm.status;

    expect(statusReceived.text).toEqual(expectedStatus.text);
  });
  test("Successfully returns 'Aktiv'", () => {
    let wrapper = shallowMount(CustomerCard, {
      props: {
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
        status: "ACTIVE",
      },
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    let expectedStatus = "ACTIVE";
    let statusReceived = wrapper.vm.status;

    expect(statusReceived.text).toEqual(expectedStatus.text);
  });
  test("Successfully returns 'Avventer'", () => {
    let wrapper = shallowMount(CustomerCard, {
      props: {
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
        status: "PENDING",
      },
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    let expectedStatus = "PENDING";
    let statusReceived = wrapper.vm.status;

    expect(statusReceived.text).toEqual(expectedStatus.text);
  });
  test("Successfully returns 'Avvist'", () => {
    let wrapper = shallowMount(CustomerCard, {
      props: {
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
        status: "REJECTED",
      },
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    let expectedStatus = "REJECTED";
    let statusReceived = wrapper.vm.status;

    expect(statusReceived.text).toEqual(expectedStatus.text);
  });
  test("Successfully returns 'Kansellert'", () => {
    let wrapper = shallowMount(CustomerCard, {
      props: {
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
        status: "CANCELED",
      },
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    let expectedStatus = "CANCELED";
    let statusReceived = wrapper.vm.status;

    expect(statusReceived.text).toEqual(expectedStatus.text);
  });
});

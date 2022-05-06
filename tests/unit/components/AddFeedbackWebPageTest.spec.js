import { shallowMount } from "@vue/test-utils";
import AddFeedbackWebPageComponent from "@/components/AddFeedbackWebPageComponent";
import axios from "axios";
import { doRegisterFeedbackWebPage } from "@/service/apiService";

let mockRouter;
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

test("Submit method works", async () => {
  const wrapper = shallowMount(AddFeedbackWebPageComponent, {
    global: {
      mocks: {
        $store,
        $router: mockRouter,
      },
    },
  });

  const expectedFeedbackResponse = { description: "Veldig bra side!" };

  axios.post.mockImplementation(() =>
    Promise.resolve({ data: expectedFeedbackResponse })
  );

  const createFeedbackRequest = {
    description: "Veldig bra side!",
    userId: 2,
  };
  const feedbackResponse = await doRegisterFeedbackWebPage(
    createFeedbackRequest,
    "hei"
  );

  expect(expectedFeedbackResponse.description).toEqual(
    feedbackResponse.data.description
  );

  await wrapper.vm.submit();

  //expect(mockRouter.push).toHaveBeenCalledTimes(1);

  expect(mockRouter.push).toHaveBeenCalledWith({
    name: "HomeView",
  });
});

import { shallowMount } from "@vue/test-utils";
import RegistrationComponent from "@/components/RegistrationComponent";

describe("RegistrationComponent.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(RegistrationComponent);
  });
  it("email includes @", () => {
    expect(wrapper.setData({ email: "".includes("@") }));
  });

  it("password more then 6 letters", () => {
    expect(wrapper.setData({ password: "".repeat(6) }));
  });

  it("Postalcode is a 4 digit number", () => {
    wrapper.setData({ postalcode: "".slice("0000", "9999") });
    //expect(wrapper.setData({ postalcode: "" })).toBeLessThanOrEqual(9999);
  });
});

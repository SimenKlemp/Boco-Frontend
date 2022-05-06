import RegistrationView from "@/views/RegistrationView"

describe("RegistrationView", ()=> {
    test("If it exist", () => {
        const wrapper = mount(RegistrationView)

        expect(wrapper.exists()).toBe(true)
    })
})
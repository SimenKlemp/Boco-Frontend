import {mount} from "@vue/test-utils";
import HomeComponent from "@/components/HomeComponent"

describe("HomeComponent", () => {

    test("Renders the home page", () => {
        const wrapper = mount(HomeComponent)

        let home = wrapper.find("#HomeComponent")
        expect(home.exists()).toBeTruthy
    });

    test("Check if search bar exist", () => {
        const wrapper = mount(HomeComponent)

        let home = wrapper.find("BaseSearchBar")
        expect(home.exists())
    })
})
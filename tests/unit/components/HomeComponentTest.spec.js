import {flushPromises, mount} from "@vue/test-utils";
import HomeComponent from "@/components/HomeComponent"

let url = "http://8085/api/item/search"
let data = "noe"

const mockHttp = {
    get: (_url, _data) => {
        return new Promise((resolve, reject) => {
            url = _url
            data = _data
            resolve()
        })
    }
}
const $store = {
    commit: () => {},
    dispatch: () => {},
    state: {
    },
}
const mockRoute = {
    params: {
        id: 1
    }
}
const mockRouter = {
    push: jest.fn()
}

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
    });

    test(
        "Renders a new site when searching", async () => {
        const wrapper = mount(HomeComponent, {
            global: {
                mocks: {
                    $http: mockHttp,
                    $store,
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })

        await wrapper.find("[data-search]")
        await wrapper.find("form").trigger("submit")

        await flushPromises()

        expect(url).toBe("http://8085/api/item/search")
        expect(data).toEqual("noe")
    })

})
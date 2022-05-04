import LoginComponent from "@/components/LoginComponent";
import {flushPromises, mount} from "@vue/test-utils";
import {doLogin} from "@/service/apiService";


describe("LoginComponent", () => {
    let $store;
    beforeEach( () => {

        $store = {
            commit: () => {},
            dispatch: () => {},
            state: {
                userInfo: [
                    {   id: 1,
                        email: "test@test.no",
                        password: "passord"
                    }
                ]
            },
        }
    });
    test("If the page renders", () => {
        const wrapper = mount(LoginComponent, {
            global: {
                mocks: {
                    $store,
                },
            },
        });

        expect(wrapper.login).toMatchSnapshot();
    });
    test("When login button is clicked and you are a registered user", async () =>{

        const mockRoute = {
            params: {
                id: 1
            }
        }
        const mockRouter = {
            push: jest.fn()
        }
        const wrapper = mount(doLogin, {
            id: 1,
            email: "test@test.no",
            passord: "passord",
            global: {
                mocks: {
                    $store,
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })
        await wrapper.find(doLogin("test@test.no", "passord"))
       expect(mockRouter.push).toHaveBeenCalledTimes(0)
    });

})
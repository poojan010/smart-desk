import { act, render, screen, userEvent } from "@testing-library/react-native";

import LoginForm from "@/components/LoginForm";

describe("<LoginForm/>", () => {

    // test("Snapshot", () => {
    //     const onSubmitMock = jest.fn()
    //     const { toJSON } = render(<LoginForm onSubmit={onSubmitMock} />)

    //     expect(toJSON()).toMatchSnapshot()
    // })

    test("LoginForm renders correctly", () => {
        const onSubmitMock = jest.fn()
        render(<LoginForm onSubmit={onSubmitMock} />)

        screen.getByTestId("email-input")
        screen.getByTestId("password-input")
        screen.getByTestId("submit-button")
    })

    test("User can enter values into input fields",async () => {
        const onSubmitMock = jest.fn()
        render(<LoginForm onSubmit={onSubmitMock} />)

        const user = userEvent.setup();

        const emailInput = screen.getByTestId("email-input")
        const passwordInput = screen.getByTestId("password-input")

        const emailValue = "abcd@test.com"
        const passwordValue = "password123"

        await act(async () => {
            await user.type(emailInput,emailValue)
        });
        
        await act(async () => {
            await user.type(passwordInput,passwordValue)
        });
        
        expect(emailInput.props.value).toBe(emailValue);
        expect(passwordInput.props.value).toBe(passwordValue);
    })

    test("onSubmit is called with correct values when submitting the form",async () => {
        const onSubmitMock = jest.fn()

        render(<LoginForm onSubmit={onSubmitMock} />)

        const user = userEvent.setup();

        const emailInput = screen.getByTestId("email-input")
        const passwordInput = screen.getByTestId("password-input")
        const button = screen.getByTestId("submit-button")

        const emailValue = "abcd@test.com"
        const passwordValue = "password123"

        await act(async () => {
            await user.type(emailInput,emailValue)
        });
        
        await act(async () => {
            await user.type(passwordInput,passwordValue)
        });
        
        await act(async () => {
            await user.press(button)
        });

        expect(onSubmitMock).toHaveBeenCalledWith({
            email: emailValue,
            password: passwordValue
        })
    })

})
import { render, screen, userEvent, act } from "@testing-library/react-native";

import Button from "@/components/Button";


describe("<Button/>", () => {

    test("Snapshot", () => {
        const { toJSON } = render(<Button text="hello" />)

        expect(toJSON()).toMatchSnapshot()
    })

    test("Button Renders correctly", () => {
        render(<Button text="hello" />)

        screen.getByTestId("button")
        screen.getByText("hello")
    })

    test("Button onPress works correctly",async () => {
        const user = userEvent.setup();

        const onPressMock = jest.fn()

        render(<Button text="Submit" onPress={onPressMock} />);

        const button = screen.getByTestId("button")

        await act(async () => {
            await user.press(button);
        });

        expect(onPressMock).toHaveBeenCalled()
    })
})
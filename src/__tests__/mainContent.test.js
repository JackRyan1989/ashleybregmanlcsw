import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom/extend-expect";
import MainContent from "./src/components/main_content.svelte";

test("displays an h1" , () => {
    const { getByText } = render(MainContent);
    expect(getByText("Main Content Section")).toBeInTheDocument();
});

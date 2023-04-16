import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import FormCardsList from "@/components/Form/FormCardsList/FormCardsList";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("render FormCard component", () => {
  render(
    <Provider store={store}>
      <FormCardsList />
    </Provider>
  );
  const element = screen.getByText(/The Card List is empty/i);
  expect(element).toBeInTheDocument();
});

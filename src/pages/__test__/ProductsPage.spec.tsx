import { ReactNode } from "react";
import { test } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";

import { AppProvider } from "../../context/AppProvider.tsx";
import { ProductsPage } from "../ProductsPage.tsx";

test("Loads and displays title", async () => {
    renderComponent(<ProductsPage />);

    await screen.findAllByRole("heading", { name: "Product price updater" });
});

function renderComponent(component: ReactNode): RenderResult {
    return render(<AppProvider>{component}</AppProvider>);
}

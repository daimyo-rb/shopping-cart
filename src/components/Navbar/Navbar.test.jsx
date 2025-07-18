import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

describe("ShopItem component", () => {
  it("clicking Home link changes route to '/'", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Navbar cartCount={0} />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    await user.click(homeLink);

    // Assert that the Home Page component shows after clicking
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
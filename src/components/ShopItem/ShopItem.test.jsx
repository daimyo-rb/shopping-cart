import { beforeEach, afterEach, vi, describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItem from "./ShopItem";

describe("ShopItem component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            image: 'https://example.com/image.jpg',
            price: 9.99,
            title: 'Test Product',
          }),
      })
    );
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('verify fetch renders on card', async () => {
    render(<ShopItem prodId="1" setCartCount={()=>{}}/>);
    await waitFor(() => {
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('9.99')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
  });
  it('decrement on click', async () => {
    render(<ShopItem prodId="1" setCartCount={()=>{}}/>);
    const plusBtn= screen.getByText('-');
    const input = screen.getByRole('textbox');
    await userEvent.click(plusBtn);
    expect(input).toHaveValue('0');
  });
  it('decrement check not negative on click', async () => {
    render(<ShopItem prodId="1" setCartCount={()=>{}}/>);
    const plusBtn= screen.getByText('-');
    const input = screen.getByRole('textbox');
    await userEvent.click(plusBtn);
    await userEvent.click(plusBtn);
    expect(input).toHaveValue('0');
  });
  it("increment on click", async () => {
    render(<ShopItem prodId="1" setCartCount={()=>{}}/>);
    const plusBtn= screen.getByText('+');
    const input = screen.getByRole('textbox');
    await userEvent.click(plusBtn);
    expect(input).toHaveValue('2');
  });
  it('allow user to type quantity', async () => {
    render(<ShopItem prodId="1" setCartCount={()=>{}}/>);
    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '5');
    expect(input).toHaveValue('5');
  });
  it('submit the form calls setCartCount and resets input', async () => {
    let mockSetCartCount = vi.fn();
    render(<ShopItem prodId="1" setCartCount={mockSetCartCount} />);
    const input = screen.getByRole('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '3');
    
    const button = screen.getByText(/add to cart/i);
    await userEvent.click(button);

    expect(mockSetCartCount).toHaveBeenCalledWith(expect.any(Function));

    // simulate updating cart count
    const updateFn = mockSetCartCount.mock.calls[0][0];
    expect(updateFn(2)).toBe(5); // if current cart count is 2 + 3 = 5

    expect(input).toHaveValue('1'); // input resets after submit
  });
});
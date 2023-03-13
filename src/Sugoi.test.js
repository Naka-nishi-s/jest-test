import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sugoi } from "./Sugoi";

test("should text change when click button", async () => {
  render(<Sugoi />);

  // すごいボタンを取得
  // const button = screen.getByRole("button");
  const button = screen.getByRole("button", { name: "すごいボタン" });
  const text = screen.getByText("すごカウント:0");

  expect(text).toBeInTheDocument();
  await userEvent.click(button);
  expect(screen.getByText("すごカウント:1")).toBeInTheDocument();
});

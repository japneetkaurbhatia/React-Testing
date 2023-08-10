import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { getUser } from "./getUser";
import { mocked } from "ts-jest/utils";
import userEvent from "@testing-library/user-event";
import FormBox from "./FormBox";

const onChange = jest.fn();

describe("fireEvent", () => {
  test("should display text on screen when we typed color", async () => {
    render(<FormBox labelText="Add your name" value="" onChange={onChange} placeholder="name" />);

    fireEvent.change(screen.getAllByRole("textbox")[0], {
      target: { value: "Japneet" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

describe("userEvent", () => {
  test("should display text on screen when we typed color", async () => {
    render(<FormBox labelText="Add your name" value="" onChange={onChange} placeholder="name" />);

    await userEvent.type(screen.getAllByRole("textbox")[0], "Japneet");
    expect(onChange).toHaveBeenCalledTimes(7);
  });
});

//FireEvent called when whole functions is complete (whole text execute)
//UserEvent called char by char

/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import CheckBoxWithLabel from "./CheckBoxWithLabel";

//Running cleaup afterEach is done automatically for you - version 9
//Unmout and cleaup DOM after the test is finished
afterEach(cleanup);

it("CheckboxWithlLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckBoxWithLabel labelOn="On" labelOff="off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  act(() => {
    fireEvent.click(getByLabelText(/off/i));
  });

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

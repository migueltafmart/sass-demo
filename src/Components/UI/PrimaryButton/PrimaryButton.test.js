import React from "react";
import { shallow } from "enzyme";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PrimaryButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

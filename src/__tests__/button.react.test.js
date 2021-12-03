import React from "react";
import Button, { PrimaryButton } from "../components/Button";

import renderer from "react-test-renderer";

it("Default Button renders correctly", () => {
  const tree = renderer.create(<Button>Default Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

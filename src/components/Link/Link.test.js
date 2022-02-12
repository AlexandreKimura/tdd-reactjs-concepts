import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

test("Link changes the class when hovered", () => {
  const { act, create } = renderer;

  const component = create(<Link page="http://facebook.com">Facebook</Link>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //Manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });

  //Re renderizando

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  //Manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });

  //Re renderizando

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

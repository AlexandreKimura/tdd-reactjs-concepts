/* eslint-disable testing-library/no-unnecessary-act */
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HelloWorld from "./HelloWorld";

let container = null;

beforeEach(() => {
  //Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// act(() => {
//   //Renderizar components ou eventos de usuário
// });

// //Fazer declarações de testes

it("Render component with or without a name", () => {
  act(() => {
    render(<HelloWorld />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<HelloWorld name="Jenny" />, container);
  });

  expect(container.textContent).toBe("Hello, Jenny");

  act(() => {
    render(<HelloWorld name="Margareth" />, container);
  });

  expect(container.textContent).toBe("Hello, Margareth");
});

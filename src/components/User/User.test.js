/* eslint-disable testing-library/no-unnecessary-act */
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";

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

it("Render user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Usar a versão assíncrona do act para aplicar Promises resolvidas
  await act(async () => {
    render(<User id="123" />, container);
  });

  //Usar a versão assíncrona do act para aplicar Promises resolvidas
  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  //Remover o mock para garantir que os testes estão completamente isolados
  global.fetch.mockRestore();
});

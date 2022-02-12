import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("Should use counter", () => {
  const { result } = renderHook(() => useCounter(9000));

  // expect(result.current.count).toBe(0);
  // expect(typeof result.current.increment).toBe("function");

  act(() => {
    result.current.increment();
  });

  // expect(result.current.count).toBe(1);
  expect(result.current.count).toBe(9001);
});

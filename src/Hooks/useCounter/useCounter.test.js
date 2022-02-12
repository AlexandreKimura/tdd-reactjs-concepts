import { renderHook, act } from "@testing-library/react-hooks";
import useCounter, { CounterStepProvider } from "./useCounter";

// test("Should reset counter to update initial value", () => {
//   let initialValue = 0;
//   const { result, rerender } = renderHook(() => useCounter(initialValue));

//   initialValue = 10;
//   rerender();

//   // expect(result.current.count).toBe(0);
//   // expect(typeof result.current.increment).toBe("function");

//   act(() => {
//     //result.current.increment();
//     result.current.reset();
//   });

//   // expect(result.current.count).toBe(1);
//   //expect(result.current.count).toBe(9001);
//   expect(result.current.count).toBe(10);
// });

// test("Should reset counter to update initial value with multiple params", () => {
//   const { result, rerender } = renderHook(
//     ({ initialValue }) => useCounter(initialValue),
//     { initialProps: { initialValue: 0 } }
//   );

//   rerender({ initialValue: 10 });

//   act(() => {
//     result.current.reset();
//   });

//   expect(result.current.count).toBe(10);
// });

// test("Should use custom step when incrementing", () => {
//   const wrapper = ({ children, step }) => (
//     <CounterStepProvider step={step}>{children}</CounterStepProvider>
//   );

//   const { result, rerender } = renderHook(() => useCounter(), {
//     wrapper,
//     initialProps: {
//       step: 2,
//     },
//   });

//   act(() => {
//     result.current.increment();
//   });

//   expect(result.current.count).toBe(2);

//   //Change the step value
//   rerender({ step: 8 });

//   act(() => {
//     result.current.increment();
//   });

//   expect(result.current.count).toBe(10);
// });

test("Testing async increment", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCounter());

  result.current.incrementAsync();

  await waitForNextUpdate();

  expect(result.current.count).toBe(1);
});

import { useState, useCallback } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount((x) => x + 1), []);

  return { count, increment };
};

export default useCounter;

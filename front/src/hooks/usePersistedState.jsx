import { useEffect, useState } from "react";

export const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const storagedState = localStorage.getItem(key);
    console.log(storagedState);
    console.log(initialState);
    return !storagedState ? initialState : JSON.parse(storagedState);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

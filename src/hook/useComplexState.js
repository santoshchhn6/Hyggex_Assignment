import { useState } from "react";

const useComplexState = (initialState) => {
  const [state, setState] = useState(initialState);

  const setProperty = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return [state, setProperty];
};

export default useComplexState;

/* eslint-disable import/no-anonymous-default-export */
import { useState, useCallback } from "react";

export default (initValue = "") => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler, setter];
};


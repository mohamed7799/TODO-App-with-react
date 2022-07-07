import { useEffect, useState } from "react";

const getSavedValue = (key, initVal) => {
  const savedVal = JSON.parse(localStorage.getItem(key));
  if (savedVal) return savedVal;
  return initVal;
};

const useLocalStorage = (key, initVal) => {
  const [value, setTheme] = useState(() => {
    return getSavedValue(key, initVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setTheme];
};

export default useLocalStorage;

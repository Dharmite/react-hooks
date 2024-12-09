import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: string | null) {  
  // Custom hooks are reusable functions that contain hooks.
  // They can be shared between components.
  // https://reactjs.org/docs/hooks-custom.html

const [value, setValue] = useState<string | null>(localStorage.getItem(key) ?? initialValue);

  useEffect(() => {
    localStorage.setItem(key, String(value));
  }, [value, key, initialValue]);

  return [value, setValue] as const;
}

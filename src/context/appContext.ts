import { createContext } from "react";
export interface AppContextProps {
  phoneNumber?: string;
}

export const AppContext = createContext<AppContextProps>({});

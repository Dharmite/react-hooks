import { ReactNode } from "react";
import { AppContext } from "./appContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
    const phoneNumber = '913130447' // random phone number
    return <AppContext.Provider value={{phoneNumber}}>{children}</AppContext.Provider>;
};

export default AppProvider;
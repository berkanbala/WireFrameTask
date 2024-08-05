import { createContext, useContext, useState } from "react";

const AppContext = createContext({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({}as any);

  return (
    <AppContext.Provider
      value={{
        auth: {
          user,
          setUser,
        },
      }}
    ></AppContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

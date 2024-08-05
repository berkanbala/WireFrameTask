import { createContext, useContext, useState } from "react";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as any);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
        auth: {
          user,
          setUser,
        },
        modals: {
          loginModalVisible,
          setLoginModalVisible,
          signUpModalVisible,
          setSignUpModalVisible,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface IAppContext {
  auth: {
    user: string;
    setUser: (_val: any) => void;
  };
  modals: {
    loginModalVisible: boolean;
    setLoginModalVisible: (loginModalVisible: boolean) => void;
    signUpModalVisible: boolean;
    setSignUpModalVisible: (loginModalVisible: boolean) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

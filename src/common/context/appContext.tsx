import { createContext, useContext, useState } from "react";
import { IUser } from "../models/user";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{
        auth: {
          userInfo,
          setUserInfo,
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
    userInfo: IUser;
    setUserInfo: (_val: any) => void;
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

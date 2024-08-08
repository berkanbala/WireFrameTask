import { IUser } from "../models/user";
import { IJobsData } from "../models/jobs";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState<IJobsData[]>([]);

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
        jobs: {
          appliedJobs,
          setAppliedJobs,
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
  jobs: {
    appliedJobs: IJobsData[];
    setAppliedJobs: (_val: any) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

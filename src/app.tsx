import { AppRoutes } from "./routes/appRoutes";
import { AppContextProvider } from "./common/context/appContext";

export const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};

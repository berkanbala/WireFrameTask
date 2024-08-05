import { AppContextProvider } from "./common/context/appContext";
import { AppRoutes } from "./routes/appRoutes";

export const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};

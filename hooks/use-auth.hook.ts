import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [userData, setUserData] = React.useState<any>({
    authToken: undefined,
    authUser: undefined,
  });

  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const authUserData = React.useMemo(() => {
    return userData;
  }, [isAuthenticated]);

  const checkAuthStatus = async () => {
    try {
      const [authStatus, authToken, authUser] = await Promise.all([
        AsyncStorage.getItem("isAuthenticated"),
        AsyncStorage.getItem("authToken"),
        AsyncStorage.getItem("authUser"),
      ]);

      const isValid = Boolean(
        authStatus === "1" && authToken !== null && authUser !== null
      );
      setIsAuthenticated(isValid);
      setUserData({ authToken, authUser: JSON.parse(authUser as any) });

      return isValid;
    } catch (error) {
      setIsAuthenticated(false);

      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const redirectHomeIfAuthenticated = async () => {
    const checkIsAuthenticated = await checkAuthStatus();

    if (checkIsAuthenticated) {
      router.push("/(app)/home/overview");
    } else {
      router.push("/(app)/auth/signin");
    }
  };

  const isCurrentUserAdmin = () => {
    if (userData.authUser) {
      return userData.authUser.isAdmin;
    }

    return false;
  };

  return {
    isAuthenticated,
    isLoading,
    authUserData,
    isCurrentUserAdmin,
    checkAuthStatus,
    redirectHomeIfAuthenticated,
  };
};

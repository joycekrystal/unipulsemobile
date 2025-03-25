import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-alert";
import { useRouter } from "expo-router";
import { useApi } from "@/hooks";
import { API_ROUTES } from "@/constants";
import { type SigninApiResponse } from "@/types/auth.type";
import { type SetLoadingType } from "@/types/common.type";

type SigninCredentials = {
  studentId: string;
  password: string;
};

type SignupDetails = {
  studentId: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};

export const useAuthService = () => {
  const router = useRouter();
  const { $baseApi } = useApi();

  const signinUser = async (
    credentials: SigninCredentials,
    setLoading: SetLoadingType
  ) => {
    return await $baseApi
      .post<SigninApiResponse>(API_ROUTES.AUTH_SIGNIN, credentials)
      .then(async (response) => {
        const { authToken, user } = response.data;

        await AsyncStorage.setItem("isAuthenticated", "1");
        await AsyncStorage.setItem("authToken", authToken);
        await AsyncStorage.setItem("authUser", JSON.stringify(user));

        Toast.info("Signed-in successfully, redirecting ...");

        setTimeout(() => {
          router.replace("/(app)/home/overview");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        Toast.error("Failed to sign-in, please try again later");
        setLoading(false);
      });
  };

  const signupUser = async (
    userDetails: SignupDetails,
    setLoading: SetLoadingType
  ) => {
    return await $baseApi
      .post<SigninApiResponse>(API_ROUTES.AUTH_SIGNUP, userDetails)
      .then((response) => {
        Toast.info("Account created, please sign-in");
        router.replace("/(app)/auth/signin");
      })
      .catch((error) => {
        console.log(error);
        Toast.error("Failed to create account, please try again later");

        if (error.response?.status === 422) {
          Toast.error("Student ID/E-mail already used, please try again");
          return;
        }
      })
      .finally(() => setLoading(false));
  };

  const signoutUser = async () => {
    await AsyncStorage.multiRemove([
      "isAuthenticated",
      "authToken",
      "authUser",
    ]).then(() => {
      router.replace("/(app)/auth/signin");
      Toast.warning("You've signed-out successfully");
    });
  };

  return {
    signinUser,
    signupUser,
    signoutUser,
  };
};

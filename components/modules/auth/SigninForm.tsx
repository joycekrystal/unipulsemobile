import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppTextInput,
  AppCheckbox,
  AppLink,
  AppButton,
} from "@/components/app";
import { useAuthService } from "@/services";
import { authSchemas } from "@/schemas";
import { type SignInFormData } from "@/types/auth.type";
import { router } from "expo-router";

export const SigninForm: React.FC = () => {
  const { signinUser } = useAuthService();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(authSchemas.signInSchema),
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFormSubmit = async (formData: SignInFormData) => {
    setLoading(true);
    return await signinUser(formData, setLoading);
  };

  const handleRedirectSignUp = () => {
    router.push("/(app)/auth/signup");
  };

  return (
    <View className="w-full flex flex-col gap-4">
      <Controller
        control={control}
        name="studentId"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Account ID"
            value={value}
            onChangeText={onChange}
            title="Student ID"
            error={errors.studentId?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            title="Password"
            error={errors.password?.message}
          />
        )}
      />

      <View className="flex flex-row justify-between">
        <AppCheckbox title="Remember me" titleClassName="text-sm text-white" />
        <AppLink
          href="#"
          title="Forgot password?"
          titleClassName="text-sm text-blue-100 underline underline-offset-4"
        />
      </View>

      <AppButton
        title="Sign in"
        className="bg-[#58E99C] w-full rounded-full items-center p-3 mt-3"
        titleClassName="text-lg text-black font-bold"
        loading={loading}
        onPress={handleSubmit(handleFormSubmit)}
      />
      <AppButton
        title="Create an Account"
        className="border border-[#58E99C] w-full rounded-full items-center p-3 mt-2"
        titleClassName="text-lg text-white font-bold"
        onPress={handleRedirectSignUp}
      />
    </View>
  );
};

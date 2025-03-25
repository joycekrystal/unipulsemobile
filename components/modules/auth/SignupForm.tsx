import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppTextInput, AppLink, AppButton } from "@/components/app";
import { useAuthService } from "@/services";
import { authSchemas } from "@/schemas";
import { type SignUpFormData } from "@/types/auth.type";

export const SignupForm: React.FC = () => {
  const router = useRouter();
  const { signupUser } = useAuthService();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      studentId: "123",
      password: "123",
      email: "name@domain.com",
      firstName: "firstName",
      lastName: "lastName",
    },
    resolver: zodResolver(authSchemas.signUpSchema),
  });

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFormSubmit = async (formData: SignUpFormData) => {
    setLoading(true);
    return await signupUser(formData, setLoading);
  };

  const handleRedirectSignIn = () => {
    router.push("/(app)/auth/signin");
  };

  return (
    <View className="w-full flex flex-col gap-4">
      <Controller
        control={control}
        name="studentId"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Student ID"
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

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="E-mail"
            value={value}
            onChangeText={onChange}
            title="E-mail"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="First Name"
            value={value}
            onChangeText={onChange}
            title="First Name"
            error={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Last Name"
            value={value}
            onChangeText={onChange}
            title="Last Name"
            error={errors.lastName?.message}
          />
        )}
      />

      <AppButton
        title="Create Account"
        className="bg-[#58E99C] w-full rounded-full items-center p-3 mt-3"
        titleClassName="text-lg text-black font-bold"
        loading={loading}
        onPress={handleSubmit(handleFormSubmit)}
      />

      <AppButton
        title="Back to Sign-in"
        className="border border-[#58E99C] w-full rounded-full items-center p-3 mt-2"
        titleClassName="text-lg text-white font-bold"
        onPress={handleRedirectSignIn}
      />
    </View>
  );
};

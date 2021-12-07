import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useSignupForm from "@/contexts/signupForm";

import Button from "@/components/ui/Button";
import AnimatedCard from "@components/ui/AnimatedCard";
import Input from "@components/ui/Input";

const schema = yup.object({
  email: yup
    .string()
    .email("A valid email is required")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
});

export default function ProfileForm() {
  const navigate = useNavigate();
  const { profile, setProfile } = useSignupForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitHandler = (data) => {
    setProfile(data);
    navigate("/social");
  };

  return (
    <AnimatedCard>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <h2 className="text-lg font-medium leading-6 text-gray-600">
          Tell us about yourself
        </h2>
        <div className="flex flex-col mt-1">
          <Input
            type="text"
            name="name"
            label="What's your name"
            className="mb-2"
            {...register("name")}
            error={errors.name?.message}
            defaultValue={profile.name}
          ></Input>
          <Input
            type="email"
            name="email"
            label="What's your email"
            {...register("email")}
            error={errors.email?.message}
            defaultValue={profile.email}
          ></Input>
        </div>
        <div className="flex justify-end w-full mt-4">
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </AnimatedCard>
  );
}

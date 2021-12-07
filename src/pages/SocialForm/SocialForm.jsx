import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useSignupForm from "@/contexts/signupForm";

import Button from "@/components/ui/Button";
import Card from "@components/ui/Card";
import Input from "@components/ui/Input";

const schema = yup.object({
  facebook: yup.string().required("Facebook is required"),
  twitter: yup.string().required("Twitter is required"),
});

export default function SocialForm() {
  const navigate = useNavigate();
  const { social, setSocial } = useSignupForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitHandler = (data) => {
    setSocial(data);
    navigate("/review");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <h2 className="text-lg font-medium leading-6 text-gray-600">
          How can we find you in social media?
        </h2>
        <div className="flex flex-col mt-1">
          <Input
            type="text"
            name="facebook"
            label="What's your facebook"
            className="mb-2"
            {...register("facebook")}
            error={errors.facebook?.message}
            defaultValue={social.facebook}
          ></Input>
          <Input
            type="text"
            name="twitter"
            label="What's your twitter"
            {...register("twitter")}
            error={errors.twitter?.message}
            defaultValue={social.twitter}
          ></Input>
        </div>
        <div className="flex justify-end w-full mt-4">
          <Button type="submit">Next Step</Button>
        </div>
      </form>
    </Card>
  );
}

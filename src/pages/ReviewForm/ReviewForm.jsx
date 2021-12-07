import Button from "@/components/ui/Button";
import AnimatedCard from "@components/ui/AnimatedCard";
import Input from "@components/ui/Input/Input";

import useSignupForm from "@/contexts/signupForm";

export default function ReviewForm() {
  const { profile, social } = useSignupForm();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("You are submitting!");
  };

  return (
    <AnimatedCard>
      <form onSubmit={submitHandler}>
        <h2 className="text-lg font-medium leading-6 text-gray-600">
          Review your info
        </h2>
        <div className="flex flex-col mt-1">
          <Input
            type="text"
            name="name"
            label="Name"
            className="mb-2"
            disabled={true}
            defaultValue={profile?.name}
          ></Input>
          <Input
            type="email"
            name="email"
            label="Email"
            className="mb-2"
            disabled={true}
            defaultValue={profile?.email}
          ></Input>
          <Input
            type="text"
            name="facebook"
            label="Facebook"
            className="mb-2"
            disabled={true}
            defaultValue={social?.facebook}
          ></Input>
          <Input
            type="text"
            name="twitter"
            label="Twitter"
            className="mb-2"
            disabled={true}
            defaultValue={social?.twitter}
          ></Input>
        </div>
        <div className="flex justify-end w-full mt-4">
          <Button type="submit">Submit All Info</Button>
        </div>
      </form>
    </AnimatedCard>
  );
}

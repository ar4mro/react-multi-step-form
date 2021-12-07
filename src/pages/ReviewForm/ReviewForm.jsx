import Button from "@/components/ui/Button";
import Card from "@components/ui/Card";
import Input from "@components/ui/Input/Input";

import useSignupForm from "@/contexts/signupForm";

export default function ReviewForm() {
  const { profile, social } = useSignupForm();

  return (
    <Card>
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
          value={profile?.name}
        ></Input>
        <Input
          type="email"
          name="email"
          label="Email"
          className="mb-2"
          disabled={true}
          value={profile?.email}
        ></Input>
        <Input
          type="text"
          name="facebook"
          label="Facebook"
          className="mb-2"
          disabled={true}
          value={social?.facebook}
        ></Input>
        <Input
          type="text"
          name="twitter"
          label="Twitter"
          className="mb-2"
          disabled={true}
          value={social?.twitter}
        ></Input>
      </div>
      <div className="flex justify-end w-full mt-4">
        <Button type="submit">Submit All Info</Button>
      </div>
    </Card>
  );
}

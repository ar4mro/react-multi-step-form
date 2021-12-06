import Button from "@/components/ui/Button";
import Card from "@components/ui/Card";
import Input from "@components/ui/Input";

export default function ProfileForm() {
  return (
    <Card>
      <h2 className="text-lg font-medium leading-6 text-gray-600">
        Tell us about yourself
      </h2>
      <div className="flex flex-col mt-1">
        <Input label="What's your name" className="mb-2"></Input>
        <Input label="What's your adress"></Input>
      </div>
      <div className="flex justify-end w-full mt-4">
        <Button>Next Step</Button>
      </div>
    </Card>
  );
}

import { Outlet } from "react-router-dom";

import StepLinks from "./StepLinks/StepLinks";

export default function MultiStepLayout({ steps }) {
  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-red-200">
      <div className="flex flex-col w-10/12 sm:6/12 xl:w-5/12">
        <StepLinks steps={steps} />
        <Outlet />
      </div>
    </div>
  );
}

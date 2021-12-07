import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { SignupFormProvider } from "@/contexts/signupForm/context.jsx";
import StepLinks from "./StepLinks/StepLinks";

// Since we are using a specific provider, provably a good idea to make this layout a page

export default function MultiStepLayout({ steps }) {
  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-red-200">
      <div className="flex flex-col w-10/12 sm:6/12 xl:w-5/12">
        <StepLinks steps={steps} />
        <SignupFormProvider>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </SignupFormProvider>
      </div>
    </div>
  );
}

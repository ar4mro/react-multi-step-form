import { Routes, Route } from "react-router-dom";

// Layouts
import MultiStepLayout from "@components/layouts/MultiStepLayout";

// Pages
import ProfileForm from "../pages/ProfileForm";
import SocialForm from "../pages/SocialForm";
import ReviewForm from "../pages/ReviewForm";

const formSteps = [
  { link: "/", name: "Profile" },
  { link: "/social", name: "Social" },
  { link: "/review", name: "Review" },
];

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MultiStepLayout steps={formSteps} />}>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/social" element={<SocialForm />} />
        <Route path="/review" element={<ReviewForm />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

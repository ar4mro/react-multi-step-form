import { Link, Outlet } from "react-router-dom";

const slashIcon = (
  <svg
    className="flex-shrink-0 h-5 w-5 text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>
);

function StepLinks({ steps }) {
  return (
    <nav className="flex justify-center" aria-label="Breadcrumb">
      <ol className="flex items-center">
        {steps.map((step, index) => (
          <li key={step.name}>
            <div className="flex items-center">
              {index !== 0 && slashIcon}
              <Link
                to={step.link}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {step.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function MultiStepLayout({ steps }) {
  return (
    <div className="flex flex-wrap content-center justify-center min-h-screen bg-green-200">
      <div className="flex flex-col sm:w-5/12">
        <StepLinks steps={steps} />
        <Outlet />
      </div>
    </div>
  );
}

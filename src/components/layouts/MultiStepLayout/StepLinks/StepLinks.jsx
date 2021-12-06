import { Link } from "react-router-dom";

const arrowSvg = (
  <svg
    className="flex-shrink-0 w-6 h-full text-gray-200"
    viewBox="0 0 24 44"
    preserveAspectRatio="none"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
  </svg>
);

export default function StepLinks({ steps }) {
  return (
    <nav className="flex w-full" aria-label="Breadcrumb">
      <ol className="flex w-full px-6 space-x-4 bg-white rounded-md shadow">
        {steps.map((step, index) => (
          <li key={step.name} className="flex">
            <div className="flex items-center">
              {index !== 0 && arrowSvg}
              <Link
                to={step.link}
                className="ml-4 text-sm font-medium text-purple-700 hover:text-purple-500"
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

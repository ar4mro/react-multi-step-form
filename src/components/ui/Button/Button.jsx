export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
}

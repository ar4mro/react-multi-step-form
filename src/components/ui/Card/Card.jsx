export default function Card({ children }) {
  return (
    <div className="flex flex-col p-4 mt-2 bg-white rounded-md shadow-md">
      {children}
    </div>
  );
}

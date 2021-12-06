export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  className,
  ...props
}) {
  return (
    <div className={className}>
      <label className="block mt-2 text-xs font-semibold text-gray-500 uppercase">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="block w-full px-3 py-2 mt-2 text-gray-500 bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200"
        {...props}
      />
    </div>
  );
}

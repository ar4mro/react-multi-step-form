import React from "react";

const Input = React.forwardRef(
  (
    { onChange, onBlur, name, label, error, className, disabled, value },
    ref
  ) => {
    return (
      <div className={className}>
        <label className="block mt-2 text-xs font-semibold text-gray-500 uppercase">
          {label}
        </label>
        <input
          className={`${
            disabled
              ? "cursor-not-allowed bg-gray-200"
              : "bg-gray-100 focus:bg-gray-200"
          } block w-full px-3 py-2 mt-2 text-gray-500 rounded-md focus:outline-none `}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          value={value}
        />
        <p className="mt-1 text-sm text-red-400">{error}</p>
      </div>
    );
  }
);

export default Input;

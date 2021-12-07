import React from "react";

const Input = React.forwardRef(
  (
    { onChange, onBlur, name, label, error, className, disabled, defaultValue },
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
              ? "cursor-not-allowed bg-gray-300"
              : "bg-gray-100 focus:bg-gray-200"
          } block w-full px-3 py-2 mt-2 text-gray-500 rounded-md focus:outline-none `}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
        />
        <p className="mt-1 text-sm text-red-400">{error}</p>
      </div>
    );
  }
);

export default Input;

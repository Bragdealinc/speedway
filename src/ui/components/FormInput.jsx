const FormInput = ({
  label,
  id,
  name,
  type = "text",
  required = false,
  as = "input",
  rows = 4,
  className = "",
  ...rest
}) => {
  const baseInputClasses =
    "w-full p-[10px] border border-[#ced4da] rounded-[5px] text-[14px] focus:outline-none focus:border-[#007037] focus:shadow-[0_0_5px_rgba(0,112,55,0.5)] caret-black";

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id || name} className="block mb-1 text-[16px]">
          {label}
        </label>
      )}
      {as === "textarea" ? (
        <textarea
          id={id || name}
          name={name}
          required={required}
          rows={rows}
          className={`${baseInputClasses} ${className}`}
          {...rest}
        />
      ) : (
        <input
          id={id || name}
          name={name}
          type={type}
          required={required}
          className={`${baseInputClasses} ${className}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default FormInput;




type TInputProps = {
  label: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  type: string | undefined;
};

const Input = ({ label, name, placeholder, type }: TInputProps) => {
  return (
    <div className="py-1">
      <label className="mb-2 font-serif">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full focus:ring-2 focus:ring-gray-500 mt-2 font-serif"
      />
    </div>
  );
};

export default Input;

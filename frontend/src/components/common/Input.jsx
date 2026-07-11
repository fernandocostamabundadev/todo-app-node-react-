export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  className = '',
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-dark mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 border-2 rounded-lg
          focus:outline-none focus:border-primary transition-colors
          bg-white text-dark placeholder-gray-400
          ${error ? 'border-error' : 'border-gray-200'}
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
          ${className}
        `}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

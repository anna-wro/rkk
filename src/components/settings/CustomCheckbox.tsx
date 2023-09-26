type CheckboxProps = {
  isChecked: boolean;
  onToggle: () => void;
  label: string;
};

export const CustomCheckbox: React.FC<CheckboxProps> = ({
  isChecked,
  onToggle,
  label,
}) => (
  <label className="flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onToggle}
      className="sr-only" // Hide the default checkbox
    />
    <span
      className={`w-6 h-6 mr-2 border-blue-500 border-2 rounded ${
        isChecked ? 'bg-blue-500' : 'bg-white'
      }`}
    ></span>
    {label}
  </label>
);

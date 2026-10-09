export default function Input({ label, value, onChange, placeholder = '', type = 'text' }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`

  return (
    <div className="input-field">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

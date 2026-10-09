export default function Button({ label, onClick, type = 'button', disabled = false }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={label}>
      {label}
    </button>
  )
}

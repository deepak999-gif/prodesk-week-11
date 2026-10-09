export default function Card({ title, description, children }) {
  return (
    <article className="card">
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  )
}

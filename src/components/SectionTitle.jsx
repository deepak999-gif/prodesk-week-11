export default function SectionTitle({
  eyebrow,
  title,
  description
}) {

  return (

    <div className="section-title">

      <div className="section-eyebrow">
        {eyebrow}
      </div>

      <h2>
        {title}
      </h2>

      <p>
        {description}
      </p>

    </div>

  );
}
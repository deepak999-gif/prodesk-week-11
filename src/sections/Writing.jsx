import SectionTitle from "../components/SectionTitle";

export default function Writing() {

  return (

    <section
      id="writing"
      className="section dark-section"
    >

      <SectionTitle
        eyebrow="DAILY NOTES"
        title="A small thought, clearly explained."
        description="Use this space for a daily blog post, a useful link, or a short reflection."
      />

      <div className="writing-feature">

        <span>
          LATEST NOTE · 3 MIN READ
        </span>

        <h3>
          Why do Transformers need
          residual connections?
        </h3>

        <p>
          Learning AI is not a race. A clear question today is enough to
          make tomorrow's idea easier.
        </p>

        <a href="#">
          Read the note →
        </a>

      </div>

    </section>

  );
}

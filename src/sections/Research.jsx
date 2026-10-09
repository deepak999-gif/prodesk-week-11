import SectionTitle from "../components/SectionTitle";

export default function Research() {

  return (

    <section
      id="research"
      className="section dark-section"
    >

      <SectionTitle
        eyebrow="LEARN GENTLY"
        title="One useful idea for today."
        description="A calm, plain-language explanation you can read in a few minutes."
      />

      <div className="research-placeholder">

        <div className="research-status">
          TODAY'S IDEA
        </div>

        <h3>
          Understanding the
          Data–Model–Compute
          Trade-off in Small
          Transformers
        </h3>

        <p>
          A neural network notices patterns by adjusting many small
          connections. Start with this simple picture before the maths.
        </p>

        <a href="#experiments">
          Explore experiments →
        </a>

      </div>

    </section>

  );
}

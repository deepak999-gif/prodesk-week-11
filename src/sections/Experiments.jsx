import SectionTitle from "../components/SectionTitle";

const experiments = [
  {
    id: "EXP-001",
    title: "Gradient Descent",
    description:
      "Visualizing how learning rate changes optimization behaviour."
  },
  {
    id: "EXP-002",
    title: "Attention Heads",
    description:
      "Investigating how the number of attention heads affects a small Transformer."
  },
  {
    id: "EXP-003",
    title: "Model Size",
    description:
      "Studying the relationship between parameter count and model performance."
  }
];

export default function Experiments() {

  return (

    <section
      id="experiments"
      className="section"
    >

      <SectionTitle
        eyebrow="EXPERIMENTS"
        title="Questions tested with evidence."
        description="Small experiments that turn theoretical concepts into measurable observations."
      />

      <div className="experiment-list">

        {experiments.map((experiment) => (

          <article
            className="experiment"
            key={experiment.id}
          >

            <span className="experiment-id">
              {experiment.id}
            </span>

            <div>

              <h3>
                {experiment.title}
              </h3>

              <p>
                {experiment.description}
              </p>

            </div>

            <span className="arrow">
              →
            </span>

          </article>

        ))}

      </div>

    </section>

  );
}
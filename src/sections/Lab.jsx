import SectionTitle from "../components/SectionTitle";

const areas = [
  {
    number: "01",
    title: "Learning",
    description:
      "Understanding machine learning and artificial intelligence through first-principles study, implementation, and explanation."
  },
  {
    number: "02",
    title: "Research",
    description:
      "Investigating questions through experiments, literature reviews, reproducible research, and empirical analysis."
  },
  {
    number: "03",
    title: "Building",
    description:
      "Turning ideas into working systems, visualizations, tools, and open-source projects."
  }
];

export default function Lab() {

  return (

    <section
      id="lab"
      className="section"
    >

      <SectionTitle
        eyebrow="THE LAB"
        title="Where learning becomes experimentation."
        description="A personal laboratory for understanding AI by building, testing, questioning, and explaining."
      />

      <div className="lab-grid">

        {areas.map((item) => (

          <article
            className="lab-card"
            key={item.number}
          >

            <span>
              {item.number}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </article>

        ))}

      </div>

    </section>

  );
}
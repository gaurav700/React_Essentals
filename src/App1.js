import componentImage from "./assets/components.png";
export function App1() {
  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              image={componentImage}
              alter="Altername Image"
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              alter="Altername Image"
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              alter="Altername Image"
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              alter="Altername Image"
              title="hello"
              description="hello2"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

function CoreConcepts({ image, alter, title, description }) {
  return (
    <li>
      <img src={image} alt={alter} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

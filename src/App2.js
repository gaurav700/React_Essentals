import { CORE_CONCEPTS } from "./data.js";
import { CoreConcepts } from "./CoreConcepts.js";
export function App2() {
  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts
                key={item.title} // Always provide a unique key when rendering lists
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

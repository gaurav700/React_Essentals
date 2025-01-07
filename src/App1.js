import componentImage from "./assets/components.png";
import { CoreConcepts } from "./CoreConcepts";
export function App1() {
  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              image={componentImage}
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              title="hello"
              description="hello2"
            />
            <CoreConcepts
              image={componentImage}
              title="hello"
              description="hello2"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

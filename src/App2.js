import { CORE_CONCEPTS } from "./data.js";
import { CoreConcepts } from "./CoreConcepts.js";
import TabButton from "./TabButton.js";
import { useState } from "react";
export function App2() {
  const [tabContent, setTabContent] = useState("Please select any tab");
  function handleSelect(contentType) {
    setTabContent(contentType);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

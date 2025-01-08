import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { CoreConcepts } from "./CoreConcepts.js";
import TabButton from "./TabButton.js";
import { useState } from "react";
export function App2() {
  const [tabContent, setTabContent] = useState(EXAMPLES.components);

  function handleSelect(contentType) {
    setTabContent(EXAMPLES[contentType]);
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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{tabContent.title}</h3>
            <p>{tabContent.description}</p>
            <pre>
              <code>{tabContent.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

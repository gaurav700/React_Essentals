import React from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import TabContent from "./TabContent.jsx";
export default function CoreContents2() {
  const [tabContent, setTabContent] = useState(null);

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
          {tabContent == null ? (
            <div id="tab-content">Please select any tab to show</div>
          ) : (
            <TabContent tabContent={tabContent} />
          )}
        </section>
      </main>
    </div>
  );
}

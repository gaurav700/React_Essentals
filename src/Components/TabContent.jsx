import React from "react";

export default function TabContent({ tabContent }) {
  return (
    <div id="tab-content">
      <h3>{tabContent.title}</h3>
      <p>{tabContent.description}</p>
      <pre>
        <code>{tabContent.code}</code>
      </pre>
    </div>
  );
}

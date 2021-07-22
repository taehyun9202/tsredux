import React from "react";
import NewNoteInput from "./components/NewNoteInput";

function App() {
  return (
    <div>
      <div>
        <NewNoteInput addNote={alert} />

        <li>Note list</li>
      </div>
    </div>
  );
}

export default App;

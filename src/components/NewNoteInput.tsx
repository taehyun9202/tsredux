import React from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  // const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNote(e.target.value);
  // };

  console.log(note);
  return (
    <>
      <input type="text" onChange={(e) => setNote(e.target.value)} />
      <button
        onClick={() => {
          addNote(note);
          setNote("");
        }}
      >
        Add note
      </button>
    </>
  );
};

export default NewNoteInput;

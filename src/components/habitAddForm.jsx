import React, { memo } from "react";
import { useRef } from "react";

const HabitAddForm = ({ onAdd }) => {
  const addInputRef = useRef(null);
  const addFormRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const name = addInputRef.current.value;
    name && onAdd(name);
    addFormRef.current.reset();
  };

  return (
    <form className="add-form" onSubmit={onSubmit} ref={addFormRef}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={addInputRef}
      />
      <button className="add-button" type="button" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default memo(HabitAddForm);

import React, { memo } from "react";

const Habit = ({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => onIncrement(habit)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => onDecrement(habit)}
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => onDelete(habit)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default memo(Habit);

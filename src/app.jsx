import { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Reading",
      count: 0,
    },
    {
      id: 2,
      name: "Runing",
      count: 0,
    },
    {
      id: 3,
      name: "Coding",
      count: 0,
    },
  ]);

  const handleIncrement = (habit) => {
    const updateHabits = habits.map((h) => {
      if (h.id === habit.id) {
        return { ...h, count: h.count + 1 };
      }

      return h;
    });

    setHabits(updateHabits);
  };

  const handleDecrement = (habit) => {
    const updateHabits = habits.map((h) => {
      if (h.id === habit.id) {
        return {
          ...h,
          count: (h.count = h.count > 0 ? h.count - 1 : h.count),
        };
      }

      return h;
    });

    setHabits(updateHabits);
  };

  const handleDelete = (habit) => {
    setHabits((prev) => prev.filter((h) => h.id !== habit.id));
  };

  const handleAdd = (name) => {
    setHabits((prev) => [...prev, { id: Date.now(), name, count: 0 }]);
  };

  const handleReset = () => {
    const resetHabits = habits.map((habit) => {
      if (habit.count !== 0) {
        return {
          ...habit,
          count: 0,
        };
      }
      return habit;
    });
    setHabits(resetHabits);
  };

  return (
    <>
      <Navbar totalCount={habits.length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
}

export default App;

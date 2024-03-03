import React, { useState } from "react";
import { data as initialData } from "./components/data.js";

function App() {
  const [persons, setPersons] = useState(initialData);

  const clearAll = () => {
    setPersons([]);
  };

  return (
    <section className="m-3">
      <h4>5 Birthdays Today</h4>
      {persons.map((item) => (
        <div key={item.name} className="personRow d-flex mt-2">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <div className="personInfo d-flex flex-column">
            <p style={{ fontWeight: "bold" }}>{item.name}</p>
            <p>{item.age} Years</p>
          </div>
        </div>
      ))}
      <div className="btns">
        <button onClick={clearAll}>Clear All</button>
      </div>
    </section>
  );
}

export { App };

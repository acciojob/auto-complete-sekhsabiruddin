import React, { useState, useEffect } from "react";
import "./../styles/App.css";

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const App = () => {
  let [search, setSearch] = useState("");

  let [filterF, setFilterF] = useState(fruits);
  console.log(filterF);

  useEffect(() => {
    setFilterF(
      fruits.filter((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      {/* Do not remove the main div */}
      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filterF.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

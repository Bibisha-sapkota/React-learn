import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = ["apple", "online","bol", "blackberry", "banana", "orange", "grapes", "mango", "avacode"];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="search">
          <h2>Fruit Filter</h2>

          <input
            type="text"
            placeholder="search fruit..."
            value={searchTerm}
            onChange={handleChange}
          />

          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;

import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

const TableHeader = styled.div`
  font-size: "12pt";
  width: "300px";
`;

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <div>{counter}</div>
    </>
  );
}

export default App;

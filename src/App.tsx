import React, { useState } from "react";
import { TextField } from "./TextField";

const App: React.FC = () => {
  const [count, setCount] = useState<null | number>(5);

  setCount(null);
  setCount(5);

  return (
    <div>
      <TextField text="hello" person={{ firstName: "", lastName: "" }} />
    </div>
  );
};

export default App;

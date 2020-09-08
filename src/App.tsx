import React from "react";
import { TextField } from "./TextField";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      {/*<TextField text="hello" person={{ firstName: "", lastName: "" }} />*/}
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;

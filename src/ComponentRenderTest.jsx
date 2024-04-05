import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const testContext = createContext({ a: 1, b: 2 });

const ComponentRenderTest = () => {
  const [a, b] = useState(0);
  console.log("Root");
  return (
    <div>
      <h2>ComponentRenderText</h2>
      <testContext.Provider value={{ a: a, b: b }}>
        <ChildA />
        <ChildB />
        <ChildC />
      </testContext.Provider>
    </div>
  );
};

const ChildA = () => {
  console.log("ChildA");
  return (
    <div>
      <h3>ChildA</h3>
      <ChildAA />
    </div>
  );
};

const ChildAA = () => {
  const { a, b } = useContext(testContext);
  console.log("ChildAA");
  useEffect(() => {
    return () => console.log("Unmount ChildAA");
  }, []);
  return (
    <div>
      <h4>ChildAA</h4>
      <button onClick={() => b((p) => p + 1)}>{a}</button>
    </div>
  );
};

const ChildB = () => {
  console.log("ChildB");
  return (
    <div>
      <h3>ChildB</h3>
    </div>
  );
};

const ChildC = () => {
  console.log("ChildC");
  return (
    <div>
      <h3>ChildC</h3>
    </div>
  );
};

export default ComponentRenderTest;

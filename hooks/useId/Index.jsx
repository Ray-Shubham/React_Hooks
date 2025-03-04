import React, { useId } from "react";

const Index = () => {
  const id = useId();
  const id2 = useId();

  return (
    <div>
      {/* <h1>This is UseId Hook</h1> */}
      <label htmlFor={id}>
        Name : <input type="text" id={id} />
      </label>
      <label htmlFor={id2}>
        Email : <input type="text" id={id2} />
      </label>
    </div>
  );
};

export default Index;

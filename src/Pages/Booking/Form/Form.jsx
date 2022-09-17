import React, { useState } from "react";

const Form = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="form-container">
        <div className="header">
          <h1>Title</h1>
        </div>
      </div>
    </>
  );
};

export default Form;

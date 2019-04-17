// SurveyField - render a single label on text input
import React from "react";

// Nested destructuring on meta object
export default ({ input, label, meta: { error, touched } }) => {
  console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} />

      {touched && error /*if touched && error*/}
    </div>
  );
};

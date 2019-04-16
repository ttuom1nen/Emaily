// SurveyField - render a single label on text input
import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

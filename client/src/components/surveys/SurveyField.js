// SurveyField - render a single label on text input
import React from "react";

/* meta is from redux form */
export default ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div
        className="red-text"
        style={{ fontSize: "0.8rem", marginBottom: "20px" }}
      >
        {meta.touched && meta.error /*if touched && error*/}
      </div>
    </div>
  );
};

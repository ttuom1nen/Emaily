// Shows form review
import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-1 btn-flat" onClick={onCancel}>
        Back
        <i className="material-icons left">arrow_back</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;

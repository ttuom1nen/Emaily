// Shows form review
import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel, formValues }) => {
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

function mapStateToProps(state) {
  return { formValues: state.form.surveForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);

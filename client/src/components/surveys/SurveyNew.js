/**
 * SurveyNew shows survey creation and review
 */
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFromReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFromReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;

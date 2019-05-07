import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import axios from "axios";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  deleteSurvey = survey => {
    axios.delete("/api/surveys/delete", { data: { id: survey._id } });
  };

  renderSurveys() {
    if (this.props.surveys.length > 0) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div className="survey-card card grey lighten-5" key={survey._id}>
            <div className="row">
              <div className="col s12 card-header">{survey.title}</div>
            </div>

            <div className="row">
              <div className="col s12 card-body">{survey.body}</div>
            </div>

            <div className="row card-footer">
              <div className="col s6 m10">
                <div className="yesno">Yes: {survey.yes}</div>
                <div className="yesno">No: {survey.no}</div>
              </div>
              <div className="col s6 m2">
                <button
                  title="Delete survey"
                  className="right"
                  onClick={() => this.deleteSurvey(survey)}
                >
                  <i className="material-icons">delete_forever</i>
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="container flow-text" style={{ textAlign: "center" }}>
          <p>You don't have any surveys!</p>
          <p>Create one by clicking the plus sign.</p>
        </div>
      );
    }
  }

  render() {
    return <div className="cards-container">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);

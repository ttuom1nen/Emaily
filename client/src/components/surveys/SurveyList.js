import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  //Sent on: {new Date(survey.dateSent).toLocaleDateString()}
  //<span className="card-title"></span>
  /*
    <div className="card-header">{survey.title}</div>

    <div className="card-body">{survey.body}</div>

    <div className="card-footer">
      <div className="yesno">Yes: {survey.yes}</div>
      <div className="yesno">No: {survey.no}</div>
    </div>
  */
  renderSurveys() {
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
            <div className="col s12">
              <div className="yesno">Yes: {survey.yes}</div>
              <div className="yesno">No: {survey.no}</div>
            </div>
          </div>
        </div>
      );
    });
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

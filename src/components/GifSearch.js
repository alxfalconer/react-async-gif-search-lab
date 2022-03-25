import React from "react";

export default class GifSearch extends React.Component {
  render() {
    return (
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.props.formSubmit}
        >
          Search
        </button>
    
    );
  }
}
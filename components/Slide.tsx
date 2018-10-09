import * as React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={function() {
          alert('click');
        }}
      >
        {/* {this.props.value} */}
      </button>
    );
  }
}

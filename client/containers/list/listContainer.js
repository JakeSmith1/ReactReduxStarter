import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Lists extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.list.map((item, i)=> {
          return (
            <div key={i} className={'important-' + item.important}>
              <h2>{item.name}</h2>
              <p>{item.content}</p>
            </div>
          )
        })}
     </div>
    )
  }
}

//move these into list component, then makes this a function that recieves the data in props
function mapStateToProps(state) {
    return {
      list: state.reducers.list.data
    }
}

export default connect(mapStateToProps)(Lists);

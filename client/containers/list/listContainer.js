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
      <Grid>
        <Row>
          <Col>
            {this.props.list.map((item)=> {
              return (
                <div><h2>List Item</h2><p>item.content</p></div>
              )
            })}
          </Col>
        </Row>
      </Grid>
    )
  }
}

//move these into list component, then makes this a function that recieves the data in props
function mapStateToProps(state) {
    return {
      list: state.reducers.list
    }
}

export default connect(mapStateToProps)(lists);

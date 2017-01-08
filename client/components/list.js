import React from 'react';
import Lists from '../containers/list/listContainer';
import CreateList from '../containers/list/createListContainer';
import { Col, Row, Grid, Thumbnail } from 'react-bootstrap';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <Grid>
          <Row className="create-list">
            <Col xs={12} md={5}>
              <h1>Create a List</h1>
              <CreateList />
            </Col>
            <Col xs={12} md={5}>
              <h1>Your Lists</h1>
              <Lists />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default List;

import React from 'react';
// import ListBody from '../container/list/listContainer';
import CreateList from '../containers/list/createListContainer';
import { Col, Row, Grid } from 'react-bootstrap';


//This component is for the events page and pulls in the containers for EventList / CreateEvent
class List extends React.Component {
    render() {
        return (
            <div className="list">
                <Grid>
                    <Row className="create-list">
                        <Col xs={12}>
                            <h1>Create a List</h1>
                            <CreateList />
                        </Col>
                    </Row>
                    <Row className="view-list">
                        <Col xs={12} md={6}>
                            <h1>Your Lists</h1>
                            {/* <ListBody /> */}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default List;

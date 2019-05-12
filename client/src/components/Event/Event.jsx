import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, CardText, Form} from "reactstrap";
import { connect } from 'react-redux'

import { addEvent } from 'redux/actions/event/event.actions';
import EventForm from './EventForm';


class Event extends React.Component {

    constructor(props) {
        super(props);

        this.eventPageSubmitTrigger = this.eventPageSubmitTrigger.bind(this);
    }

    eventPageSubmitTrigger(formData) {
        const { dispatch } = this.props;
        dispatch(addEvent(formData));
    }


    render() {
        return (
            <div className="content">
                <Row>
                    <Col md={12}>
                        <Card className="card-user, text-center">
                            <CardHeader>
                                <CardTitle>
                                    <h3> Add new event </h3>
                                </CardTitle>
                            </CardHeader>
                                <CardBody>
                                    <EventForm
                                        onSubmitHandler={this.eventPageSubmitTrigger}
                                    />

                                </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.eventReducer.event,
        isFetching: state.eventReducer.isFetching,
        error: state.eventReducer.error,
    }
}
export default connect(mapStateToProps)(Event);

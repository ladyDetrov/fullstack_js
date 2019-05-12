import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Col, Row, Button} from "reactstrap";
import FieldInput from 'components/FieldInput/FieldInput';
import { validation } from './validation.js'

class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(formData) {
        this.props.onSubmitHandler(formData);
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Row>
                    <Col sm={12}>
                        <Field
                            name = "firstName"
                            type = "text"
                            label = "First Name"
                            required = {true}
                            component = {FieldInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Field
                            name = "lastName"
                            label = "Last Name"
                            required = {true}
                            component = {FieldInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Field
                            name = "email"
                            label = "Email"
                            type = "email"
                            required = {true}
                            component = {FieldInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Field
                            name = "date"
                            label = "Date"
                            type = "date"
                            component = {FieldInput}
                        />
                    </Col>
                </Row>



                <Row>
                    <div className="update ml-auto mr-auto">
                        <Button color="primary">Add Event</Button>
                    </div>
                </Row>

            </form>
        )
    }
}

export default reduxForm({
    form: 'eventForm',
    validate: validation
})(EventForm);


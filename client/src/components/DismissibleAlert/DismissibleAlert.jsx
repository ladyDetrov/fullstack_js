import React from "react";
import { Alert  } from 'reactstrap';
import { connect } from 'react-redux';
import { alertActions } from 'redux/actions/alert/alert.actions.js';

class DismissibleAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.props.dispatch(alertActions.clear());
    }

    render() {
        const alert = this.props.alert;
        return (
            <div>
                <Alert className={alert.type} isOpen={(alert && alert.message) ? true : false} toggle={this.onDismiss}>
                    {alert.message}
                </Alert>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    alert: state.alertReducer,
});

export default connect(mapStateToProps)(DismissibleAlert);

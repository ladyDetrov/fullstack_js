import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import './style.scss';

const FieldInput = ({
                        input,
                        label,
                        type,
                        meta: { touched, error, warning },
                        className,
                        placeholder,
                        disabled,
                        labelClassName,
                        inputClassName,
                        inputValue,
                        required
                    }) => (
    <FormGroup className={`form-input ${className}`}>
        { console.log(error)}
        {
            label &&
            <div className={labelClassName}>
                <Label>{label}</Label>
            </div>
        }
        <div className={inputClassName}>
            <Input
                {...input}
                placeholder={placeholder || label}
                type={type}
                checked={input.value}
                disabled={disabled}
                className={touched && (error || warning) ? 'input-invalid form-control' : 'form-control'}
                {...(inputValue && { value: inputValue })}
                required={required}
            />
            {
                touched &&
                (
                    (error && <span className="error invalid-feedback ml-2">{error}</span>) ||
                    (warning && <span className="warning invalid-feedback ml-2">{warning}</span>)
                )
            }
        </div>
    </FormGroup>
);

FieldInput.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    inputValue: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
};

FieldInput.defaultProps = {
    type: 'text',
    placeholder: '',
    label: '',
    className: 'row',
    labelClassName: 'col-md-2',
    inputClassName: 'col',
    disabled: false,
    required: false,
    inputValue: '',
};

export default FieldInput;

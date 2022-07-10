import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './input.scss'
import { Input } from 'antd';
const { TextArea } = Input;

InputField.propTypes = {
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    isTextAria: PropTypes.bool,
    pattern: PropTypes.any,
    messageNote: PropTypes.string,
    setDangerNote: PropTypes.func
}

InputField.defaultValue = {
    required: true,
    autoFocus: false,
    isTextAria: true,
    messageNote: "email",
    setDangerNote: ()=>{}
}

function InputField(props) {
    const { placeholder, defaultValue, required, onChange, value, type, label, autoFocus, isTextAria, pattern, messageNote, setDangerNote } = props;
    let regex = new RegExp(pattern)
    const [isDanger, setIsDanger] = useState(false)
    const [message, setMessage] = useState('')

    function onBlur(event) {
        let value = event.target.value
        if (required && (value?.length == 0 || value == undefined)) {
            setIsDanger(true);
            setDangerNote(true)
            setMessage("Trường này không được bỏ trống")
        } else {
            if (pattern && !regex.test(value)) {
                setIsDanger(true);
                setMessage(messageNote)
                setDangerNote(true)
            }
            else {
                setIsDanger(false);
                setDangerNote(false)
                setMessage('')
            }
        }
    }

    function onChangeInput(event) {
        onChange(event); 
        setIsDanger(false); 
        setMessage("");
        setDangerNote(false);
    }

    return (
        <div className={`container-input`}>
            <div className='container-input__label'>
                {label}
                {
                    required && <span>bb</span>
                }
            </div>
            {
                isTextAria ?
                    <TextArea
                        style={{
                            height: 120,
                        }}
                        type={type}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}
                        required={required}
                        onChange={(val) => { onChange(val?.target?.value) }}
                        autoFocus={autoFocus}
                        // status={"error"}
                        showCount
                    />
                    :
                    <Input
                        type={type}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}
                        required={required}
                        onChange={(val) => { onChangeInput(val?.target?.value) }}
                        autoFocus={autoFocus}
                        status={isDanger && "error"}
                        showCount
                        pattern={regex}
                        onBlur={(val) => onBlur(val)}

                    />
            }

            <div className='container-input__mess'>
                {message}
            </div>
        </div>
    );
}

export default InputField;
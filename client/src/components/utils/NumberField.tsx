import React, {useCallback, useState} from 'react';
import {TextField} from '@material-ui/core';
import {fieldToTextField, TextFieldProps} from "formik-material-ui";

// The keycodes are:
//     left = 37
//     up = 38
//     right = 39
//     down = 40

export const NumberField: React.FC<TextFieldProps> = (props) => {
    const {form: {setFieldValue, setFieldError}, field: {name, value}} = props;

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(parseFloat(event.target.value))) {
            if (event.target.value.endsWith('.') || event.target.value.endsWith('0')) {
                return setFieldValue(name, event.target.value);
            }

            setFieldValue(name, parseFloat(event.target.value));
        } else {
            setFieldValue(name, event.target.value);
        }
    }, [setFieldValue, name]);

    const onkeydown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 38) {
            setFieldValue(name, value + 1);
        } else if (event.keyCode === 40) {
            setFieldValue(name, value - 1);
        }
    }, [setFieldValue, name, value]);

    return <TextField {...fieldToTextField(props)} onKeyDown={onkeydown} onChange={onChange}/>
}
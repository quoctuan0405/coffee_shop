import React, {useCallback, useEffect} from 'react';
import {TextField} from '@material-ui/core';
import {fieldToTextField, TextFieldProps} from "formik-material-ui";
import accounting from 'accounting';

export const MoneyField: React.FC<TextFieldProps> = (props) => {
    const {form: {setFieldValue}, field: {name}} = props;

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(parseInt(event.target.value))) {
            const moneyModifiedValue = accounting.formatMoney(event.target.value, {precision: 0, format: '%v'});

            setFieldValue(name, moneyModifiedValue);
        } else {
            setFieldValue(name, event.target.value);
        }
    }, [setFieldValue, name]);

    return <TextField {...fieldToTextField(props)} onChange={onChange}/>
}
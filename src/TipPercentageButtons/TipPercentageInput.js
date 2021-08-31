import { Field } from "formik"
import React from "react"
import "./TipPercentageInput.css"

export const TipPercentageInput = ({label, percentage}) => {
    return (<> 
    <Field className="input" type="text" name="percentTip" id={percentage} value={percentage.custom} placeholder="Custom"/>
    </>)
}
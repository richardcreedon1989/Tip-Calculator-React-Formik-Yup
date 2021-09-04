import { Field } from "formik"
import React from "react"
import "./TipPercentageInput.css"
// import {ErrorMessage} from "formik"

export const TipPercentageInput = ({label, percentage, name}) => {
    return (<> 
    <Field className="input" type="text" name="percentTip" id={percentage} value={percentage.custom} placeholder="Custom"/>
    {/* <ErrorMessage name="percentTip" /> */}
    </>)
}
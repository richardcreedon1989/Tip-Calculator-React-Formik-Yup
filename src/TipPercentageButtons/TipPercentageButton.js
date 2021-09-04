import { Field } from "formik"
import React from "react"
import "./TipPercentageButton.css"

export const TipPercentageButton = ({label, percentage}) => {
    return (<> 
    <label className="label" htmlFor={percentage}>{percentage}% </label>
    <Field style={{display: "none"}} type="radio" name="percentTip" id={percentage} value={percentage}/>
    </>)
}
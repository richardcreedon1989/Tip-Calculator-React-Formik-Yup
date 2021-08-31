import { Field } from "formik"
import React from "react"
import "./TipPercentageButton.css"



//TODO 

//Find correct fontFamily for the project
//Change the onBlur look of the buttons
//TipInput imported into buttons rather than the app component etc

export const TipPercentageButton = ({label, percentage}) => {
    return (<> 
    <label className="label" htmlFor={percentage}>{percentage}% </label>
    <Field style={{display: "none"}} type="radio" name="percentTip" id={percentage} value={percentage}/>
    </>)
}
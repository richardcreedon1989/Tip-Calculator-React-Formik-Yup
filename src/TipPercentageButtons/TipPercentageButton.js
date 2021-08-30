import { Formik, Field } from "formik"
import React, {useState} from "react"

const labelStyle = {
    backgroundColor: "#4CAF50", /* Green */
    borderStyle: "solid",
    color: "white",
    padding: "1.2em 2.5em",
    textAlign: "",
    textDecoration: "none",
    display: "flex",
    fontSize: "12px",
    margin: "1em",
    float: "left",
    width: "5em",
    fontFamily: "display", 
  }

//TODO 

//Find correct fontFamily for the project
//Change the onBlur look of the buttons
//TipInput imported into buttons rather than the app component etc

export const TipPercentageButton = ({label, percentage}) => {
    return (<> 
    <label style = {labelStyle} htmlFor={percentage}>{percentage} </label>
    <Field style={{display: "none"}} type="radio" name="percentTip" id={percentage} value={percentage}/>
    </>)
}
import { Formik, Field } from "formik"
import React, {useState} from "react"

const labelStyle = {
    backgroundColor: "#f3f8fb", /* Green */
    borderStyle: "solid",
    color: "#4f6e69",
    padding: "1.2em 2.5em",
    fontFamily: "display",
    textDecoration: "none",
    display: "flex",
    fontSize: "12px",
    margin: "1em",
    float: "left",
    width: "5em",
    borderColor: "white",
  }

const inputStyle = {
  width: "5em",
  marginLeft: "-1.5em",
  borderStyle: "none",
  backgroundColor: "#f3f8fb", /* Green */
  outline: "none"
}

export const TipPercentageInput = ({label, percentage}) => {
    return (<> 
    <div style={labelStyle}> 
    <Field style={inputStyle} type="text" name="percentTip" id={percentage} value={percentage.custom} placeholder="Custom"/>
    </div>
    </>)
}
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
    width: "1.7em",
    borderColor: "white"
  }

export const TipPercentageInput = ({label, percentage}) => {
    return (<> 
    <Field style = {labelStyle} type="number" name="percentTip" id={percentage} value={percentage.custom} placeholder="Custom"/>
    </>)
}
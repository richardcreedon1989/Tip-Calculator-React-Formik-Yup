import React from "react";
import { Field, ErrorMessage} from "formik"
import "./BillInput.css"
import logo from "../assets/icon-dollar.svg"

const labelStyle = {
    backgroundColor: "#4CAF50", /* Green */
    borderStyle: "solid",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "16px"
  }

export const BillInput = (props) => {
    const {values} = props;
    return (
    <div className="billInput">        
        {values.percentageTip}
        <label className="billLabel" htmlFor="billAmount" > {props.label} </label>
        <img className="dollarIcon" src={logo} alt="dollarSign"/>

        <Field style={{marginLeft: "1em"}} type="number" name="billAmount" id="billAmount" placeholder="" /> 

        <ErrorMessage name="billAmount" />
    </div>     
    )}                
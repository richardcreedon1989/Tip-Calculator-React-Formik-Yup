import React from "react";
import { Field, ErrorMessage} from "formik"
import "./BillInput.css"
import dollarBillIcon from "../assets/icon-dollar.svg"
import peopleIcon from "../assets/icon-person.svg"


export const BillInput = (props) => {
    const {values} = props;

    const displayIcon = () => {
        if(props.label && props.label === "Bill") {
            return dollarBillIcon
        } else if(props.label && props.label === "Number Of People") {
            return peopleIcon
        } else {
            return ""
        }
    }

    return (
    <div className="inputContainer"> 
        <label className="inputLabel" htmlFor={props.value} > {props.label} </label>
        <img className="icon" src={displayIcon()} alt="dollarSign"/>
        <Field className="fieldInput" type="number" name={props.value} id={props.value} placeholder="" /> 
        <ErrorMessage name={props.value} />
    </div>     
    )}                
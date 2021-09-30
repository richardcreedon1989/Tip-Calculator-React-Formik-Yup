import React from "react";
import { Field, ErrorMessage} from "formik"
import "./BillInput.css"
import dollarBillIcon from "../assets/icon-dollar.svg"
import peopleIcon from "../assets/icon-person.svg"


export const BillInput = (props) => {

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
        <div className="labelContainer"> 
            <label className="inputLabel" htmlFor={props.value} > {props.label} </label>
            <span className="inputSpan" > <ErrorMessage name={props.name} /> </span>
        </div>
        <img className="icon" src={displayIcon()} alt="dollarSign"/>
        <Field type="number" name={props.name} id={props.name} placeholder="" /> 
    </div>     
    )}                
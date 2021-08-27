import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { BillInitialValues } from "./BillInitialvalues";
import { TipPercentageButtons } from "../TipPercentageButtons/TipPercentageButtons";
import logo from "../assets/icon-dollar.svg"
import { values } from "lodash";

const initialValues = {
    billAmount: "",
    percentTip: ""

}

const validationSchema= Yup.object({
    billAmount: Yup.string().required("Required")
})

const onSubmit = values => {
    console.log("values", values)
}

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

//   const percentage = {
//       five: "5%",
//       ten: "10%",
//       fifteen: "15%",
//       twenty: "20%",
//       custom: "custom"
//   }

export const BillInput = (props) => {
    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    > 
    {({values}) => ( 
    <Form>       
        {values.percentageTip}
        <label htmlFor="billAmount" style={{display: "block", marginLeft: "1em"}}> {props.label} </label>
        <img src={logo} style={{position: "relative", left: "1.8em", top: ".3em"}}/>

        {console.log(values)}
        <Field style={{marginLeft: "1em"}} type="number" name="billAmount" id="billAmount" placeholder="" /> 

        <ErrorMessage name="billAmount" />
        <br />
        <br />
        <br />
        <br />
        <TipPercentageButtons />
    </Form>     
    )}                
            </Formik>
}
